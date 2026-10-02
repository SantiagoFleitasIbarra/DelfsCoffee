# Arte del proyecto

Las ilustraciones de `assets/welcome.webp` y `assets/interior.webp` se crearon con la herramienta integrada de generación de imágenes, usando la referencia proporcionada por el usuario. No se utilizó una API externa ni una clave personal. La referencia original no forma parte de esta entrega.

## Exterior / welcome.webp

Ilustración panorámica para un juego cozy de cafetería en PC. La referencia define la apariencia de Delfi y el estilo animado: mujer adulta joven con pelo negro largo, ojos marrones, pendientes de perla, cardigan tejido color crema y pantalones marrones. Ella está a la derecha, sonriente, dando una cálida bienvenida con la mano abierta. Fachada de cafetería pequeña especializada en rolls de canela, calle de adoquines tranquila, luz de tarde dorada, plantas, lavanda, muros crema, ventanas y puerta verde salvia, toldo a rayas crema y caramelo, pastelería visible. Cartel de madera con el nombre “Delfi”. Mitad izquierda disponible para superponer el título del juego. Estilo animado pintado, detalle cuidado, sin interfaz ni marcas de agua.

## Interior / interior.webp

Interior de la misma cafetería del exterior, usando esa imagen como referencia de continuidad. Estilo animado cálido, luz dorada, composición panorámica desde la entrada. Ventana verde salvia a la izquierda y mesa de madera para dos junto a ella, mostrador con rolls y cafetera al fondo en el centro, mesa redonda en primer plano, mesa en rincón de plantas a la derecha. Paredes crema, vigas de madera, lámparas colgantes, estantes con tazas, flores de lavanda. Delfi pequeña detrás del mostrador, con el mismo pelo negro y cardigan crema. Mesas desocupadas para superponer los controles de asientos y la comida. Sin interfaz ni texto superpuesto.

## Otros elementos

Los platos e iconos se dibujan en SVG en `game.js` y `assets/icon.svg`. La música es una secuencia original sencilla sintetizada en Web Audio. No hay archivos musicales de terceros ni fuentes remotas.

## Ampliación del salón

### Personajes ilustrados y música

Se utilizó la herramienta integrada de generación de imágenes para reemplazar los personajes geométricos visibles. `assets/delfi-illustrated.webp` contiene cuatro poses de Delfi, con el rostro de la ilustración original, blusa crema, delantal blanco, falda verde y zapatos marrones: tomando nota, retirándose de espalda, llevando bandeja y saludando. `assets/customers-illustrated.webp` contiene clientes adultos de aspecto cálido con ropa cotidiana, en estilo de película animada y proporciones naturales. `assets/pets-illustrated.webp` usa las fotos proporcionadas como referencia de Miguel, Phoebe y Canelita e incluye poses de reposo y de disfrute de una caricia. Prompt común: cuerpos completos separados sobre transparencia, sombreado suave, pelo/pelaje y telas detallados, sin texto ni escenario. Los atlas se recortaron en celdas, normalizaron y comprimieron para su uso en el juego, preservando transparencia. Las referencias fotográficas no se publican.

La música elegida se reproduce desde el video original `https://www.youtube.com/watch?v=VwR3LBbL6Jk` mediante YouTube IFrame Player API, con el reproductor visible. Título verificado por oEmbed: Vintage Bakery — Smooth and Warm Jazz — Study & Work Music — Animal Crossing Ambience; canal Solace Crossing. No se extrae ni redistribuye su audio.

### Cuatro asientos (actualización)

Se crearon tres ilustraciones nuevas con la herramienta integrada de generación de imágenes, usando `assets/window.webp` como referencia de estilo. Archivos finales: `assets/flowers.webp`, `assets/center.webp` y `assets/bar.webp`. Prompts: vista en primera persona desde un asiento en el rincón de flores; vista desde la mesa central mirando la entrada; vista desde un taburete frente a la cafetera, con borde horizontal de barra. En todos: fondo 16:9 cálido de película animada, madera miel y verde salvia, sin personas ni texto, espacio para superponer a Delfi y los pedidos. La barra se superpone mediante CSS para ocultar la parte inferior del personaje. Prueba específica: `CHROMIUM_PATH=... node tests/seating.cjs` (la variable es opcional si Playwright tiene Chromium instalado).

La mesa junto a la ventana usa una nueva ilustración generada: vista desde el asiento, mesa de madera, luz cálida, plantas y mostrador al fondo. Los personajes y mascotas de `assets/characters.svg` son dibujos vectoriales originales realizados en código. Las mascotas toman sus colores y rasgos de las referencias proporcionadas; las fotos no se publican. Las animaciones se realizan con CSS.
