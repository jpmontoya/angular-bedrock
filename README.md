# Angular Bedrock

Proyecto base desarrollado con **Angular 21**, siguiendo una arquitectura **Feature-Based**, utilizando **Standalone Components**, **Lazy Loading** y una organización enfocada en la escalabilidad y el mantenimiento.

---

# Tecnologías

- Angular 21
- TypeScript
- Standalone Components
- Lazy Loading
- Signals
- ESLint

---

# Arquitectura del proyecto

El proyecto está organizado por funcionalidades (**Features**) en lugar de por tipo de archivo, permitiendo que cada módulo funcional sea completamente independiente.

```
src/
│
├── app/
│   ├── core/
│   │   ├── interceptors/
│   │   ├── guards/
│   │   ├── layouts/
│   │   ├── services/
│   │   └── config/
│   │
│   ├── shared/
│   │   ├── components/
│   │   ├── directives/
│   │   ├── pipes/
│   │   └── ui/
│   │
│   ├── features/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── dashboard/
│   │   └── certificates/
│   │
│   └── app.routes.ts
```

---

# Estructura de carpetas

## Core

Contiene todos los servicios globales de la aplicación.

```
core/
```

Ejemplos:

- Interceptores HTTP
- Guards
- Configuración global
- Layouts principales
- Servicios compartidos por toda la aplicación

No debe contener lógica específica de una Feature.

---

## Shared

Contiene componentes reutilizables por cualquier Feature.

```
shared/
```

Ejemplos:

- Botones
- Inputs
- Modales
- Pipes
- Directivas
- Componentes UI

Todo lo que esté aquí debe poder reutilizarse en cualquier parte del proyecto.

---

## Features

Toda la lógica del negocio vive dentro de **features**.

Cada Feature es completamente independiente de las demás.

Ejemplo:

```
features/
└── auth/
```

---

# Arquitectura de una Feature

Cada Feature mantiene su propia organización.

Ejemplo:

```
auth/

├── pages/
│   └── login/
│       ├── login.component.ts
│       ├── login.component.html
│       └── login.component.scss
│
├── components/
│   └── login-form/
│       ├── login-form.component.ts
│       ├── login-form.component.html
│       └── login-form.component.scss
│
├── services/
│   └── auth.service.ts
│
├── models/
│
├── interfaces/
│
├── enums/
│
└── auth.routes.ts
```

---

# Componentes

Los componentes se dividen en dos tipos.

## Pages

Representan una ruta dentro de la aplicación.

Ejemplo:

```
pages/
    login/
    register/
```

Generalmente:

- Administran navegación
- Consumen servicios
- Manejan estado
- Coordinan componentes hijos

---

## Components

Son componentes reutilizables únicamente dentro de la Feature.

Ejemplo:

```
components/

    login-form/

    social-login/

    forgot-password/
```

No deben realizar llamadas HTTP.

Su función es únicamente representar información y emitir eventos.

---

# Servicios

Cada Feature posee sus propios servicios.

Ejemplo:

```
services/

    auth.service.ts
```

Responsabilidades:

- Comunicación con APIs
- Lógica relacionada con autenticación
- Gestión de sesiones
- Operaciones propias de la Feature

Los servicios de una Feature no deben contener lógica perteneciente a otras Features.

---

# Lazy Loading

Cada Feature administra sus propias rutas.

Ejemplo:

```
features/auth/auth.routes.ts
```

Las rutas principales únicamente cargan la Feature cuando es requerida.

Ejemplo:

```typescript
{
    path: 'auth',
    loadChildren: () =>
        import('./features/auth/auth.routes')
            .then(r => r.AUTH_ROUTES)
}
```

---

# Convenciones

## Nombres de componentes

```
login.component.ts
```

```
login-form.component.ts
```

```
user-card.component.ts
```

---

## Nombres de servicios

```
auth.service.ts
```

```
user.service.ts
```

```
certificate.service.ts
```

---

## Modelos

```
login-request.model.ts
```

```
user.model.ts
```

---

## Interfaces

```
user.interface.ts
```

---

# Buenas prácticas

- Una Feature no debe acceder directamente a otra Feature.
- Mantener cada Feature desacoplada.
- Evitar servicios globales para lógica específica de negocio.
- Utilizar Lazy Loading en todas las Features.
- Utilizar Standalone Components.
- Favorecer `inject()` sobre la inyección mediante constructor en código nuevo.
- Mantener componentes pequeños y con una única responsabilidad.
- Colocar componentes reutilizables globales únicamente dentro de `shared`.

---

# Features implementadas

Actualmente el proyecto cuenta con las siguientes funcionalidades:

| Auth |
|------|
|🔐 Login |

---

# Ejecución del proyecto

Instalar dependencias

```bash
npm install
```

Servidor de desarrollo

```bash
npm run start:dev
```

Compilar

```bash
ng build
```

Ejecutar pruebas

```bash
ng test
```

---

# Objetivo de la arquitectura

Esta arquitectura busca:

- Escalabilidad
- Bajo acoplamiento
- Alta cohesión
- Fácil mantenimiento
- Separación clara de responsabilidades
- Crecimiento organizado por funcionalidades
- Aprovechar las mejores prácticas actuales de Angular