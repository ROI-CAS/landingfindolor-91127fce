

## Plan: Página de Gracias + Redirección post-formulario para medir conversiones

### Objetivo
Crear una página `/gracias` dedicada para rastrear conversiones en Google Ads. Al enviar el formulario multi-paso, el usuario será redirigido a esta página donde se disparará el evento de conversión.

### Cambios

**1. Nueva página `src/pages/Gracias.tsx`**
- Diseño limpio con logo Findolor, icono de confirmacion, mensaje de agradecimiento
- Resumen de lo que sucederá: "Te contactaremos pronto"
- Datos de contacto (teléfonos) por si quieren llamar directamente
- Script de conversión de Google Ads que se dispara automáticamente al cargar la página (via `gtag('event', 'conversion', ...)`)
- Botón para volver al inicio
- Sin header sticky ni elementos de navegación innecesarios

**2. Agregar snippet de conversión en `index.html`**
- Añadir un nuevo snippet de conversión para formulario enviado (distinto al de llamadas) o reutilizar gtag existente. Se usará `gtag('event', 'conversion', {...})` directamente en la página de gracias.

**3. Modificar `src/components/MultiStepForm.tsx`**
- En `handleSubmit`, después de `registrarConsulta()`, usar `useNavigate()` de react-router-dom para redirigir a `/gracias`
- Eliminar el estado `isSubmitted` y el bloque de confirmación inline (ya no se necesita, la confirmación será la página de gracias)

**4. Registrar ruta en `src/App.tsx`**
- Agregar `<Route path="/gracias" element={<Gracias />} />` antes del catch-all

### Detalle de la página de Gracias

```text
┌─────────────────────────────┐
│        Logo Findolor         │
│                              │
│      ✅ (icono grande)       │
│                              │
│  ¡Gracias por tu solicitud!  │
│                              │
│  Nuestro equipo se pondrá    │
│  en contacto contigo pronto  │
│  para confirmar tu cita.     │
│                              │
│  📞 318 691 2799             │
│  📞 601 673 6707             │
│                              │
│  [ Volver al inicio ]        │
└─────────────────────────────┘
```

### Tracking de conversión
- Se añadirá un `useEffect` en la página de Gracias que dispare `gtag('event', 'conversion', { send_to: '...' })` al montar el componente
- Esto permitirá medir en Google Ads cuántos usuarios completan el formulario

