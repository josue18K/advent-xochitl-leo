# El Adviento de Xóchitl y Leo

Abre `index.html` con doble clic, o publica esta carpeta como sitio estático. No hay instalación ni compilación. Las fuentes y el confeti usan CDN; si no están disponibles se usan fuentes del sistema y efectos propios. El audio se sintetiza en el navegador y empieza apagado.

## Fechas

El calendario utiliza la hora local del dispositivo. Prueba, por ejemplo, `index.html?fecha=2026-12-05` (también funciona en la dirección publicada). Cambia `PERMITIR_MODO_PRUEBA` a `false` en `js/main.js` para desactivar el parámetro. La comprobación es una regla de regalo: no impide cambiar el reloj ni leer los datos locales.

## Personalización

Añade tus propias imágenes como `assets/img/escenas/dia-01.jpg` hasta `dia-24.jpg`. Si no existen, se muestra una ilustración de respaldo. El minuto exacto se escribe en cada casilla y se guarda en el navegador; para modificar el contenido de origen, edita `js/data.js`. Los deseos, ajustes y progreso permanecen en este dispositivo; reiniciar solo borra las claves de este proyecto.

## Publicación y uso sin conexión

En GitHub Pages sube el contenido de esta carpeta a un repositorio y activa Pages desde la rama principal; en Netlify o Vercel selecciona la carpeta como sitio estático sin comando de compilación. El service worker se activa únicamente en HTTPS o localhost, y guarda los archivos locales tras la primera visita. Para eliminar la dependencia de red, descarga las fuentes y canvas-confetti con sus licencias en `vendor/` y cambia las referencias del HTML a rutas locales; el sitio sigue siendo usable sin ellos.

La música de campanas es una melodía original generada por el navegador. Pulsa «Música» para escucharla o pausarla; «Sonido» silencia tanto la música como los efectos. No se reproduce automáticamente. Las animaciones respetan la preferencia de movimiento reducido del dispositivo.
