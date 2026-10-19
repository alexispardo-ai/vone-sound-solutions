# Cómo publicar un artículo en el blog

Publicar es crear un archivo `.md` en esta carpeta (`content/blog/`). Nada más. Al hacer push, Cloudflare reconstruye la web y el artículo aparece solo.

## Pasos

1. Copia uno de los artículos de ejemplo y renómbralo. El nombre del archivo es la URL:
   `mi-articulo.md` se publica en `/blog/mi-articulo`.
   Usa solo minúsculas, guiones normales y sin acentos ni espacios.

2. Rellena la cabecera (lo que va entre las dos líneas de `---`):

```
---
title: "Título del artículo"
date: "2026-10-20"          # formato AAAA-MM-DD
excerpt: "Una o dos frases que resumen el artículo."
cover: "/images/manawa.jpg" # foto de portada (de /public/images)
lang: "es"                  # es o en
author: "VONE"
tags: ["Eventos", "Void"]
---
```

3. Debajo de la cabecera, escribe el artículo en Markdown normal:
   - `## Título` para un subtítulo
   - `**negrita**`, `*cursiva*`
   - `- ` para listas
   - `[texto](https://enlace.com)` para enlaces

4. Guarda y sube los cambios a GitHub. La web se actualiza en un par de minutos.

## Fotos

Pon la portada en `public/images/` y referénciala en `cover` como `/images/nombre.jpg`.
Puedes reutilizar las que ya hay o subir nuevas.

## Regla de la casa

Nada de rayas largas ("—"). Usa comas, dos puntos o punto y aparte.
