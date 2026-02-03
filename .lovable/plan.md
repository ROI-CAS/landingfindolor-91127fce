
# Plan: Formulario con Tracking + Tabs para Autoagendar

## Resumen

Implementar un sistema de doble opcion de agendamiento en la seccion "Agenda Tu Cita" con:
1. Formulario visible por defecto (identico al del Hero pero con tracking diferenciado)
2. Opcion de autoagendarse mediante calendario en drawer

---

## Estructura Visual

```text
+--------------------------------------------------+
|              Agenda Tu Cita Ahora                |
|    Elige como prefieres agendar tu valoracion    |
+--------------------------------------------------+
|                                                  |
|  [ Te llamamos ]  [ Prefiero elegir mi horario ] |
|       (activo)           (inactivo)              |
+--------------------------------------------------+
|                                                  |
|  Tab 1 (visible por defecto):                    |
|  +--------------------------------------------+  |
|  |         MultiStepForm                      |  |
|  |         formSource="booking-section"       |  |
|  +--------------------------------------------+  |
|                                                  |
|  Tab 2 (al hacer click):                         |
|  +--------------------------------------------+  |
|  |  Descripcion + Boton "Abrir Calendario"    |  |
|  |  Click -> Drawer con iframe GHL            |  |
|  +--------------------------------------------+  |
|                                                  |
+--------------------------------------------------+
```

---

## Cambios por Archivo

### 1. MultiStepForm.tsx

**Agregar prop `formSource` para tracking:**

```tsx
interface MultiStepFormProps {
  formSource?: "hero" | "booking-section";
}

export function MultiStepForm({ formSource = "hero" }: MultiStepFormProps) {
  // ...existing code...
  
  const handleSubmit = () => {
    if (!formData.acceptedPolicies) return;
    
    // Log para analytics (futuro: enviar a webhook/analytics)
    console.log("[Lead] Form submitted", {
      source: formSource,
      ...formData
    });
    
    registrarConsulta();
    setIsSubmitted(true);
  };
}
```

Esto permite diferenciar leads del Hero vs seccion de booking.

---

### 2. BookingCalendar.tsx

**Redisenar completamente con Tabs y Drawer:**

Nuevos imports necesarios:
- `Tabs, TabsList, TabsTrigger, TabsContent` de ui/tabs
- `Drawer, DrawerContent, DrawerTrigger, DrawerHeader, DrawerTitle` de ui/drawer
- `MultiStepForm` para el formulario
- Iconos: `Phone, CalendarDays`

**Estructura del componente:**

```tsx
export function BookingCalendar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  // Script de GHL solo se carga cuando drawer esta abierto
  useEffect(() => {
    if (drawerOpen) {
      // Cargar script GHL...
    }
  }, [drawerOpen]);

  return (
    <section id="agendar">
      {/* Header existente */}
      
      <Tabs defaultValue="callback" className="...">
        <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto">
          <TabsTrigger value="callback">
            <Phone /> Te llamamos
          </TabsTrigger>
          <TabsTrigger value="calendar">
            <CalendarDays /> Prefiero elegir
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="callback">
          {/* Card con formulario */}
          <MultiStepForm formSource="booking-section" />
        </TabsContent>
        
        <TabsContent value="calendar">
          {/* Card con CTA para abrir drawer */}
          <Button onClick={() => setDrawerOpen(true)}>
            Abrir Calendario
          </Button>
          
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerContent className="max-h-[90vh]">
              <DrawerHeader>
                <DrawerTitle>Selecciona fecha y hora</DrawerTitle>
              </DrawerHeader>
              {/* iframe GHL - solo renderiza cuando drawer abierto */}
              {drawerOpen && (
                <iframe src="..." />
              )}
            </DrawerContent>
          </Drawer>
        </TabsContent>
      </Tabs>
    </section>
  );
}
```

---

## Beneficios del Tracking

| formSource | Ubicacion | Proposito |
|------------|-----------|-----------|
| `"hero"` | Seccion Hero inicial | Leads de alta intencion (llegaron y convirtieron rapido) |
| `"booking-section"` | Seccion Agenda Tu Cita | Leads que necesitaron mas informacion antes de decidir |

Esto permite medir cual formulario convierte mejor y optimizar la pagina.

---

## UX en Mobile

- **Tab 1 (Formulario):** Se muestra completo, scroll normal
- **Tab 2 (Calendario):** Boton abre drawer desde abajo (bottom sheet)
  - Altura maxima: 90vh
  - Incluye handle para cerrar deslizando
  - iframe GHL carga solo al abrir (mejor performance)

---

## Archivos a Modificar

| Archivo | Accion |
|---------|--------|
| `src/components/MultiStepForm.tsx` | Agregar prop `formSource` con tipo y logging |
| `src/components/BookingCalendar.tsx` | Redisenar con Tabs, integrar formulario y drawer |

