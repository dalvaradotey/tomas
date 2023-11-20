import Image from 'next/image'
import TomasFamiliaNieve from '../../../public/tomas-familia-nieve.jpg'
import Elevidys from '../../../public/elevidys.png'
import TomasPNG from '../../../public/tomas.png'
import Link from 'next/link';

export default function Testimonio() {
  return (
    <>
      <div className="md:py-24 md:px-36 text-xl leading-9">
        <div className="hidden md:block md:float-left pr-10">
          <Image
            src={TomasFamiliaNieve}
            className="w-96"
            alt="Alex, Tomás, Camila y Erwin en la nieve"
            quality={100}
          />
          <p className="text-sm text-center text-gray-500 mt-2">Foto: Alex, Tomás, Camila y Erwin.</p>
        </div>
        <h2 className="text-3xl font-semibold md:font-bold mx-4 my-2 md:my-0">Somos Alex y Camila, padres de Tomás y Erwin.</h2>
        <div className="md:hidden mb-4">
          <Image
            src={TomasFamiliaNieve}
            className="w-96"
            alt="Alex, Tomás, Camila y Erwin en la nieve"
            quality={100}
          />
          <p className="text-sm text-center text-gray-500 mt-2">Foto: Alex, Tomás, Camila y Erwin.</p>
        </div>
        <div className="space-y-4 space-x-4 md:space-x-0">
          <p className="mt-2 text-2xl text-center md:text-left">Este es nuestro testimonio.</p>
          <p><strong>Tomás es nuestro hijo mayor de 5 años</strong>, nació en el año 2018 sin ninguna complicación, fue cumpliendo sus etapas del desarrollo de forma normal y con muy buena salud. Alrededor de los 3 años y medio desde el colegio <strong>nos derivaron a terapeuta ocupacional por algunos problemas motores</strong> que pesquisaron al compararlo con los demás niños y fue el Terapeuta quien luego de su evaluación <strong>nos dijo que tenía un retraso motor severo según la puntuación de sus escalas</strong>, así que iniciamos sesiones de terapia ocupacional para nivelar su retraso, pero al pasar los meses no vimos avances y es en ese momento en donde partió nuestra preocupación.</p>
          <p>Lo llevamos a <strong>un Traumatólogo infantil</strong> quien luego de su examen físico y exámenes de sangre <strong>nos dijo que Tomás tenía Distrofia Muscular de Duchenne (DMD)</strong> pero que este diagnóstico debía ser confirmado con un examen genético y que <strong>su evaluación debía continuar con la especialidad de Neurología</strong>.</p>
          <p>En Febrero del 2023 posterior a su visita con la <strong>neuróloga especialista en enfermedades neuromusculares</strong> le tomamos el <strong>examen genético</strong> cuya muestra se envía a Estados Unidos y el resultado se demora un mes.</p>
        </div>
        <p className="my-8 md:text-2xl italic bg-amber-50 text-amber-900 leading-8 px-4 py-8">&ldquo;Fue el mes de mayor angustia en nuestras vidas ya que todo lo que leíamos en internet sobre la enfermedad era devastador.&rdquo;</p>
        <div className="space-y-4 space-y-4 space-x-4 md:space-x-0">
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
        </div>
        <div className="md:flex bg-amber-50 items-center mt-10">
          <div className="w-5/8 p-10">
            <p className="text-xl md:text-2xl text-amber-900">
              Estamos contra el tiempo ya que tenemos meses para reunir este dinero. Es por eso que si estas leyendo este testimonio te pedimos que nos ayudes con dinero y/o difusión, para lograr el tan anhelado tratamiento para Tomás.
            </p>
            <div className="w-fit mt-4 md:mt-0">
              <Link
                href="/donar"
                className="flex text-white bg-pink-500 hover:bg-pink-600 focus:outline-none font-medium rounded-full text-sm px-3 py-4 md:px-5 md:py-4 text-center me-2 mb-2 transition duration-700 ease-in-out mt-2"
              >
                <svg className="w-4 h-4 md:w-4 md:h-4 text-pink-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
                </svg>
                <span className="md:text-md ml-2">¿Cómo donar?</span>
              </Link>
            </div>
          </div>
          <div className="w-3/8">
            <Image
              src={TomasPNG}
              className="md:w-screen"
              alt="Alex, Tomás, Camila y Erwin en la nieve"
              quality={100}
            />
          </div>
        </div>
      </div>
    </>
  );
}
