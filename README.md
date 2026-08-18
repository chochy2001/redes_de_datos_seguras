# Redes de Datos Seguras

Workspace del laboratorio **Redes de Datos Seguras**  
Facultad de Ingeniería, UNAM · Laboratorio de Redes y Seguridad  
Semestre **2027-1** · Sala **Q208**

Portal: [redyseguridad.fi-b.unam.mx](http://redyseguridad.fi-b.unam.mx/)  
Remoto: [chochy2001/redes_de_datos_seguras](https://github.com/chochy2001/redes_de_datos_seguras)

Llena primero [datos.md](datos.md) (grupo, profesor, nombre). Eso fija la nomenclatura de las entregas.

## Cómo está organizado

```
datos.md            Datos del alumno (grupo, profesor)
documentos/         Material oficial (no editar)
plantillas/         Carátula y plantillas de reporte
practicas/          11 prácticas de laboratorio + sesión 0
teoria/             14 prácticas complementarias de teoría
tareas/             Tareas sueltas que asigne el profesor
proyectos/          Proyectos del curso
examenes/           Evaluación individual (semanas 13–15)
notas/              Apuntes de clase
recursos/           Packet Tracer, capturas, enlaces
entregas/           PDF final listo para subir
```

Cada práctica (lab o teoría) usa el mismo flujo:

```
previo.md       →  desarrollo.md  →  evidencias/ + configs/  →  reporte/
```

## Semana actual

| Semana | Fechas | Actividad | Carpeta |
| ---: | --- | --- | --- |
| 1 | 17–21 ago 2026 | Presentación y SGC | [practicas/00-presentacion](practicas/00-presentacion/README.md) |
| 2 | 24–28 ago 2026 | **Práctica 1** — cables UTP | [practicas/01-cables-utp](practicas/01-cables-utp/README.md) |

## Laboratorio

| No. | Práctica | Semana | Manual | Carpeta |
| ---: | --- | ---: | ---: | --- |
| 0 | Presentación y SGC | 1 | — | [00-presentacion](practicas/00-presentacion/README.md) |
| 1 | Cables UTP (directa y cruzada) | 2 | 3–11 | [01-cables-utp](practicas/01-cables-utp/README.md) |
| 2 | Cableado estructurado ANSI/EIA/TIA 568 | 3 | 12–19 | [02-cableado-estructurado](practicas/02-cableado-estructurado/README.md) |
| 3 | Diseño de cableado estructurado | 4 | 20–28 | [03-diseno-cableado](practicas/03-diseno-cableado/README.md) |
| 4 | Rendimiento de hub y switch | 5–6 | 29–50 | [04-hub-switch](practicas/04-hub-switch/README.md) |
| 5 | Red básica Windows y Linux Debian | 6–7 | 51–76 | [05-red-basica-windows-linux](practicas/05-red-basica-windows-linux/README.md) |
| 6 | Encaminamiento y análisis de paquetes | 7–8 | 77–93 | [06-encaminamiento-paquetes](practicas/06-encaminamiento-paquetes/README.md) |
| 7 | Configuración básica del router | 8–9 | 94–115 | [07-configuracion-router](practicas/07-configuracion-router/README.md) |
| 8 | TCP y UDP | 9–10 | 116–138 | [08-tcp-udp](practicas/08-tcp-udp/README.md) |
| 9 | SSH | 10–11 | 139–161 | [09-ssh](practicas/09-ssh/README.md) |
| 10 | Capa de presentación | 11–12 | 162–172 | [10-capa-presentacion](practicas/10-capa-presentacion/README.md) |
| 11 | Servidor DHCP | 12–13 | 173–197 | [11-servidor-dhcp](practicas/11-servidor-dhcp/README.md) |

Índice: [practicas/README.md](practicas/README.md)

## Teoría (complementarias obligatorias)

| No. | Práctica | Capa | Manual | Carpeta |
| ---: | --- | --- | ---: | --- |
| 1 | Normatividad | Estándares | 200–210 | [01-normatividad](teoria/01-normatividad/README.md) |
| 2 | Módulos en routers | 1 | 211–230 | [02-modulos-routers](teoria/02-modulos-routers/README.md) |
| 3 | Cableado estructurado | 1 | 231–239 | [03-cableado-estructurado](teoria/03-cableado-estructurado/README.md) |
| 4 | Compartición de archivos en Linux | 2 | 240–259 | [04-comparticion-linux](teoria/04-comparticion-linux/README.md) |
| 5 | Políticas de seguridad en el switch | 2 | 260–277 | [05-politicas-seguridad-switch](teoria/05-politicas-seguridad-switch/README.md) |
| 6 | EtherChannel y port security | 2 | 278–306 | [06-etherchannel-port-security](teoria/06-etherchannel-port-security/README.md) |
| 7 | Enrutamiento estático | 3 | 307–326 | [07-enrutamiento-estatico](teoria/07-enrutamiento-estatico/README.md) |
| 8 | HSRP | 3 | 327–350 | [08-hsrp](teoria/08-hsrp/README.md) |
| 9 | TCP y UDP | 4 | 351–376 | [09-tcp-udp](teoria/09-tcp-udp/README.md) |
| 10 | Sistema operativo de router | 5 | 377–393 | [10-so-router](teoria/10-so-router/README.md) |
| 11 | VPN | 6 | 394–408 | [11-vpn](teoria/11-vpn/README.md) |
| 12 | Firewall básico | 7 | 409–425 | [12-firewall](teoria/12-firewall/README.md) |
| 13 | Voz IP | 7 | 426–451 | [13-voip](teoria/13-voip/README.md) |
| 14 | Web, DNS e IP Helper | 7 | 452–468 | [14-web-dns-ip-helper](teoria/14-web-dns-ip-helper/README.md) |

Índice: [teoria/README.md](teoria/README.md)

## Entregas

1. Copiar [plantillas/Caratula.docx](plantillas/Caratula.docx) al `reporte/` de la práctica.
2. Armar el PDF (carátula + desarrollo).
3. Nombrarlo así y copiarlo también a `entregas/`:

```
LabRDSGrupoXXPracticaYYNombreProf2027-1.pdf
```

`XX` = grupo (01, 05, 11) · `YY` = práctica · profesor **sin espacios** · semestre `2027-1`.

Control oficial: [documentos/FODO-13_entrega_seguras.pdf](documentos/FODO-13_entrega_seguras.pdf).

## Horarios

| Grupo | Persona docente | Horario | Día | Sala |
| ---: | --- | --- | --- | --- |
| 2 | Dra. Cintia Quezada Reyes | 11:00–13:00 | Mar | Q208 |
| 3 | M. PEI. Edgar Martínez Meza | 13:00–15:00 | Mar | Q208 |
| 5 | Mtro. Francisco Adolfo López Suárez | 7:00–9:00 | Mié | Q208 |
| 5 | M.I.A. María Alejandra Zúñiga Medel | 17:00–19:00 | Mié | Q208 |
| 6 | M.C. Javier León Cotonieto | 19:00–21:00 | Mié | Q208 |
| 7 | M. TECD. María Eugenia Bautista González | 7:00–9:00 | Jue | Q208 |
| 8 | M. TECD. María Eugenia Bautista González | 9:00–11:00 | Jue | Q208 |
| 10 | M. TECD. María Eugenia Bautista González | 17:00–19:00 | Vie | Q208 |
| 11 | Ing. Patricia Nallely Gómez Flores | 11:00–13:00 | Lun | Q208 |

## Reglas rápidas

- Máximo **2 inasistencias** (la tercera es baja).
- Llevar la **práctica impresa** y el material.
- Tolerancia: **10 minutos**.
- Revisar el equipo al llegar (FODO-09 si hay falla).
- Máximo **2 personas** por equipo.
- No hay reposición en otro grupo.
- No comida ni bebida. Cerrar sesión al salir.

## Clonar

```bash
git clone git@github.com:chochy2001/redes_de_datos_seguras.git
cd redes_de_datos_seguras
```
