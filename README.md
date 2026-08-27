# Caribbean House Drinks

Sitio web de una página para **Caribbean House Drinks** — bartender, mixólogo y servicio de coctelería en New Jersey (marca personal: *Isma Drinks*, Instagram [@isma_drinks](https://www.instagram.com/isma_drinks/)).

Sitio **estático** (HTML/CSS/JS, sin build) y **bilingüe EN/ES** con selector de idioma. Listo para desplegar en Vercel.

## Estructura

```
caribbean-house-drinks/
├── index.html      # página completa (secciones + SEO + JSON-LD)
├── styles.css      # estilos (paleta caribeña: piedra, oro, turquesa, fucsia)
├── script.js       # idioma EN/ES, menú móvil, header sticky, reveal al hacer scroll
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── vercel.json     # cleanUrls + cache de imágenes
└── images/         # fotos reales optimizadas + og.jpg (1200×630)
```

## Ver en local

Al ser estático, cualquier servidor sirve:

```bash
npx serve .
```

Luego abre http://localhost:3000.

## Desplegar en Vercel

1. Subir esta carpeta a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com) → **Add New → Project** → importar el repo.
3. Framework Preset: **Other** (es estático, sin build). Deploy.
4. Queda en `https://<nombre>.vercel.app`. Se puede conectar un dominio propio en *Settings → Domains*.

O desde la terminal:

```bash
npm i -g vercel
vercel --prod
```

## Editar contenido

- **Textos EN/ES:** cada elemento traducible tiene `data-en="..."` y `data-es="..."` en `index.html`. Edita ambos.
- **Contacto:** teléfono `908-661-1403`, email `jv.mixologist@gmail.com`, WhatsApp `wa.me/19086611403`, Instagram `@isma_drinks`. Están en la sección `#contact`, el footer y el botón flotante.
- **Dominio en SEO:** al fijar el dominio final, reemplaza `https://caribbean-house-drinks.vercel.app/` en `index.html` (canonical/OG), `robots.txt` y `sitemap.xml`.
- **Fotos:** en `images/`. Reemplaza manteniendo el mismo nombre para no tocar el HTML.

## Después de publicar (para que la gente lo encuentre)

- Poner el link en la **bio de Instagram** (@isma_drinks) y compartir en historias/posts.
- Registrar el sitio en **Google Search Console** y enviar el `sitemap.xml` para aparecer en Google.
- Crear un **perfil de Google Business** (bartender / servicio de eventos en NJ) apuntando al sitio.
