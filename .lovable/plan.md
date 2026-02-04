
# Plan: FAQs Optimizados con Categorias y Correccion de Informacion

## Resumen

Reorganizar las preguntas frecuentes en 4 categorias navegables con tabs, corregir informacion erronea (aseguradoras, email, ubicacion) y optimizar el contenido para conversion basado en los 30 puntos oficiales de FinDolor.

---

## Problemas Identificados y Correcciones

### Informacion Erronea Actual

| Componente | Problema | Correccion |
|------------|----------|------------|
| FAQSection (linea 28, 33) | Menciona "convenios con aseguradoras y EPS" | Cambiar a "Modalidad particular. No gestionamos tramites con aseguradoras" |
| FAQSection (linea 38) | Menciona "carne de aseguradora o EPS" | Eliminar referencia a aseguradoras |
| FAQSection (linea 64) | Direccion vaga "Bogota con facil acceso" | Direccion exacta: Carrera 16 # 97-46, Torre 97, Torre 2, Cons. 705-706 |
| Footer (linea 120) | Email info@findolor.com | Cambiar a administracion@findolor.com |
| CTASection (linea 53) | Solo dice "Bogota, Colombia" | Agregar direccion completa |

---

## Estructura de FAQs por Categorias

Usar Tabs de Radix UI para navegacion visual entre categorias:

```text
+------------------+------------------+------------------+------------------+
|     CITAS        |    SERVICIOS     |  PROCEDIMIENTOS  |    UBICACION     |
+------------------+------------------+------------------+------------------+
         |
         v
   [Preguntas de la categoria seleccionada]
```

---

## Contenido de Cada Categoria (12 FAQs Optimizados)

### Tab 1: Citas (3 preguntas)

1. **Puedo agendar sin remision?**
   - Si, puedes agendar valoracion inicial directamente

2. **Como agendo una cita?**
   - Telefono/WhatsApp (318 691 2799), fijo (601 673 6707) o formulario web

3. **Cual es la politica de cancelacion?**
   - 24 horas de aviso para reprogramar sin cargos

### Tab 2: Servicios (4 preguntas)

4. **Que tipos de dolor tratan?**
   - Musculoesqueletico, neuropatico, postquirurgico, oncologico, cefaleas, lumbalgia, lesiones deportivas

5. **Que especialidades conforman el equipo?**
   - Medicina del dolor, anestesiologia, psicologia y rehabilitacion

6. **Ofrecen telemedicina?**
   - Si, para seguimiento y casos que no requieran examen fisico presencial

7. **Que es el programa Paciente Experto?**
   - Programa que empodera a pacientes que culminaron tratamiento para ser testimonio y guia de otros

### Tab 3: Procedimientos (3 preguntas)

8. **Realizan procedimientos intervencionistas?**
   - Si: bloqueos, infiltraciones guiadas, radiofrecuencia, neuromodulacion

9. **Requieren hospitalizacion?**
   - La mayoria son ambulatorios; entregamos instrucciones de preparacion y cuidados

10. **Cuando vere mejoria?**
    - Depende del diagnostico; la mejoria es progresiva y se evalua en controles

### Tab 4: Ubicacion y Pagos (2 preguntas)

11. **Donde estan ubicados?**
    - Carrera 16 # 97-46, Edificio Torre 97, Torre 2, Consultorios 705-706, Bogota
    - Parqueadero en la zona, accesibilidad para movilidad reducida

12. **Atienden por aseguradora o particular?**
    - Modalidad particular. No gestionamos tramites con aseguradoras ni reembolsos
    - Medios de pago: efectivo, tarjetas y transferencia

---

## Cambios por Archivo

### 1. `src/components/FAQSection.tsx` (Cambio Principal)

**Transformacion completa:**
- Importar Tabs de Radix UI
- Crear estructura de datos con categorias
- Renderizar tabs navegables con preguntas por categoria
- Animaciones Framer Motion por tab

**Estructura de datos propuesta:**

```typescript
const faqCategories = [
  {
    id: "citas",
    label: "Citas",
    icon: Calendar,
    faqs: [
      { question: "...", answer: "..." },
      // ...
    ]
  },
  {
    id: "servicios",
    label: "Servicios", 
    icon: Stethoscope,
    faqs: [...]
  },
  // ...
];
```

### 2. `src/components/Footer.tsx`

- Linea 120: Cambiar email de `info@findolor.com` a `administracion@findolor.com`

### 3. `src/components/CTASection.tsx`

- Lineas 52-53: Agregar direccion completa en lugar de solo "Bogota, Colombia"

---

## Diseno Visual de Tabs

```text
[ Citas ]  [ Servicios ]  [ Procedimientos ]  [ Ubicacion ]
     ^
  Activo: fondo primary, texto blanco
  Inactivo: fondo muted, texto gris

+--------------------------------------------------------+
| (icon) Pregunta frecuente de la categoria?       [v]   |
+--------------------------------------------------------+
| Respuesta expandible con informacion detallada         |
+--------------------------------------------------------+
```

---

## Beneficios de la Nueva Estructura

1. **Navegacion clara**: Usuario encuentra rapidamente lo que busca
2. **Reduccion de friccion**: Menos scroll, informacion organizada
3. **SEO mejorado**: Contenido estructurado por temas
4. **Informacion correcta**: Sin referencias a aseguradoras, datos de contacto actualizados
5. **Diferenciador**: Programa Paciente Experto visible

---

## Archivos a Modificar

| Archivo | Tipo de Cambio |
|---------|----------------|
| `src/components/FAQSection.tsx` | Reescritura con Tabs + nuevo contenido |
| `src/components/Footer.tsx` | Correccion email (1 linea) |
| `src/components/CTASection.tsx` | Agregar direccion completa |

