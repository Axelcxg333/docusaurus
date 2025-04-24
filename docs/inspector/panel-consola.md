---
id: panel-consola
title: Panel de Consola
sidebar_label: Consola
---

## ¿Qué es el Panel de Consola?

El **Panel de Consola** es una de las herramientas más poderosas del **Inspector de Elementos**. Permite ver y registrar mensajes generados por el código JavaScript que se ejecuta en la página. Además, puedes escribir y ejecutar **código JavaScript** directamente en el navegador, lo que facilita la depuración y pruebas en tiempo real.

## Funciones Principales

### 1. Visualización de Mensajes

La consola te muestra **mensajes de error**, **advertencias** e **información de depuración** de la página. Estos mensajes son útiles para identificar problemas en el código JavaScript de una página web.

### 2. Ejecutar Comandos JavaScript

Puedes ejecutar código JavaScript directamente desde la consola. Por ejemplo, si quieres obtener el texto de un encabezado de la página, puedes escribir:

```javascript
document.querySelector('h1').innerText;
```

# Panel de Consola: Guía Completa

Esto devolverá el texto contenido en el primer `<h1>` de la página.

## 3. Filtrar Mensajes

La consola ofrece filtros para ayudarte a gestionar los tipos de mensajes que se muestran. Puedes filtrar por:

* **Errores:** Solo muestra mensajes de error.
* **Advertencias:** Solo muestra advertencias.
* **Mensajes:** Muestra mensajes informativos o de depuración.

## 4. Limpiar la Consola

Si la consola se llena con demasiados mensajes, puedes limpiarla para tener un espacio más limpio y legible. La mayoría de los navegadores permiten hacer esto fácilmente con un botón de limpiar o con el atajo `Ctrl + L` (o `Cmd + K` en macOS).

## ¿Por qué es útil el Panel de Consola?

* **Depuración:** Permite identificar errores en el código JavaScript y solucionarlos rápidamente.
* **Interacción en tiempo real:** Puedes probar código JavaScript directamente y ver los resultados sin necesidad de modificar el código fuente.
* **Monitoreo:** La consola te permite monitorear el comportamiento de la página web y entender mejor su flujo de ejecución.

## Consejos y Trucos

* **Usa `console.log()`:** Inserta `console.log()` en tu código JavaScript para imprimir mensajes en la consola y entender cómo cambian las variables o los estados.
* **Ejecución interactiva:** Si necesitas probar pequeños cambios en el código, puedes escribirlos directamente en la consola y ver el resultado de inmediato.
* **Filtrar mensajes:** Si tienes demasiados mensajes, utiliza los filtros para concentrarte solo en los errores o advertencias más importantes.

## Ejemplo práctico

Supón que tienes una función JavaScript que suma dos números. Para probarla en la consola, puedes hacer lo siguiente:

1. Abre el panel de Consola.
2. Escribe el siguiente código para probarlo:

```javascript
function sumar(a, b) {
  return a + b;
}
console.log(sumar(2, 3)); // Esto imprimirá "5" en la consola.
```

Verás el resultado "5" en la consola.

## Atajos útiles

* `Ctrl + Shift + J` (o `Cmd + Option + J` en macOS): Abre directamente la consola.
* `Ctrl + L` (o `Cmd + K` en macOS): Limpia la consola para empezar de nuevo.