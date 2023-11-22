import Image from 'next/image'
import TomasFamiliaNieve from '../../../public/tomas-familia-nieve.jpg'
import Elevidys from '../../../public/elevidys.png'
import Banner from '@/components/Banner';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nuestro Testimonio | Tomas contra Duchenne',
  description: 'Tengo 5 años y me diagnosticaron Distrofía Muscular de Duchenne. Necesito administrarme remedio más caro del mundo de 3.500 millones de pesos chilenos.',
  openGraph: {
    siteName: 'Tomas contra Duchenne',
    locale: 'es-CL',
    type: 'website',
    title: 'Nuestro Testimonio | Tomas contra Duchenne',
    description: 'Tengo 5 años y me diagnosticaron Distrofía Muscular de Duchenne. Necesito administrarme remedio más caro del mundo de 3.500 millones de pesos chilenos.',
    url: 'https://ayudatomas.com/testimonio',
    images: [
      {
        url: '/tomas-og.jpg',
        width: 662,
        height: 487,
      },
    ],
  },
}

export default function Testimonio() {
  return (
    <>
      <div className="md:py-24 md:px-36 text-lg leading-9">
        <div className="hidden md:block md:float-left pr-10">
          <Image
            src={TomasFamiliaNieve}
            className="w-96"
            alt="Alex, Tomás, Camila y Erwin en la nieve"
            quality={100}
          />
          <p className="text-sm text-center text-gray-500 mt-2">Foto: Alex, Tomás, Camila y Erwin.</p>
        </div>
        <h1 className="text-3xl font-semibold mx-4 my-2 md:my-0">Somos Alex y Camila, padres de Tomás y Erwin.</h1>
        <div className="md:hidden mb-4">
          <Image
            src={TomasFamiliaNieve}
            className="w-96"
            alt="Alex, Tomás, Camila y Erwin en la nieve"
            quality={100}
          />
          <p className="text-sm text-center text-gray-500 mt-2">Foto: Alex, Tomás, Camila y Erwin.</p>
        </div>
        <div className="px-6 md:px-0 space-y-4 md:space-x-0">
          <h2 className="mt-2 text-2xl text-center md:text-left">Este es nuestro testimonio.</h2>
          <p><strong>Tomás es nuestro hijo mayor de 5 años</strong>, nació en el año 2018 sin ninguna complicación, fue cumpliendo sus etapas del desarrollo de forma normal y con muy buena salud. Alrededor de los 3 años y medio desde el colegio <strong>nos derivaron a terapeuta ocupacional por algunos problemas motores</strong> que pesquisaron al compararlo con los demás niños y fue el Terapeuta quien luego de su evaluación <strong>nos dijo que tenía un retraso motor severo según la puntuación de sus escalas</strong>, así que iniciamos sesiones de terapia ocupacional para nivelar su retraso, pero al pasar los meses no vimos avances y es en ese momento en donde partió nuestra preocupación.</p>
          <p>Lo llevamos a <strong>un Traumatólogo infantil</strong> quien luego de su examen físico y exámenes de sangre <strong>nos dijo que Tomás tenía Distrofia Muscular de Duchenne (DMD)</strong> pero que este diagnóstico debía ser confirmado con un examen genético y que <strong>su evaluación debía continuar con la especialidad de Neurología</strong>.</p>
          <p>En Febrero del 2023 posterior a su visita con la <strong>neuróloga especialista en enfermedades neuromusculares</strong> le tomamos el <strong>examen genético</strong> cuya muestra se envía a Estados Unidos y el resultado se demora un mes.</p>
        </div>
        <p className="my-8 md:text-xl italic bg-amber-50 text-amber-900 leading-8 px-4 py-8">&ldquo;Fue el mes de mayor angustia en nuestras vidas ya que todo lo que leíamos en internet sobre la enfermedad era devastador.&rdquo;</p>
        <div className="px-6 md:px-0 space-y-4 md:space-x-0">
          <div className="float-right hidden md:block">
            <Image
              src={Elevidys}
              className="w-96"
              alt=""
              quality={100}
            />
            <p className="text-sm text-center text-gray-500 mt-2">Foto: Cotización Hospital Arkansas.</p>
          </div>
          <p>Finalmente llegó el día en que <strong>se confirmó el diagnóstico de DMD</strong> y nos dijeron que actualmente no había ningún tratamiento para Tomás, solo debíamos esperar la progresión natural de la enfermedad. Como padres no quisimos quedarnos con eso, así que fuimos estudiando sobre el tema y siguiendo las publicaciones de los ensayos vigentes en cuanto a los potenciales tratamientos contra Duchenne, ¡hasta que llegó el gran día! <strong>La FDA aprobó el primer medicamento de terapia genética específico para la DMD</strong> cuyo objetivo es detener la progresión de la enfermedad.</p>
          <p>Tomamos contacto con <strong>Sarepta</strong> que es el laboratorio que patentó este <strong>medicamento llamado Elevidys</strong> y luego de confirmar que Tomás cumplía con los requisitos de administración nos enlazaron con el hospital de niños de Arkansas en Estados Unidos, quienes nos entregaron una <strong>cotización por casi 4 millones de dólares</strong>.</p>
          <p><strong>No podíamos creer lo que estábamos leyendo</strong>, la única opción de tratamiento que tiene nuestro hijo tenía un precio inalcanzable para nuestra familia.</p>
          <div className="float-right md:hidden">
            <Image
              src={Elevidys}
              className="w-96"
              alt=""
              quality={100}
            />
            <p className="text-sm text-center text-gray-500 mt-2 mb-4">Foto: Cotización Hospital Arkansas.</p>
          </div>
          <p>Por segunda vez no quisimos bajar los brazos y esa misma noche iniciamos la <strong>campaña Tomas_contra_duchenne</strong>.</p>
          <p>Esta campaña tiene como objetivo reunir los fondos necesarios para <strong>costear el tratamiento que se debe administrar por única vez en la vida antes de los 6 años en Estados Unidos</strong>.</p>
          <p>Estamos contra el tiempo ya que tenemos meses para reunir este dinero. Es por eso que si estas leyendo este testimonio te pedimos que nos ayudes con dinero y/o difusión, para lograr el tan anhelado tratamiento para Tomás.</p>
        </div>
      </div>
      <div className="mt-10">
        <Banner />
      </div>
    </>
  );
}
