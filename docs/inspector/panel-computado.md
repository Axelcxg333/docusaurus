---
id: panel-computado
title: Panel Computado
sidebar_label: Computado
---

## ¿Qué es el Panel Computado?

El **Panel Computado** en las herramientas de desarrollo te permite ver las **propiedades calculadas** de estilo de un elemento en la página. Esto significa que muestra el valor final de las propiedades CSS que se aplican a un elemento después de que se han procesado todas las reglas de estilo, incluidas las heredadas, las de las hojas de estilo externas, las reglas del navegador y las reglas específicas del elemento.

Este panel es útil para depurar problemas de estilo, ya que te muestra no solo las reglas CSS directamente aplicadas al elemento, sino también las propiedades que se heredan o que el navegador calcula de forma automática.

## Funciones Principales

### 1. Propiedades Calculadas

El panel muestra las propiedades CSS de un elemento en su **estado calculado**. Esto incluye:

- **Propiedades de estilo heredadas**: Como el color del texto o el tamaño de la fuente, que se heredan de los elementos padres.
- **Propiedades de estilo explícitas**: Aquellas que se aplican directamente al elemento, como `background-color` o `font-size`.
- **Propiedades generadas por el navegador**: Por ejemplo, el navegador puede añadir propiedades para ajustar el diseño, como los márgenes automáticos de los elementos flexibles o de grid.

### 2. Desglosar la Propiedad

Al hacer clic en una propiedad calculada, puedes ver una descripción más detallada de cómo se calculó. Esto te permite comprender el origen de cada valor y cómo las reglas de cascada, la herencia y las reglas específicas afectan a ese valor final.

### 3. Filtros y Búsqueda

Puedes usar el campo de búsqueda del panel para encontrar rápidamente una propiedad específica dentro de las propiedades calculadas. Esto es útil cuando hay muchas reglas y necesitas localizar rápidamente una propiedad en particular.

---

## ¿Por qué es útil el Panel Computado?

- **Depuración de estilo**: Si un estilo no se aplica como esperas, el Panel Computado te permite ver cómo se calcula el valor final de una propiedad CSS y qué reglas se aplican a ella.
- **Entender la cascada de CSS**: El panel te muestra cómo el navegador resuelve las reglas de estilo en función de la **cascada**, la **herencia** y las **reglas de especificidad**. Esto es clave para comprender cómo se aplica el estilo final a un elemento.
- **Optimización de estilos**: A veces, las propiedades computadas pueden revelar reglas de estilo innecesarias o contradictorias. Puedes usar esta información para limpiar y optimizar tu CSS.

---

## Consejos y Trucos

- 🔍 **Usa la búsqueda**: Si tienes muchos estilos aplicados a un elemento, usa el campo de búsqueda para encontrar rápidamente una propiedad en particular, como `color` o `margin`.
- 📐 **Ver cómo se aplican las reglas de cascada**: Si un estilo no se aplica como esperas, observa cómo se resuelven las reglas CSS en el Panel Computado. Te ayudará a entender qué regla está sobrescribiendo a otra.
- 🧑‍💻 **Revisar valores heredados**: A veces, un problema de estilo es causado por una propiedad heredada de un elemento padre. El Panel Computado te permite ver estas propiedades heredadas y asegurarte de que se están aplicando correctamente.

---

## Ejemplo práctico

Supongamos que tienes un elemento `<div>` con un fondo de color que no se muestra correctamente, aunque en el archivo CSS está definido. Puedes hacer lo siguiente:

1. Abre el **Panel Computado**.
2. Haz clic en el elemento `<div>` en la página.
3. En el panel, busca la propiedad `background-color`.
4. Verifica si el valor final de `background-color` es el esperado, y si no es así, revisa qué reglas están sobrescribiendo ese estilo.

---

## Atajos útiles

- `Ctrl + Shift + I` (o `Cmd + Option + I` en macOS): **Abrir las herramientas de desarrollo**.
- `Ctrl + Shift + C` (o `Cmd + Shift + C` en macOS): **Seleccionar un elemento en la página para inspeccionarlo**.
- `Ctrl + F` (o `Cmd + F` en macOS): **Buscar una propiedad dentro del panel Computado**.

