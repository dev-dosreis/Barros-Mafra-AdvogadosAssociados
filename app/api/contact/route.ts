import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validations/contact'
import { rateLimit } from '@/lib/rateLimit'

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'anonymous'
    
    // Check rate limit
    const { success, remaining } = rateLimit(ip)
    
    if (!success) {
      return NextResponse.json(
        { error: 'Muitas requisições. Tente novamente em alguns minutos.' },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'Retry-After': '60',
          }
        }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      const errors = result.error.errors.map(e => ({
        field: e.path.join('.'),
        message: e.message,
      }))
      
      return NextResponse.json(
        { error: 'Dados inválidos', details: errors },
        { status: 400 }
      )
    }

    const data = result.data

    // Check honeypot field
    if (data.website && data.website.length > 0) {
      // Silently reject spam
      return NextResponse.json({ success: true })
    }

    // Sanitize data
    const sanitizedData = {
      name: sanitizeString(data.name),
      company: sanitizeString(data.company),
      role: data.role,
      topic: data.topic,
      message: sanitizeString(data.message),
      preference: data.preference,
    }

    // Here you would integrate with your email service
    // Examples: Resend, SendGrid, AWS SES, Nodemailer
    
    // For now, we'll log the data (replace with actual email sending)
    console.log('Contact form submission:', {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
      ip,
    })

    /*
    // Example with Resend:
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'noreply@barrosmafra.adv.br',
      to: process.env.CONTACT_TO_EMAIL,
      subject: `[Contato Site] ${sanitizedData.topic} - ${sanitizedData.name}`,
      html: generateEmailHtml(sanitizedData),
    })
    */

    return NextResponse.json(
      { success: true, message: 'Mensagem enviada com sucesso' },
      {
        headers: {
          'X-RateLimit-Remaining': remaining.toString(),
        }
      }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// Simple string sanitization
function sanitizeString(str: string): string {
  return str
    .trim()
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/[<>]/g, '') // Remove remaining angle brackets
}
