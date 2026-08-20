# Cómo está armado el repo

Si vas a editar, primero [AGENTS.md](../AGENTS.md).

Aquí juntamos previos, lo de clase, evidencias y los PDFs que se entregan. Es el lab de Redes de Datos Seguras (FI UNAM, 2027-1). No hay servidor ni tests. Lo que no puede fallar es el nombre del archivo, la carátula y que los links existan.

## Quién trabaja aquí

Ver [datos.md](../datos.md).

| Campo | Valor |
| --- | --- |
| Integrantes | Jorge Salgado Miranda, Michelle Paola González Martínez |
| Profesora | M. TECD. María Eugenia Bautista González |
| Sala | Q208 |
| Semestre | 2027-1 |
| Grupo laboratorio | 10 (viernes 17:00 a 19:00, Q208) |
| Grupo teoría | 2 |
| Cuenta (Jorge) | 317182480 |

## Flujo de una práctica

1. Abrir la carpeta de esa práctica en `practicas/` o `teoria/`.
2. Contestar `previo.md` antes de la sesión.
3. Anotar la sesión en `desarrollo.md` (ya trae profesora e integrantes).
4. Meter fotos, capturas o `.pcap` en `evidencias/`.
5. Meter configs de Cisco, Linux o Windows en `configs/`.
6. Armar el PDF con [plantillas/Caratula.docx](../plantillas/Caratula.docx) y dejarlo en `reporte/`.
7. Copiar el PDF final a `entregas/` con el nombre oficial.

Nombre oficial:

```
LabRDSGrupo10PracticaYYMariaEugeniaBautistaGonzalez2027-1.pdf
```

## Laboratorio

Temario del curso (clave 1598): [temario.md](temario.md) y el PDF [documentos/temario_1598.pdf](../documentos/temario_1598.pdf).

Índice del lab: [practicas/README.md](../practicas/README.md)
Manual: [documentos/MADO-31_LabRedesDatosSeguras.pdf](../documentos/MADO-31_LabRedesDatosSeguras.pdf)

| No. | Carpeta | Manual |
| ---: | --- | --- |
| 0 | [practicas/00-presentacion](../practicas/00-presentacion/README.md) |  |
| 1 | [practicas/01-cables-utp](../practicas/01-cables-utp/README.md) | 3 a 11 |
| 2 | [practicas/02-cableado-estructurado](../practicas/02-cableado-estructurado/README.md) | 12 a 19 |
| 3 | [practicas/03-diseno-cableado](../practicas/03-diseno-cableado/README.md) | 20 a 28 |
| 4 | [practicas/04-hub-switch](../practicas/04-hub-switch/README.md) | 29 a 50 |
| 5 | [practicas/05-red-basica-windows-linux](../practicas/05-red-basica-windows-linux/README.md) | 51 a 76 |
| 6 | [practicas/06-encaminamiento-paquetes](../practicas/06-encaminamiento-paquetes/README.md) | 77 a 93 |
| 7 | [practicas/07-configuracion-router](../practicas/07-configuracion-router/README.md) | 94 a 115 |
| 8 | [practicas/08-tcp-udp](../practicas/08-tcp-udp/README.md) | 116 a 138 |
| 9 | [practicas/09-ssh](../practicas/09-ssh/README.md) | 139 a 161 |
| 10 | [practicas/10-capa-presentacion](../practicas/10-capa-presentacion/README.md) | 162 a 172 |
| 11 | [practicas/11-servidor-dhcp](../practicas/11-servidor-dhcp/README.md) | 173 a 197 |

## Teoría

Índice: [teoria/README.md](../teoria/README.md)

Catorce complementarias obligatorias (manual pp. 198 a 468), misma forma de carpetas que el laboratorio.

## Otras carpetas

| Carpeta | Para qué |
| --- | --- |
| [README.md](../README.md) | Vista general del curso |
| [temario.md](temario.md) | Unidades del programa 1598 |
| [AGENTS.md](../AGENTS.md) | Reglas que debe seguir un agente |
| [.grok/rules/](../.grok/rules/00-leer.md) | Carga automática en Grok |
| [documentos/](../documentos/README.md) | PDFs oficiales. No modificar. |
| [plantillas/](../plantillas/README.md) | Carátula y esqueleto de reporte |
| [tareas/](../tareas/README.md) | Tareas que no son práctica numerada |
| [proyectos/](../proyectos/README.md) | Proyectos del curso |
| [examenes/](../examenes/README.md) | Evaluación individual, semanas 13 a 15 |
| [notas/](../notas/README.md) | Apuntes |
| [recursos/](../recursos/README.md) | Packet Tracer y capturas reutilizables |
| [entregas/](../entregas/README.md) | Solo el PDF que se entrega |

## Git

Rama `main`. Un commit claro en español. Push a `origin` cuando el usuario pida guardar.
No reescribir historia en `main` a menos que lo pidan.

## Comprobar

- Los `.md` nuevos tienen acentos.
- No hay raya larga ni semirraya en prosa.
- Cada enlace relativo apunta a un archivo que existe.
- No se renombraron carpetas oficiales ni PDFs de `documentos/`.
