
# Plan: Actualizar seccion del Doctor

## Cambios en `src/components/DoctorsSection.tsx`

### 1. Titulo de la seccion
- **Antes:** "Especialista de Clase Mundial"
- **Despues:** "Especialista con amplia experiencia"

### 2. Subtitulo de la seccion
- **Antes:** "Con mas de 20 anos de experiencia y formacion internacional en las mejores instituciones"
- **Despues:** "Mas de 20 anos de practica clinica y actualizacion continua con formacion internacional"

### 3. Nombre del doctor
- **Antes:** "Dr. Luis A. Garzon"
- **Despues:** "Dr. Luis Alberto Garzon"

### 4. Biografia / ficha del doctor
- **Antes:** "Medico Anestesiologo especialista en medicina del dolor y cuidados paliativos. Director medico de Findolor."
- **Despues:** "Gerente General de FinDolor. Referente en manejo del dolor y cuidados paliativos en Bogota, con liderazgo en servicios de dolor en Clinica Los Nogales y el Hospital de San Jose. Cofundador y director de posgrado en Medicina del Dolor y Cuidados Paliativos (FUCS)."

### 5. Certificaciones actualizadas
- **Antes:** ASRA, IASP, ACED
- **Despues:** ACED, IASP, IAHPC, SCARE (segun la nueva informacion proporcionada)

### 6. Etiqueta de rol
- Cambiar la etiqueta superior de "Director Medico" a "Gerente General" para alinearse con la nueva ficha

---

## Detalle tecnico

Solo se modifica el archivo `src/components/DoctorsSection.tsx`:
- Actualizar el objeto `doctor` (lineas 6-16) con el nuevo nombre, bio y certificaciones
- Actualizar los textos del encabezado de la seccion (lineas 28-36)
