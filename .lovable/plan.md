

# Plan: Ajustes al Hero y Formulario

## Lista de Cambios

### En `src/components/HeroV2.tsx`

1. **Eliminar "4.9/5 en Google Reviews"** del header superior (lineas 45-48)
2. **Cambiar titulo** de "Especialistas en Manejo del Dolor" a "Especialistas en el **Manejo del Dolor Cronico y Cuidados Paliativos**"
3. **Cambiar descripcion** por el nuevo texto de IPS con formato adecuado (separado en frases claras)
4. **Cambiar "Medicos certificados"** por "Medicos especialistas en tratamiento del dolor cronico"
5. **Cambiar "Respuesta en menos de 2 horas"** por "Respuesta oportuna"
6. **Eliminar import de Star** (ya no se usa)

### En `src/components/MultiStepForm.tsx`

7. **Reemplazar iconos emoji** por iconos Lucide premium/sofisticados:
   - Medicina del dolor: `Heart` o `Activity` (monitor medico)
   - Cuidados paliativos: `HandHeart` o `HeartHandshake`
   - Anestesia: `Syringe`
8. **Cambiar titulo paso 2** de "Como pagaras tu consulta?" a "Selecciona tu cobertura"
9. **Quitar etiqueta "Sin esperas"** de la opcion Particular
10. **Agregar opcion "Otro: especifica"** al listado de entidades con un campo de texto condicional que aparece al seleccionarla

---

## Detalle Tecnico

### Iconos premium para especialidades (paso 1)

Se reemplazaran los emojis por iconos Lucide con un estilo mas refinado dentro de circulos con fondo degradado:

```text
Antes:  💊 Medicina del dolor   🤲 Cuidados paliativos   💉 Anestesia
Despues: Activity (icono)       HeartHandshake (icono)   Syringe (icono)
```

Los iconos se renderizaran dentro de un contenedor circular con fondo `bg-primary/10` y color `text-primary`, cambiando a `bg-primary text-white` cuando esten seleccionados.

### Campo "Otro" en entidades (paso 2)

Se agrega una nueva opcion al array de entidades:
- `{ id: "otro", label: "Otro" }`

Cuando el usuario seleccione "Otro", aparecera un campo de texto debajo para que especifique su cobertura. Se agregara un campo `entidadOtra` al estado del formulario.

### Formato del texto descriptivo del Hero

El texto largo se formateara con saltos visuales claros:

> IPS especializada en dolor cronico y cuidados paliativos en Bogota. En FinDolor realizamos valoracion medica, diagnostico y tratamiento con enfoque integral, combinando estrategias farmacologicas e intervencionistas segun cada paciente. Acompanamos de forma cercana y segura a pacientes y familias durante todo el proceso.

Se ajustara el `max-w` para que el texto no quede demasiado estrecho y se usara un tamano de fuente ligeramente menor (`text-base md:text-lg`) para que fluya mejor visualmente.

