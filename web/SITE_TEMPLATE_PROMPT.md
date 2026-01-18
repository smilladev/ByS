# Plantilla de Sitio Web Institucional One-Page

## 📋 INSTRUCCIONES DE USO
Copia todo este documento y úsalo como prompt en cualquier IA para generar un sitio web institucional similar. Reemplaza los valores entre `[CORCHETES]` con la información específica del cliente.

---

## 🎯 DESCRIPCIÓN DEL PROYECTO

Crea un sitio web institucional one-page profesional con las siguientes características:

### Stack Tecnológico
- **Framework**: Next.js 15+ con TypeScript
- **UI Library**: Material-UI (MUI) v6+
- **Styling**: CSS-in-JS con sx props de MUI
- **Fuentes**: Google Fonts (Geist Sans y Geist Mono)
- **Optimización de imágenes**: Next.js Image component
- **Idioma**: Español

### Estructura de Carpetas
```
proyecto/
├── public/
│   ├── images/
│   │   ├── Logo.png
│   │   ├── Banner.png
│   │   └── [imágenes de servicios]
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── MuiProvider.tsx
│   └── theme.ts
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🎨 DISEÑO Y BRANDING

### Paleta de Colores
```typescript
// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '[COLOR_PRIMARIO]', // Ejemplo: '#03989e'
    },
    secondary: {
      main: '[COLOR_SECUNDARIO]', // Ejemplo: '#c5c5c1'
    },
  },
});
```

### Tipografía
- **Headings**: Font weight 700, colores primary o inherit
- **Body**: Font weight 400-500, color text.secondary
- **Botones**: Font weight 600

### Estilo de Módulos/Tarjetas
```javascript
{
  borderRadius: 4,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  bgcolor: '#fff',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
  }
}
```

---

## 📱 ESTRUCTURA DEL SITIO

### 1. NAVBAR (Sticky)
- **Posición**: Sticky top
- **Fondo**: Blanco con borde inferior sutil
- **Contenido**:
  - Logo (imagen circular, 50x50px)
  - Nombre de la empresa
  - Links de navegación (desktop)
  - Menú hamburguesa (mobile)
- **Links**: Inicio, [Sección 1], [Sección 2], [Sección 3], Contacto
- **Comportamiento**: Smooth scroll a secciones con IDs

### 2. SECCIÓN HERO
```javascript
{
  bgcolor: 'primary.main',
  color: '#fff',
  py: 8,
  textAlign: 'center',
  backgroundImage: 'url(/images/Banner.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}
```
**Contenido**:
- Título principal (h3): "[ESLOGAN_PRINCIPAL]"
- Subtítulo (h6): "[DESCRIPCIÓN_BREVE]"
- Botón CTA: "Comenzar" → scroll a #contacto

### 3. SECCIÓN NOSOTROS
**ID**: `#nosotros`
**Fondo**: Blanco (#fff)
**Contenido**:
```
Título: "Nosotros"

Párrafo 1: [DESCRIPCIÓN_DE_LA_EMPRESA]
Enfoque en qué hace la empresa y su propuesta de valor.

Párrafo 2: [EQUIPO_Y_EXPERTISE]
Descripción del equipo y áreas de especialización.

Párrafo 3: [FILOSOFÍA_Y_COMPROMISO]
Valores, transparencia y compromiso con el cliente.
```

### 4. SECCIÓN SERVICIOS
**ID**: `#servicios`
**Fondo**: Color secundario
**Layout**: Grid responsive (1 col móvil, 2 cols tablet, 4 cols desktop)

**Cada servicio**:
```javascript
<Box sx={{ 
  bgcolor: '#fff', 
  border: '1px solid #e0e0e0', 
  borderRadius: 4, 
  p: 2, 
  width: '75%', 
  mb: 2, 
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' 
}}>
  <Image src="[IMAGEN_SERVICIO]" />
  <Typography variant="h6">[TÍTULO_SERVICIO]</Typography>
  <Typography variant="body2">[DESCRIPCIÓN_SERVICIO]</Typography>
</Box>
```

**Servicios sugeridos**: [LISTAR_SERVICIOS_DEL_CLIENTE]

### 5. SECCIÓN PROCESO
**ID**: `#proceso`
**Fondo**: Blanco
**Layout**: Accordion de MUI (AccordionSummary + AccordionDetails)

**Pasos del proceso**:
```
Paso 1: [NOMBRE] - [DESCRIPCIÓN]
Paso 2: [NOMBRE] - [DESCRIPCIÓN]
Paso 3: [NOMBRE] - [DESCRIPCIÓN]
Paso 4: [NOMBRE] - [DESCRIPCIÓN]
```

### 6. SECCIÓN CONTACTO
**ID**: `#contacto`
**Fondo**: Color primario
**Contenido**:
- Título: "¿Listo para [ACCIÓN]?"
- Subtítulo: "[LLAMADO_A_LA_ACCIÓN]"
- **Formulario Google Forms**:

```html
<form 
  action="[GOOGLE_FORM_URL]/formResponse"
  method="POST"
  target="_blank"
>
  <input name="entry.[ID1]" placeholder="Nombre" required />
  <input name="entry.[ID2]" placeholder="Apellido" required />
  <input name="entry.[ID3]" placeholder="Email" type="email" required />
  <textarea name="entry.[ID4]" placeholder="Comentario" required />
  <Button type="submit">Enviar</Button>
</form>
```

### 7. FOOTER
**Fondo**: #222 (oscuro)
**Color texto**: #fff
**Contenido**:
- Logo + Nombre empresa
- Iconos de redes sociales:
  - Instagram: `[URL_INSTAGRAM]`
  - Facebook: `[URL_FACEBOOK]`
  - WhatsApp: `[NUMERO_WHATSAPP]` (formato: https://wa.me/[NUMERO])
  - Email: `mailto:[EMAIL]`
- Copyright dinámico: `© {new Date().getFullYear()} [NOMBRE_EMPRESA]. Todos los derechos reservados.`

**Iconos**: InstagramIcon, FacebookIcon, WhatsAppIcon, EmailIcon de @mui/icons-material
**Hover effect**: Cambio de color al pasar el mouse (Instagram: #E4405F, Facebook: #1877F2, WhatsApp: #25D366, Email: #EA4335)

---

## 🎈 ELEMENTOS ADICIONALES

### Botón Flotante de WhatsApp
```javascript
<IconButton
  component="a"
  href="https://wa.me/[NUMERO_WHATSAPP]"
  target="_blank"
  sx={{
    position: 'fixed',
    bottom: { xs: 20, md: 30 },
    right: { xs: 20, md: 30 },
    bgcolor: '#25D366',
    color: '#fff',
    width: { xs: 56, md: 64 },
    height: { xs: 56, md: 64 },
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
    '&:hover': {
      bgcolor: '#20BA5A',
      transform: 'scale(1.1)',
    },
  }}
>
  <WhatsAppIcon sx={{ fontSize: { xs: 32, md: 36 } }} />
</IconButton>
```

---

## 🔍 SEO Y METADATA

### layout.tsx - Metadata completa
```typescript
export const metadata: Metadata = {
  title: "[TÍTULO_SEO]",
  description: "[DESCRIPCIÓN_SEO]",
  keywords: [
    "[KEYWORD_1]",
    "[KEYWORD_2]",
    "[KEYWORD_3]",
    // ... más keywords relevantes
  ],
  authors: [{ name: "[NOMBRE_EMPRESA]" }],
  creator: "[NOMBRE_EMPRESA]",
  publisher: "[NOMBRE_EMPRESA]",
  metadataBase: new URL("[URL_DEL_SITIO]"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "[URL_DEL_SITIO]",
    title: "[TÍTULO_SEO]",
    description: "[DESCRIPCIÓN_SEO]",
    siteName: "[NOMBRE_EMPRESA]",
    images: [
      {
        url: "/images/Logo.png",
        width: 1200,
        height: 630,
        alt: "[NOMBRE_EMPRESA] Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "[TÍTULO_SEO]",
    description: "[DESCRIPCIÓN_SEO]",
    images: ["/images/Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
```

### Favicon
```html
<link rel="icon" type="image/png" sizes="32x32" href="/images/Logo.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/images/Logo.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/images/Logo.png" />
```

### Google Analytics 4
```html
<Script
  strategy="afterInteractive"
  src="https://www.googletagmanager.com/gtag/js?id=[GA4_ID]"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '[GA4_ID]');
  `}
</Script>
```

### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>[URL_DEL_SITIO]/</loc>
    <lastmod>[FECHA]</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>[URL_DEL_SITIO]/#nosotros</loc>
    <lastmod>[FECHA]</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Agregar más secciones -->
</urlset>
```

### robots.txt
```
User-agent: *
Allow: /
Sitemap: [URL_DEL_SITIO]/sitemap.xml
```

---

## 📦 DEPENDENCIAS (package.json)

```json
{
  "name": "web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@emotion/react": "^11.13.3",
    "@emotion/styled": "^11.13.0",
    "@mui/icons-material": "^6.3.0",
    "@mui/material": "^6.3.0",
    "next": "15.3.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.3.4",
    "typescript": "^5"
  }
}
```

---

## 🎯 RESPONSIVE DESIGN

### Breakpoints de MUI
- **xs**: 0-599px (móvil)
- **sm**: 600-899px (tablet pequeña)
- **md**: 900-1199px (tablet/laptop)
- **lg**: 1200-1535px (desktop)
- **xl**: 1536px+ (pantallas grandes)

### Aplicar responsividad
```javascript
sx={{
  py: { xs: 4, md: 8 },           // padding vertical
  px: { xs: 2, md: 4, lg: 6 },    // padding horizontal
  fontSize: { xs: '1rem', md: '1.2rem' },
  display: { xs: 'none', md: 'flex' },  // ocultar en móvil
}}
```

---

## ⚙️ CONFIGURACIÓN

### next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

### tsconfig.json
Usar configuración estándar de Next.js con paths alias para imports limpios.

---

## 🚀 DEPLOYMENT

### Vercel (Recomendado)
1. Conectar repositorio de Git
2. Configurar variables de entorno (si aplica)
3. Deploy automático en cada push a main

### Variables de entorno necesarias
- `NEXT_PUBLIC_GA4_ID`: ID de Google Analytics 4
- Cualquier otra API key o configuración sensible

---

## 📝 CHECKLIST DE IMPLEMENTACIÓN

- [ ] Configurar colores del tema (primary, secondary)
- [ ] Reemplazar logo en `/public/images/Logo.png`
- [ ] Agregar imagen de banner en `/public/images/Banner.png`
- [ ] Agregar imágenes de servicios
- [ ] Configurar Google Form y obtener IDs de campos
- [ ] Actualizar metadata SEO (title, description, keywords)
- [ ] Configurar Google Analytics 4
- [ ] Actualizar sitemap.xml con URL real
- [ ] Actualizar robots.txt
- [ ] Configurar enlaces de redes sociales
- [ ] Configurar número de WhatsApp
- [ ] Configurar email de contacto
- [ ] Personalizar textos de todas las secciones
- [ ] Personalizar servicios ofrecidos
- [ ] Personalizar pasos del proceso
- [ ] Verificar responsive en todos los breakpoints
- [ ] Probar formulario de contacto
- [ ] Probar botón flotante de WhatsApp
- [ ] Ejecutar `npm run build` antes del deploy
- [ ] Verificar que no haya imports sin usar

---

## 📧 DATOS A REEMPLAZAR

### Información de la Empresa
```
[NOMBRE_EMPRESA]: 
[ESLOGAN_PRINCIPAL]: 
[DESCRIPCIÓN_BREVE]: 
[URL_DEL_SITIO]: 
```

### Colores
```
[COLOR_PRIMARIO]: (hex)
[COLOR_SECUNDARIO]: (hex)
```

### SEO
```
[TÍTULO_SEO]: 
[DESCRIPCIÓN_SEO]: 
[KEYWORD_1]: 
[KEYWORD_2]: 
[KEYWORD_3]: 
```

### Contacto
```
[EMAIL]: 
[NUMERO_WHATSAPP]: (formato internacional sin +)
[URL_INSTAGRAM]: 
[URL_FACEBOOK]: 
```

### Google
```
[GA4_ID]: (ej: G-XXXXXXXXXX)
[GOOGLE_FORM_URL]: (URL completa del formulario)
entry.[ID1]: (ID campo Nombre)
entry.[ID2]: (ID campo Apellido)
entry.[ID3]: (ID campo Email)
entry.[ID4]: (ID campo Comentario)
```

---

## 💡 NOTAS ADICIONALES

### Cómo obtener IDs de Google Forms
1. Crear formulario en Google Forms
2. Agregar campos: Nombre, Apellido, Email, Comentario
3. Click en "Enviar" → "Enlace"
4. Inspeccionar el formulario con DevTools
5. Buscar los `name="entry.XXXXXXXX"` de cada campo
6. Obtener la URL de la acción del formulario

### Optimización de Imágenes
- Logo: Formato PNG con fondo transparente
- Banner: 1920x600px recomendado
- Servicios: 320x200px o similar
- Usar Next.js Image component para optimización automática

### Testing Local
```bash
npm install
npm run dev
# Abrir http://localhost:3000
```

### Build y Deploy
```bash
npm run build
# Verificar que compile sin errores antes de deploy
```

---

## 🎓 EJEMPLO DE USO DEL PROMPT

Para usar esta plantilla con una IA:

1. **Copia todo este documento**
2. **Reemplaza los valores entre [CORCHETES]** con información del cliente
3. **Pega el documento completo** en la IA (Claude, ChatGPT, etc.)
4. **Agrega instrucciones adicionales** como:
   - "Genera todos los archivos necesarios para este proyecto"
   - "Personaliza los servicios para una [tipo de empresa]"
   - "Ajusta los colores para que sean [descripción de estilo]"

---

**Versión**: 1.0
**Última actualización**: Enero 2026
**Autor**: SyB Growth Marketing Template
