

# Plan: Ajustes al Formulario, Trust Badges, VideoSection y Calificacion Google

## Lista de Cambios

### 1. Formulario (`MultiStepForm.tsx`)
- **Eliminar subtitulo "Selecciona tu forma de pago"** de la linea 212-213 en el paso 2
- **Hacer las coberturas mas compactas**: reducir el padding de `p-4` a `p-2.5`, usar un grid de 2 columnas en vez de una lista vertical para que ocupe menos espacio
- **Cambiar texto de confirmacion** (paso 4, linea 328): de "Confirma tus datos para agendar" a "Confirma tus datos para que te contactemos tan pronto como sea posible"

### 2. Trust Badges (`TrustBadges.tsx`)
- **Cambiar "Medicos Verificados"** por "Medicos especializados" (linea 19)

### 3. Calificacion de Google (recomendacion)
- **No agregar el 3.7/5** de forma prominente. Una calificacion de 3.7 puede generar desconfianza en lugar de reforzar credibilidad. Se recomienda:
  - Eliminar la estadistica "4.9/5 Calificacion en Google" que aparece actualmente en `SocialProofV2.tsx` (linea 48), ya que es incorrecta
  - Reemplazarla por otra metrica de valor como "500+" pacientes atendidos o simplemente eliminarla
  - Mantener las resenas individuales (que son de 4 y 5 estrellas) sin mostrar el promedio general

### 4. VideoSection (`VideoSection.tsx`)
- **Reemplazar el parrafo descriptivo** (lineas 91-95) por: "Integramos valoracion clinica, diagnostico y un plan de tratamiento personalizado para cada paciente. Priorizamos opciones seguras y minimamente invasivas, con acompanamiento cercano durante todo el proceso:"
- **Reemplazar los 4 beneficios** (lineas 6-11) por:
  - Valoracion medica integral (historia clinica, examen y definicion del plan)
  - Opciones de tratamiento minimamente invasivas segun cada caso
  - Seguimiento continuo y personalizado durante tu evolucion
  - Atencion especializada y coordinada entre las areas de dolor y cuidados paliativos

---

## Detalle Tecnico

### Coberturas compactas (paso 2 del formulario)

El diseno actual usa botones de ancho completo apilados verticalmente con `p-4`, lo cual hace que el formulario se vea largo. Se cambiara a:

```text
Antes (vertical, 6 filas):
[Particular          ]
[Allianz             ]
[Seguros Bolivar     ]
[Seguros Alfa        ]
[Sura                ]
[Otro                ]

Despues (grid 2 columnas, 3 filas):
[Particular] [Allianz        ]
[Seg.Bolivar] [Seguros Alfa  ]
[Sura       ] [Otro          ]
```

Se reduce el padding a `p-2.5` y se usa `grid grid-cols-2 gap-2` para compactar visualmente.

### Calificacion Google - Justificacion

Una calificacion de 3.7/5 esta por debajo del umbral psicologico de confianza (generalmente 4.0+). Mostrarla podria ser contraproducente. En su lugar, se eliminara el "4.9/5" incorrecto del `SocialProofV2` y se reemplazara por una metrica mas neutral como "500+ Pacientes atendidos".

### Archivos a modificar
1. `src/components/MultiStepForm.tsx` - Formulario compacto y texto de confirmacion
2. `src/components/TrustBadges.tsx` - Cambiar "Verificados" por "especializados"
3. `src/components/SocialProofV2.tsx` - Corregir/eliminar calificacion falsa
4. `src/components/VideoSection.tsx` - Nuevo texto descriptivo y beneficios

