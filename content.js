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
  "1.5.3. Sistemas de producción ": `
Debido a que la búsqueda es el núcleo de muchos procesos inteligentes, es adecuado
estructurar los programas de IA de forma que se facilite describir y desarrollar el proceso de
búsqueda. Los sistemas de producción proporcionan tales estructuras. Más abajo se introduce
una definición de sistema de producción. Conviene no confundirse con otros usos de la palabra
producción, tales como lo que se produce en una fábrica.
Un sistema de producción consiste en:
e Un conjunto de reglas compuestas por una parte izquierda (un patrén) que determina
la aplicabilidad de la regla y una parte derecha, que describe la operación que se lleva a
cabo si se aplica la regla.
* Una o más bases de datos/conocimiento que contengan cualquier tipo de información
apropiada para la tarea en particular. Partes de la base de datos pueden ser
permanentes, mientras que otras pueden hacer referencia solo a la solución del
problema actual. La información almacenada en estas bases de datos debe
estructurarse de forma adecuada.
e Una estrategia de control que especifique el orden en el que las reglas se comparan con
la base de datos, y la forma de resolver los conflictos que surjan cuando varias reglas
puedan ser aplicadas a la vez.
s Un aplicador de reglas.
(Prog. GRANJERO.PRO)
Hasta aquí, la definición de un sistema de producción es muy general. Abarca una gran
cantidad de sistemas, incluyendo nuestras descripciones del jugador de ajedrez y de la
solución al problema de las jarras de agua. También abarca una familia de intérpretes
generales de sistemas de producción que incluye:
» tLenguajes básicos de sistemas de producción, tales como OPS5 (Brownston, 1985) y
ACT* (Anderson, 1983).
* Sistemas más complejos, con frecuencia híbridos, denominados armazones de sistemas
expertos (expert systems sheil), los cuales poseen entornos completos (hablando
relativamente) para la construcción de sistemas expertos basados en conocimiento.
e Arquitecturas generales de resolución de problemas tales como SOAR (Laid, 1987),
sistema basado en un conjunto específico de hipótesis motivadas cognoscitivamente por
la naturaleza del problema a resolver.
Todos estos sistemas mantienen la arquitectura de un sistema de producción en su totalidad y
permiten que el programador escriba reglas para definir los problemas particulares que tienen
que resolverse. 
`,
  "1.5.4. Análisis del problema": `
La búsqueda heurística es un método muy general que se puede aplicar a una gran clase de
problemas. Incluye gran variedad de técnicas especificas, cada una de las cuales es
particularmente efectiva para una pequeña clase de problemas. A fin de poder elegir el método
más apropiado (o una combinación de métodos) para un problema en particular, es necesario
analizarlo con arreglo a varias dimensiones clave:
* ¿Puede el problema descomponerse en un conjunto de subproblemas independientes (o
casi) más pequeños o sencillos?
* ¿Pueden ignorarse pasos dados o al menos deshacerse si se comprueba que no eran
adecuados?
* ¿Es predecible el universo del problema?
* ¿Una solución es buena de manera evidente, sin necesidad de compararla con todas las
demás posibles soluciones?
* Lasolución deseada, ¿es un estado del mundo o una ruta hacia algún estado?
e ¿Es necesaria una gran cantidad de conocimiento para resolver el problema o solo es
necesario para restringir la búsqueda?
* La computadora a la que simplemente se le da el problema ¿Puede emitir una soludón, o es necesario que ésta interactúe con una persona? 
¿Puede descomponerse el problema?
Suponga que se desea resolver el problema de calcular la expresión:
J.(xz +3x + sen?á — cos? x)dx
Se puede resolver este problema descomponiéndolo en tres problemas más pequeños, cada
uno de los cuales puede resolverse usando una pequeña colección de reglas específicas. La
Figura 1.6 muestra el árbol del probiema que se genera mediante el proceso de
descomposición. El árbol puede generarse con un sencillo programa recursivo de integración
de esta forma: en cada paso, se verifica si el problema en el que se trabaja se puede resolver
directamente. Si lo es, se devuelve inmediatamente la respuesta. Si el problema no se puede
resolver fácilmente, el integrador verifica si puede descomponer el problema en otros más
simples. Si .puede, crea estos problemas y se llama recursivamente a sí mismo con ellos.
Mediante el uso de esta técnica de descomposición del problema, se pueden resolver
fácilmente problemas muy grandes. 
Considere ahora el problema ilustrado en la Figura 1.7. Este problema está extraído de un
dominio que con frecuencia está referenciado en la literatura de IA como el mundo de los
bloques. Se permiten los siguientes operadores:
DESPEJADO (x) [el blogue x no tiene nada sobre él] > SOBRE (X, Mesa) [coge x y ponlo sobre
la mesa]
DESPEJADO () y DESPEJADO (y) > SOBRE (X, y) [poner x sobre y] 
La aplicación de la técnica de descomposición del problema a este sencillo ejemplo de mundo
de bloques se lleva al árbol solución mostrado en la Figura 1.8. En la figura, los objetivos están
subrayados; los estados alcanzados no lo están. La idea de esta solución es la de reducir el
problema de conseguir B sobre C y A sobre B a dos problemas separados. El primero de estos
nuevos problemas, conseguir B sobre C, es sencillo, dado el estado inicial. Simplemente se
coloca B sobre C. El segundo subobjetivo no es tan sencillo, puesto que los únicos operadores
permitidos toman un solo bloque a la vez, se tiene que eliminar A quitando C antes de coger A
y situarlo sobre B. Esto puede hacerse facilmente. Sin embargo, al intentar combinar las dos
subsoluciones en una sola, se falla. Independientemente de cua! se haga primero, no se podrá
realizar el segundo tal y como se ha planeado. En este problema los dos subproblemas no son
independientes. Interactúan, y tales interacciones deben ser consideradas a fin de liegar a una
solución para la totalidad del problema. 

¿Pueden deshacerse o ignorarse pasos hacia una solución?
Suponga que se intenta probar un teorema matemático. En primer lugar se prueba un lema
que se piensa que será útil. En cierto instante, se comprueba que el lema no supone una
ayuda para nada. ¿Se está en un apuro?
No. Todo lo que se necesita saber para probar el teorema es todavía cierto .y está memorizado.
Algunas reglas que pudieron aplicarse al principio aún pueden hacerlo. Basta con continuar 
como si se comenzara de nuevo. Todo el esfuerzo realizado se ha perdido en explorar un
callejón sin salida.
El 8-puzzle: El 8-puzzle es un cajón cuadrado en el que hay situados ocho bloques cuadrados.
El cuadrado restante está sin rellenar. Cada bloque tiene un número. Un bloque adyacente al
hueco puede deslizarse hacia él. El juego consiste en partir de una posición de salida para
ilegar a una posición especificada como objetivo. El objetivo es transformar la posición inicial
en la posición objetivo mediante el deslizamiento de los bloques.
En la Figura 1.9 se ve un juego de muestra con el 8-puzzle. Al intentar resolver el 8-puzzle, se
pueden realizar movimientos estúpidos. Por ejemplo, en el juego que se muestra arriba, se
podría empezar deslizando el blogue 5 al espacio vacio. Al hacer esto, no se podrá deslizar el
bloque 6 al hueco porque éste se ha movido, pero podemos volver atrás y deshacer el primer
movimiento, deslizando el bloque 5 adonde estaba. Entonces ya podemos mover el bioque 6.
Los errores pueden recuperarse también, pero no de una forma tan sencilla como en el
problema de la demostración del teorema. Se debe realizar un paso adicional para deshacer
cada movimiento incorrecto, mientras que no se necesita realizar ninguna acción para
“deshacer” un lema inútil. Además, el mecanismo de contro! de resolución de un 8-puzzie no
debe perder de vista el orden en que se realizan las operaciones para que éstas puedan
deshacerse si es necesario. La estructura de control del demostrador de teoremas no necesita
almacenar toda esta información. 

Considere otra vez el problema del juego del ajedrez. Suponga que un programa que juegue al
ajedrez realiza un movimiento estúpido y cae en la cuenta un par de movimientos después; el
programa no puede jugar como si nunca hubiera hecho el movimiento estúpido ni puede volver
atrás y empezar el juego desde ese punto. Todo lo que puede hacer es intentar hacerlo mejor
en la situación actual y partir desde ésta. 

Estas tres definiciones hacen referencia a los pasos de la solución de un problema y, por lo tanto, pueden surgir para caracterizar sistemas de producción específicos para resolver
problemas más que el problema en sí mismo. Quizá una formulación diferente de un mismo
problema haría que el probiema fuera caracterizado de forma diferente. Estrictamente
hablando, esto es cierto. Sin embargo, debido a muchos grandes problémáas, existe solo una
formulación (o un pequeño número de ellas esencialmente equivalentes) que de forma natural
describe el problema. Esto es así para cada uno de los problemas expuestos anteriormente.
Cuando éste sea el caso, tiene sentido considerar la recuperabilidad de un- problema de forma
equivalente a la recuperabilidad de una formulación natural para él.
La recuperabilidad de un problema juega un papel importante en la determinación de la
compiejidad de la estructura de control necesaria para resolver el problema. Los problemas.
ignorables se resuelven utilizando una senciila estructura de control que nunca vuelve hacia
atrás. Estas estructuras de control son fáciles de implementar. Los problemas. recuperables se
resuelven con estrategias un poco más complicadas que a veces cometen errores. Para
recuperarse de tales errores será necesaria una vuelta atrás, de forma que la estructura de
control debe implementarse con una pila “push-down”, en la que las decisiones se conservan
en caso de que necesiten ser deshechas más tarde. Los probiemas no recuperables, por otro
lado, se resuelven mediante un sistema que debe apiicar muchísimo esfuerzo en la toma de
decisiones ya que éstas son irrevocabies. Algunos problemas irrecuperables se resuelven con
métodos de estilo recuperabie usando un proceso de planificación, en el que se analiza por
adelantado una secuencia entera de pasos para descubrir adonde conducirá antes de dar el
primer paso. Más adelante se explican las clases de problemas en los que es posible hacer esto.
¿Es predecible el universo?
Suponga nuevamente que estamos jugando al 8-puzzle. Cada vez que se hace un movimiento,
se sabe exactamente qué ocurrirá. Esto significa que es posible planificar una secuencia entera
de movimientos y estar seguros de que se conoce cual sera el resultado. Es posible utilizar una
planificación para evitar tener que deshacer movimientos, si bien todavía se deben hacer
comprobaciones de movimientos en tiempo de planificación. De esta forma, es necesaria una
estructura de control que permita la comprobación.
Sin embargo, en otros juegos diferentes al 8-puzzle, no es posible un proceso de planificación.
Suponga que queremos jugar al bridge. Una de las decisiones que hay que tomar es qué carta
jugar en la primera baza. Sería deseable planificar la mano completa antes de realizar esta
primera jugada. Pero ahora no es posible hacer tal planificación con certeza debido a que no se
sabe con exactitud donde están las cartas y qué harán los otros jugadores en sus turnos. Lo
mejor que se puede hacer es investigar distintos planes y utilizar las probabilidades de las
consecuencias que se derivan de su elección para resaltar el que tenga la más alta
uu
versus consecuencia-incierta, interactúan de una forma interesante. Tal y como se ha
mencionado siempre, una forma de resolver los problemas irrecuperables es planificando una
solución completa antes de embarcarse en la implementación del plan. Sin embargo, este
proceso de planificación solo es útil en los problemas de consecuencia-cierta. Así, uno de los
tipos de problemas más difíciles de resolver son los irrecuperables de consecuencia-incierta.
Ejemplos de tales problemas son los siguientes:
Bridge. Sin embargo, puede mejorarse un poco ya que existen estimaciones exactas de las
probabilidades de cada una de las posibles consecuencias.
Contro! de un brazo de robot. La consecuencia es incierta debido a varias razones. Alguien
podría poner algo en la ruta del brazo; los mecanismos del brazo podrían atascarse; un leve
error podría causar que el brazo choque con una pila de objetos.
Ayudar a un abogado a decidir cómo defender a su cliente contra un cargo de asesinato. En
este caso no se puede dar probablemente una lista de posibles consecuencias, y mucho menos
dar sus probabilidades. 

Una solución adecuada ¿es absoluta o relativa?
Considere el problema de responder a preguntas basadas en una base de datos de hechos
simples, tal como ésta:
1. Marco fue un hombre.
2. Marco era pompeyano.
3. Marco nació en el año 40 d.c.
4. Todos los hombres son mortales.
5. Todos los pompeyanos murieron con la erupción del volcán en el año 79 d.c.
6. Níngún mortal vive más de 150 años.
7. Estamos en el año 1994 d.c.
Suponga que se hace la siguiente pregunta “¿Está Marco vivo?”. Al representar cada uno de
estos hechos en un lenguaje formal, tal como la lógica de predicados, y al utilizar métodos
formales de inferencia, puede derivarse faciimente una respuesta a la pregunta. De hecho,
cualquiera de las dos formas de razonamiento conducirá a la respuesta, tal y como se muestra
en la Figura 1.10. Nuestro interés se centra en responder a esta pregunta sin importar qué
camino se ha seguido para hacerlo. Si se sigue un camino que lleva a la respuesta con éxito,
no hay razón para volver atrás y ver si existen otros caminos que también lleguen a la solucién. 

Pero ahora considere de nuevo el problema del viajante de comercio. El objetivo es encontrar
la ruta más corta que lleve a cada ciudad exactamente una vez. Suponga que las ciudades a
visitar y las distancias entre elias son las que aparecen en la Figura 1.11. 
El vendedor podria comenzar desde Boston. En ese caso, una ruta que podría seguír es la que
tiene 8850 milias de longitud. Pero, ¿es ésta la solución al problema? La respuesta es que na
se puede asegurar hasta que no se intenten todas las demás rutas y se esté seguro de que
ninguna de ellas es más corta. En este caso, como se ve en la Figura 1.12, la primera ruta no
es definitivamente la solución al problema del viajante. 

¿La solución es un estado o una ruta?
Considere el problema de encontrar una interpretación consistente a la frase:
El presidente del banco comió un píato de ensalada de pasta con el tenedor.
Existen varios componentes de esta frase que, si se aislan, pueden tener más de una
interpretación. Sin embargo, los componentes tienen que formar un todo, y de esta forma se
restringen las otras posibles interpretaciones. Algunas causas de ambigliedad en la frase son
las siguientes:
La palabra “banco” puede referirse a una institución financiera o a un objeto para sentarse. Sin
embargo, solo uno de ellos puede tener un presidente.
La palabra “plato” es el objeto directo del verbo “comer”. Es posible comerse un plato, pero es
más usual comerse la ensalada de pasta que ei plato. .
Una ensalada de pasta es una ensalada que contiene pasta. Sin embargo, existen otras formas
semánticas de agrupar dos nombres. Por ejemplo, la comida de perros normalmente no
contiene perros.
La frase “con el tenedor” puede modificar distintas partes de la oración. En este caso, modifica
al verbo “comer”. Pero, si la frase hubiera sido “con vegetales”, la estructura de la modificación
sería diferente. Y si la frase hubiera sido “con sus amigos”, la estructura sería también
diferente. 

Debido a las interacciones existentes entre los distintos constituyentes de esta oración, puede
ser necesaria una búsqueda para encontrar una interpretación completa de la misma. Sin
embargo, para resolver el problema de encontrar esta interpretación se necesita generar solo
la interpretación misma. No es necesario ningún registro del proceso seguido para encontrar la
interpretación.
Compare esto con el problema de las jarras de agua. En este caso no basta con indicar que se
ha resuelto el problema y que la solución es (2,0). Para este tipo de problemas, lo que
realmente se pide no es el estado final, sino el camino que se ha seguido para encontrar ese
estado. Así, la solución a este problema debe ser una secuencia de operaciones (a veces
denominada “plan”) que produce el estado final. 

¿Cuál es el papel del conocimiento?
Considere de nuevo el problema del ajedrez. Suponga que se dispone de una potencia de
computación ifimitada. ¿Cuánto conocimiento sería necesario para realizar un programa
perfecto? La respuesta es muy poco -únicamente las reglas que determinen los movimientos
legales y algún sencillo mecanismo de control que implemente el procedimiento de búsqueda
apropiado. Algún conocimiento adicional sobre cosas tales como buenas estrategias y tácticas
ayudaría, -por supuesto, considerablemente a restringir la búsqueda para aumentar la
velocidad de ejecución del programa. -
Considere ahora, sin embargo, el problema de leer los periódicos del día para decidir cuales de
ellos apoyan a los republicanos y cuales a los demócratas en unas elecciones. Asuma de nuevo
una potencia de computación ilimitada, ¿cuánto conocimiento sería necesario para que la
computadora intente resolver este problema? Esta vez la respuesta es que se necesita una
gran cantidad. Sería necesario conocer cosas como éstas:
El nombre de los candidatos de cada partido.
El hecho de que si la mayor exigencia que se tiene es bajar los impuestos, probablemente se
está apoyando a los republicanos.
El hecho de que si la mayor exigencia que se tiene es que mejore la'educación, probablemente
se está apoyando a los demócratas.
El hecho de que si uno se opone a un gran aparato del Estado, probablemente se está
apoyando a los Republicanos.
Y muchos má
L U
¿Necesita la tarea interaccionar con una persona?
Algunas veces resulta provechoso programar las computadoras para resolver problemas de
una manera que la mayoría de la gente no sería capaz de entender, Esto es así si el nivel de
interacción entre.el hombre y la computadora es del tipo. Entrada-problema Salida-solución.
Sin embargo, se están desarrollando cada vez más programas que necesitan interacción

intermedia con el hombre, tanto para proporcionar información adicional de entrada al
programa como para proporcionar noticias adicionales al usuario.
Considérese, por ejemplo, el problema de la demostración de teoremas matemáticos, Si:
Todo lo que se quiere saber es si existe una demostración.
El programa es capaz de haliar la demostración por sí mismo.
Entonces no importa la estrategia que use el programa para hallar la demostración. Puede
utilizar, por ejemplo, el procedimiento de resolución, el cual puede ser muy eficiente, aunque
no sea muy natural para el hombre. Pero si alguna de estas condiciones no se cumple, la
forma de hallar la demostración tiene mucha importancia. Suponga que se intenta probar
algún nuevo y difícil teorema. Se puede pedir una demostración que siguiera los patrones
tradicionales de forma que un matemático esté seguro de que la demostración es correcta solo
con leerla. Por otra parte, dar con una prueba del teorema puede llegar a ser tan complejo que
el programa no sepa por donde empezar. Hasta ahora, las personas son superiores al realizar
las estrategias de alto nivel que se necesitan para demostrar un teorema, de forma que una computadora necesita pedir ciertos consejos. Por ejemplo, normalmente en geometría resulta
más fácil encontrar una prueba si alguien indica como representarla gráficamente. Para poder
utilizar estos consejos, el razonamiento seguido por una computadora debe ser análogo al
realizado por el consejero humano, al menos en ciertos aspectos. Debido a que las
computadoras trabajan en áreas muy significativas de nuestras vidas tales como diagnósticos
médicos, la gente no podrá aceptar el veredicto que genere un programa si no puede
comprender el razonamiento que ha seguido para darlo.
o el ,
Por supuesto, esta distinción no es totalmente estricta al describir los dominios particulares del
probiema. Tal y como se ha dicho, la demostración de teoremas matemáticos podría ser tanto
de un tipo como de otro. Sin embargo, para una aplicación en particular, se necesitan sistemas
de uno u otro tipo, y esta decisión tiene gran importancia a la hora de elegir el método de
resolución del problema. 
`,
  "1.5.5. Características de los Sistemas de producción ": `
Se ha examinado una serie de características que distinguen varios tipos de problemas.
También se ha argumentado que los sistemas de producción representan la forma más
adecuada de describir las operaciones que se llevan a cabo en la búsqueda de una solución a
un problema. En este punto pueden surgir dos razonábles preguntas:
¿Pueden los sistemas de produ¿c¡ón, al igual que los problemas, ser descriptos por un conjunto
de características que arrojen alguna luz sobre como implementarios fácilmente?
Si es así, ¿qué relaciones existen entre los tipos de problemas y los tipos de sistemas de
producción que son adecuados para resolver estos problemas?
La-respuesta a la primera pregunta es afirmativa. Considere las siguientes definiciones de
sistemas de producción. Un sistema de producción monótono es aquel en el que la aplicación
de una regla nunca prevé la posterior aplicación de otra regla que podría haberse aplicado
cuando se seleccionó la primera. Un sistema de producción no monótono es aquél en el que lo anterior no es cierto. Un sistema de producción parcialmente conmutativo es aquel que tiene la
propiedad de que si una determinada aplicación de una secuencia de reglas transforma el
estado x en el estado y, entonces alguna permutación permitida (por ejemplo, deben
satisfacerse las precondiciones de una regla para que pueda ser aplicada) de estas reglas,
también transforma el estado x en el estado y. Un sistema de producción conmutativo es aquel
que es a la vez monótono y parcialmente conmutativo. 
La relevancia de esta clasificación de los sistemas de producción estriba en la relación que
existe entre las categorías de los mismos y las estrategias apropiadas de implementación. Sin
embargo antes de explicar estas relaciones, puede resultar provechoso clarificar las
definiciones viendo como se relacionan con problemas específicos.
De esta forma, se llega a la segunda de las cuestiones expresadas anteriormente la cual
indaga sobre si existe una relación interesante entre las clases de sistemas de producción y las
clases de problemas. Dado un problema resoluble, existe un número infinito de sistemas de
producción que proporcionan formas de encontrar soluciones. Algunos de ellos serán más
eficientes y naturales que otros. Un problema que puede ser resuelto con un sistema de
producción, puede ser resuelto con uno conmutativo (la clase más restrictiva), sin embargo, el
sistema conmutativo puede ser tan inmanejable que sea prácticamente inútil. Puede utilizar
estados individuales para describir secuencias enteras de reglas aplicadas por un sistema no
conmutativo más simple. Así, desde un punto de vista formal, no existe relación alguna entre
tipos de problemas y tipos de sistemas de producción debido a que todos los problemas
pueden resolverse utilizando todos los tipos de sistemas de producción. Pero desde un punto
de vista práctico, definitivamente existe relación entre tipos de problemas y los tipos de
sistemas de producción que se prestan de forma natural a representar estos problemas. Para ver esto, veamos algunos ejemplos. La Figura 1.13 muestra las cuatro categorías en que se
dividen los sistemas de producción de acuerdo con lás dos dicotomías, sistemas monótonos versus no monótonos y sistemas parcialmente conmutativos versus no parcialmente
conmutativos, de forma que algunos problemas pueden resolverse más naturalmente por un
tipo de sistema, La esquina superior izquierda la forman los sistemas conmutativos.
Los sistemas parcialmente conmutátivos y los monótonos son adecuados para resolver
problemas ignorables. Esto no es sorprendente desde el momento en que las definiciones de
ambos son esencialmente las mismas. Sin embargo, se advierte que los problemas ignorables
son aquellos en los que una formulacién natural será un sistema parcialmente conmutativo y
monótono. Los problemas que implican la creación de nuevos objetos más que el cambio de
los viejos suelen ser ignorables. La demostración de teoremas, tal y como se ha descrito, es un
ejemplo de proceso creativo. Realizar deducciones a partir de hechos conocidos es también un
proceso creativo. Ambos procesos se pueden implementar fácilmente con un sistema
parcialmente conmutativo y monótono.
Los sistemas parcialmente conmutativos y monótonos son importantes desde el punto de vista
de la implementacién porque no contemplan la característica de volver hacia estados pasados
cuando se descubre que se ha seguido un camino incorrecto.. Si bien con frecuencia es
adecuado implementar estos sistemas con vuelta atrás (backtracking) para garantizar una
búsqueda sistemática, la base de datos actual que representa el problema, no necesita
regenerarse, El resultado de esto es, con frecuencia, un notable incremento de la eficiencia
debido a que la base de datos no tiene que ser regenerada y no es necesario estar al tanto de
cada cambio que se produjo en el proceso de búsqueda.
Hasta ahora se han explicado aquellos sistemas de producción que son a la vez monótonos y
parcialmente conmutativos. Estos sistemas son adecuados para problemas en los que las cosas
no cambian; se crean. Por otro lado, los sistemas no monótonos y parcialmente conmutativos,
se adecuan a aquellos problemas en los que se realizan cambios pero éstos son reversibles y
en los que el orden. de las operaciones no es crítico. Este es normalmente el caso de los
problemas de manipulación física, como la navegación de robots en una superficie plana.
Suponga que el robot dispone de los siguientes operadores: ir hacia el norte (N), ir hacia el
este (E), ir hacia el sur (S) e ir hacia el oeste (0). Para flevar a cabo su objetivo, no importa si
el robot ejecuta N-N-E o N-E-N. Dependiendo de cómo se eligen los operadores, el problema
del 8-puzzle y el del mundo de bioques pueden considerarse también como parcialmente conmutativos.
Estos dos tipos de sistemas parcialmente conmutativos son importantes desde el punto de
vista de la implementación porque tienden a alcanzar muchos estados individuales duplicados
durante el proceso de búsqueda.

Los sistemas de producción que no son parcialmente conmutativos son adecuados para
muchos problemas en los que se producen cambios irreversibies. Por ejemplo, considere el
problema de realizar un proceso que produzca un compuesto químico. Los operadores
disponibles incluyen cosas como “Añadir el agente químico x al recipiente” o “Cambiar la
temperatura hasta t grados”, Estos operadores pueden causar cambios irreversibles en el
compuesto. El orden en que se realizan las operaciones es importante para determinar el
resultado final. Es posible que si x se añade a y, se forme un compuesto estable, de forma que
la posterior adición de z no produzca ningún efecto; sin embargo, si z se añade a y, puede
formarse un compuesto estable diferente, de forma que no tenga efecto alguno la posterior
adición de x. En los sistemas de producción que no son parcialmente conmutativos es menos
probable que se llegue al mismo nodo varias veces durante el proceso de búsqueda. Cuando se
trate con sistemas que describan procesos irreversibles, es particularmente importante tomar
las decisiones correctas la primera vez, aunque si el universo es predecible, puede que una
buena planificación las haga menos determinantes. 

Ejercicio
Encontrar una buena representación del espacio de estados para el problema del misionero y
los canibales.
Tres misioneros y tres canibales se encuentran en una orilla de un río. A todos ellos les
gustaría pasar a la otra orilla. Los misioneros no se fían de los caníbales. Por eso, los
misioneros han planificado el viaje de forma que el número de misioneros en cada orilla del río
nunca sea menor que el número de caníbales en esa misma orilla. Solo disponen de una lancha
de dos plazas. ¿Cómo podrían atravesar el río sin que los misioneros corran peligro de ser
devorados por los caníbales? 
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
