# Práctica 1 - Construcción de cables UTP

**Capa 1 del modelo OSI** · Semana 2 (24-28 ago 2026) · Manual MADO-31 pp. 3-11

Fuente: [documentos/MADO-31_LabRedesDatosSeguras.pdf](../../documentos/MADO-31_LabRedesDatosSeguras.pdf)

## Objetivo

Construir cables de conexión **directa** y **cruzada** según ANSI/EIA/TIA **T568-A** y **T568-B**.

## Material que debe llevar el alumno

- 10 conectores RJ-45 categoría 5e o superior
- 4 metros de cable UTP categoría 5e o superior
- Flexómetro o cinta métrica

Equipo del laboratorio: pinzas engarzadoras, de corte y de punta; tester de continuidad UTP.

La construcción es **individual**.

## Pinouts

| Pin | T568-A | T568-B |
| ---: | --- | --- |
| 1 | Blanco-Verde | Blanco-Naranja |
| 2 | Verde | Naranja |
| 3 | Blanco-Naranja | Blanco-Verde |
| 4 | Azul | Azul |
| 5 | Blanco-Azul | Blanco-Azul |
| 6 | Naranja | Verde |
| 7 | Blanco-Marrón | Blanco-Marrón |
| 8 | Marrón | Marrón |

- **Directa:** T568-B en ambos extremos.
- **Cruzada:** T568-A en un extremo y T568-B en el otro.

## Checklist de construcción

1. Cortar 2 m de UTP.
2. Retirar 3 cm de forro en un extremo.
3. Destrenzar y ordenar según el estándar.
4. Recortar hilos a 3 mm del forro.
5. Insertar en el RJ-45 (el forro también entra al conector).
6. Verificar que se vea el cobre en la punta del conector.
7. Engarzar.
8. Repetir el otro extremo.
9. Probar con el tester. Si falla un par, rehacer.

## Cómo trabajar aquí

| Archivo | Uso |
| --- | --- |
| [previo.md](previo.md) | Cuestionario previo (11 preguntas) |
| [desarrollo.md](desarrollo.md) | Notas de la sesión |
| `evidencias/` | Fotos del cable y del tester |
| `reporte/` | PDF final con carátula |

## Cuestionario previo

Contestar en [previo.md](previo.md) **antes** de la sesión (manual p. 11).

## Cuestionario de la práctica

Manual pp. 8-9:

1. Diferencia al **emplear** (no al construir) T568-A vs T568-B en cableado estructurado.
2. Configuración de cable cruzado en Gigabit Ethernet.

## Reporte

1. Llenar [plantillas/Caratula.docx](../../plantillas/Caratula.docx).
2. Incluir desarrollo, pruebas con tester, cuestionarios y conclusiones.
3. Guardar el PDF en `reporte/` (y una copia en `entregas/`) con el nombre:

```
LabRDSGrupoXXPractica01NombreProf2027-1.pdf
```
