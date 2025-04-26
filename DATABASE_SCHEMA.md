# Esquema de Base de Datos - Centro Rincón de Amigos (CRA)

## Diagrama de Relaciones

```
+------------------+          +------------------+          +------------------+
|    USUARIOS     |          |    TALLERES     |          |   INSCRIPCIONES  |
+------------------+          +------------------+          +------------------+
| id (PK)          |          | id (PK)          |          | id (PK)          |
| nombre           |<---+     | nombre           |     +--->| id_usuario (FK)  |
| email            |     |    | descripcion     |          | id_taller (FK)   |
| telefono         |     |    | fecha_inicio    |          | fecha_inscripcion|
| direccion        |     |    | fecha_fin       |          | estado           |
| rol              |     |    | horario         |          +------------------+
| fecha_registro   |     |    | cupos_max       |
+------------------+     |    | id_profesor (FK)|
                         |    +------------------+
                         |
                         |
                +---------------------+
                |    PROFESORES       |
                +---------------------+
                | id (PK)             |
                | nombre              |
                | email               |
                | telefono            |
                +---------------------+
```

## Descripción de Tablas

### 1. USUARIOS
Almacena información de los participantes, profesores y administradores del sistema.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | UUID | Identificador único (clave primaria) |
| nombre | string | Nombre completo del usuario |
| email | string | Correo electrónico |
| telefono | string | Teléfono de contacto |
| direccion | string | Dirección del usuario (opcional) |
| rol | enum | Rol del usuario (participante, profesor, administrador) |
| fecha_registro | timestamp | Fecha de registro en la plataforma |

### 2. TALLERES
Contiene la información de los talleres disponibles.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | UUID | Identificador único (clave primaria) |
| nombre | string | Nombre del taller |
| descripcion | text | Descripción detallada |
| fecha_inicio | date | Fecha de inicio |
| fecha_fin | date | Fecha de finalización |
| horario | string | Horario del taller |
| cupos_max | integer | Cupos disponibles |
| id_profesor | UUID | Referencia al profesor (FK) |

### 3. INSCRIPCIONES
Gestiona las inscripciones de usuarios a talleres.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | UUID | Identificador único (clave primaria) |
| id_usuario | UUID | Referencia al usuario (FK) |
| id_taller | UUID | Referencia al taller (FK) |
| fecha_inscripcion | timestamp | Fecha de la inscripción |
| estado | enum | Estado de la inscripción (confirmada, lista de espera, etc.) |

### 4. PROFESORES
Información específica de los profesores.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | UUID | Identificador único (clave primaria) |
| nombre | string | Nombre completo |
| email | string | Correo electrónico |
| telefono | string | Teléfono de contacto |

## Relaciones

1. **USUARIOS - INSCRIPCIONES - TALLERES**
   - Un usuario puede inscribirse en muchos talleres
   - Un taller puede tener muchos usuarios inscritos
   - Relación muchos a muchos gestionada por la tabla INSCRIPCIONES

2. **PROFESORES - TALLERES**
   - Un profesor puede dictar varios talleres
   - Un taller tiene un solo profesor
   - Relación uno a muchos

## Notas Adicionales

- Todas las tablas incluyen campos de auditoría (created_at, updated_at)
- Se recomienda implementar índices en campos de búsqueda frecuente
- Considerar agregar campos de soft delete para mantener historial
- Implementar validaciones de integridad referencial 