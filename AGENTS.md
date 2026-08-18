# Instrucciones para agentes

Leer este archivo completo antes de editar. Mapa detallado: [docs/como-funciona.md](docs/como-funciona.md). Datos del equipo: [datos.md](datos.md).

## Qué es

Repo de clase, no un producto de software. Laboratorio Redes de Datos Seguras, Facultad de Ingeniería, UNAM, semestre 2027-1, sala Q208.
Remoto: `git@github.com:chochy2001/redes_de_datos_seguras.git`
Rama: `main`

## Equipo

- Jorge Salgado Miranda
- Michelle Paola Gonzalez Martines (no cambiar el apellido salvo que el usuario lo pida)
- Profesora: M. TECD. María Eugenia Bautista González
- Grupo pendiente: 7, 8 o 10

## Cómo está armado

```
README.md           vista del curso
AGENTS.md           este archivo (obligatorio para agentes)
docs/como-funciona.md
.grok/rules/        reglas que Grok carga solo
datos.md
documentos/         PDFs oficiales. No editar.
plantillas/         Caratula.docx (ya tiene equipo) y reporte
practicas/          sesión 0 y prácticas 1 a 11
teoria/             complementarias 1 a 14
tareas/             tareas sueltas
proyectos/
examenes/
notas/
recursos/
entregas/           solo PDF final listo
```

Cada práctica (lab o teoría) usa el mismo flujo:

`previo.md` luego `desarrollo.md` luego `evidencias/` y `configs/` luego `reporte/`

No crear otra estructura en paralelo. Si llega una tarea nueva, carpeta dentro de `tareas/`. Si llega un proyecto, carpeta dentro de `proyectos/`.

## Texto

Español de México, con acentos y ñ: práctica, sesión, configuración, presentación, diseño, análisis, básica, carátula, número, día, cómputo, teoría, guía, código, también, ingeniería, máximo, reposición, más, cómo, qué.

No usar raya larga ni semirraya. En títulos no separar con guion. Rangos: 17 al 21 ago, 11:00 a 13:00, pp. 3 a 11.

## No son errores (no "corregir")

- Rutas y archivos: `practicas/`, `teoria/`, `00-presentacion`, `Caratula.docx`
- Códigos: `2027-1`, `T568-A`, `T568-B`, `RJ-45`, `FODO-05`
- Markdown: `- item`, `- [ ]`, `| --- |`
- Plurales sin tilde: configuraciones (el singular sí: configuración)
- El nombre Michelle Paola Gonzalez Martines
- Colores de hilo: Blanco-Verde

## Entrega

```
LabRDSGrupoXXPracticaYYMariaEugeniaBautistaGonzalez2027-1.pdf
```

Copia en `practicas/.../reporte/` y otra en `entregas/`.

## Antes de cerrar

1. Acentos en el texto nuevo
2. Cero rayas tipográficas en prosa
3. Enlaces relativos existen
4. No se movieron PDFs oficiales
5. `git status` limpio tras commit y push a `main` si el usuario pidió guardar
