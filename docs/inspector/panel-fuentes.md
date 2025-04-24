---
id: panel-fuentes
title: Panel de Fuentes
sidebar_label: Fuentes
---

## ¿Qué es el Panel de Fuentes?

El **Panel de Fuentes** en las herramientas de desarrollo del navegador (DevTools) es el lugar donde puedes ver, explorar y depurar todos los archivos de tu sitio web, incluyendo HTML, CSS, JavaScript y archivos de red como imágenes o fuentes tipográficas.

Es una herramienta clave para los desarrolladores, especialmente para quienes necesitan **depurar código JavaScript**, **establecer puntos de interrupción (breakpoints)** o **modificar archivos en tiempo real**.

---

## Funciones Principales

### 1. Explorador de Archivos

A la izquierda del panel se encuentra un explorador que organiza los archivos del sitio por dominios o carpetas virtuales. Aquí puedes navegar por los recursos que componen la página web:

- Archivos HTML, CSS y JS.
- Imágenes, fuentes y otros medios.
- Archivos cargados dinámicamente (como bundles o mapas de origen).

---

### 2. Visor y Editor de Código

Al seleccionar un archivo, este se muestra en un editor con resaltado de sintaxis. Puedes:

- Leer y editar el código directamente.
- Aplicar cambios y verlos reflejados en tiempo real.
- Usar funcionalidades como buscar (`Ctrl+F`), ir a una línea específica (`Ctrl+G`), o buscar definiciones (`Ctrl+Shift+F`).

---

### 3. Depuración con Breakpoints

Una de las herramientas más poderosas del panel es la posibilidad de depurar código JavaScript:

- **Breakpoints**: Establece puntos donde quieres que la ejecución del código se detenga.
- **Step into / over / out**: Avanza línea por línea para ver cómo fluye la ejecución.
- **Watch expressions**: Evalúa variables personalizadas durante la depuración.
- **Call stack**: Observa el historial de funciones llamadas.
- **Scope variables**: Inspecciona las variables disponibles en el contexto actual.

---

### 4. Workspaces (Espacios de trabajo)

Puedes **vincular tu sistema de archivos local** con el navegador para editar archivos directamente desde DevTools y reflejarlos en tu proyecto:

- Muy útil para desarrollo activo sin necesidad de cambiar entre editores.
- Permite guardar los cambios realizados directamente desde el navegador.

---

### 5. Snippets (Fragmentos de código)

En la pestaña “Snippets” puedes crear scripts reutilizables que se ejecutan en la consola.

- Puedes usar snippets para automatizar tareas repetitivas.
- Se ejecutan como scripts normales cuando haces clic derecho y seleccionas “Run”.

---

## ¿Para qué sirve el Panel de Fuentes?

- 📜 **Visualizar y editar archivos** sin necesidad de un editor externo.
- 🐞 **Depurar errores y ver el flujo de ejecución** del código JS paso a paso.
- 🧪 **Probar cambios en tiempo real** y ver cómo afectan al sitio sin necesidad de refrescar constantemente.
- 💡 **Ejecutar scripts personalizados** para automatizar tareas o probar funcionalidades.

---

## Ejemplo Práctico

Supongamos que tienes una función en tu archivo `app.js` que no se comporta como esperas. Puedes hacer lo siguiente:

1. Abre el Panel de Fuentes y selecciona `app.js`.
2. Establece un breakpoint en la línea donde inicia la función problemática.
3. Recarga la página o ejecuta la acción correspondiente.
4. El navegador se detendrá en ese punto y podrás inspeccionar variables, verificar condiciones y seguir el flujo paso a paso.

---

## Consejos útiles

- ✅ Usa `debugger;` en tu código para forzar un breakpoint sin usar DevTools.
- 🔍 Usa `Ctrl + Shift + F` para buscar en todos los archivos cargados.
- 💾 Puedes editar archivos temporales directamente desde el navegador, y copiarlos a tu entorno local.

---

## Atajos útiles

- `Ctrl + P`: Abrir archivo rápidamente.
- `Ctrl + Shift + F`: Buscar en todos los archivos.
- `F8`: Continuar ejecución después de un breakpoint.
- `F10 / F11`: Paso sobre / dentro de una función.

---

> **Nota**: El Panel de Fuentes es imprescindible para depurar código JavaScript de manera efectiva. Dominarlo te ayudará a resolver errores más rápido y a mejorar el rendimiento y comportamiento de tus aplicaciones web.
