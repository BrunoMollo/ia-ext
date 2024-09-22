const teory = {
  "1.1. ¿Qué es la Inteligencia Artificial?": `La Inteligencia Artificial (IA), en una definición amplia y un tanto circular, tiene por objeto
el estudio del comportamiento inteligente en las máquinas. A su vez, el comportamiento
. inteligente supone percibir, razonar, aprender, comunicarse y actuar en entornos complejos.
percibir, razonar, * Una de las metas a largo plazo de la TA es el desarrollo de máquinas que puedan hacer
aprender, \_‘:o_disesta\sms‘?igual, 0 quizá incluso mejor, que los humanos. comunicarse y actuar) » Otra meta de la IA es llegar a comprender este tipo de comportamiento, sea en las
máquinas, en los humanos o en otros animales.
Por tanto, la IA persigue al mismo tiempo metas científicas y metas de ingeniería. 
`,
  "1.1.1. Pueden": `Consideremos primero la palabra pueden, ¿Queremos decir que las máquinas pueden pensar
ya ahora, o que algún día podrán pensar? ¿Queremos decir que las máquinas podrían ser
capaces de pensar, en principio (incluso aunque nunca lleguemos a construir ninguna que lo
haga), o lo que perseguimos es una implementación real de una máquina pensante? Estas
cuestiones son realmente importantes puesto que todavía no disponemos de ninguna máquina
que posea amplias habilidades pensantes.
Algunas personas creen que las máquinas pensantes tendrían que ser tan complejas, y
disponer de una experiencia tan compieja (por ejemplo, interaccionando con el entorno o con
otras máquinas pensantes), que nunca seremos capaces de diseñarlas o construirlas. Una
buena analogía nos la proporcionan los procesos que regulan el clima global del planeta: incluso aunque conociésemos todo lo que es importante acerca de estos procesos, este
conocimiento no nos capacitaría necesariamente para duplicar el clima en toda su riqueza.
Ningún sistema menos complejo que el formado por la superficie de la tierra, la atmósfera y
los océanos - embebido en un espacio interplanetario, calentado por el sol e influenciado por
las mareas - sería capaz de duplicar los fenómenos climáticos con todo detalle.
De forma similar, la inteligencia de nivel humano, a escala real, podría ser-demasiado compleja,
o al menos demasiado dependiente de la fisiología humana, para existir fuera de su
encarnacién en seres humanos inmersos en su entorno. La cuestión de si alguna vez seremos
capaces, 0 no, de construir máguinas pensantes de nivel humano no admite aún una respuesta
definitiva. El progreso de la IA hacia esta meta ha sido constante, aunque más lento de lo que
algunos pioneros del tema habían predicho. Personalmente, soy optimista sobre nuestro
eventual éxito en esta empresa. 
`,
  "1.1.3. Pensar ": `Finalmente, llegamos a la palabra más difícil: pensar. En lugar de intentar definir esta palabra,
Turing propuso un test, el llamado Test de Turing, mediante el cual pudiera decidirse si una
máquina. particular es o no inteligente. El test fue descnpto originalmente como un juego.
Citemos del artículo de Turing (Turing, 1950):
En el juego participan tres personas, un hombre (A), una mujer (B) y un interrogador
(C), que puede ser de cualguier sexo. El interrogador permanece en una sala, separado
de los otros dos, pero pudiendo comunicarse con ellos mediante un teletipo. El objetivo
del juego para el interrogador es determinar cual de los otros dos es el hombre y cual
es la mujer. El interrogador los designa mediante las etiquetas X e Y, y al final del juego
debe decir “X es A e Y es B” 0 X es B e Y es A”, Para ello, el interrogador puede
plantear preguntas a A y a B, tales como: C: ¿Podría decirme X cual es la longitud de su
pelo? -
Supongamos que X es realmente A; entonces es A quien debe responder. El objetivo de
A en el juego es intentar que C haga una identificación errónea.
El objetivo del juego para el tercer participante (B) es ayudar al interrogador.
Ahora podemos plantearnos la siguiente cuestión: “¿Qué sucedería sí una máquina
interpretase el papel de A en el juego?” ¿El interrogador hará tantas identificaciones
erróneas como cuando el juego es interpretado por un hombre y una mujer? Estas
cuestiones reemplazan a nuestra cuestión original: "¿Pueden pensar las máquinas?”
A menudo, el Test de Turing se simplifica, planteándolo como un juego en el que una máquina
intenta convencer a un .interrogador humano de que ella es también humana. Esta version
simplificada del Test de Turing no se considera usualmente como un test de inteligencia muy
útil, debido a que es posible, incluso para programas muy simples, engañar al interrogador
humano durante un buen rato. Por ejemplo, el programa ELIZA de Joseph Weizenbaum (Prog.
AAO ANANO D AA ANO DNAO DD AN ANENO DNA
7
DOCTOR.PRO) usa algunos trucos muy simples para ello, pero es capaz de desarrollar un
diálogo que resulta aparentemente realista para el interrogador poco avezado, aunque es un
diálogo compietamente vano (Weizenbaum, 1965). El programa JULIA de Mauldin es también
un programa de diálogo de este tipo, pero más reciente y sofisticado (Mauldin, 1994).
Aparte del Test de Turing, una cuestión que merece la pena intentar responder es la de cuales
deben ser las habilidades requeridas en una máquina para que podamos calificarla como
inteligente. Actualmente, existen muchos programas de ordenador capaces de realizar cosas
realmente prodigiosas, incluyendo la planificación óptima de rutas aéreas para economizar
combustible, la simulación giobal de condiciones meteorológicas, la planificación del uso de
recursos en una factoría, etc. ¿Son inteligentes estos programas? ¿Deben ser considerados
como objeto de estudio de la IA? Habíamos comenzado este capítulo describiendo máquinas
que difícimente podrían ser etiquetadas como inteligentes. ¿Son gradualmente más y más
inteligentes conforme se incrementa su complejidad? Personalmente, lo creo así, pero ex¡sten
indudablemente opiniones para todos los gustos. 
`,

  "1.2. Aproximaciones a la IA ": `Aún aceptando que la TA ya ha sido capaz de producir algunos sistemas prácticos muy útiles, la
creencia general es que el objetivo último de alcanzar una inteligencia de nivel humano está
aún muy distante. Siendo esto así, todavía hay un gran debate sobre cuales son las mejores
aproximaciones hacía la IA - mejores en el sentido de sentar los fundamentos centrales para
conseguir las metas planteadas a largo plazo, así como mejores en el sentido de producir
resuitados prácticos a corto plazo - . En consecuencia, durante los últimos 40 años ha
emergido un cierto número de paradigmas diferentes. Cada uno de ellos tiene abogados
apasionados, y algunos han producido resuitados suficientemente interesantes como para no
ser descartados sin más. Quizá to que se requiere es una combinación apropiada de estas
aproximaciones diferentes. En cualquier caso, cada investigador cree, a menudo, que la suya
es la metodología avanzada que merece especial atención. Los principales paradigmas pueden
ser clasificados en dos grupos. 
`,
  "1.2.1. Basadas en procesamiento de símbolos ": `
El primer grupo incluye lo que llamarfamos las aproximaciones basadas en procesamiento
de símbolos. Se sustentan sobre la hipótesis del sistema físico: de símbolos de Newell y
Simon, y aunque esta hipótesis no puede considerarse aún como universalmente aceptada, en
ella se basa mucho de lo que podríamos llamar JA “clásica” (lo que el filósofo John Haugeland
llama “TA al viejo estilo”). Un miembro destacado de esta familia de aproximaciones es el que
se basa en la aplicacion de operaciones lógicas sobre bases de conocimiento declarativo.
Inspirado originalmente en los informes de John McCarthy sobre su “sistema consejero”
(McCarthy, 1958), este estilo de IA representa el “conocimiento” sobre un problema del
dominio mediante sentencias declarativas, a menudo basadas en sentencias de la lógica de
predicados o sustancialmente equivalentes a ellas. Para deducir consecuencias a partir de este
conocimiento se aplican técnicas de inferencia lógica. Este método admite numerosas variantes,
incluyendo aquellas cuyo énfasis está en la axiomatización formal del dominío en un lenguaje
lógico. Cuando se aplica a problemas “reales”, este método requiere la representación de una
cantidad sustancial de conocimiento del dominio, por lo que se suele hablar de aproximaciones
basadas en el conocimiento. Se han construido muchos sistemas basados en estos métodos y
nos referiremos a algunos de ellos más adelante.
En muchas de las aproximaciones basadas en procesamiento de símbolos, el análisis de los
comportamientos deseados, o la síntesis de máquinas para conseguirlos, se extienden a través
de varios niveles.
* El nivel superior corresponde al nivel del conocimiento (Newell, 1982), en el cual se
especifica el conocimiento necesario para que la máquina alcance sus objetivos.
* A continuación viene el nivel simbólico, donde se representa este conocimiento
mediante ‘estructuras simbólicas, como, por ejemplo, listas escritas 'en el lenguaje de
programación LISP, y se especifican operaciones sobre estas estructuras.
* Después están los niveles inferiores, en los cuales, realmente se implementan las
operaciones de procesamiento de símbolos. Muchas aproximaciones basadas en
procesamiento de símbolos utilizan una metodología de diseño “descendente”; se
comienza en el nivel de conocimiento y se procede hacia abajo a través de los niveles
simbólico y de implementación. 
`,
  "1.2.2. Aproximaciones subsimbólicas ": `El segundo grupo de aproximaciones hacia la IA incluye lo que se denominan aproximaciones
subsimbólicas. Estas siguen usualmente un estilo de diseño “ascendente”, comenzando en el
nivel más bajo y procediendo hacia los niveles superiores.
En los niveles más bajos, el concepto de simbolo no es tan apropiado como el concepto de
sefial. Entre las aproximaciones subsimbólicas, una aproximación muy prominente es la que
algunos han itamado “vida artificial”. Los defensores de este estilo (Wilson, 1991 y Brooks,
1990) señalan que la inteligencia humana se desarrolló solo después de más de mil millones
de años de vida sobre la tierra. Según elios, para conseguir máquinas inteligentes tendremos
que seguir muchos de estos pasos evolutivos. Primero, debemos concentrarnos en la
duplicación de las capacidades de procesamiento de señal y control de las que disponen los
animales más simples - los insectos, por ejemplo - y subir por la escalera evolutiva en pasos
sucesivos. Esta estrategia no solo conducirá a la obtención a corto plazo de máquinas útiles,
sino que desarrollará el substrato sobre el cual deben construirse necesariamente los niveles
superiores de inteligencia.
Este segundo grupo de aproximaciones también pone énfasis en los fundamentos simbólicos.
Brooks introdujo la hipótesis de los fundamentos físicos, en contraste con la hipótesis de los
sistemas físicos de simbolos (Brooks, 1990). Según su hipótesis, se puede obtener un
comportamiento complejo sin usar modelos centralizados; para ello, bastaría con dejar que los
diversos módulos de comportamiento de un agente interactúen independientemente con el
entorno. Sin embargo, Brooks acepta que para conseguir IA de nivel humano puede ser
necesaria la integración de las dos aproximaciones.
La interacción entre una máquina y su entorno conduce a lo que se denomina comportamiento
emergente. En palabras de una investigadora (Maes, 1990):
La funcionalidad de un agente debe verse como una propiedad emergente de la
interacción intensiva del sistema con su entorno dinámico. La especificación del
comportamiento del agente aislado no explica la funcionalidad -que -exhibe cuando el
agente está operando. Por el contrario, su funcionalidad se basa en gran medida en las
propiedades del entorno. No solo hay que tener en cuenta las características dinámicas
del entorno sino que éstas deben ser explótadas para servir al funcionamiento del
sistema.
Las redes neuronales son un ejemplo bien conocido de máquinas que provienen de la escuela
subsimbólica. Estos sistemas, inspirados en modelos biológicos, son interesantes,
principalmente por su capacidad de aprendizaje.
También se han conseguido resultados interesantes mediante procesos que simulan ciertos
aspectos de la evolución biológica: cruzamientu, mutación y reproducción de los organismos
mejor adaptados.
Otras aproximaciones ascendentes, cercanas a las aproximaciones del tipo “vida artificial”, se
basan en la teoría del control y en el andlisis de sistemas dinámicos.
A medio camino entre las aproximaciones descendentes y ascendentes está la basada en
autómatas situados (Kaelbling y Rosenschein, 1990). Kaelbiing y Rosenschein proponen un
lenguaje de programación para especificar, en un alto nivel de abstracción, el comportamiento
deseado en un agente, así como un compilador para crear la circuitería necesaria a partir de los programas escritos en este lenguaje. 
`,
  "1.3. Breve historia de la IA": `
Cuando empezaron a desarrollarse los primeros ordenadores durante las décadas de los años
40 y 50, algunos investigadores escribieron programas que podían realizar tareas elementales
de razonamiento. Entre los resultados más prominentes de esta época -podemos citar los
primeros: programas de ordenador capaces de jugar al ajedrez (Shannon, 1950; Newell, Shaw
y Simon, 1958), los programas capaces de jugar a las damas (Samuel, 1959; Samuel, 1967) y
los programas para demostrar teoremas de geometría plana (Gelernter, 1959). En 1956, John
McCarthy y Claud Shannon coeditaron un volumen titulado Automata Studies (Shannon y
McCarthy, 1956). La mayoría de los artículos del volumen trataban sobre los fundamentos
matemáticos de la teoría de autómatas, por lo que McCarthy, decepcionado, decidió acuñar
el término Inteligencia Artificial y usarlo como título de una conferencia celebrada en
Darmouth en 1956. En esta conferencia se presentaron algunos trabajos muy relevantes,
incluyendo uno de Allen Newell, Cliff Shaw y Herbert Simon sobre un programa llamado
Teorizador Lógico (Newell, Shaw y Simon, 1957), que podía demostrar teoremas en lógica
proposicional. Aunque se propusieron muchos otros términos para el campo, tales como
procesamiento de información compleja, inteligencia de máquinas, programación heurística o
cognología, solo el nombre de Inteligencia Artificial ha perdurado, sin duda a causa de la
creciente progresión de libros de texto, cursos, congresos y revistas que usaban este término.
El primer paso hacia la inteligencia artificial fue dado mucho tiempo atrás por Aristóteles (384-
322 a. C.), cuando comenzó a explicar y a codificar ciertos estilos de razonamiento deductivo
que él llamó silogismos. Algunos de los esfuerzos tempranos para automatizar la inteligencia
nos parecerían quijotescos hoy en día. Ramón LLull (1235-1316), un místico y poeta catalán,
construyó una máquina de engranajes, llamada Ars Magna, que supuestamente era capaz de
responder a todas las preguntas. Pero hubieron también científicos y matemáticos que
perseguían la automatización del razonamiento. Martin Gardner (Gardner, 1982) atribuye a
Gottfried Leibniz (1646-1716) el sueño de un “álgebra universal mediante la cual todo el
conocimiento, incluyendo las verdades morales y metafísicas, pueda ser algún día
representado en un único sistema deductivo”. Leibniz llamó a su sistema cálculo filosófico o
raciocinador, fue, claro está, un sueño que no pudo ser realizado con el aparataje tecnológico
de la época. No comenzó a haber un progreso sustancial hasta que George Boole (Boole, 1854)
desarrolló los fundamentos de la /ógica proposicional. El propósito de Boole, entre otras cosas,
era “recoger... algunos fundamentos probables relativos a la naturaleza y a la constitución de la
mente humana”. Hacia el final del siglo XIX, Gottlieb Frege propuso un sistema de notación
para el razonamiento mecánico, con lo que inventó mucho de lo que hoy conocemos con el
nombre de cá/culo de predicados (Frege, 1879). Llamó a su lenguaje Begriffsschrift, lo que
puede ser traducido como “escritura de conceptos”.
En 1958, John McCarthy propuso la utilización del cálculo de predicados como un lenguaje para
representar y usar conocimiento en un sistema al que liamó “sistema consejero” (McCarthy,
1958). A este sistema, en lugar de programarlo, había que decirle lo que necesitaba saber
para resolver un problema. Una modesta, pero influyente, implementación de estas ideas fue
abordada por Cordell Green en su sistema QA3 (Green, 1969). Como resultado de muchas
controversias entre los investigadores de la IA, el calculo de predicados y sus variantes han
sobrevivido como el fundamento básico para la representación del conocimiento.
Los lógicos del siglo XX, incluyendo a Kart Gúdel, Stephen Kleene, Emil Post, Alonzo Church y
Alan Turing, formalizaron y clarificaron lo que puede ser hecho y lo que no puede ser hecho
mediante sistemas lógicos y computacionales, Posteriormente, informáticos como Stephen
Cook y Richard Kart identificaron las clases de cómputos que, siendo posibles en principio,
requerirían cantidades de tiempo y de memoria completamente impracticables.
Muchos de estos resultados de la lógica y de la informática se referfan a “verdades que no
pueden ser deducidas” y a “cálculos que no pueden ser realizados”. Seguramente animados
por estos hallazgos negativos, algunos filósofos y científicos (Lucas, 1961; Penrose; 1989) los
interpretaron como confirmaciones de que la inteligencia humana no podría ser nunca
mecanizada. Estos pensadores crefan que los humanos son, de alguna forma, inmunes a las
limitaciones computacionales inherentes a las máquinas. Sin embargo, la mayoría de los
lógicos y de los informáticos creen que estos resultados negativos de ningún modo implican
que las máquinas tengan límites que no sean aplicables también a los humanos.
El primer artículo moderno que trataba sobre la posibilidad de mecanizar la inteligencia al
estilo humano fue el de Alan Turing que ya hemos citado anteriormente (Turing, 1950).
Durante el mismo período, Warren McCulloch y Walter Pitts teorizaban sobre las relaciones
entre elementos computacionales simples y neuronas biológicas (McCulloch y Pitts, 1943).
Demostraron que es posible calcular cualquier función computable mediante redes de puertas
lógicas. Otro trabajo, de Frank Rosenblatt (Rosenblatt, 1962), exploraba el uso de redes de
tipo neuronal, denominadas perceptrones, para el aprendizaje y el reconocimiento de patrones.
Algunas otras corrientes de trabajo, entre ellas la cibernética (Wiener, 1948), la psicología
cognitiva, la lingúística computacional (Chomsky, 1965) y la teoría del control adaptativo
(Widrow y Of., 1960), han contribuido también a esta matriz intelectual dentro de la cual se ha
desarrollado la IA.
Una gran parte del trabajo inicial en la IA (durante la década de los años 60 y la primera parte
de la década de fos 70) se dedicaba a explorar diversas representaciones de problemas,
técnicas de búsqueda y heurísticas generales que se aplicaban en programas de ordenador
capaces de resolver puzzles sencillos, de jugar contra el usuario o de recuperar información.
Uno de los programas más influyentes fue el Solucionador General de Problemas (GPS, o
General Problem Solver) de Allen Newell, Cliff Shaw y Herbert Simon. Entre los problemas de
muestra resuelto por estos sistemas pioneros se incluían la integración simbólica (Slagle,
1963), los problemas de álgebra (Bobrow, 1968), los puzzies análógicos (Evans, 1968) y el
control de robots móviles (Nilsson, 1984). Muchos de estos sistemas constituyen el tema
central de los artículos reunidos en el histórico volumen Computer and Thought (Feigenbaum y
Feldman, 1963).
Los intentos de “escalar” estos programas y sus técnicas para enfrentarlos a aplicaciones de
importancia práctica revelaron que solo valían para resolver “problemas de juguete”. La
construcción de sistemas más potentes requería la inclusión de mucho más conocimiento sobre
el dominio de aplicación. Los últimos años de la década de los 70 y los primeros de la década de los 80 vieron el desarrolio de programas más realistas, que contenían el conocimiento
necesario para mimetizar el comportamiento de fos expertos humanos en tareas tales como el
diagnóstico, el diseño y el análisis. Fueron explorados y desarrollados varios métodos para la
representación de conocimiento específica del problema. El programa al que se atribuye el
mérito de ser el primero que demostró la importancia de recoger grandes cantidades de
conocimiento específico del dominio fue DENDRAL, un sistema para predecir la estructura de
moléculas orgánicas a partir de su fórmula química y de su espectrograma de masas.
(Feigenbaum, Buchanan y Lederberg, 1971) (Lindsay, 1980). Después se desarroilaron otros
“sistemas expertos”, incluyendo sistemas para diagnóstico médico (Shortliffe, 1976 y Millar,
Pople y Myers, 1982), sistemas para configurar ordenadores (McDermott, 1982) y sistemas
para valorar posibles yacimientos de minerales (Campbell, 1982 y Duda, Gaschnig y Hart,
1979). Un buen resumen de la historia de la IA a lo largo de este período fue escrito por
(McCorduck, 1979).
Una de las áreas en la que se han realizado progresos sustanciales al escalar el tamaño del
problema es el área de los juegos. El 11 de mayo de 1997, un programa de ordenador de IBM,
denominado DEEP BLUE, cons¡gu¡o vencer al entonces campeón del mundo de ajedrez, Garry
Kasparov, por 3.5 a 2.5 en un éncuentro a seis partidas. Este alto nivel de juego se ha
conseguido gracias a la sinergia de sofisticados algoritmos de búsqueda, ordenadores de alta
velocidad y hardware específico para el juego del ajedrez,
La inteligencia humana abarca muchas habilidades, incluyendo la habilidad para percibir y
analizar escenas visuales y la habilidad para entender o generar el lenguaje. Estos son temas
específicos que han recibido mucha atención. Larry Roberts desarrolló uno de los primeros
programas de análisis de escenas (Roberts, 1963). Este trabajo preliminar fue seguido de una
extensa cantidad de investigación en visión artificial (Nalga, 1993) es un buen libro de texto
general, guiada mediante estudios científicos de los sistemas de visión animal (Letvin, 1959;
Hubel, 1988 y Marr, 1982).
Uno de los sistemas pioneros en comprensión del lenguaje natural fue el desarrollado por Ferry
Winograd (Winograd, 1972). Durante la década de los años 70 se lievó a cabo un proyecto
coordinado multicentro que desarrolló prototipos de sistemas para la comprensión fluida del
habla; el sistema LUNAR (Woods, 1973), desarrollado por William Woods, era capaz de
responder a preguntas orales en inglés sobre las muestras de rocas recogidas por las misiones
lunares de la NASA.
Aunque actualmente existen diversos sistemas de comprensión del lenguaje natural, su
competencia se restringe a áreas temáticas específicas y a vocabularios especializados. El
desarrollo de sistemas con un alcance más amplio requerirá de nuevos avances en la
representación de grandes cantidades de conocimiento general de sentido común. El proyecto
CYC (Guha y Lenat, 1990; Guha y Lenat, 1995) tiene como uno de sus objetivos la recogida y
representación de conocimiento de este tipo.
Aunque el interés en las redes neuronales decayó un poco tras el trabajo pionero realizado en
los últimos años de la década de los 50 por Frank Rosenblatt, resurgió con energía en los años
80. Las redes de elementos no lineales con interconexiones de pesos variables se consideran
actualmente como una clase muy importante de herramientas para el modelado no lineal. Hoy
en día existen diversas aplicaciones importantes de las redes neuronales. El trabajo sobre
redes neuronales, junto con el trabajo en temas de vida artificial, ha ayudado a focalizar la
investigación actual en IA sobre los problemas relacionados con la conexión entre procesos
simbólicos y los sensores y efectores de los robots inmersos en un entorno físico.
Si proyectamos las tendencias actuales hacia el futuro, es razonable esperar un nuevo énfasis
en el desarrollo de sistemas autónomos integrados, robots y “softbots”. Los softbots (Etzioni y
Weld, 1994) son agentes software que recorren Internet buscando la información que ellos
creen que puede ser de interés para sus usuarios, La constante presión ejercida para mejorar
las capacidades de los robots y de los agentes software motivará y guiará la investigación en
inteligencia artificial durante muchos años. `,
  "1.4. Mundo especial para agentes con 1A ": `
La investigación en IA ha conducido al desarrollo de numerosas ideas y técnicas relevantes
dirigidas al objetivo de automatizar la inteligencia. Estas ideas y técnicas serán descrlptas en el
contexto de una serie de “agentes” cada vez más capaces y complejos. Háy muchos tipos de
agentes y entornos que podríamos considerar,
. Mundo especial para agentes con 1A
Por ejemplo, podemos imaginar robots que trabajen en las condiciones de gravedad cero del
espacio exterior, en las aguas oscuras de los fondos oceánicos, en edificios de oficinas o en
factorías, o en el mundo simbólico de Internet. Pero estos agentes prácticos del “mundo real”
son a veces demasiados complejos para ilustrar de forma transparente los conceptos de la IA
en los que se basa su inteligencia.
En lugar, lo que haremos será introducir una serie de agentes “de juguete” en un entorno
ficticio al que llamaremos “mundo espacial cuadriculado”. Aunque este mundo simple es fácil
de describir, podemos añadirle cierta complejidad para hacerlo suficientemente rico como para
que requiera “inteligencia” en sus agentes.
El mundo espacial cuadriculado es un espacio tridimensional demarcado por una matriz
bidimensional de celdas a la que llamaremos "sue/o”. Cada celda puede contener objetos que
tienen diversas propiedades, y pueden existir "paredes” delimitando conjuntos de celdas. Los
agentes están confinados en el suelo y pueden moverse de celda a celda. Los objetos pueden
estar en el suelo o colocados sobre una pila de otros objetos apilados sobre el suelo. A veces,
usaremos solo el subespacio bidimensional definido por el suelo. En la Figura 1.2 se muestra
un ejemplo típico de mundo espacial cuadriculado, en el que hay dos robots. Uno de ellos es
un robot bidimensional sencillo, con sensores para percibir si las celdas adyacentes están o no
libres para moverse a ellas; el otro, más comp!ejo, dispone de un brazo con el que puede
maniputar objetos.
Los lectores ya familiarizados con la bibliografía sobre IA reconocerán fácilmente que el mundo
espacial cuadriculado puede ser particularizado a algunos de los muchos “mundos” utilizados
en la investigación sobre IA, incluyendo el mundo de bloques, el mundo del mosaico (Pollack y
Ringuette, 1990), el mundo de los wumpus (Russell y Norvig, 1955) y el mundo de las
hormigas (Koza, 1992). Todos ellos son mundos discretos, en el sentido de que existe un
número fínito de posiciones, de agentes, de objetos y de instantes de tiempo. Muchas de las
técnicas de la TA que describiremos se aplican a mundos discretos y requerirían un cierto
procesamiento subsimbélico para operar en mundos contínuos. 
`,
  "1.5, Sistemas que resuelven problemas de la IA ": `
¿Qué es la Inteligencia Artificial?
La Inteligencia Artificial (IA) estudia como lograr que las máquinas realicen tareas que, por el
momento, son realizadas mejor por los seres humanos. Esta definición es, por supuesto,
bastante efímera ya que hace referencia al estado actual de la informática. Además falla al no
incluir algunas áreas que potencialmente tienen un gran impacto, tales como aquellos
problemas que no pueden ser resueltos adecuadamente ni por las máquinas ni por los
hombres.
Los problemas de la Inteligencia Artificial
¿Cuáles son entonces los problemas de los que se ocupa la IA? La mayoría de los primeros
trabajos en este campo hicieron gran hincapié en las tareas formales, como juegos y
demostración de teoremas. Samuel escribió un programa de juego de damas que no solo
jugaba partidas contra un oponente, sino que además utilizaba la experiencia adquirida en las
partidas para mejorar su rendimiento. El ajedrez también suscitó un gran interés. La lógica
teórica fue el primer intento de demostrar los teoremas matemáticos; con ella se pudo
demostrar algunos teoremas que aparecen en el primer capítulo de los Principia Mathematica
de Whitehead y Russell. El demostrador de teoremas de Gelernter exploró otra área de las
matemáticas: la geometría. Los juegos y la demostración de teoremas comparten la propiedad
de que son tareas en las que se considera que es necesaria la inteligencia para desarrollarlas.
Otra primera incursión dentro de la TA se centró en la clase de problemas que aparecen a
diario - como cuando decidimos como llegar al trabajo por la mañana - con frecuencia
denominados de sentido común. Estos problemas incluyen el razonamiento sobre objetos
físicos y sus relaciones (por ejemplo, un objeto solo puede estar en un lugar a la vez), como
también razonamiento sobre acciones y sus consecuencias (por ejemplo, si se deja caer algo,
chocará contra el suelo y posiblemente se romperá). Para estudiar este tipo de razonamientos,
Newell, Shaw y Simon construyeron el Resolutor General de Problemas, el cual se aplicó tanto
a variadas tareas de sentido común como al problema de realizar manipulaciones simbólicas
en expresiones lógicas,
Conforme las investigaciones en IA progresaron y fueron desarrollándose técnicas de
manipulación de grandes cantidades de conocimiento sobre el mundo, se realizaron algunos avances en las tareas descriptas y aparecieron nuevas áreas de investigación. Estas áreas
incluyen la percepción (visión y habla), comprensión del lenguaje natural y resolución de
probiemas en campos especializados como diagnósticos médicos y análisis quimico.
Las tareas de percepción son difíciles ya que incluyen señales analógicas (previas a las
digitales); estas señales suelen contener bastante ruido aunque normalmente se percibe a la
vez una gran cantidad de objetos (algunos de los cuafes pueden estar parcialmente tapados
por otros).
La habilidad de utilizar un lenguaje para comunicar gran variedad de ideas es quizá el aspecto
más importante que separa a los humanos del resto de los animales. La comprensión del
lenguaje hablado es un problema de percepción dificil de resolver por las razones ya explicadas.
Es posible, sin embargo, restringir el problema al lenguaje escrito. Este problema,
normalmente denominado comprensión del lenguaje natural, es aún extremadamente difícil.
Para poder comprender frases sobre un cierto tema, es necesario no solo poseer un
conocimiento amplio sobre el propio lenguaje (vocabulario y gramática), sino también manejar
el suficiente conocimiento sobre dicho tema para reconocer las suposiciones no expresadas en
el texto.
Además de estas tareas de la vida diaria, mucha gente puede también realizar tareas más
especializadas en las cuales es necesaria una cuidada adquisición de experiencia. Ejemplos de
lo anterior son tareas como el diseño en ingeniería, los descubrimientos científicos, los
diagnósticos médicos y la planificación financiera. Los programas que pueden resolver
problemas sobre estos dominios también están bajo la tutela de la inteligencia artificial.
Si bien las habilidades de un experto necesitan un conocimiento que la mayoría no poseemos, con frecuencia es mucho menor que el conocimiento necesario en las tareas más comunes, y
con frecuencia más fácil de representar y tratar en los programas.
Como consecuencia, las areas donde la TA está prosperando como una disciplina práctica (en
oposición a una puramente de investigación) es precisamente en los dominios donde es
necesario únicamente un conocimiento experto sin la ayuda de sentido común. Existen en la
actualidad miles de programas llamados sistemas expertos utilizados diariamente en cualquier
área de la industria y la administración. Cada uno de estos sistemas intenta resolver parte, o
quizás todos los problemas de cierta entidad que antes necesitaban gran cantidad de
conocimiento técnico humano. 
¿Cuáles son nuestras suposiciones fundamentales sobre la inteligencia?
¿Qué tipo de técnicas son las más adecuadas para resolver los problemas de IA?
¿A qué nivel de detalle, si es que no es por completo, se puede intentar modelar la inteligencia
humana?
¿Cómo se puede saber cuándo se ha tenido éxito en la construcción de un programa
inteligente? 

Las suposiciones subyacentes
En el centro de las investigaciones sobre inteligencia artificial aparece lo que Newell y Simon
(1976) llaman la hipótesis del sistema de símbolos físicos. Ellos definen un sistema de
simbolos físicos como sigue:
Un sistema de símbolos físicos consiste en un conjunto de entidades,
llamadas símbolos, que son patrones físicos que pueden funcionar como
componentes de otro tipo de entidad llamada expresión (o estructura de
símbolos). De esta forma, una estructura de símbolos está compuesta
por un número de instancias (señales o tokens) de símbolos
relacionados de alguna forma física (como que una señal debe seguir a
otra). En algún instante, el sistema contendrá una colección de estas
estructuras de símbolos. Además de estas estructuras, el sistema
contiene también una colección de procesos que operan sobre expresiones para producir otras expresiones: procesos de creación, modificación, reproducción y destrucción. Un sistema de símbolos físicos
es una máquina que produce a lo largo del tiempo una colección
evolutiva de estructuras de símbolos, Este sistema existe en un mundo
de objetos tan extenso como sus propias expresiones simbólicas.
Ellos entonces enunciaron la hipótesis así:
La hipótesis del sistema de simbolos físicos. Un sistema de símbolos físicos posee los
medios necesarios y suficientes para realizar una acción inteligente genérica.
Esta hipótesis es solo una hipótesis. Esto significa que no hay manera de probarla o refutarla
hablando en términos lógicos. De esta forma, debe estar sujeta-a una validación empírica.
Puede encontrarse que es falsa. Puede encontrarse que el peso de la evidencia dice que es
cierta. Pero el único camino para determinar su certeza es mediante la experimentación.
Las computadoras proporcionan el medio perfecto para esta experimentación ya que pueden
ser programadas para simular cualquier sistema de simbolos físicos.
Como la facilidad de construcción de máquinas para computar se ha ido incrementando,
también se ha incrementado la posibilidad de dirigir las investigaciones empíricas hacia la
hipótesis del sistema de simbolos físicos. En cada investigación, se selecciona una tarea
concreta en la que pueda considerarse que es necesario el uso de la inteligencia. Se propone un programa que realice esa tarea y a continuación se comprueba.
Sin embargo, modelos subsimbólicos (como. por ejemplo, las redes neuronales) están
comenzando a cuestionar los simbólicos como tareas de bajo nivel. Aún hoy se debaten ciertos
conflictos entre modelos simbólicos y la hipótesis del sistema de símbolos físicos. Y es
importante hacer notar que el éxito de los sistemas subsimbólicos no es necesariamente una
evidencia en contra de la hipótesis. Con frecuencia es posible !levar a cabo una tarea de más
de una forma.
La importancia de la hipótesis del sistema de simbolos fisicos es doble. Es una teoría
significativa de la naturaleza de la inteligencia humana y también es de gran interés para los
psicólogos. Esto también forma la base de la creencia de que es posible construir programas
que lleven a cabo las tareas inteligentes que son ahora realizadas por la gente.
¿Qué es una técnica de IA?
Los problemas abordados por la inteligencia artificial configuran un amplio espectro. Tienen
muy poco en común excepto que todos ellos son complicados. ¿Existen entonces técnicas
apropiadas para solucionar algunos de estos probiemas? La respuesta es afirmativa, los hay.
¿Qué puede decirse de estas técnicas, si es que se puede, aparte del hecho de que manipulan
simbolos?
Uno de los más rápidos y sólidos resuitados que surgieron en las primeras tres décadas de las
investigaciones en IA fue que la inteligencia necesita conocimiento. Para compensar este
arrollador logro, imprescindiblemente, el conocimiento posee algunas propiedades poco
deseables, tales como:
- Es voluminoso.
- Es difícil caracterizarlo con exactitud.
- Cambía constantemente.
- Se distingue de los datos en que se organiza de tal forma que se corresponde con la
forma en que va a ser usado. 
Entonces, ¿en qué punto nos quedamos en la definición de una técnica de IA?
Concluimos en que una técnica de TA es un método que utiliza conocimiento representado de
tal forma que:
e El conocimiento representa las generalizaciones. En otras palabras no es necesario
representar de forma separada cada situación individual. En lugar de esto, se agrupan
las situaciones que comparten propiedades importantes. Si el conocimiento no posee
esta propiedad, puede necesitarse demasiada memoria. Si no se cumple esta propiedad
es mejor hablar de “datos” que de conocimiento.
» Debe ser comprendido por las personas que lo proporcionan. Aunque en muchos
programas, los datos pueden adquirirse automáticamente (por ejemplo, mediante
lectura de instrumentos), en muchos dominios de la IA, la mayor parte del
conocimiento que se suministra a los programas lo proporcionan personas, haciéndolo
siempre en términos que ellos comprenden.
o Puede modificarse fácilmente para corregir errores y reflejar los cambios en el mundo y
en nuestra visión del mundo.
e Puede usarse en gran cantidad de situaciones aun cuando no sea totalmente preciso o
completo.
e Puede usarse para ayudar a superar su propio volumen, ayudando a acotar el rango de
posibilidades que normalmente deben ser consideradas, 

Como conclusión se ponen de manifiesto tres importantes técnicas de IA:
Búsqueda: proporciona una forma de resolver los problemas en los que no se dispone de un
método más directo tan bueno como una estructura en la que empotrar algunas técnicas
directas existentes.
Uso del conocimiento: proporciona una forma de resolver problemas complejos explotando las
estructuras de los objetos involucrados.
Abstracción: proporciona una forma de separar aspectos y variaciones importantes de aquellos
otros sin importancia y que en caso contrario podrian colapsar un proceso.
Para solucionar problemas complicados los programas que utilizan estas técnicas presentan
numerosas ventajas frente a los que no lo hacen. Los primeros son mucho menos frágiles, no
se despistarán totalmente debido a una pequeña perturbación en la entrada. El conocimiento
del programa es comprendido fácilmente por la gente. Y estas tétnicas pueden trabajar con
fácilidad en grandes problemas en donde los métodos directos fallan. 
El nivel del modelo
Antes de ponerse en tarea, es una buena idea decidir qué es exactamente lo que se intenta
lograr. .Podemos preguntarnos ¿Qué pretendemos al construir programas que realicen las
tareas inteligentes que los humanos hacen? ¿Estamos intentando construir programas que
realicen las tareas de la misma forma en que lo hace el hombre? O ¿Estamos intentando
construir programas que simplemente realicen las tareas de la forma que parezca más sencilla?
Han existido proyectos de TA centrados en cada uno de estos objetivos.
Los esfuerzos dedicados a construir programas que lleven a cabo tareas de la misma forma
que el hombre, se dividen en dos clases. 
* Los programas de la primera clase se encargan de problemas que no se adecuan mucho
con nuestra definición de tarea perteneciente a la IA; son aquellos problemas que una
computadora puede resolver fácilmente, pero cuya resolución implica el uso de
mecanismos de los que no dispone el hombre. Un ejemplo clásico de esta clase de
programas lo constituye el Observador y Memorizador Elemental (EPAM) (Elementary
Perceiver and Memorizar) (Feigenbaum, 1963), el cual memoriza parejas asociadas de
silabas sin sentido. Memorizar parejas de sílabas sin sentido es fácil para una
computadora: simplemente se almacenan. Para recuperar una sílaba correspondiente
dado su estímulo, la computadora examina la silaba estimulada y responde con la que está almacenada a continuación.
* La segunda clase de programas que intentan modelar lo humano, son aquelias que
realizan tareas que se adecuan claramente con nuestra definición de tareas de IA.
Hacen cosas que no son triviales para una computadora. 
Hay varias razones para querer modelar la forma de trabajar humana para llevar a cabo estas
tareas:
* — Verificar las teorías psicológicas de la actuación humana. PARRY (Colby, 1975) es un
ejemplo de programa escrito por esta razón; utiliza un modelo de comportamiento
paranoico humano para simular el comportamiento conversacional de una persona
paranoica. El programa resultó lo suficientemente bueno como para que algunos
psicólogos que tuvieron la oportunidad de conversar con el programa mediante un
terminal, diagnosticaran que su comportamiento era paranoico.
* Capacitar a las computadoras para comprender el razonamiento humano..Por ejemplo,
que una computadora pudiera leer un artículo en el períódico y al responder a
preguntas tales como ¿Por qué los terroristas mataron a los rehenes? El programa
pueda simular los procesos de razonamiento de los seres humanos.
* Capacitar a la gente para comprender a las computadoras. En muchas circunstancias, la
gente no está dispuesta a fiarse del resultado de una computadora a no ser que
entienda como ha llegado la máquina a esa conclusión. Si el proceso de razonamiento
de una computadora es similar al humano, producir una explicación adecuada resultaría mucho más facil.
* Explotar el conocimiento que se puede buscar en el hombre. Debido a que el hombre es el sistema del que mejor se conoce cómo lleva a cabo las tareas con las que estamos
familiarizados, tiene sentido fijarse en él para buscar pistas de cómo actuar. 
Esta última motivación es probablemente la más penetrante de las cuatro. Motivó desde el
principio la aparición de sistemas que intentaban obtener un comportamiento inteligente
imitando al hombre a nivel de las neuronas individuales. Ejemplos de esto son los primeros
trabajos teóricos de McCulloch y Pitts (1943), el trabajo sobre perceptrones, desarrollado en
principio por Frank Rosenblatt, pero descrito mejor en Perceptrons (Minsky y papera, 1969) y
Design for a Brain (Sabih, 1952). Se demostró, sin embargo, que era imposible producir un
comportamiento mínimamente inteligente con estos sencillos dispositivos. Una de las razones
era que habia severas limitaciones teóricas en la arquitectura de fa red neuronal que se estaba
utilizando. Más recientemente han surgido nuevas arquitecturas de redes neuronales, Estas
estructuras no se hallan sujetas a as mismas limitaciones teóricas que los perceptrones. Estas
nuevas arquitecturas se denominan imprecisamente “conexionadas” (conectionist), y se usan
como base para programas de resolución de problemas y aprendizaje. 
Criterios de determinación del éxito
Una de las preguntas más importantes a responder en toda investigación científica o de
ingeniería es ¿Cómo sabremos si hemos tenido éxito?. La Inteligencia Artificial no es una
excepción. ¿Cómo podemos saber si hemos construido una máquina inteligente?
En 1950, Alan Turing propuso el siguiente método para determinar si una máquina es capaz de
pensar. Este método es conocido como el test de Turing. Para realizarlo se necesitan dos
personas y la máquina que se desea evaluar. Una de las personas actúa de entrevistador y se
encuentra en una habitación, separado de la computadora y de la otra persona. El
entrevistador hace preguntas tanto a la persona como a la computadora mecanografiando las
cuestiones y recibe las respuestas de igual forma. El entrevistador solo los conoce por A y B, y
debe intentar determinar quien es la persona y quien la máquina. El objetivo de la máquina es
hacer creer al entrevistador que es una persona, si lo consigue, se concluye que la máquina
piensa. Se permite que ésta haga cualquier cosa para engañar al entrevistador. Así, por
ejemplo, si la pregunta es ¿Cuánto es 123324 por 73981? La máquina podría esperar unos
minutos y responder erróneamente (Turing, 1963).
El aspecto más serio, sin embargo, es la cantidad de conocimiento que necesitaría la máquina
para pasar el test de Turing.
Aún tendrá que pasar mucho tiempo para que una máquina supere el test de Turing. Algunos piensan que nunca lo harán. Pero supongamos que estamos dispuestos a aceptar menos que
una imitación completa de la persona. ¿Podemos calibrar el éxito de la IA en dominios más
restringidos?
Con frecuencia la respuesta es afirmativa. Algunas veces se puede dar una medida bastante
buena del logro obtenido por un programa. Por ejemplo, un programa puede jugar al ajedrez
al mismo nivel que los jugadores humanos; su nivel vendrá dado por el de los jugadores a los
que pueda derrotar. Actualmente, los programas logran clasificaciones más altas que la
inmensa mayoría de los jugadores de ajedrez. Para otros dominios, es posible dar una medida
menos precisa del éxito de un programa. Por ejemplo, DENDRAL, es un programa que analiza
componentes orgánicos para determinar su estructura. Es cruel dar una medida precisa del
nivel de éxito de DENDRAL, comparándolo con el de los químicos; sin embargo, se han logrado
análisis que han sido publicados como resultados de investigación original. Desde luego es al
menos una ayuda competente.
En otros dominios técnicos, es posible hacer una comparación del tiempo que tarda un
programa en llevar a cabo una determinada tarea con el que tarda una persona en hacer lo
mismo. Por ejemplo, existen bastantes programas usados por empresas de informática para
configurar sistemas particulares a las necesidades del cliente (en donde el programa R1 es
pionero). Estos programas normaimente necesitan minutos para realizar tareas que antes
reguerían horas para un habilidoso ingeniero. Estos programas se evalúan normalmente
atendiendo a si se ahorra o se gana dinero.
Si lo que se quiere es escribir programas que simulen el comportamiento humano ante una
tarea, la forma de medir el éxito está en que el comportamiento del programa se corresponda
con el humano, así como mediante distintas clases de experimentos y análisis de protocolos.
En este sentido no se busca un programa que simplemente sea tan bueno como sea posible,
se busca un programa que falle donde la gente lo hace. 
`,
  "1.5.1. Acciones que debe llevar'a cabo el sistema ": `
Para construir un sistema que resuelva un problema específico, es necesario realizar estas cuatro acciones:
* Definir el problema con precisión. La definicion debe incluir especificaciones precisas
tanto sobre la o las situaciones iniciales como sobre las situaciones finales que se
aceptarían como soluciones al problema.
* Analizar el problema. Algunas caracteristicas de gran importancia pueden tener un gran
efecto sobre la conveniencia o no de utilizar las diversas técnicas que resuelven el
problema.
* — Aisfar y representar el conocimiento necesario para resolver el problema.
* Elegir la mejor técnica que resuelva el problema y aplicarla al probiema particular, 
`,
  "1.5.2. Definición del problema mediante una búsqueda en espacio de estados ": `
Suponga que comenzamos por el problema de “Jugar al ajedrez”. A pesar de que es previsible
que la mayoría de la gente únicamente con esta sentencia actúe correctamente, la definición
del probiema tal y como está, es incompleta. Para construir un programa que “juegue al
ajedrez”, primero se debe especificar la posición inicial del tablero, las reglas que definen los
movimientos legales y las posiciones del tablero que representan una victoria tanto para un
lado como para el otro. Además, se debe explicitar previamente el objetivo implícito de no solo
realizar un movimiento legal de ajedrez, sino también ganar la partida, si es posible.
Para el problema de “jugar al ajedrez” es bastante fácil dar una descripción formal y completa
del problema. La posición inicial se puede describir como un array de 8 por 8 posiciones donde
cada una contiene un simbolo, de acuerdo con las piezas situadas en posición de comienzo de
una partida oficial de ajedrez. El objetivo se define como cualquier posición del tablero en la
que el contrario no pueda realizar ningún movimiento lega! y su rey esté amenazado.
Los movimientos legales representan la forma de ilegar a algún estado objetivo partiendo del
estado inicial, Se pueden describir fácilmente como un conjunto de reglas compuestas por dos partes: una parte izquierda que se usa a modo de patrón para ser contrastado con la situación
actual del tablero, y una parte derecha que describe el cambio que debe producirse en el
tablero para que refleje el movimiento.
Existen diferentes formas de expresar estas reglas; una de ellas es la que se muestra en la
Figura 1.3. 
Sin embargo, si se utilizan reglas como la anterior, es necesario escribir un número muy
grande de ellas, ya que existiría una regla para cada una de las 10? posibles posiciones del
tablero. Al usar tal cantidad de reglas aparecen dos serias dificultades prácticas:
e :.Nadie puede suministrar un conjunto completo de tales reglas. Serían demasiadas y no
se podría evitar la aparición de errores.
* Ningún programa puede manipular todas estas reglas. Podría usarse un sistema de
hashing para poder encontrar más rápidamente las reglas más relevantes pero aún así,
almacenar tantas reglas crea muchas dificultades. 
Con el fin de minimizar estos problemas, se debe buscar la forma de escribir las reglas que
describen los movimientos legales de la forma más general posible. Para lograrlo, es adecuado
introducir una notación conveniente para describir los patrones y las sustituciones. Por ejemplo,
la regla descripta en la Figura 1.3, al igual que muchas como ella, puede escribirse como se
muestra en la Figura 1.4. En general, cuanto más sucintamente se describan las reglas, menos
trabajo se empleará para introducirlas y el programa las usará con más eficiencia. 
Se ha definido el problema de jugar al ajedrez como un problema de movimientos a través de
un espacio de estados, donde cada estado se corresponde con una posición legal del tablero.
Se puede entonces jugar al ajedrez, comenzando a partir de un estado inicial, mediante el uso
de un conjunto de reglas de movimientos que trasladan de un estado a otro para intentar
finalizar en alguno de los estados finaies.
La representación como espacio de estados surge de forma natural en el ajedrez, ya que el
conjunto de estados, que se corresponde con el conjunto de posiciones del tablero, es artificial
y bien estructurado. El mismo tipo de representación es también adecuada para problemas
menos estructurados, aunque sea necesario utilizar estructuras más complejas que una matriz
para describir un estado individual. La representación como espacio de estados forma la base
de la mayoría de los métodos de TA que se discuten aquí. Su estructura se corresponde con la
estructura de la resolución de problemas por dos importantes razones:
* Permite definir formalmente el problema, mediante la necesidad de convertir alguna
situación dada en la situacion deseada usando un conjunto de operaciones permitidas.
* Permite definir el proceso de resolución de un problema como una combinación de
técnicas conocidas (representadas por una regla que define un movimiento en el
espacio) y búsqueda, la técnica general de exploración en el espacio intenta encontrar
alguna ruta desde el estado actual hasta un estado objetivo. La búsqueda es un proceso
de gran importancia en la resolución de problemas difíciles para los que no se dispone
de técnicas más directas.
Con el fin de percibir la generalidad de la representación en espacio de estados, se muestra su
uso para describir un problema muy diferente al de jugar al ajedrez.
El problema de las jarras de agua: Se tienen dos jarras, una de cuatro litros de capacidad y
otra de tres. Ninguna de ellas tiene marcas de medición. Se tiene una bomba que permite .
llenar las jarras de agua. ¿Cómo se puede lograr tener exactamente dos litros de agua en la
jarra de cuatro litros de capacidad?
Para este problema el espacio de estados se puede representar como un conjunto de pares
ordenados de enteros (x,y), de forma que x = 0, 1,2,30 4ey = 0, 1, 2 0 3; x representa el
número de litros de agua que almacena la jarra de cuatro litros, e y representa la cantidad de
agua de la jarra de tres. El estado inicial es (0,0). El estado objetivo es (2,n) siendo n
cualquier valor (el problema no especifica cuantos litros debe haber en la jarra de tres litros). 
Los operadores usados para resolver el problema se describen en la Figura 15. Al igual que en
el problema del ajedrez, están representados en forma de reglas en las que la parte izquierda
se compara con el estado actual, y en las que la parte derecha describe el nuevo estado al que se liega mediante la aplicación de la regla. 
Resumiendo lo dicho anteriormente, para poder producir una descripción formai de un
problema debe hacerse lo siguiente:
e Definir un espacio de estados que contenga todas las configuraciones posibles de los
objetos más relevantes (y quizá algunos imposibles). Es, por supuesto, posible definir
este espacio sin tener que hacer una enumeración de todos y cada uno de los estados
que contienen.
* Identificar uno o más estados que describan situaciones en las que comience el proceso
de resolución del problema. Estos se denominan estados iniciales.
* Especificar uno 0 más estados que pudieran ser soluciones aceptables del problema.
Estos estados se denominan estados objetivo.
* Especificar un conjunto de reglas que describan las acciones (operadores) disponibles.
De esta forma, el problema puede resolverse con el uso de las reglas en combinación con una
estrategia apropiada de control para trasladarse a través del espacio problema hasta encontrar
una ruta desde un estado inicial hasta un estado objetivo.
`,
};

document.addEventListener("auxclick", function (event) {
  const selection = window.getSelection().toString();
  if (selection.length === 0) {
    return;
  }

  if (event.button !== 1) {
    return;
  }

  const detected_sections = [];
  for (const [section, content] of Object.entries(teory)) {
    if (content.includes(selection)) {
      detected_sections.push(section);
    }
  }

  if (detected_sections.length > 0) {
    alert(
      `Se detecto el contenido textal en las siguietens secciones:${JSON.stringify(detected_sections)}`,
    );
  } else {
    alert("No se econtro el contenido textualmente");
  }
});
