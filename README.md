# Un ratito en CANELA & COFFEE

Un juego cozy en español para PC, inspirado en Delfi. Afuera de la cafetería, Delfi te recibe y te invita a **merendar** o a **trabajar con ella**. Ilustraciones cálidas, rolls de canela para merendar sin apuro o enfrentar un desafío de cocina.

![Entrada del juego](docs/preview.webp)

## Jugar ahora, sin instalar nada

1. Extraé todo el ZIP a una carpeta.
2. Abrí `index.html` con Chrome, Edge o Firefox. En Windows también podés hacer doble clic en `JUGAR_EN_WINDOWS.bat`.
3. Elegí **Quiero merendar** o **Quiero trabajar**.

El juego funciona sin conexión, incluyendo los minijuegos y la música de ambiente incluida. No necesita cuenta, claves ni dependencias para jugar en el navegador. No abras el HTML directamente dentro del ZIP: primero extraelo. F11 o el botón de pantalla completa amplían la pantalla.

## Los dos modos

**Merendar:** elegí una de cuatro ubicaciones, pedí hasta cuatro productos, seleccioná el frosting de tus rolls y esperá a que Delfi te sirva. Delfi se acerca con su libreta, se retira a preparar y vuelve con una bandeja. Hacé clic en los productos para disfrutar la merienda y valorá la visita de 1 a 5 estrellas. Miguel, Phoebe y Canelita reaccionan a tus caricias y a los premios. Las visitas son gratis; los precios son valores ficticios para el modo trabajo.

**Trabajar:** atendé cinco clientes por turno con minijuegos de mouse: ingredientes arrastrados en orden, trazos de masa y frosting, mezcla circular, cortes guiados, llenado y control del fuego. La calidad de cada paso se guarda en el producto. Los clientes te observan, pierden paciencia y muestran expresiones ilustradas de atención, alegría o descontento. Calidad, rapidez y errores determinan la valoración de 1 a 5 y la propina. Una entrega incorrecta cuesta 8 segundos; podés corregirla. Al terminar la espera el cliente se va sin pagar. El resumen muestra las cinco opiniones reales.

**Tienda:** 12 mejoras organizadas en cocina, ambiente y mascotas, con vista previa, saldo, precios y desbloqueos. Horno, jarra, batidor, manga y recetario ayudan en minijuegos concretos; flores agregan 15 segundos al llegar cada nuevo cliente y la campanita recupera 12 segundos una vez por pedido. La decoración comprada se puede guardar y activar sin volver a pagar. Se conservan las compras y estrellas anteriores.

La visita para merendar sigue sin reloj. En el trabajo la paciencia baja durante la preparación; se pausa al abrir ayuda, tienda o recetario y al ocultar la pestaña. Los pasos de cocina representan un minijuego y no son instrucciones culinarias reales.

## Menú completo (75 opciones)

- **Dulces (11):** roll de canela; roll de canela y manzana; carrot cake; crumble de manzana; crumble de manzana y frutos rojos; cookies de gatitos; budín de limón; brownie; torta marmolada; galletitas danesas; alfajor ferrero.
- **Frostings:** crema, crema y lavanda, crema con chocolate.
- **Salados (7):** scones de queso; sándwich de lomito, queso crema y rúcula; sándwich capresse; tostón de palta, huevo y verdes; sándwich italiano en ciabatta con muzzarella fresca, pesto, lomito, tomate, aceite de oliva y rúcula; scones de espinaca y queso; tabla de quesos suaves, azules y de cabra con uvas, peras, higos, frutos secos y mermelada.
- **De copa (9):** yogurt con granola y frutos rojos; tarta frutal; ensalada de frutas; helado; mousse de chocolate; mousse de limón; chocoflan; tiramisú; cheesecake de frutos rojos.
- **Bebidas calientes (24):** expresso simple y doble, panna, americano, latte, cortado, capuchinos clásico y vainilla, frappé, mocha, dalgona, breve, hawaiano, affogato, caramel y vainilla latte, caramel macchiato, matcha latte, submarino, chocolate caliente y cuatro infusiones.
- **Bebidas frías (24):** cinco milkshakes, tres licuados, jugo de naranja, limonadas clásica/frutos rojos/frambuesa/lavanda, pomelada, coffee orange, tres iced teas, tres iced coffees y tres sodas.

## Jugar en la mesa

En cualquiera de las cuatro mesas aparece **Pintar o jugar**. También podés abrirlo mientras esperás tu pedido.

- **Lienzo:** dibujá con mouse o dedo, elegí colores y grosor, usá goma, flores o corazones, y deshacé/rehacé hasta 15 acciones. El borrador dura la sesión. **Guardar recuerdo** conserva las seis últimas pinturas en este navegador; **Llevarme mi pintura** descarga un PNG de 800 × 520 para guardar o compartir. **Mis recuerdos** permite descargar las obras guardadas.
- **Torre de sobremesa:** minijuego 2D inspirado en los juegos de bloques apilados. Elegí un bloque, frená el indicador en verde para extraerlo suavemente y se apilará arriba. La torre cae si pierde apoyo o si el movimiento la desequilibra. El piso superior está protegido y se conserva tu récord. Es un modelo simplificado de equilibrio, no una simulación física 3D.

