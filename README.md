# Barros & Mafra Advogados Associados

Site institucional premium para o escritório Barros & Mafra Advogados Associados.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Validação:** Zod

## Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Rodar produção localmente
npm run start
```

## Estrutura do Projeto

```
├── app/                    # App Router do Next.js
│   ├── api/contact/        # API route de contato
│   ├── contato/            # Página de contato
│   ├── privacidade/        # Política de privacidade
│   ├── termos/             # Termos de uso
│   ├── layout.tsx          # Layout global
│   ├── page.tsx            # Home page
│   ├── sitemap.ts          # Sitemap dinâmico
│   ├── robots.ts           # Robots.txt
│   └── globals.css         # Estilos globais
├── components/
│   ├── layout/             # Header e Footer
│   ├── sections/           # Seções da home
│   └── ui/                 # Componentes base
├── content/
│   └── site.ts             # Conteúdo do site (editável)
├── lib/
│   ├── utils.ts            # Utilitários
│   ├── rateLimit.ts        # Rate limiting
│   └── validations/        # Schemas de validação
└── public/                 # Assets estáticos
```

## Design System

### Cores (60/30/10)

| Uso | Variável | Cor |
|-----|----------|-----|
| 60% Base | `--bg` | #F6F4F1 |
| 60% Base | `--surface` | #FFFFFF |
| 60% Base | `--text` | #121417 |
| 60% Base | `--muted` | #5E6672 |
| 30% Estrutura | `--ink` | #0B0F14 |
| 10% Acento | `--accent` | #1E3A8A |

### Tipografia

- **Sans (UI):** Inter
- **Serif (Títulos):** Fraunces

### Componentes

- `Container` - Wrapper com max-width
- `Button` - Botões (primary, secondary, ghost)
- `Badge` - Badges informativos
- `Card` - Cards com borda sutil
- `SectionHeader` - Cabeçalho de seção
- `PracticeCard` - Card de área de atuação
- `CaseCard` - Card de caso/experiência
- `ArticleCard` - Card de artigo
- `PartnerCard` - Card de sócio
- `FormField` - Campos de formulário

## Páginas

- `/` - Home (one-page com âncoras)
- `/contato` - Formulário de contato
- `/privacidade` - Política de privacidade
- `/termos` - Termos de uso

## Formulário de Contato

Implementa:
- ✅ Validação client-side e server-side (Zod)
- ✅ Rate limiting (3 requisições/minuto)
- ✅ Honeypot anti-spam
- ✅ Estados de loading e success
- ✅ Toast de feedback

### Integração de Email

Edite `app/api/contact/route.ts` para integrar com:
- Resend
- SendGrid
- AWS SES
- Nodemailer

## SEO

- ✅ Metadata dinâmica
- ✅ Open Graph
- ✅ Sitemap automático
- ✅ Robots.txt
- ✅ Schema.org (Organization + LegalService)
- ✅ PWA manifest

## Variáveis de Ambiente

Copie `.env.example` para `.env.local`:

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=contato@barrosmafra.adv.br
NEXT_PUBLIC_SITE_URL=https://barrosmafra.adv.br
```

## Editando Conteúdo

Todo o conteúdo está centralizado em `content/site.ts`:

- `firmName` - Nome do escritório
- `hero` - Textos do hero
- `credentials` - Credenciais
- `practiceAreas` - Áreas de atuação
- `method` - Metodologia e passos
- `cases` - Casos de experiência
- `articles` - Artigos
- `partners` - Sócios
- `contact` - Informações de contato

## Deploy

Recomendado: **Vercel** (otimizado para Next.js)

```bash
npm run build
```

## Licença

© 2024 Barros & Mafra Advogados Associados. Todos os direitos reservados.
