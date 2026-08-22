const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        Header, AlignmentType, BorderStyle, WidthType, ShadingType,
        VerticalAlign } = require("docx");
const fs = require("fs");
const path = require("path");

const FONT = "Times New Roman";
const PAGE_W = 12240;
const PAGE_H = 15840;
const M_L = 851;
const M_R = 851;
const CONTENT_W = PAGE_W - M_L - M_R; // 10538
const COLS = [1280, 3920, 5338]; // 10538
const border = { style: BorderStyle.SINGLE, size: 4, color: "666666" };
const borders = { top: border, bottom: border, left: border, right: border };

function p(text, opts = {}) {
  const { bold = false, size = 22, italic = false, align = AlignmentType.JUSTIFIED,
          before = 0, after = 80, hanging = 0, left = 0 } = opts;
  return new Paragraph({
    alignment: align,
    spacing: { before, after, line: 240 },
    indent: hanging || left ? { left: hanging ? hanging + 360 : left, hanging } : undefined,
    children: [new TextRun({ text, font: FONT, size, bold, italics: italic })],
  });
}

function cell(text, width, opts = {}) {
  const { bold = false, fill = null, align = AlignmentType.LEFT, size = 18 } = opts;
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: fill ? { fill, type: ShadingType.CLEAR } : undefined,
    margins: { top: 40, bottom: 40, left: 60, right: 60 },
    verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({
      alignment: align,
      spacing: { after: 0, line: 220 },
      children: [new TextRun({ text, font: FONT, size, bold })],
    })],
  });
}

function row(a, b, c, header = false) {
  const fill = header ? "D9E2EC" : null;
  const bold = header;
  const size = header ? 18 : 17;
  return new TableRow({
    cantSplit: true,
    children: [
      cell(a, COLS[0], { bold, fill, align: header ? AlignmentType.CENTER : AlignmentType.CENTER, size }),
      cell(b, COLS[1], { bold, fill, size }),
      cell(c, COLS[2], { bold, fill, size }),
    ],
  });
}

const eventos = [
  ["1794", "Chappe pone a trabajar la línea óptica París-Lille.",
    "Ya es una red: torres, código y retransmisión. No es un aparato suelto."],
  ["1837 a 1844", "Telégrafo eléctrico: Cooke y Wheatstone en Londres; Morse en Washington-Baltimore.",
    "La información viaja por hilo. El código Morse es el que se masifica en América."],
  ["1865", "Veinte Estados firman en París la Convención Telegráfica. Nace la UIT.",
    "Primer acuerdo internacional de equipo, tarifas y código. Sin eso cada frontera cortaba el mensaje."],
  ["1876", "Patente del teléfono de Bell (EE. UU. 174465).",
    "Del código al habla sobre el mismo tipo de canal. Gray metió caveat el mismo 14 de febrero; me quedo con la fecha de la patente."],
  ["1901", "Marconi reporta la S transatlántica (Poldhu a Terranova).",
    "Radio a gran distancia, sin cable fijo. Hertz, Tesla y Popov ya habían experimentado; este disparo es el que se cita."],
  ["1948", "Shannon publica A Mathematical Theory of Communication.",
    "Ahí quedan el bit, el ruido y el techo del canal. Sin eso, hablar de capacidad es puro slogan."],
  ["1962", "Lanzan Telstar 1 (AT&T / NASA).",
    "Primer relevo activo de TV y voz entre continentes. Órbita y espectro como recurso compartido."],
  ["1969", "29 oct: primer LOGIN de ARPANET, UCLA a SRI.",
    "Paquetes de verdad entre computadoras. Se cayó a la mitad (solo salió LO) y luego sí pasó."],
  ["1973", "Metcalfe documenta Ethernet en Xerox PARC.",
    "LAN de medio compartido (CSMA/CD). De ahí sale el 802.3 que usamos en el laboratorio."],
  ["1983", "1 ene: ARPANET se pasa de NCP a TCP/IP (RFC 801).",
    "El flag day. TCP/IP deja de ser experimento y se vuelve la pila con la que se habla Internet."],
  ["1989", "20 jul: la UNAM se conecta a Internet. En marzo, Berners-Lee propone la Web en el CERN.",
    "México entra a la red desde Ciudad Universitaria. UNAM Global documenta el 20 de julio; hay quien cita febrero."],
  ["1991", "El software de la WWW se anuncia fuera del CERN.",
    "Hipertexto sobre IP. La red deja de ser solo correo y login remoto."],
  ["1997", "IEEE publica 802.11.",
    "Wi-Fi como estándar (1 a 2 Mbit/s). El boom comercial es 802.11b; el papel es este."],
  ["1998", "RFC 2460: IPv6.",
    "128 bits porque IPv4 se acaba. El despliegue sigue a medias, pero el estándar ya está."],
  ["2008", "3GPP Release 8 introduce LTE.",
    "Celular todo IP. Lo que el marketing vendió como 4G."],
  ["2020", "La UIT cierra la evaluación de IMT-2020 (5G).",
    "5G deja de ser diapositiva. La recomendación M.2150 se publica en 2021."],
  ["2024", "IEEE aprueba 802.11be (Wi-Fi 7).",
    "Canales más anchos y operación multilink. El PDF del estándar salió en 2025; el número es 2024."],
];

