---
id: panel-estilos
title: Panel de Estilos (CSS)
sidebar_label: Estilos
---

# Panel de Estilos (CSS)

El **Panel de Estilos** te permite ver y modificar los estilos **CSS** aplicados a los elementos de la página. Puedes realizar cambios en vivo y experimentar con diferentes estilos para obtener una vista previa instantánea, sin tener que editar los archivos CSS directamente.

---

## ¿Cómo acceder al Panel de Estilos?

1. Abre las herramientas de desarrollo (`F12` o `Ctrl + Shift + I`).
2. Dirígete a la pestaña **Elementos**.
3. Selecciona el elemento HTML cuyo estilo deseas modificar.
4. En el panel lateral derecho, verás el panel de **Estilos** con todos los estilos aplicados.

---

## ¿Qué se puede hacer en el Panel de Estilos?

### 1. Ver los estilos aplicados
El panel de Estilos muestra una lista de todas las reglas CSS que se aplican al elemento seleccionado, desde las más específicas (como las de un archivo CSS de un componente) hasta las más generales (como las de `body`, `html` o las reglas predeterminadas del navegador).

Cada regla muestra:
- La **propiedad** (por ejemplo, `color`, `margin`, `font-size`).
- El **valor** de la propiedad.
- El **origen** de la regla (el archivo CSS, la línea y el selector).

### 2. Editar estilos en vivo
El panel permite **editar cualquier propiedad CSS**. Solo necesitas hacer clic sobre el valor que deseas modificar y escribir uno nuevo. Los cambios se reflejarán en la página de inmediato, lo que te permite ver cómo afecta cada ajuste sin necesidad de modificar el archivo original.

#### Ejemplo:
1. Si quieres cambiar el color de fondo de un `<div>`, solo debes hacer clic sobre el valor en la propiedad `background-color` y escribir un nuevo valor, como `#ff0000`.
2. La página se actualizará al instante con el nuevo color de fondo.

### 3. Activar o desactivar reglas CSS
Puedes **activar o desactivar** reglas CSS específicas haciendo clic en el checkbox al lado de la propiedad. Esto es útil para probar cómo quedaría el diseño si desactivas ciertas reglas sin eliminarlas permanentemente.

### 4. Añadir nuevas reglas
Además de modificar las reglas existentes, puedes **agregar nuevas propiedades CSS**. En la parte inferior del panel, verás un campo de entrada donde puedes agregar nuevas reglas CSS para el elemento seleccionado.

Por ejemplo, si deseas agregar un borde a un botón, puedes escribir:
```css
border: 2px solid #000;
```

### 5. Ver las reglas heredadas
Algunas propiedades CSS se **heredan** de elementos superiores (por ejemplo, las reglas de `font-family` o `color` que se aplican a un contenedor general como `<body>`). El panel de Estilos te permite ver estas propiedades heredadas, marcándolas de manera diferente (normalmente en una sección separada).

### 6. Usar la pestaña **"Reglas Computadas"**
Si deseas ver el valor **final** de una propiedad, puedes usar la pestaña **"Reglas Computadas"**. Esta pestaña te muestra el valor que se aplica finalmente al elemento, teniendo en cuenta todas las reglas CSS que se aplican y sus prioridades.

---

## ¿Por qué es útil el Panel de Estilos?

- **Desarrolladores**: Esencial para depurar y ajustar estilos CSS sobre la marcha sin necesidad de modificar archivos CSS directamente.
- **Diseñadores**: Ideal para hacer pruebas rápidas de diseño, ajustando colores, fuentes, márgenes, etc., de manera instantánea.
- **Aprendices**: Si estás aprendiendo CSS, este panel te permite ver cómo las reglas afectan a los elementos en tiempo real, lo que facilita mucho el aprendizaje de las propiedades y valores CSS.
- **Optimización de diseño**: Te permite ajustar el diseño responsivo al instante y experimentar con diferentes estilos para mejorar la apariencia de la página.

---

## Consejos y Trucos

- ✨ **Cambios en vivo**: Los cambios que realices son temporales y solo se reflejarán en tu navegador. Para aplicar los cambios permanentemente, asegúrate de modificar los archivos CSS correspondientes.
- 🚀 **Agregar nuevas reglas rápidamente**: Si necesitas agregar una regla de CSS nueva, solo haz clic en la parte inferior del panel de Estilos, escribe la propiedad y el valor, ¡y listo! Puedes añadir estilos personalizados al instante.
- 🎨 **Vista previa de cambios de color**: Puedes usar el selector de color integrado para elegir colores visualmente, sin tener que escribir el código hexadecimal o RGB manualmente.

---

## Ejemplo práctico

Si deseas cambiar el tamaño de fuente de un párrafo en una página:

1. Abre el panel de **Estilos**.
2. Selecciona el `<p>` cuyo tamaño deseas modificar.
3. En el panel de Estilos, busca la propiedad `font-size` y cambia el valor a `20px` (o cualquier tamaño que prefieras).
4. Observa cómo el tamaño del texto cambia en tiempo real.

---

## Atajos útiles

- `Ctrl + Shift + C` (o `Cmd + Shift + C` en macOS): **Activar selección de elementos**. Esto te permite seleccionar rápidamente cualquier elemento de la página y ver sus estilos en el panel.
- `Ctrl + Shift + I` (o `Cmd + Option + I` en macOS): **Abrir las Herramientas de Desarrollador** y acceder rápidamente al Panel de Estilos.

---
