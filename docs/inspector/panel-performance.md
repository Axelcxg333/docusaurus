---
id: panel-performance
title: Panel de Rendimiento
sidebar_label: Rendimiento
---

## ¿Qué es el Panel de Rendimiento?

El **Panel de Rendimiento** te permite analizar y optimizar el rendimiento de tu página web. Muestra información detallada sobre cómo se cargan y ejecutan los recursos, cómo interactúan con el navegador y cómo afectan la experiencia del usuario. Puedes medir el tiempo de carga, identificar cuellos de botella y entender cómo se comporta tu página bajo diferentes condiciones.

Este panel es crucial para mejorar la **velocidad de carga** de tu sitio web y asegurar una experiencia de usuario fluida.

## Funciones Principales

### 1. Medición del Tiempo de Carga

El **Panel de Rendimiento** te muestra cómo se carga una página web, desde el momento en que se realiza la solicitud hasta que se visualiza completamente en el navegador. Algunos de los tiempos clave que se muestran son:

- **Tiempo de carga (Load Time)**: El tiempo total que tarda la página en cargarse completamente.
- **First Paint (FP)**: El primer momento en que el navegador muestra algo en la pantalla.
- **First Contentful Paint (FCP)**: El primer momento en que el navegador muestra contenido significativo en la pantalla (no solo el fondo).
- **Largest Contentful Paint (LCP)**: El tiempo que tarda el contenido más grande de la página en ser visible.

### 2. Grabación de la Actividad

El panel también te permite grabar la actividad de la página durante un período de tiempo. Esto te da una **captura detallada** de las interacciones del usuario, como clics, desplazamientos y cambios en el DOM (Document Object Model).

- **Análisis de Eventos**: Puedes ver qué elementos están siendo interactuados por el usuario y cómo estos afectan el rendimiento.
- **Tiempos de Respuesta**: Te permite ver cómo las acciones del usuario afectan la rapidez con que se responde la página, como las interacciones con botones o formularios.

### 3. Identificación de Cuellos de Botella

Con el panel de rendimiento, puedes identificar los **cuellos de botella** que están ralentizando la página. Esto incluye:

- **Scripts JavaScript Lentos**: Si hay algún script que tarda mucho en ejecutarse, se muestra en el panel para que puedas optimizarlo.
- **Solicitudes de Red**: El panel muestra las solicitudes de red y su tiempo de respuesta, permitiéndote identificar si algún recurso está tardando más de lo esperado en cargarse.
- **Recursos Bloqueadores de Renderizado**: Algunos recursos como hojas de estilo y scripts pueden bloquear el renderizado de la página, lo que retrasa la visualización del contenido.

---

## ¿Por qué es útil el Panel de Rendimiento?

- **Optimizar la carga de la página**: Puedes usar el panel para detectar elementos que ralentizan el tiempo de carga de tu página y realizar los cambios necesarios para acelerar el proceso.
- **Medir la experiencia del usuario**: El rendimiento afecta directamente la experiencia del usuario. Si tu página carga lentamente, los usuarios podrían abandonar tu sitio antes de que se cargue por completo.
- **Identificar cuellos de botella**: Detectar problemas de rendimiento, como scripts lentos o recursos bloqueadores, te ayuda a optimizar tu página y garantizar que funcione de manera eficiente.

---

## Consejos y Trucos

- 🚀 **Optimiza tus imágenes**: Las imágenes grandes pueden ralentizar la carga de la página. Asegúrate de que las imágenes estén optimizadas para la web y utiliza formatos modernos como WebP.
- 🧑‍💻 **Evita los scripts bloqueadores de renderizado**: Trata de cargar tus scripts de JavaScript de forma asíncrona para evitar que bloqueen el renderizado de la página.
- ⏳ **Usa el Lazy Loading**: Implementa el **lazy loading** de imágenes y recursos para cargar solo los elementos que son visibles en la pantalla del usuario.
- ⚙️ **Divide los archivos JavaScript**: Si tienes archivos JavaScript muy grandes, considera dividirlos para cargarlos de manera progresiva.

---

## Ejemplo práctico

Imagina que tu página web tarda demasiado en cargar y has notado que los usuarios abandonan la página antes de que se muestre completamente.

1. Abre el **Panel de Rendimiento** en las herramientas de desarrollo.
2. Inicia una grabación de rendimiento y recarga la página.
3. Revisa el gráfico de **Timeline** para ver qué recursos están tomando más tiempo.
4. Si notas que un script está ralentizando la página, intenta optimizarlo o cargarlo de manera asíncrona para mejorar el rendimiento.

---

## Atajos útiles

- `Ctrl + Shift + I` (o `Cmd + Option + I` en macOS): **Abrir las herramientas de desarrollo**.
- `Ctrl + Shift + E` (o `Cmd + Shift + E` en macOS): **Acceder directamente al Panel de Rendimiento**.

---

> **Recuerda**: Un buen rendimiento es clave para una excelente experiencia de usuario. Utiliza el panel de rendimiento para identificar y solucionar problemas de carga y ejecución, lo que hará que tu sitio web sea más rápido y eficiente.
