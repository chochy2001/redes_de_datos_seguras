# Previo y cuestionario: Práctica 1

Se estudia **antes**. Se contesta **en clase**, Google Forms, **17:00 a 17:15**. A las 17:15 se cierra.

Validado con el MADO-31 (pp. 3 a 11) y las normas TIA/EIA.

Grupo 10. Pareja: Jorge Salgado Miranda y Michelle Paola González Martínez.
Fecha de la sesión: viernes **28 ago 2026**.
En esta práctica: Jorge practicante, Michelle escribana.

---

## Cuestionario previo (manual p. 11)

### 1. ¿Por qué los alambres del UTP están trenzados?

Para bajar interferencia electromagnética y diafonía. En cada par, las corrientes opuestas se cancelan el campo; entre pares, el paso de trenza distinto evita que un par se acople al de al lado. Si no estuvieran trenzados, el UTP aguantaría menos metros y más ruido.

### 2. ¿Qué es UTP? Características, ventajas y desventajas.

UTP = *Unshielded Twisted Pair*, par trenzado **sin** malla. Cuatro pares (8 hilos) en un forro de PVC. Conector RJ-45 (8P8C).

Ventajas: barato, fácil de pachar, rutea bien en canaleta, es lo que pide el lab.
Desventajas: no trae pantalla; cerca de motores, balastros o cables de fuerza se ensucia. El radio de curvatura y el destorcido en el jack importan.

### 3. ¿Qué es STP? Características, ventajas y desventajas.

STP = *Shielded Twisted Pair*, par trenzado **con** pantalla (foil, trenza, o ambos; a veces se ve como FTP/SFTP).

Ventajas: aguanta mejor EMI.
Desventajas: más caro, más rígido, hay que aterrizar la malla. Si la tierra queda mal, la pantalla no sirve.

### 4. Categorías de UTP. Detalle de Cat 5e y Cat 6.

Las que se ven en instalación: Cat 5e, 6, 6A (y 7/8 en ficha, casi no en jack RJ-45 clásico).

- **Cat 5e:** 100 MHz. 1000BASE-T (1 Gbit/s) hasta 100 m. Cuatro pares. Es la mínima que pide el material de esta práctica.
- **Cat 6:** 250 MHz. 1 Gbit/s holgado; 10GBASE-T solo tramos cortos (~55 m). Separador interno en muchos rollos.

### 5. ¿Qué categoría conviene en instalaciones nuevas y por qué?

**Cat 6** para un edificio normal (PCs a 1 Gbit/s, PoE, margen respecto a 5e) sin pagar Cat 6A. Si el canal va a 10 Gbit/s en 100 m, ahí sí **Cat 6A**.

### 6. Características del coaxial y de la fibra óptica.

**Coaxial:** vivo + malla. 75 Ω (TV) o 50 Ω (radio). Aguanta EMI mejor que UTP, pero es rígido y en LAN ya casi no se usa (10BASE2/5).

**Fibra:** vidrio o plástico, luz. Monomodo (largo alcance) o multimodo (campus). Inmune a EMI, más ancha. Pide DIO, fusión o conectores LC/SC; no se corta con pinza de UTP.

### 7. Si se transmite voz por UTP, ¿qué pines se usan y cómo se arma?

Telefonía analógica usa el **par azul, pines 4 y 5**. Se puede dejar en el mismo jack RJ-45 o pasar a RJ-11 (en el RJ-11 esos dos hilos quedan al centro). Los otros pares se pueden dejar para datos. No se cruzan 4 y 5.

### 8. Configuración de un cable cruzado en Gigabit Ethernet.

En 10/100 solo se cruzan los pares 2 y 3 (pines 1-2 con 3-6): un extremo T568-A y el otro T568-B.

En **1000BASE-T** los cuatro pares llevan señal. El cruzado TIA también intercambia 4-5 con 7-8:

| Pin | Extremo T568-B | Extremo cruzado Gigabit |
| ---: | --- | --- |
| 1 | Blanco-Naranja | Blanco-Verde |
| 2 | Naranja | Verde |
| 3 | Blanco-Verde | Blanco-Naranja |
| 4 | Azul | Blanco-Marrón |
| 5 | Blanco-Azul | Marrón |
| 6 | Verde | Naranja |
| 7 | Blanco-Marrón | Azul |
| 8 | Marrón | Blanco-Azul |

Hoy casi no se arma: Auto-MDIX en el NIC y en el switch lo resuelve. En esta práctica igual se pide el cruzado A/B del manual.

### 9. ¿Qué significan ANSI/EIA/TIA T568-A y T568-B?

Dos secuencias de color para terminar el RJ-45 en cableado estructurado (TIA-568).

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

T568-B es el que usa el manual para el cable **directo**. La A se usa en un extremo del **cruzado**.

### 10. Importancia de la capa 1 del modelo OSI.

Es el medio y la señal: hilos, conectores, voltajes, luz. Si el cable está mal engarzado, las capas de arriba no tienen de qué hablar. Esta práctica es pura capa 1.

### 11. Costos de UTP Cat 5e, 6 y 6a.

Precios al metro, Steren, consulta 21 ago 2026 (https://www.steren.com.mx/cables/cables-de-red-por-metro):

| Categoría | Referencia | $/m (lista) |
| --- | --- | ---: |
| Cat 5e UTP | CAT5E-AZ-305 VTA | 15 |
| Cat 6 UTP | CAT6-AZ-305 VTA | 18 |
| Cat 6A (FTP Condumex) | UTP6A-305 VTA | 45 |

En caja de 305 m el metro sale más barato. El 6A de esa lista es FTP, no UTP puro.

---

## Cuestionario de la práctica (manual pp. 8 a 9)

### 1. Diferencia al **emplear** (no al construir) T568-A vs T568-B en cableado estructurado.

Ninguna si **todo** el edificio usa la misma. A y B son equivalentes en desempeño. El problema es mezclarlas en el mismo canal: un extremo A y el otro B arma un cruzado sin querer y el enlace 10/100 se cae o queda raro. Hay que elegir una (el lab usa B en directo) y no cambiarla en jacks, patch panel ni cords.

### 2. Configuración de cable cruzado en Gigabit Ethernet.

La misma del previo, pregunta 8: cruzar 1-2 con 3-6 **y** 4-5 con 7-8. En 10/100 basta A en un lado y B en el otro. Con Auto-MDIX casi no se usa.

---

## Referencias

- Facultad de Ingeniería, UNAM. (2023). *Manual de prácticas del Laboratorio de Redes de Datos Seguras* (MADO-31, versión 06), pp. 3 a 11.
- Telecommunications Industry Association. (s. f.). *TIA-568* (secuencias T568-A y T568-B).
- Steren. (2026). *Cables de red (por metro)*. https://www.steren.com.mx/cables/cables-de-red-por-metro
