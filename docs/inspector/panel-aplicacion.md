---
id: panel-aplicacion
title: Panel de Aplicación
sidebar_label: Aplicación
---

## ¿Qué es el Panel de Aplicación?

El **Panel de Aplicación** permite inspeccionar y administrar los **almacenes de datos del navegador** que están disponibles en la página web, como las **cookies**, el **almacenamiento local** (localStorage), el **almacenamiento de sesión** (sessionStorage), y los **Service Workers**. Esta herramienta es útil para verificar cómo una aplicación web maneja la persistencia de datos y cómo interactúa con el almacenamiento del navegador.

## Funciones Principales

### 1. Ver y Modificar las Cookies

En el panel de **Cookies**, puedes ver todas las cookies que la página ha establecido en el navegador. Esto es útil para depurar problemas relacionados con la sesión del usuario o la autenticación.

- **Detalles**: Cada cookie incluye información como su nombre, valor, dominio, fecha de expiración, y más.
- **Modificar**: Puedes agregar, editar o eliminar cookies directamente desde el panel para simular diferentes escenarios o realizar pruebas.

### 2. Almacenamiento Local y de Sesión

El almacenamiento local (`localStorage`) y el almacenamiento de sesión (`sessionStorage`) permiten que las aplicaciones web guarden datos persistentes en el navegador.

- **localStorage**: Los datos almacenados aquí no tienen fecha de expiración y permanecen disponibles incluso después de que el navegador se cierre.
- **sessionStorage**: Los datos almacenados en sesión solo están disponibles durante la sesión del navegador (es decir, hasta que se cierra la ventana o pestaña).

### 3. Ver los Service Workers

Los **Service Workers** son scripts que el navegador ejecuta en segundo plano, independientes de la página web, y pueden ser usados para interceptar y gestionar solicitudes de red. El panel de **Service Workers** te permite ver si la página está utilizando esta tecnología y gestionar su caché.

- **Caché**: Ver y administrar la caché de los Service Workers, lo que es útil para aplicaciones progresivas (PWA).
- **Registros**: Ver si el Service Worker está activo y gestionando las solicitudes correctamente.

### 4. Inspeccionar las Aplicaciones de PWA

Si la página web es una **Aplicación Web Progresiva (PWA)**, el panel de aplicación te permitirá ver detalles sobre la instalación de la PWA, sus manifiestos y la caché.

---

## ¿Por qué es útil el Panel de Aplicación?

- **Gestión de datos de usuario**: Puedes inspeccionar y modificar las cookies y otros datos almacenados para asegurarte de que la aplicación maneja correctamente la persistencia de datos.
- **Depuración de sesiones**: Si un usuario tiene problemas con la autenticación o la persistencia de datos, puedes revisar las cookies y el almacenamiento para ver si los datos se están guardando correctamente.
- **Optimización de PWA**: Si tu página web es una PWA, este panel es clave para gestionar el almacenamiento en caché y los Service Workers, lo que mejora la experiencia del usuario.

---

## Consejos y Trucos

- 🍪 **Modificar cookies**: Si deseas probar cómo reaccionaría tu aplicación web ante un cambio en la sesión del usuario, puedes editar las cookies directamente desde este panel.
- 🗑️ **Limpiar almacenamiento**: Si necesitas restablecer los datos almacenados, puedes eliminar fácilmente las cookies o el almacenamiento local directamente desde el panel.
- 🔄 **Probar Service Workers**: Si estás trabajando con Service Workers, puedes comprobar su estado y asegurarte de que se están registrando y funcionando correctamente en el navegador.

---

## Ejemplo práctico

Supón que tu aplicación web usa cookies para autenticar a los usuarios. Quieres probar cómo se comporta la página si se elimina la cookie de autenticación. Puedes hacer lo siguiente:

1. Abre el **Panel de Aplicación** y selecciona la opción **Cookies**.
2. Localiza la cookie de autenticación en el listado y haz clic en ella.
3. Elimina la cookie o cambia su valor.
4. Recarga la página para ver cómo la aplicación reacciona a la ausencia o cambio de la cookie (por ejemplo, puede redirigir al usuario a la página de inicio de sesión).

---

## Atajos útiles

- `Ctrl + Shift + I` (o `Cmd + Option + I` en macOS): Abre las herramientas de desarrollo.
- `Ctrl + Shift + F` (o `Cmd + Shift + F` en macOS): Abre la búsqueda de archivos dentro de las herramientas de desarrollo para localizar rápidamente la aplicación en el panel de **Aplicación**.



