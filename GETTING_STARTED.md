# Guía rápida — Abrir el proyecto en Visual Studio Code

Proyecto **Agence Mélo Design** configurado como workspace profesional de VS Code.
Sigue estos pasos para empezar a editarlo en menos de 5 minutos.

---

## 1. Requisitos previos (solo la primera vez)

- [Visual Studio Code](https://code.visualstudio.com/) (gratis, Mac/Windows/Linux)
- [Node.js 18+](https://nodejs.org/) (solo si quieres usar los scripts `npm run …`) — **opcional**
- [Git](https://git-scm.com/) (solo si quieres subir el proyecto a GitHub) — **opcional**

> Si **no instalas Node.js**, funcionará todo menos los scripts de `package.json`.
> Puedes editar y previsualizar el sitio con Live Server sin Node.

---

## 2. Abrir el proyecto

Hay dos formas:

### Opción A — Abrir el workspace (recomendado)

1. Haz doble clic en el archivo **`agencemelodesign.code-workspace`**
2. VS Code se abre con el proyecto configurado, barra de título oscura con acento dorado
3. En la esquina inferior derecha aparecerá: *"Do you want to install recommended extensions?"* → **Install All**

### Opción B — Abrir la carpeta

1. VS Code → `File → Open Folder…`
2. Selecciona la carpeta `agencemelodesign/`
3. Acepta instalar las extensiones recomendadas

---

## 3. Extensiones que se instalarán automáticamente

| Extensión | Para qué sirve |
|-----------|----------------|
| **Live Server** | Servidor local con recarga automática al guardar |
| **Prettier** | Formato automático al guardar (HTML, CSS, JS) |
| **HTML CSS Support** | Autocompletado de clases CSS en HTML |
| **Color Highlight** | Muestra los colores directamente en el código |
| **Code Spell Checker (FR/EN)** | Detecta errores ortográficos en francés |
| **Auto Rename Tag** | Renombra el tag de cierre cuando editas el de apertura |
| **CSS Peek** | Ver/ir a la definición de una clase CSS con Cmd+clic |
| **Material Icon Theme** | Iconos bonitos en el explorador de archivos |
| **Error Lens** | Errores y advertencias visibles en la línea |

---

## 4. Ver el sitio en vivo (dos opciones)

### Opción A — Con Live Server (más simple)

1. Abre `index.html` en el editor
2. Clic derecho → **Open with Live Server**
3. Se abrirá el navegador en `http://127.0.0.1:5500/`
4. Cada vez que guardes un archivo, se recargará automáticamente

### Opción B — Con los scripts npm

Si tienes Node.js instalado, desde la terminal integrada (`Ctrl/Cmd + ù` o `Terminal → New Terminal`):

```bash
# Primera vez (instalar dependencias)
npm install

# Arrancar el servidor local
npm run dev
```

> También puedes abrir la paleta de comandos (`Cmd/Ctrl + Shift + P`) y escribir **"Tasks: Run Task"** — aparecerán tareas predefinidas con emojis.

---

## 5. Scripts disponibles (desde terminal o desde "Tasks: Run Task")

| Script | Comando | Qué hace |
|--------|---------|----------|
| 🚀 Dev | `npm run dev` | Arranca servidor local en puerto 5500 |
| ✨ Format | `npm run format` | Formatea todo el código con Prettier |
| 🔍 Format check | `npm run format:check` | Verifica que el código esté bien formateado |
| ✅ Validate | `npm run validate` | Valida la estructura del HTML |
| 📦 Build ZIP | `npm run build:zip` | Crea un `.zip` listo para subir a Hostinger |
| 🧹 Clean | `npm run clean` | Borra `node_modules` y el ZIP |

---

## 6. Atajos útiles de VS Code

| Atajo | Acción |
|-------|--------|
| `Cmd/Ctrl + P` | Buscar y abrir un archivo rápidamente |
| `Cmd/Ctrl + Shift + P` | Paleta de comandos |
| `Cmd/Ctrl + Shift + F` | Buscar en todos los archivos |
| `Cmd/Ctrl + ù` (o `` ` ``) | Abrir/cerrar terminal integrada |
| `Cmd/Ctrl + K Z` | Modo Zen (distraction-free) |
| `Cmd/Ctrl + D` | Seleccionar siguiente ocurrencia |
| `Alt + ↑ / ↓` | Mover línea arriba/abajo |
| `F2` | Renombrar símbolo en todos los archivos |
| `Cmd/Ctrl + Click` en una clase CSS | Ir a su definición |

---

## 7. Estructura del proyecto

```
agencemelodesign/
├── .vscode/                       # Configuración VS Code
│   ├── settings.json              #   · Formato, colores, Live Server
│   ├── extensions.json            #   · Extensiones recomendadas
│   ├── launch.json                #   · Debug Chrome/Edge
│   └── tasks.json                 #   · Tareas npm con emojis
├── assets/                        # Imágenes, logos, fotos (crear)
├── css/
│   └── main.css                   # Estilos (tokens + componentes)
├── js/
│   └── main.js                    # Interactividad (menú, reveal, form)
├── index.html                     # Única página del sitio
├── package.json                   # Scripts y dependencias npm
├── agencemelodesign.code-workspace  # Archivo workspace — ¡abre con doble clic!
├── .gitignore                     # Archivos a ignorar en git
├── .editorconfig                  # Reglas de formato (tabulación, fin de línea)
├── .prettierrc.json               # Config Prettier
├── .prettierignore                # Archivos a no formatear
├── .htmlvalidate.json             # Config validador HTML
├── README.md                      # Guía de despliegue en Hostinger
└── GETTING_STARTED.md             # Este archivo
```

---

## 8. Workflow típico recomendado

1. Abre el workspace con doble clic
2. `Clic derecho en index.html → Open with Live Server`
3. Edita lo que quieras — **se recarga solo** al guardar
4. Los archivos se formatean automáticamente al guardar (gracias a Prettier)
5. Cuando estés listo para publicar: `npm run build:zip` → sube el `.zip` a Hostinger

---

## 9. Opcional — Conectar a GitHub

Si quieres guardar el proyecto en GitHub para versionar los cambios:

```bash
# Desde la terminal, dentro de la carpeta del proyecto:
git init
git add .
git commit -m "Initial commit — Agence Mélo Design"

# Crea un repo en github.com (vacío, sin README ni .gitignore)
git remote add origin https://github.com/tu-usuario/agencemelodesign.git
git branch -M main
git push -u origin main
```

Después, desde VS Code, puedes usar la pestaña **Source Control** (el icono con ramas, `Ctrl/Cmd + Shift + G`) para hacer commits visualmente sin tocar la terminal.

---

## 10. Dudas frecuentes

**¿Necesito Node.js?**
No, solo si quieres usar los scripts `npm run …`. Para editar y previsualizar con Live Server basta con VS Code.

**¿Puedo editar en otro editor?**
Sí (Sublime, Atom, WebStorm, Cursor…). El `.editorconfig` y `.prettierrc` garantizan consistencia.

**¿Cómo cambio los colores de la marca?**
Edita las variables `--color-*` al principio de `css/main.css` (sección `:root`).

**¿Cómo añado una nueva sección?**
Copia un `<section class="section">…</section>` existente en `index.html` y añade un enlace al menú.

**¿Dónde configuro el formulario?**
Pega tu `access_key` de [web3forms.com](https://web3forms.com) en `index.html` (busca `VOTRE_ACCESS_KEY_WEB3FORMS`).

---

Cualquier duda → `oago1103@gmail.com` · **¡Buen diseño!** 🎨
