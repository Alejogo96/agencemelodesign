# Agence Mélo Design — Site vitrine

Sitio web profesional para **Agence Mélo Design** (Studio de Product & UX Design à Paris), basado en el business plan de Studio Guevara Design. Sitio estático HTML / CSS / JS, listo para desplegar en **Hostinger** sobre el dominio `agencemelodesign.com`.

---

## Estructura del proyecto

```
agencemelodesign/
├── index.html          # Página única (Hero · Services · Approche · Portfolio · À propos · Contact)
├── css/
│   └── main.css        # Estilo minimalista elegante (boutique parisienne)
├── js/
│   └── main.js         # Menú móvil, scroll suave, reveal, formulario
├── assets/             # Carpeta para imágenes/logos futuros
└── README.md           # Este archivo
```

---

## Cómo trabajar el proyecto en Visual Studio Code

1. Abre **VS Code** y elige `File → Open Folder…`
2. Selecciona la carpeta `agencemelodesign/` que está dentro de `Creación de empresa en FRANCIA/`
3. Instala la extensión **Live Server** (autor: Ritwick Dey) — si aún no la tienes
4. Haz clic derecho sobre `index.html` → `Open with Live Server`
5. El sitio se abre en `http://127.0.0.1:5500` con recarga automática al editar

### Extensiones recomendadas

- **Live Server** — servidor local con hot reload
- **Prettier** — formato automático HTML/CSS/JS
- **HTML CSS Support** — autocompletado de clases
- **Color Highlight** — muestra los colores en el CSS

---

## Antes de publicar — checklist de personalización

Editar estos puntos en `index.html` antes de subir a Hostinger:

- [ ] **Formulario Web3Forms** — reemplazar `VOTRE_ACCESS_KEY_WEB3FORMS` por tu clave gratuita:
  1. Ir a [web3forms.com](https://web3forms.com)
  2. Introducir `oago1103@gmail.com` → confirmar por email → copiar la `access_key`
  3. Pegar la clave en la línea `<input type="hidden" name="access_key" value="…" />`
- [ ] **Portfolio** — reemplazar los proyectos de ejemplo (Andy Electric, Ublo, Iridian, Casatoro) con descripciones reales, métricas y, cuando estén listos, imágenes reales en `assets/`
- [ ] **Foto personal** — reemplazar el ilustración `SVG` de la sección *À propos* con una foto tuya profesional (archivo `assets/portrait.jpg`, 800×1066 px recomendado)
- [ ] **Logo** — cuando tengas el logo definitivo, añadirlo en `assets/logo.svg` y reemplazar el marcador `m.` en el `.nav__logo`
- [ ] **Verificar datos legales** — número SIRET (cuando lo tengas) en el footer

---

## Despliegue en Hostinger — paso a paso

### 1. Preparar los archivos

1. Comprimir en `.zip` el contenido (no la carpeta entera, sino los archivos sueltos):
   - `index.html`
   - carpeta `css/`
   - carpeta `js/`
   - carpeta `assets/` (aunque esté vacía)

### 2. Conectar el dominio al hosting

El dominio `agencemelodesign.com` ya está registrado en Hostinger. Confirma que apunta al hosting:

1. Entra en [hpanel.hostinger.com](https://hpanel.hostinger.com/)
2. Si tienes plan de **Hostinger Web Hosting** → sección **Websites** → asocia el dominio
3. Si aún no tienes plan de hosting, contrata uno (Premium o Business funcionan perfectamente para un sitio estático)

> **Alternativa gratuita:** también puedes desplegar en **Netlify**, **Vercel** o **Cloudflare Pages** gratis y después apuntar tu dominio de Hostinger vía DNS. Si te interesa esta opción, pídemelo y preparo la guía.

### 3. Subir los archivos al File Manager

1. En hPanel → **Files → File Manager** (o usa FTP con FileZilla)
2. Entra a la carpeta **`public_html`**
3. Borra el contenido por defecto (`index.html` de ejemplo, si existe)
4. Sube los archivos del sitio: `index.html`, `css/`, `js/`, `assets/`
5. Resultado final:
   ```
   public_html/
   ├── index.html
   ├── css/main.css
   ├── js/main.js
   └── assets/
   ```

### 4. Activar SSL gratuito (HTTPS)

1. En hPanel → **Advanced → SSL**
2. Selecciona el dominio `agencemelodesign.com`
3. Pulsa **Install SSL** (Let's Encrypt, gratis)
4. Activa **Force HTTPS** para que toda la web funcione en `https://`

### 5. Verificar DNS

En tu panel de DNS (el que compartiste: `hpanel.hostinger.com/domain/agencemelodesign.com/dns`), confirma:

| Tipo  | Nombre | Valor                        | Notas                        |
| ----- | ------ | ---------------------------- | ---------------------------- |
| A     | @      | IP del hosting Hostinger     | Apunta al plan de hosting    |
| CNAME | www    | agencemelodesign.com         | Subdominio www               |
| MX    | @      | (valor dado por Hostinger)   | Necesario para email pro     |

> Si usas el hosting de Hostinger, la configuración DNS se hace automáticamente al asociar el dominio. No toques los registros salvo que sepas exactamente lo que haces.

### 6. Email profesional (opcional pero recomendado)

1. hPanel → **Emails** → crear cuenta `contact@agencemelodesign.com`
2. Una vez creada, sustituir en el sitio web las menciones de `oago1103@gmail.com` por `contact@agencemelodesign.com` para un aspecto más profesional
3. Hostinger incluye cuentas de email gratuitas con la mayoría de sus planes

### 7. SEO — primeros pasos

Después de publicar:

1. **Google Search Console** → [search.google.com/search-console](https://search.google.com/search-console) → añadir la propiedad `agencemelodesign.com` y verificar
2. Crear `sitemap.xml` y `robots.txt` simples (puedes pedirme que los genere cuando estés listo)
3. Dar de alta el sitio en **Bing Webmaster Tools**
4. Crear perfil **Google Business Profile** como empresa local en Paris

---

## Accesibilidad

El sitio sigue buenas prácticas WCAG 2.1 AA:

- Jerarquía semántica (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Contraste AA en texto principal (ink `#1a1a1a` sobre crema `#faf8f4`)
- Foco visible con `outline` en elementos interactivos
- Soporte a `prefers-reduced-motion` (desactiva animaciones si el usuario lo pide)
- `aria-label`, `aria-expanded`, `aria-controls` en la navegación
- Objetivos táctiles ≥ 44 px en móvil

---

## Rendimiento

- Fuentes cargadas con `preconnect` y `display=swap`
- CSS y JS minimales, sin dependencias externas
- Imágenes decorativas en SVG inline (ligeras, vectoriales)
- `IntersectionObserver` para animaciones (eficiente)

---

## Próximos pasos sugeridos

1. Crear la clave Web3Forms (5 min) y probar el formulario
2. Sustituir los 4 proyectos placeholder por estudios de caso reales
3. Añadir fotos profesionales en `assets/`
4. Publicar versión en inglés (`/en/index.html`) cuando quieras atacar mercado US
5. Agregar blog / artículos UX para SEO y autoridad

---

**Contacto técnico del proyecto**
Alejandro Guevara · oago1103@gmail.com · +33 6 48 76 04 44