## Controles y guardado

- Mouse: todas las interacciones.
- `1` / `2`: elegir modo desde la entrada.
- `Escape`: cerrar menú, ayuda o cancelar una preparación.
- `Tab` / `Enter`: recorrer y activar botones.
- ♪: reproducir/pausar Vintage Bakery — Solace Crossing, incluida como audio Opus en partes de dos minutos, reproducidas en orden y en bucle. El MP3 original repite cinco veces una secuencia de unos 35 minutos; se conserva esa secuencia una vez y se repite automáticamente para evitar descargar copias idénticas. Empieza con el primer clic en el juego. Hacé clic en el título para ajustar el volumen o elegir otro archivo local; solo aparece el título arriba, sin video. Los archivos personales se guardan en este navegador (IndexedDB).

Se guardan estrellas, pedidos completados, visitas, valoraciones, turnos, compras y caricias en `localStorage` del navegador. La preparación en curso no se guarda. Cambiar de navegador, mover el archivo local o borrar los datos del navegador puede cambiar o eliminar el guardado. La aplicación de escritorio tiene su propio guardado.

## Tecnologías

HTML, CSS y JavaScript, sin framework. El juego, sus ilustraciones y la música elegida se cargan localmente; no se incrustan videos ni se inicia una conexión con YouTube. Escenarios, Delfi, clientes y mascotas ilustrados para este proyecto; platos dibujados en SVG desde código; efectos con Web Audio. Electron es una opción para empaquetar el mismo juego como aplicación de escritorio.

Es un juego 2D con personajes ilustrados, poses y animaciones de entrada, salida y reposo. Delfi conserva su aspecto de la entrada, viste delantal blanco y se retira de espalda. Las cuatro ubicaciones tienen ilustraciones propias desde el asiento: ventana, flores, centro y barra. Delfi toma el pedido, se retira y vuelve en todas; en la barra aparece detrás del mostrador. Las mascotas están visibles y se pueden acariciar tanto en las escenas de visita como al trabajar. El área de trabajo tiene el mostrador y la cafetera de fondo.

## Desarrollo

Node.js 24 recomendado.

```sh
npm start
# Abrir http://localhost:4173
npm test
```

Para las pruebas de navegador:

```sh
npm ci
npx playwright install chromium
npm run test:ui
```

El juego no necesita `npm install` para ejecutarse como HTML ni para las pruebas unitarias.

## Aplicación para Windows (opcional)

```sh
npm ci
npm run desktop
npm run build:windows
```

El resultado queda en `dist/Delfi-Cafe-win32-x64/`. Ejecutá `Delfi-Cafe.exe` manteniendo los demás archivos de esa carpeta. También podés usar **Actions → Crear juego para Windows → Run workflow** en GitHub y descargar el artefacto cuando termine. El ZIP de código incluye la configuración; no incluye un ejecutable Windows compilado ni firmado. El empaquetado Windows requiere descargar Electron durante la construcción.

## GitHub

La carpeta contiene el código completo, las imágenes necesarias, pruebas y workflows. Para un repositorio nuevo:

```sh
git init -b main
git add .
git commit -m "Crear Delfi Canela y Cafe"
git remote add origin URL_DE_TU_REPOSITORIO
git push -u origin main
```

Para jugar online desde GitHub Pages: en un repositorio compatible con Pages, configurá **Settings → Pages → Deploy from a branch → main / (root)**. La aplicación es estática y usa rutas relativas.

## Estructura

- `index.html`: inicio.
- `style.css` y `living.css`: interfaz, escenas y animaciones.
- `challenge-model.js`, `challenge.js` y `challenge.css`: minijuegos, paciencia, opiniones y tienda ampliada.
- `living.js` y `living-data.js`: elenco, visitas animadas, mascotas, valoraciones y tienda.
- `illustrated.js` / `illustrated.css`: personajes ilustrados, mascotas en las escenas y nombre del café.
- `soundtrack.js` / `soundtrack.css`: audio local con título discreto y guardado en IndexedDB.
- `table-games.js` / `table-games.css`: lienzos, galería, descarga PNG y torre de bloques.
- `table-games-model.js`: reglas de soporte, equilibrio y extracción de bloques.
- `game.js`: estados, pedidos, cocina, interacción, arte de platos y audio.
- `menu.js`: productos, recetas, frostings y validación de pedidos.
- `assets/`: arte exterior, interior e icono.
- `tests/`: pruebas de reglas y flujo de juego.
- `desktop.cjs`: ventana Electron aislada, sin acceso Node desde el juego.
- `server.cjs`: servidor de desarrollo local.
- `ART_PROMPTS.md`: procedencia y prompts de las ilustraciones.

La fotografía de referencia original no se incluye en el repositorio. No se define una licencia pública sobre la identidad de Delfi ni sobre el proyecto; el propietario puede decidirla antes de distribuirlo.

### Verificar el desafío

`CHROMIUM_PATH=/ruta/a/chromium node tests/challenge-browser.cjs` prueba gestos de mouse, errores, propinas, pausa, abandono de clientes, resumen y persistencia de la tienda. `npm test` incluye las reglas de calidad, dificultad y compras.
