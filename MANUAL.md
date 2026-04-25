# Manual de Actualización — Puffin S.R.L.

Guía paso a paso para actualizar el contenido de la web sin romper nada.

---

## Índice

1. [Estructura del proyecto](#1-estructura-del-proyecto)
2. [Cómo correr la web localmente](#2-cómo-correr-la-web-localmente)
3. [Actualizar el catálogo](#3-actualizar-el-catálogo)
4. [Actualizar textos de páginas](#4-actualizar-textos-de-páginas)
5. [Cambiar imágenes (logo, favicon, hero)](#5-cambiar-imágenes-logo-favicon-hero)
6. [Cambiar datos de contacto / WhatsApp](#6-cambiar-datos-de-contacto--whatsapp)
7. [Publicar los cambios](#7-publicar-los-cambios)

---

## 1. Estructura del proyecto

```
puffin-website/
├── index.html                  ← Título, descripción y SEO general
├── public/                     ← Favicon, sitemap, archivos estáticos
│   ├── favicon.ico
│   ├── favicon.png
│   ├── opengraph.jpg           ← Imagen al compartir en WhatsApp / redes
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── App.tsx                 ← Rutas de las páginas
    ├── assets/                 ← TODAS las imágenes del catálogo y diseño
    ├── components/             ← Header, Footer, botones reutilizables
    ├── lib/
    │   ├── catalogo.ts         ← ⭐ Productos del catálogo (lo que más vas a editar)
    │   └── data.ts             ← Listado de servicios
    └── pages/
        ├── Home.tsx            ← Página de inicio
        ├── Nosotros.tsx
        ├── Servicios.tsx
        ├── Importacion.tsx
        ├── Exportacion.tsx
        ├── Catalogo.tsx        ← Página completa del catálogo
        └── Contacto.tsx
```

---

## 2. Cómo correr la web localmente

```bash
# La primera vez:
npm install      # (o pnpm install)

# Para ver los cambios mientras editás:
npm run dev      # abre http://localhost:5173

# Para compilar la versión final:
npm run build
```

---

## 3. Actualizar el catálogo

Todo el catálogo vive en **un solo archivo**: `src/lib/catalogo.ts`.

### A) Agregar un producto nuevo

**Paso 1 — Subir la imagen del flyer**

Copiá la imagen (jpg o jpeg recomendado) dentro de `src/assets/`. Por ejemplo:

```
src/assets/flyer-cargadora-xyz.jpeg
```

**Paso 2 — Importar la imagen al inicio del archivo**

Abrí `src/lib/catalogo.ts` y agregá una línea más al bloque de `import` arriba de todo:

```ts
import flyerCargadoraXyz from "@/assets/flyer-cargadora-xyz.jpeg";
```

**Paso 3 — Agregar el producto al array `catalogo`**

Copiá uno de los bloques existentes y modificalo. Ejemplo:

```ts
{
  id: "cargadora-xyz",                  // identificador único, en minúscula y con guiones
  nombre: "Cargadora XYZ 950",          // nombre que se muestra
  imagen: flyerCargadoraXyz,            // la variable que importaste arriba
  ano: "2024",                          // opcional
  estado: "Disponible",                 // ej: "0KM", "Operativo", "Excelente estado"
  origen: "Importación",                // opcional
  motor: "Cummins QSB 6.7",             // opcional
  medida: "23.5R25",                    // opcional (para cubiertas)
  detalles: [                           // lista de bullets
    "Capacidad de balde: 3.0 m³",
    "Peso operativo: 18 toneladas",
    "Cabina ROPS/FOPS",
  ],
  categoria: "Maquinaria Vial",         // ⚠️ tiene que ser una de las opciones permitidas
},
```

**Categorías permitidas** (escribir EXACTAMENTE igual, con tildes):

- `"Maquinaria Agrícola"`
- `"Maquinaria Vial"`
- `"Cubiertas"`
- `"Aeronaves"`
- `"Repuestos"`
- `"Servicios"`

**Paso 4** — Guardar el archivo. Si tenés `npm run dev` corriendo, el cambio aparece al instante.

### B) Modificar un producto existente

Buscá el bloque del producto en `catalogo.ts` y editá los campos. Los campos opcionales (`ano`, `origen`, `motor`, `medida`) se pueden borrar si no aplican.

### C) Eliminar un producto

1. Borrá el bloque entero (desde `{` hasta `},`).
2. Si la imagen no la usa nadie más, borrá también el `import` de arriba y el archivo de `src/assets/`.

### D) Reordenar productos

El orden en el array es el orden en que aparecen. El **primer producto** del array es el primero que se muestra en el carrusel del inicio. Cortar y pegar bloques completos para reordenar.

---

## 4. Actualizar textos de páginas

Cada página es un archivo en `src/pages/`. Los textos son visibles directamente en el código entre etiquetas `<h1>`, `<h2>`, `<p>`, etc.

Ejemplo, para cambiar el título principal del Inicio:

1. Abrí `src/pages/Home.tsx`
2. Buscá el texto que querés cambiar (ej: `SOLUCIONES INTEGRALES`)
3. Cambialo y guardá.

Para los **servicios**, editá `src/lib/data.ts` (mismo formato que el catálogo, son listas de items).

---

## 5. Cambiar imágenes (logo, favicon, hero)

### Logo del header
Reemplazá `src/assets/logo.png` con la nueva imagen (mismo nombre).

### Favicon (ícono de la pestaña)
Reemplazá los archivos en `public/`:
- `favicon.png` (cuadrado, recomendado 512x512 px)
- `favicon.ico` (multi-tamaño)

### Imagen del hero / fondo del inicio
Cambiá los archivos correspondientes en `src/assets/` (ej: `hero.png`, `helicopter.jpeg`).

### Imagen al compartir en WhatsApp / redes sociales
Reemplazá `public/opengraph.jpg` (1200x630 px recomendado).

---

## 6. Cambiar datos de contacto / WhatsApp

### Número de WhatsApp flotante
Archivo: `src/components/WhatsAppButton.tsx`. Buscá el número y cambialo.

### Email y teléfonos en el Footer
Archivo: `src/components/Footer.tsx`.

### Email y teléfonos en página de Contacto
Archivo: `src/pages/Contacto.tsx`.

### Email del SEO (datos estructurados)
Archivo: `index.html` (línea con `"email"`).

---

## 7. Publicar los cambios

Después de editar y verificar que se vea bien con `npm run dev`:

```bash
npm run build       # genera la carpeta /dist con la versión final
```

Subir la carpeta `dist/` al hosting (Replit, Vercel, Netlify, o donde tengas el dominio).

Si usás Replit: apretás el botón **Publish** y listo.

---

## 8. Subir cambios automáticamente desde VS Code a GitHub (y publicar)

Si tenés el proyecto conectado a un repositorio de GitHub y a un servicio como **Vercel**, cada vez que subas cambios al repo, la web se vuelve a publicar **sola**.

### Opción A — Con comandos en la terminal (3 líneas)

Abrí la terminal de VS Code (`Terminal` → `New Terminal`) y, después de cada cambio:

```bash
git add -A
git commit -m "describí brevemente qué cambiaste"
git push
```

Vercel detecta el push en segundos y republica el sitio automáticamente.

### Opción B — Con la interfaz visual de VS Code (sin escribir comandos)

1. Hacé tus cambios y guardalos (`Ctrl + S`).
2. En la barra lateral izquierda, click en el ícono de **Source Control** (las ramitas), o apretá `Ctrl + Shift + G`.
3. Vas a ver listados todos los archivos modificados bajo "Changes".
4. Pasá el mouse sobre "Changes" y apretá el **`+`** para agregar todos los archivos.
5. Arriba escribí un mensaje describiendo el cambio (ej: "agregar excavadora CAT 320").
6. Apretá **`✓ Commit`**.
7. Apretá **`Sync Changes`** (o el ícono de las flechitas circulares abajo a la izquierda). Eso sube los cambios a GitHub.

En 1–2 minutos, Vercel termina de republicar y la web nueva queda online.

### Conexión inicial (solo la primera vez)

Si todavía no conectaste la carpeta al repositorio de GitHub, abrí la terminal y corré:

```bash
git init
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git branch -M master
git add -A
git commit -m "primera versión"
git push -u origin master
```

(Reemplazá `TU-USUARIO/TU-REPO` por la URL real de tu repositorio).

### Recomendaciones

- **Antes de subir cambios importantes**: probá la web en local con `npm run dev` para asegurarte de que no se rompió nada.
- **Mensajes de commit claros**: en vez de "cambios", escribí cosas como "agregar excavadora CAT 320" o "cambiar teléfono de contacto". Te va a servir para saber qué cambió cuando mires el historial.
- **Si te equivocás**: GitHub guarda todo el historial. Siempre podés volver a una versión anterior desde la pestaña "Commits" del repo.
- **NUNCA subir la carpeta `node_modules`**: el archivo `.gitignore` ya la excluye automáticamente.

---

## Tips finales

- **Antes de cambiar algo**: hacé una copia de seguridad del proyecto (carpeta zip).
- **Si algo se rompe**: revisá la consola del navegador (F12) — suele mostrar el archivo y línea con el error.
- **Comas y comillas**: en `catalogo.ts` y `data.ts`, cuidá las comas al final de cada línea y las comillas dobles `"..."` (no usar comillas tipográficas `"..."`).
- **Categoría mal escrita** = error. Tiene que ser una de las 6 permitidas, exactamente igual.

Cualquier duda, escribí a quien te armó la web.
