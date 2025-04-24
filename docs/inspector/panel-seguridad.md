---
id: panel-seguridad
title: Panel de Seguridad
sidebar_label: Seguridad
---

## ¿Qué es el Panel de Seguridad?

El **Panel de Seguridad** en DevTools proporciona una visión general del estado de seguridad de la página web actual, especialmente útil para verificar conexiones HTTPS, certificados SSL y recursos bloqueados o inseguros.

Es esencial para desarrolladores que desean garantizar que sus sitios web sean seguros y estén correctamente configurados para proteger a los usuarios.

---

## ¿Dónde se encuentra?

1. Abre las DevTools (`F12` o clic derecho → Inspeccionar).
2. Haz clic en la pestaña **"Security" (Seguridad)** en la parte superior.
   - Si no aparece, actívala desde el menú **⋮ > More tools > Security**.

---

## ¿Qué información muestra?

- 🔒 **Estado de conexión**: Indica si la conexión es segura o no.
- 📜 **Certificado TLS/SSL**: Muestra detalles del certificado, como:
  - Emisor
  - Vigencia
  - Propietario
- 📦 **Recursos mixtos**: Advierte si la página carga recursos no seguros (HTTP) dentro de una conexión HTTPS.
- 🌍 **Origen de los recursos**: Permite ver los dominios desde donde se están cargando los recursos.

---

## Casos de uso

- ✅ Verificar que tu sitio esté completamente servido mediante HTTPS.
- 🚨 Identificar y solucionar problemas con contenido mixto.
- 🔐 Asegurarte de que los certificados estén correctamente configurados y no hayan expirado.
- 🧪 Validar integridad de subrecursos y políticas de seguridad.

---

## Consejos

- Si ves un ícono de advertencia o error en este panel, **haz clic para obtener más detalles** y solucionarlo cuanto antes.
- Una buena configuración de seguridad también implica revisar **cabeceras HTTP** (como `Strict-Transport-Security`), que puedes inspeccionar desde la pestaña **Network**.

---

> Un sitio seguro no solo protege al usuario, también mejora la confianza, posicionamiento SEO y compatibilidad con funcionalidades modernas del navegador.