const header = new Header({
  children: [
    new Paragraph({
      spacing: { after: 0, line: 220 },
      children: [new TextRun({
        text: "Jorge Salgado Miranda  317182480    Michelle Paola González Martínez",
        font: FONT, size: 16, bold: true,
      })],
    }),
    new Paragraph({
      spacing: { after: 0, line: 220 },
      children: [new TextRun({
        text: "Redes de Datos Seguras  |  Grupo 2  |  2027-1  |  Actividad 1",
        font: FONT, size: 16,
      })],
    }),
    new Paragraph({
      spacing: { after: 80, line: 220 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "333333", space: 4 } },
      children: [new TextRun({
        text: "Profesora: M. TECD. María Eugenia Bautista González",
        font: FONT, size: 16,
      })],
    }),
  ],
});

const tabla = new Table({
  width: { size: CONTENT_W, type: WidthType.DXA },
  columnWidths: COLS,
  rows: [
    row("Año", "Evento", "Por qué lo puse", true),
    ...eventos.map(([a, b, c]) => row(a, b, c)),
  ],
});

const refs = [
  "European Organization for Nuclear Research. (s. f.). A short history of the Web. CERN. https://home.cern/science/computing/the-birth-of-the-web/short-history-web/",
  "International Telecommunication Union. (s. f.). Overview of ITU's History. https://www.itu.int/en/history/Pages/ITUsHistory.aspx",
  "International Telecommunication Union. (2020, 26 de noviembre). ITU completes evaluation for global affirmation of IMT-2020 technologies. https://www.itu.int/en/mediacentre/Pages/pr26-2020-evaluation-global-affirmation-imt-2020-5g.aspx",
  "Shannon, C. E. (1948). A mathematical theory of communication. The Bell System Technical Journal, 27(3), 379-423. https://doi.org/10.1002/j.1538-7305.1948.tb01338.x",
  "UNAM Global. (2019, 17 de julio). A 30 años de que México se conectó por primera vez a Internet. https://unamglobal.unam.mx/global_revista/a-30-anos-de-que-mexico-se-conecto-por-primera-vez-a-internet/",
];

const doc = new Document({
  styles: {
    default: { document: { run: { font: FONT, size: 22 } } },
  },
  sections: [{
    properties: {
      page: {
        size: { width: PAGE_W, height: PAGE_H },
        margin: { top: 1280, right: M_R, bottom: 720, left: M_L },
      },
    },
    headers: { default: header },
    children: [
      p("Tabla cronológica de las telecomunicaciones", {
        bold: true, size: 26, align: AlignmentType.CENTER, after: 120, before: 0,
      }),
      p("Armé esta tabla para la Actividad 1 de teoría. No es un inventario de inventos. Me quedé con los cambios que de verdad mueven la información: código, canal, estándar y, ya en el siglo XX, paquetes. Empiezo en el telégrafo óptico porque ahí ya hay estaciones y retransmisión. Cierro con 5G y Wi-Fi 7, que es lo que está saliendo ahora, no ciencia ficción.", {
        size: 20, after: 160,
      }),
      tabla,
      p("Si se lee de corrido, el corte gordo es de circuito (telégrafo, teléfono) a paquete (ARPANET, TCP/IP). Sin ese salto esta materia no tendría de qué hablar.", {
        size: 20, after: 160, before: 160,
      }),
      p("Referencias", { bold: true, size: 22, align: AlignmentType.LEFT, after: 80 }),
      ...refs.map((r) => p(r, { size: 18, after: 60, hanging: 360 })),
      p("Consulta de las páginas web: 21 de agosto de 2026.", {
        size: 18, italic: true, after: 0, align: AlignmentType.LEFT,
      }),
    ],
  }],
});

const out = path.join(__dirname, "entrega", "TeoRDSGrupo2Actividad01MariaEugeniaBautistaGonzalez2027-1.docx");
Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(out, buf);
  console.log("ok", out);
});
