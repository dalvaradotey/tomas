import Image from 'next/image'
import TomasFamiliaNieve from '@public/tomas-familia-nieve.jpg'
import Elevidys from '@public/elevidys.png'
import Banner from '@/components/Banner';
import style from './style.module.css';
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
      <div className={style.pageTestimony}>
        <div className={style?.headerContent}>
          <div>
            <Image
              src={TomasFamiliaNieve}
              alt="Alex, Tomás, Camila y Erwin en la nieve"
              quality={100}
            />
            <p className={style.photoText}>Foto: Alex, Tomás, Camila y Erwin</p>
          </div>
          <div>
            <h1>Somos Alex y Camila</h1>
            <h2 className="text-left">Padres de Tomás y Erwin</h2>
            <h3 className="mt-4">Este es nuestro testimonio</h3>
            <p><strong>Tomás es nuestro hijo mayor de 5 años</strong>, nació en el año 2018 sin ninguna complicación, fue cumpliendo sus etapas del desarrollo de forma normal y con muy buena salud. Alrededor de los 3 años y medio desde el colegio <strong>nos derivaron a terapeuta ocupacional por algunos problemas motores</strong> que pesquisaron al compararlo con los demás niños y fue el Terapeuta quien luego de su evaluación <strong>nos dijo que tenía un retraso motor severo según la puntuación de sus escalas</strong>, así que iniciamos sesiones de terapia ocupacional para nivelar su retraso, pero al pasar los meses no vimos avances y es en ese momento en donde partió nuestra preocupación.</p>
          </div>
        </div>
        <div className={style?.content}>
          <div className="mb-28 md:mb-0">
            <h3>Se confirma el diagnóstico de DMD</h3>
            <p>Lo llevamos a <strong>un Traumatólogo infantil</strong> quien luego de su examen físico y exámenes de sangre <strong>nos dijo que Tomás tenía Distrofia Muscular de Duchenne (DMD)</strong> pero que este diagnóstico debía ser confirmado con un examen genético y que <strong>su evaluación debía continuar con la especialidad de Neurología</strong>.</p>
            <p>En Febrero del 2023 posterior a su visita con la <strong>neuróloga especialista en enfermedades neuromusculares</strong> le tomamos el <strong>examen genético</strong> cuya muestra se envía a Estados Unidos y el resultado se demora un mes.</p>
            <div className={style?.blockquote}>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
              </svg>
              &ldquo;Fue el mes de mayor angustia en nuestras vidas ya que todo lo que leíamos en internet sobre la enfermedad era devastador.&rdquo;
            </div>
            <p>Finalmente llegó el día en que <strong>se confirmó el diagnóstico de DMD</strong> y nos dijeron que actualmente no había ningún tratamiento para Tomás, solo debíamos esperar la progresión natural de la enfermedad.</p>
          </div>
          <div className="mb-28 md:mb-0">
            <div className="md:flex md:items-center">
              <div className="md:w-6/12">
                <h3>FDA aprueba el primer medicamento para DMD</h3>
                <p>Como padres no quisimos quedarnos con eso, así que fuimos estudiando sobre el tema y siguiendo las publicaciones de los ensayos vigentes en cuanto a los potenciales tratamientos contra Duchenne, ¡hasta que llegó el gran día! <strong>La FDA aprobó el primer medicamento de terapia genética específico para la DMD</strong> cuyo objetivo es detener la progresión de la enfermedad.</p>
                <p>Tomamos contacto con <strong>Sarepta</strong> que es el laboratorio que patentó este <strong>medicamento llamado Elevidys</strong> y luego de confirmar que Tomás cumplía con los requisitos de administración nos enlazaron con el hospital de niños de Arkansas en Estados Unidos, quienes nos entregaron una <strong>cotización por casi 4 millones de dólares</strong>.</p>
                <p><strong>No podíamos creer lo que estábamos leyendo</strong>, la única opción de tratamiento que tiene nuestro hijo tenía un precio inalcanzable para nuestra familia.</p>
              </div>
              <div className="md:w-6/12 relative md:px-10">
                <Image
                  src={Elevidys}
                  className="w-full"
                  alt="Alex, Tomás, Camila y Erwin en la nieve"
                  quality={100}
                />
                <p className={style.photoText}>Foto: Cotización Hospital Arkansas.</p>
              </div>
            </div>
          </div>
          <div className="mb-28 md:mb-0">
            <h3>Inicia campaña de recaudación</h3>
            <p>Por segunda vez no quisimos bajar los brazos y esa misma noche iniciamos la <strong>campaña #TomasContraDuchenne</strong>.</p>
            <p>Esta campaña tiene como objetivo reunir los fondos necesarios para <strong>costear el tratamiento que se debe administrar por única vez en la vida antes de los 6 años en Estados Unidos</strong>.</p>
            <p>Estamos contra el tiempo ya que tenemos meses para reunir este dinero. Es por eso que si estas leyendo este testimonio te pedimos que nos ayudes con dinero y/o difusión, para lograr el tan anhelado tratamiento para Tomás.</p>      
          </div>
        </div>
      </div>
      <Banner />
    </>
  );
}
