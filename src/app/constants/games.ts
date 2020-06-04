import { Game } from 'src/app/models/game.interface';
import { SexEnum } from 'src/app/enums/sex.enum';
import { ItemsEnum } from 'src/app/enums/items.enum';
// <!--NIVELL 1 - AMB ROBA, TRENCAR EL GEL-->
// <!--NIVELL 2 - DESPULLAR-SE-->
// <!--NIVELL 3 - JOCS DESPULLATS, ABDOMINADES, SEXE ORAL, ETC-->
// <!--NIVELL 4 - JOCS DE SEXE-->
// <!--NIVELL 5 - CAMASUTRA-->

export const games: Game[] = [
    {
        name: 'Susurros',
        level: 1,
        text: 'Susúrrale palabras subidas de tono al oído',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Baile',
        level: 1,
        text: 'Hazle un baile sensual. Seduce todo lo que puedas, pero no te quites la ropa',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Besar cuello',
        level: 1,
        text: 'Bésale el cuello',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Chupar dedo',
        level: 1,
        text: 'Chúpale un dedo de la mano',
        sex: SexEnum.FEMALE
    },
    {
        name: 'Línea caliente',
        level: 1,
        text: 'Eres la chica de una línea caliente y él te llama. ¿Podéis simular la llamada?',
        sex: SexEnum.FEMALE
    },
    {
        name: 'Plátano',
        level: 1,
        text: 'Que plátano más apetecible... Cómetelo de la forma más sensual.',
        item: ItemsEnum.BANANA,
        sex: SexEnum.FEMALE
    },
    {
        name: 'Masaje manos',
        level: 1,
        text: 'Masajéale las manos.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Tocar encima de la ropa',
        level: 1,
        text: 'Tócale el cuerpo, donde tu quieras, pero solo por encima de la ropa.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Color ropa interior',
        level: 1,
        text: 'Acierta el color de su ropa interior en tres intentos',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Cuello Cremoso',
        level: 1,
        text: 'Ponle nata en el cuello, y cómete la.',
        item: ItemsEnum.CREAM,
        sex: SexEnum.UNISEX
    },
    {
        name: 'Sinónimos',
        level: 1,
        text: 'Intenta decir 15 sinónimos de hacer el amor.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Lametones',
        level: 1,
        text: 'Coje la nata! Ponla dónde te apetezca y no olvides comertela!',
        item: ItemsEnum.CREAM,
        sex: SexEnum.UNISEX
    },
    {
        name: 'Come fresas',
        level: 1,
        text: 'Dale de comer una fresa.',
        item: ItemsEnum.STRAWBERRIES,
        sex: SexEnum.UNISEX
    },
    {
        name: 'Chico de pizza',
        level: 1,
        text:
            'Sal de casa y toca el timbre. Eres el repartidor de pizza, y ella no lleva dinero para pagarla. Consigue que te pague de otra forma.',

        sex: SexEnum.MALE
    },
    {
        name: 'Morreo',
        level: 1,
        text: 'Besaros como si no hubiera mañana.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Caricias',
        level: 1,
        text: 'Acaríciale la cara durante un minuto.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Que me toca',
        level: 1,
        text:
            'Cierra los ojos. Tu pareja te va a tocar la espalda con la parte del cuerpo que prefiera. Adivina con qué te toca.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Contar fantasia',
        level: 1,
        text: 'Cuéntale una fantasía sexual.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Chica en la barra',
        level: 1,
        text: 'Entras en un bar y ahí esta ella... Convéncela para que se venga contigo.',
        sex: SexEnum.MALE
    },
    {
        name: 'Chico en el bar',
        level: 1,
        text:
            'Estas sentada en un bar. Él esta sentado en una mesa con su chica. Su chica se levanta para ir al baño. Convéncele para escaparse contigo.',
        sex: SexEnum.FEMALE
    },
    {
        name: 'Chupeton',
        level: 1,
        text: 'Hazle un chupetón donde prefieras.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Fingir orgasmo',
        level: 1,
        text: 'Finge un orgasmo.',
        sex: SexEnum.FEMALE
    },
    {
        name: 'Pose sexy',
        level: 1,
        text: 'Posa eróticamente para las fotos de tu pareja.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Primera vez',
        level: 1,
        text: 'Cuéntale tu primera vez',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Sitio extraño',
        level: 1,
        text: 'Cuéntale el sitio más extraño en el que lo has hecho.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Cantar amor',
        level: 1,
        text: 'Cántale a tu pareja una canción de amor.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Enfermera',
        level: 1,
        text:
            'Eres una enfermera muy caliente. Él acude a ti con dolor en todo el cuerpo. Inspecciona su cuerpo y hazle un diagnóstico.',
        sex: SexEnum.FEMALE
    },
    {
        name: 'Hasta diez',
        level: 2,
        text:
            '¡Hora de una carrera! Tenéis que contar hasta diez, quien acabe primero decide qué prenda se quita el otro.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Sin manos',
        level: 2,
        text: 'Quítale una prenda sin utilizar las manos',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Calcetines fuera',
        level: 2,
        text: 'Quítate los calcetines de la forma más sexy posible.',
        sex: SexEnum.FEMALE
    },
    {
        name: 'Foto whatsapp',
        level: 2,
        text: '¿Tu pareja cree que tu foto de whatsapp es sexy? Si no es así, quítate una prenda.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Gatita',
        level: 2,
        text: '¡Eres una auténtica gatita! Aráñale el cuerpo.',
        sex: SexEnum.FEMALE
    },
    {
        name: 'Papel piedra tijeras',
        level: 2,
        text: '¿Conocéis el "piedra papel tijeras"? Quien gane, decide que prenda se quita el otro.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Muerde labios',
        level: 2,
        text: 'Muérdele los labios.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Masaje nalgas',
        level: 2,
        text: 'Masajéale las nalgas.',
        sex: SexEnum.MALE
    },
    {
        name: 'Por encima de la ropa',
        level: 2,
        text: '¿Aún lleva alguna prenda puesta? Masturba a tu pareja sin quitar ninguna prenda más.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Besar barriga',
        level: 2,
        text: 'Bésale la barriga.',
        sex: SexEnum.MALE
    },
    {
        name: 'Par impar',
        level: 2,
        text: 'Si has nacido en un día impar te quitas una prenda, sino se la quita tu pareja.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Perro fiel',
        level: 2,
        text:
            'Eres su perrito adiestrado durante un minuto. Tienes que hacer todos los trucos que ella te diga. Al finalizar el tiempo quítate una prenda.',
        sex: SexEnum.MALE
    },
    {
        name: 'Tocar a mandar',
        level: 2,
        text:
            'Tócale a tu pareja, pero no como te apetezca. Tu pareja te va a guiar, diciéndote dónde y como tocar. Puedes quitarle una prenda.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Bragas fuera',
        level: 2,
        text: 'Quítale las bragas con la boca.',
        sex: SexEnum.MALE
    },
    {
        name: 'Calconcillos fuera',
        level: 2,
        text: 'Quítale los calconcillos con la boca.',
        sex: SexEnum.FEMALE
    },
    {
        name: 'Masaje espalda',
        level: 2,
        text: 'Masajéale la espalda',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Mordisquear oreja',
        level: 2,
        text: 'Mordisquéale la oreja',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Entrepierna con los pies',
        level: 2,
        text: 'Acariciaros la entrepierna mutuamente con los pies.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Cosquillas',
        level: 2,
        text: 'Átale las manos a tu pareja y hazle cosquillas.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Adivina palabra',
        level: 2,
        text: 'Tu pareja va a escribir una palabra con los dedos en tu piel. Adivínala.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Pasar hielo',
        level: 2,
        text: 'Pásale hielo por la barriga.',
        item: ItemsEnum.ICE,
        sex: SexEnum.UNISEX
    },
    {
        name: 'Pasar hielo cuello',
        level: 2,
        text: 'Pásale hielo por el cuello.',
        item: ItemsEnum.ICE,
        sex: SexEnum.UNISEX
    },
    {
        name: 'Dibujar nata',
        level: 2,
        text:
            'Dibúajle a tu pareja un dibujo en la barriga utilizando la nata. Si adivina qué le has dibujado te quitas una prenda, sino te quitas dos prendas. No olvides comerte la nata.',
        item: ItemsEnum.CREAM,
        sex: SexEnum.UNISEX
    },
    {
        name: 'Pantalones hielo m',
        level: 2,
        text:
            'Métete un cubito de hielo en los calconcillos. Si aguantas un minuto, ella se quitará una prenda de ropa, sino tú te quitas dos prendas.',
        item: ItemsEnum.ICE,
        sex: SexEnum.MALE
    },
    {
        name: 'Pantalones hielo f',
        level: 2,
        text:
            'Métete un cubito de hielo en las bragas. Si aguantas un minuto, él se quitará una prenda de ropa, sino tú te quitas dos prendas.',
        item: ItemsEnum.ICE,
        sex: SexEnum.FEMALE
    },
    {
        name: 'Fresas barriga',
        level: 2,
        text: 'Coloca las fresas en la parte delantera del cuerpo de tu pareja y comete las.',
        item: ItemsEnum.STRAWBERRIES,
        sex: SexEnum.UNISEX
    },
    {
        name: 'Masaje aceite',
        level: 2,
        text: 'Hazle un masaje en la espalda utilizando el aceite de masajes.',
        item: ItemsEnum.OIL,
        sex: SexEnum.MALE
    },
    {
        name: 'Masaje aceite',
        level: 2,
        text: 'Quítale el sujetador con una sola mano.',
        sex: SexEnum.MALE
    },
    {
        name: 'Músculos',
        level: 2,
        text: 'Quítate la camiseta si aún la llevas, y enséñale tus músculos como un striper.',
        sex: SexEnum.MALE
    },
    {
        name: 'Morder pezones',
        level: 3,
        text: 'Mordisquea sus pezones.',
        sex: SexEnum.FEMALE
    },
    {
        name: 'Besar pechos',
        level: 3,
        text: 'Bésale los pechos.',
        sex: SexEnum.MALE
    },
    {
        name: 'Cantante',
        level: 3,
        text: '¿Eres buena cantante? Utiliza su miembro como el micrófono y cántale una canción.',
        sex: SexEnum.FEMALE
    },
    {
        name: 'Abdominales',
        level: 3,
        text:
            'Ponte en el suelo y ella se sentará encima de ti. Tienes que hacer abdominales y besarle los pechos cada vez que subas.',
        sex: SexEnum.MALE
    },
    {
        name: '69',
        level: 3,
        text: '¿Conocéis el 69? ¡Téneis un minuto!',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Abdominales',
        level: 3,
        text:
            'Él se pone en el suelo y tú encima de él. Tienes que bajar hasta que tu cabeza esté a la altura de su pene. Haz flexiones, y cada vez que bajes bésale el pene.',
        sex: SexEnum.FEMALE
    },
    {
        name: 'Peli',
        level: 3,
        text: 'Poned una película porno durante un minuto. Podéis tocaros, pero nada más.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Masaje pechos',
        level: 3,
        text: 'Masajéale la espalda con tus pechos.',
        sex: SexEnum.FEMALE
    },
    {
        name: 'Besar piernas',
        level: 3,
        text: 'Bésale las piernas. Empieza por los pies y sube lentamente. ¡Besa solo las piernas!',
        sex: SexEnum.MALE
    },
    {
        name: 'Azotes',
        level: 3,
        text: 'Recibe azotes de tu pareja.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Folio nalgas',
        level: 3,
        text: 'Da una vuelta a la habitación sujetando un bolígrafo con tus nalgas.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Sexo oral',
        level: 3,
        text: 'Hazle el sexo oral.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Sexo oral',
        level: 3,
        text: 'Hazle el sexo oral jugando con un cubito de hielo.',
        item: ItemsEnum.ICE,
        sex: SexEnum.UNISEX
    },
    {
        name: 'Atado',
        level: 3,
        text: 'Átale las manos a tu pareja y haz lo que quieras.',
        sex: SexEnum.UNISEX
    },
    {
        name: 'Pezones helados',
        level: 3,
        text: 'Juega con sus pezones y un cubito de hielo.',
        sex: SexEnum.MALE
    },
    {
        name: 'Huevo',
        level: 3,
        text: 'Mastúrbale con el huevo maturbador.',
        item: ItemsEnum.MASTURBATING_EGG,
        sex: SexEnum.FEMALE
    },
    {
        name: 'Ojos cerrados',
        level: 3,
        text: 'Véndale los ojos y hazle un masaje sensual.',
        sex: SexEnum.MALE
    },
    {
        name: 'Natolla',
        level: 3,
        text: 'Pon nata en su pene y luego lámela.',
        item: ItemsEnum.CREAM,
        sex: SexEnum.FEMALE
    },
    {
        name: 'Aceite intimo',
        level: 3,
        text: 'Ponte aceite de masajes en tus zonas íntimas delante de él.',
        item: ItemsEnum.OIL,
        sex: SexEnum.FEMALE
    },
    {
        name: 'Masturba pies',
        level: 3,
        text: 'Ponte aceite en su pene y mastúrbale con los pies.',
        item: ItemsEnum.OIL,
        sex: SexEnum.FEMALE
    },
    {
        name: 'Besar testiculo',
        level: 3,
        text: 'Bésale los testículos.',
        sex: SexEnum.FEMALE
    },
    {
        name: 'Modo vibración',
        level: 4,
        text: 'Ponte ese anillo vibrador y hazla vibrar. ¡Tenéis un minuto!',
        item: ItemsEnum.VIBRATING_RING,
        sex: SexEnum.MALE
    },
    {
        name: 'Bolas chinas',
        level: 4,
        text: 'Es hora de probar las bolas chinas.',
        item: ItemsEnum.CHINESE_BALLS,
        sex: SexEnum.FEMALE
    },
    {
        name: 'Toro mecánico',
        level: 4,
        text: 'Introduce su pene en tu vagina y muévete como si estuvieras montada en un toro mecánico.',
        sex: SexEnum.FEMALE
    },
    {
        name: 'Fregar',
        level: 4,
        text: 'Ponte encima de él y toca tu vagina con su pene, pero sin penetrar.',
        sex: SexEnum.FEMALE
    },
    {
        name: 'Punta',
        level: 4,
        text: 'Inroduce "la puntita" pero no pases de ahí.',
        sex: SexEnum.MALE
    },
    {
        name: 'Bocadillo',
        level: 4,
        text: 'Mastúrbale con tus pechos.',
        sex: SexEnum.FEMALE
    },
    {
        name: 'Nalgas pene',
        level: 4,
        text: 'Pasa tu pene entre sus nalgas, sin penetrar.',
        sex: SexEnum.MALE
    }
];
