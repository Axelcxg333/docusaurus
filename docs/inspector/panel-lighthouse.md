---
id: panel-lighthouse
title: Panel Lighthouse
sidebar_label: Lighthouse
---

## ¿Qué es el Panel Lighthouse?

El **Panel Lighthouse** es una herramienta automatizada de auditoría incluida en las DevTools del navegador (principalmente Chrome), diseñada para ayudarte a mejorar la calidad de tus sitios web. Realiza análisis sobre rendimiento, accesibilidad, SEO, buenas prácticas y compatibilidad con aplicaciones web progresivas (PWA).

Fue creado por Google y es utilizado tanto por desarrolladores como por equipos de UX para evaluar y optimizar la experiencia del usuario.

---

## ¿Qué analiza Lighthouse?

Cuando ejecutas una auditoría con Lighthouse, obtienes una puntuación del 0 al 100 en los siguientes aspectos:

- **Rendimiento (Performance)**: analiza el tiempo de carga y la velocidad general.
- **Accesibilidad (Accessibility)**: verifica si el contenido puede ser accedido fácilmente por todos los usuarios.
- **Buenas prácticas (Best Practices)**: evalúa errores comunes de seguridad y desarrollo.
- **SEO**: comprueba si el sitio está optimizado para buscadores.
- **PWA**: indica si el sitio cumple con los requisitos de una aplicación web progresiva.

---

## ¿Cómo se usa?

1. Abre las herramientas de desarrollo (F12 o clic derecho → Inspeccionar).
2. Ve a la pestaña **"Lighthouse"**.
3. Selecciona las categorías que deseas auditar.
4. Elige el tipo de dispositivo (móvil o escritorio).
5. Haz clic en **"Generate report"**.

Después de unos segundos, verás un informe detallado con puntuaciones y recomendaciones prácticas.

---

## ¿Qué puedes hacer con el informe?

Cada sección del informe incluye:

- ✅ Recomendaciones claras y accionables.
- 📉 Estadísticas y gráficos sobre el rendimiento de tu sitio.
- 📌 Links a documentación oficial para solucionar problemas detectados.

Además, puedes:

- Descargar el informe en HTML o JSON.
- Compartir el informe con otros miembros de tu equipo.
- Usarlo como base para un plan de mejora del sitio.

---

## Casos de uso comunes

- 🔍 Detectar cuellos de botella en la carga inicial de una web.
- ♿ Verificar que tu sitio sea accesible para usuarios con discapacidades.
- 📈 Mejorar el posicionamiento SEO detectando errores técnicos.
- 📱 Evaluar si tu sitio es apto como PWA y compatible con dispositivos móviles.

---

## Consejos prácticos

- Ejecuta Lighthouse **en modo incógnito** para evitar extensiones que alteren los resultados.
- Realiza la auditoría en un entorno limpio y sin procesos en segundo plano.
- Usa Lighthouse junto con otras herramientas como PageSpeed Insights para una evaluación más completa.
- Realiza auditorías periódicas mientras desarrollas nuevas funcionalidades.

---

## Alternativas y versiones

Lighthouse también se puede utilizar:

- Desde la línea de comandos (`npm install -g lighthouse`).
- Como una API web mediante [PageSpeed Insights](https://pagespeed.web.dev/).
- Integrado en procesos de CI/CD para controlar la calidad del sitio automáticamente.

---

> Lighthouse es una herramienta fundamental para **mejorar la experiencia del usuario**, **aumentar el rendimiento** y **garantizar que tu sitio siga buenas prácticas de desarrollo web**.
