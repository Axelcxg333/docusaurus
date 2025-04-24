---
id: panel-red
title: Panel de Red
sidebar_label: Red
---

## ¿Qué es el Panel de Red?

El **Panel de Red** (Network) en las herramientas de desarrollo permite ver todas las solicitudes HTTP (como **GET**, **POST**, etc.) realizadas por el navegador al cargar una página web. Aquí podrás examinar los recursos solicitados por el navegador, como **imágenes**, **archivos CSS**, **JavaScript** y más.

Este panel es crucial para diagnosticar problemas relacionados con la carga de recursos y para verificar que todos los elementos de una página se estén cargando correctamente.

## Funciones Principales

### 1. Ver las Solicitudes de Red

El panel de Red muestra todas las solicitudes de red realizadas durante la carga de la página. Esto incluye:
- **Solicitudes de imágenes**: Como las imágenes `.jpg`, `.png`, etc.
- **Archivos CSS y JS**: Los estilos y scripts cargados en la página.
- **Solicitudes de datos**: Como las solicitudes **AJAX** que obtienen datos de un servidor.

Puedes hacer clic en cada solicitud para obtener más detalles, como los encabezados de la solicitud y la respuesta, el código de estado HTTP (por ejemplo, 200 OK), y el tiempo que tardó en cargarse.

### 2. Inspeccionar el Tiempo de Carga

El Panel de Red muestra el **tiempo de carga** de cada recurso. Esto te ayuda a identificar cuáles recursos están tardando más en cargar y si hay algún cuello de botella en el rendimiento de la página.

Además, puedes ver el **tamaño** de cada solicitud y el **tiempo total de carga** de todos los recursos en la página.

### 3. Filtrar las Solicitudes

Puedes filtrar las solicitudes para ver solo ciertos tipos de recursos, como:
- **Imágenes**: Muestra solo las imágenes solicitadas.
- **Documentos**: Muestra los archivos HTML o XML.
- **JavaScript/CSS**: Muestra solo los archivos de script o estilo.

### 4. Ver Detalles de las Solicitudes

Al hacer clic en una solicitud específica, podrás ver detalles adicionales como:
- **Encabezados de solicitud y respuesta**: Ver los encabezados enviados y recibidos durante la solicitud.
- **Respuesta de la solicitud**: Examina el cuerpo de la respuesta, como el contenido HTML, JSON o XML que se devolvió.
- **Cookies**: Observa las cookies asociadas con esa solicitud.

---

## ¿Por qué es útil el Panel de Red?

- **Diagnóstico de errores**: Si un recurso como una imagen o un archivo JavaScript no se carga correctamente, el Panel de Red te ayuda a ver qué está fallando, ya sea por un error en la solicitud o por un recurso faltante.
- **Optimización de rendimiento**: Puedes identificar los recursos que están tardando mucho en cargarse y optimizar el rendimiento de la página.
- **Monitoreo de solicitudes**: Ayuda a monitorear el tráfico de red mientras se realiza una acción en la página, como hacer clic en un botón o enviar un formulario.

---

## Consejos y Trucos

- 🔍 **Revisar los códigos de estado HTTP**: Los códigos de estado como **404 (No encontrado)** o **500 (Error interno del servidor)** pueden indicarte problemas con las solicitudes de recursos.
- ⏱️ **Analizar el tiempo de carga**: Si una página tarda demasiado en cargarse, examina los tiempos de carga de los recursos para identificar los más lentos.
- 📂 **Ver el cuerpo de la respuesta**: A veces, puede ser útil ver directamente el contenido de la respuesta de una solicitud (como un archivo JSON o una página HTML) para comprender qué está devolviendo el servidor.

---

## Ejemplo práctico

Supón que estás construyendo una página web y quieres asegurarte de que todos los archivos JavaScript y las imágenes se están cargando correctamente. 

1. Abre el **Panel de Red** en las herramientas de desarrollo.
2. Recarga la página.
3. Observa las solicitudes realizadas mientras la página se carga.
4. Haz clic en una solicitud de una imagen y verifica su **código de estado HTTP**. Si tiene un código 404, significa que la imagen no se encuentra en el servidor y debes corregir la ruta.
5. Analiza los tiempos de carga de los archivos JavaScript para ver si alguno está tardando demasiado en cargarse.

---

## Atajos útiles

- `Ctrl + Shift + E` (o `Cmd + Option + E` en macOS): **Abrir el panel de Red** directamente.
- `Ctrl + R` (o `Cmd + R` en macOS): **Recargar la página** y ver nuevamente las solicitudes de red.

---

> **Recuerda**: El Panel de Red es una herramienta clave para optimizar el rendimiento de tu página web. Asegúrate de usarla para revisar cómo los recursos de tu página afectan su velocidad de carga.
