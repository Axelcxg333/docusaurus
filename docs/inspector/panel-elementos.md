---
id: panel-elementos
title: Panel de Elementos
sidebar_label: Elementos
---

# Panel de Elementos (HTML)

El panel **Elementos** es donde puedes explorar y modificar la estructura del código **HTML** de una página web en tiempo real. En él se muestra el **árbol DOM** (Document Object Model), que es la representación jerárquica de los elementos de una página.

---

## ¿Cómo acceder al Panel de Elementos?

1. Abre las herramientas de desarrollo (`F12` o `Ctrl + Shift + I`).
2. Selecciona la pestaña **Elementos**.

---

## ¿Qué se puede hacer en el Panel de Elementos?

### 1. Explorar el árbol DOM
El árbol DOM muestra todos los elementos HTML de la página, desde el `<html>` hasta las etiquetas más profundas como `<div>`, `<span>`, y cualquier otro componente.

- Puedes **expandir** o **contraer** los elementos para ver sus hijos.
- Al pasar el mouse por encima de un elemento en el panel, el mismo se resalta en la página web.

### 2. Editar HTML en vivo
¡Lo mejor del Inspector de Elementos! Puedes **editar cualquier parte del HTML** directamente en el navegador. Solo haz clic derecho sobre un elemento y selecciona "Editar como HTML".  
Por ejemplo, podés cambiar el texto de un `<h1>`, agregar nuevos elementos o incluso eliminar etiquetas.

### 3. Copiar Selectores o XPath
Si necesitas usar el **selector CSS** o el **XPath** de un elemento en tu código, el inspector ofrece una opción para copiarlo automáticamente. Esto es útil para crear scripts o tests automatizados.

- Haz clic derecho sobre el elemento y selecciona **Copiar** → **Copiar selector** o **Copiar XPath**.

### 4. Ver atributos de los elementos
El panel de Elementos también muestra los **atributos** de cada etiqueta, como `id`, `class`, `style`, `src`, `href`, etc.

- Puedes **modificar estos atributos** para probar cómo cambian los elementos visualmente o funcionalmente.

### 5. Eliminar elementos
Si deseas eliminar un elemento de la página de manera temporal, simplemente haz clic derecho sobre el mismo y selecciona **Eliminar elemento**.  
Esto es útil para pruebas rápidas y para ver el impacto de quitar un elemento sin necesidad de modificar el código fuente original.

---

## ¿Por qué es útil el Panel de Elementos?

- **Desarrollo web**: Es una herramienta esencial para depurar y hacer ajustes rápidos en el código de una página.
- **Diseño**: Te permite modificar la apariencia de un sitio web sobre la marcha para probar diferentes estilos.
- **Aprendizaje**: Si eres estudiante o estás aprendiendo desarrollo web, el panel de Elementos es una excelente manera de explorar cómo se estructuran las páginas y cómo se aplican los estilos.

---

## Consejos y Trucos

- 🔎 **Buscar un elemento**: Si necesitas encontrar rápidamente un elemento en el árbol DOM, usa el atajo `Ctrl + F` y busca por su nombre, clase o id.
- 🔄 **Restaurar cambios**: Los cambios que hagas en el panel de Elementos son temporales y desaparecerán cuando recargues la página. Para cambios permanentes, edita el código fuente del sitio directamente.

---

## Ejemplo práctico

Imaginemos que tienes un botón en una página, pero su color no es el adecuado. Para modificarlo:

1. Abre el panel de **Elementos**.
2. Encuentra el `<button>` correspondiente en el árbol DOM.
3. Haz clic sobre él para resaltarlo en la página.
4. Edita sus estilos CSS o incluso cambia el texto dentro de la etiqueta HTML.
5. ¡Verás los cambios al instante!

---

## Atajos útiles

- `Ctrl + Shift + C` (o `Cmd + Shift + C` en macOS): **Activar selección de elementos** directamente desde la página.
- `Ctrl + F` (o `Cmd + F` en macOS): **Buscar un elemento** dentro del DOM.
- `Esc`: **Cerrar el panel de herramientas**.

---


