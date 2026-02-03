
# Plan: Ajustar iframe del calendario para PC y móvil

## Problema identificado

El calendario GHL se corta en la parte inferior porque:
1. La altura mínima del iframe (550px) es insuficiente para el contenido completo
2. El atributo `scrolling="no"` impide el scroll interno
3. El drawer tiene `max-h-[90vh]` que limita el espacio disponible

## Solución

Ajustar los estilos del iframe y drawer para que el calendario se muestre correctamente en ambos dispositivos.

---

## Cambios a realizar

### Archivo: `src/components/BookingCalendar.tsx`

**1. Aumentar altura del drawer y habilitar scroll interno:**

```text
Cambios en DrawerContent:
- De: max-h-[90vh]
- A: h-[95vh] (ocupa casi toda la pantalla)
```

**2. Ajustar estilos del iframe para ser responsive:**

```text
Cambios en los estilos del iframe:
- Aumentar min-height a 700px para PC
- Usar altura dinámica con calc() para móvil
- Permitir scrolling dentro del iframe
- Añadir media queries para móvil
```

**3. Cambiar atributo scrolling del iframe:**

```text
- De: scrolling="no"
- A: (sin atributo o scrolling="yes")
```

---

## Estilos responsive propuestos

```css
.booking-calendar-wrapper iframe {
  width: 100%;
  min-height: 700px;
  height: calc(95vh - 120px);
  border: none;
  border-radius: 12px;
  background: white;
}

@media (max-width: 768px) {
  .booking-calendar-wrapper iframe {
    min-height: 600px;
    height: calc(90vh - 100px);
    border-radius: 8px;
  }
}
```

---

## Resumen de cambios

| Aspecto | Antes | Después |
|---------|-------|---------|
| Altura drawer | max-h-[90vh] | h-[95vh] |
| Min-height iframe | 550px | 700px (PC), 600px (móvil) |
| Scrolling iframe | no | sí (por defecto) |
| Altura dinámica | No | Sí, con calc() |

---

## Sección técnica

### Archivo a modificar

`src/components/BookingCalendar.tsx`

### Cambios específicos

1. **Línea 138**: Cambiar clase del DrawerContent de `max-h-[90vh]` a `h-[95vh]`

2. **Líneas 152-160**: Reemplazar los estilos inline del iframe con media queries responsive

3. **Líneas 161-166**: Remover atributo `scrolling="no"` del iframe para permitir scroll interno

### Consideraciones GHL

El widget de GoHighLevel tiene altura variable dependiendo del contenido mostrado (días del mes, slots disponibles, formulario de confirmación). Permitir scroll y aumentar la altura garantiza que todo el contenido sea visible y accesible.
