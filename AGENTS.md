# Instrucciones para agentes

Leer este archivo completo antes de editar. Mapa: [docs/como-funciona.md](docs/como-funciona.md). Equipo: [datos.md](datos.md). Temario: [docs/temario.md](docs/temario.md) y [documentos/temario_1598.pdf](documentos/temario_1598.pdf).

## Qué es

Repo de clase, no un producto de software. Redes de Datos Seguras, Facultad de Ingeniería, UNAM, semestre 2027-1. Lab (grupo 10, Q208) y teoría (grupo 2), misma profesora. Requisitos distintos: [docs/requisitos.md](docs/requisitos.md).
Remoto: `git@github.com:chochy2001/redes_de_datos_seguras.git`
Rama: `main`

## Equipo

- Jorge Salgado Miranda
- Michelle Paola González Martínez
- Profesora (lab y teoría): M. TECD. María Eugenia Bautista González
- Laboratorio: grupo 10 (viernes 17:00 a 19:00, Q208)
- Teoría: grupo 2 (no usar el 2 en la carátula del lab; el grupo 2 del FODO-06 es otro lab, de la Dra. Cintia Quezada Reyes)
- Número de cuenta (Jorge): 317182480

## Cómo está armado

```
README.md           vista del curso
AGENTS.md           este archivo (obligatorio para agentes)
docs/como-funciona.md
docs/temario.md     resumen del programa 1598
docs/requisitos.md  lab (grupo 10) vs teoría (grupo 2)
docs/sala-lab.md    evaluación, Forms, llegada, roles, PDF de Google
.grok/rules/        reglas que Grok carga solo
datos.md
documentos/         PDFs oficiales (incluye temario_1598.pdf). No editar.
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

En notas y previos escribir como apunte de clase, no como manual corporativo. Evitar muletillas: cabe destacar, es importante mencionar, en este sentido, asimismo, por otro lado, en conclusión. No repetir el mismo párrafo en las 26 prácticas. Variar frases. Primera persona está bien.

## No son errores (no "corregir")

- Rutas y archivos: `practicas/`, `teoria/`, `00-presentacion`, `Caratula.docx`
- Códigos: `2027-1`, `T568-A`, `T568-B`, `RJ-45`, `FODO-05`
- Markdown: `- item`, `- [ ]`, `| --- |`
- Plurales sin tilde: configuraciones (el singular sí: configuración)
- El nombre Michelle Paola González Martínez (con acentos)
- Colores de hilo: Blanco-Verde

## Laboratorio: sala con la M. TECD. María Eugenia Bautista González

Reglas de clase (lo que ella pidió): [docs/sala-lab.md](docs/sala-lab.md). Leerlas **antes** de armar un previo, un reporte o un PDF.

Resumen que no se puede romper:

- Evaluación: prácticas **60 %** (realización, material, conclusiones, mínimo 3 fuentes APA), previo **10 %**, examen final **30 %** (obligatorio, mínimo 6). Copiar, IA o internet en el examen = anulado.
- Previo: se estudia en `previo.md`; se **contesta en sala** en Google Forms, **17:00 a 17:15**. A las 17:15 se cierra.
- Entrada: 17:00 a 17:10 libres; **17:11 ya nadie entra**.
- Una práctica **impresa** por equipo, carátula oficial (sin rediseñar), material completo, credencial de cada quien. Sin material completo no se entrega y no se recupera. No se repite ni con justificante ni con otro profesor.
- Páginas 2027-1: [docs/sala-lab.md](docs/sala-lab.md) (lab, REDO-01, MADO-31, SGC). Firmar REDO-01 y el reglamento de talleres o no nos quedamos.
- Revisar el equipo asignado al sentarnos. Prohibido hacer algo ajeno a la práctica. Asistencia 100 %. Sin apodos.
- Pareja: un practicante y un escribano, se rotan. Conclusiones en pareja: fallos, desafíos y qué se aprendió. Nunca "se cumplieron los objetivos de forma satisfactoria".
- Fuentes: mínimo 3, APA, sin Wikipedia, sin IA.
- PDF para Google (escaneado **ya calificado**):

```
Practica 01-SalgadoyGonzalez.pdf
```

Copia en `practicas/.../reporte/` y otra en `entregas/`.
- Encuesta de cada práctica: 5 a 10 min, leerla. Evaluación del servicio: todos, **antes** del examen.
- Correo: ella revisa de 24 a 36 h.

Carátula: Maestra María Eugenia Bautista González, Laboratorio de Redes de Datos Seguras, grupo **10**, pareja, 2027-1, fecha = el viernes de esa práctica, PC = la asignada.

Antes de dar por cerrado un previo: cada pregunta del manual tiene respuesta, cuadra con el MADO-31, y sirve para pegar en el Forms de 17:00 a 17:15.

## Antes de cerrar

1. Acentos en el texto nuevo
2. Cero rayas tipográficas en prosa
3. Enlaces relativos existen
4. No se movieron PDFs oficiales
5. `git status` limpio tras commit y push a `main` si el usuario pidió guardar
