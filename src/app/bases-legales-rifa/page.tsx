import Banner from "@/components/Banner";
import { Metadata } from "next";
import Image from "next/image";
import TomasRifa from "@public/tomas-rifa.jpg";

export const metadata: Metadata = {
  title: 'Bases Legales Rifa Gana una Parcela en Chiloé | Tomas contra Duchenne',
  description: 'Bases legales para rifa solidaria "Gana una Parcela en Chiloé" en beneficio a Tomás en su lucha contra Duchenne.',
  openGraph: {
    siteName: 'Tomas contra Duchenne',
    locale: 'es-CL',
    type: 'website',
    title: 'Bases Legales Rifa Gana una Parcela en Chiloé | Tomas contra Duchenne',
    description: 'Bases legales para rifa solidaria "Gana una Parcela en Chiloé" en beneficio a Tomás en su lucha contra Duchenne.',
    url: 'https://ayudatomas.com/bases-rifa-parcelas',
    images: [
      {
        url: '/tomas-rifa.jpg',
        width: 662,
        height: 487,
      },
    ],
  },
}

export default function BasesRifaParcela() {
  return (
    <>
      <Image
        src={TomasRifa}
        className="object-cover md:hidden"
        alt=""
        quality={100}
      />
      <div className="text-primary p-8 md:py-36 md:px-40 space-y-10">
        <h1>Bases Concurso &ldquo;Gana una Parcela en Chiloé&rdquo;</h1>
        <div className="grid gap-12">
          <div>
            <h2 className="mb-6">Primero: Individualización del creador y organizador del Concurso</h2>
            <p>Por el Presente instrumento, Andrea Alejandra Valenzuela Serra, cédula de identidad nº 12.639.014-9, domiciliada en el Predio Bellavista, Pasaje los Pinos casa 5, Ancud. Vengo a Través del presente a legalizar las bases del concurso, estableciendo las condiciones sobre las cuales se regirá la campaña y promoción denominada <span className="bold">Gana una Parcela en Chiloé</span>.</p>
          </div>
          <div>
            <h2 className="mb-6">Segundo: Requisitos para participar y publicaciones de las bases.</h2>
            <p>Sin perjuicio de las condiciones del concurso que se indicarán más abajo. Las bases también se detallarán en la página web <a href="https://www.tomascontraduchenne.com" className="text-secondary font-bold underline">www.tomascontraduchenne.com</a> y podrán participar todas aquellas personas naturales, Chilenas o extranjeras que adquieran uno o más tickets en los términos expresados en las siguientes bases del concurso.</p>
          </div>
          <div>
            <h2 className="mb-6">Tercero: Objetivo del concurso </h2>
            <p>Único premio. La finalidad de este concurso sin fines de lucro es la recaudación de dinero para financiar el tratamiento de Tomás Antonio Ross Gómez quien padece de Distrofia Muscular de Duchenne. El ganador/a va adquirir el dominio de la propiedad ubicada en Aucar Alto Lote 2, rol 00187-00152  que le corresponde como único dueño a Don Jaime Alberto Eschmann Delgado , cédula de identidad n° 8842945-1.</p>
          </div>
          <div>
            <h2 className="mb-6">Cuarto: Vigencia del concurso y detalles de Bases</h2>
            <div>
              <ol className="list-decimal md:mx-6">
                <li>Los tickets se podrán comprar desde el día 2 de Enero del 2024 hasta el 1 de Junio del 2024 solo si se cumple la meta de 10.000 unidades de tickets aportados.</li>
                <li>El concurso tendrá lugar el día 1 de Junio del 2024 a las 20:00 hrs, ante notario o ante 7 personas voluntarias oficiando de testigo y observando el fiel cumplimiento de las presentes bases del proceso del concurso en vivo.</li>
                <li>El participante al realizar su aporte, de uno a más tickets, estará aceptando todos los puntos de estas bases y deberá señalar los siguientes datos para su acertada individualización: nombre completo, Rut, correo electrónico, número de celular y dirección, toda información en relación con el concurso se le comunicará a través del correo electrónico que haya indicado previamente en este formulario.</li>
                <li>El valor del ticket será la suma de $10.000 pesos chilenos.</li>
                <li>la adquisición de uno o más tickets, que dan derecho a participar en el concurso, sólo se hará por medio de la página oficial del concurso www.tomascontraduchenne.com.</li>
                <li>Una vez realizado el pago correctamente a través de la página web oficial www.tomascontraduchenne.com le llegará al participante, automáticamente un correo electrónico con la información del pago y su número de ticket, con ese número estará participando del concurso.</li>
                <li>Los tickets son nominativos, en ningún caso al portador, de modo que, si el adquiere fallece antes de la realización del concurso , trasmite sus derechos a los herederos en el concurso, conforme a las reglas generales sobre sucesión por causa de muerte.</li>
                <li>Un día antes del concurso, se publicará en la página web creada para este concurso, un listado con el total de participantes y sus respectivos tickets, resguardando sus datos personales.</li>
                <li>El número mínimo de tickets para que tenga lugar el concurso será de 10.000. De no completarse el número mínimo de tickets vendidos a la fecha de cierre, el plazo para adquirir un ticket será prorrogado de forma automática por 60 días de corrido hasta lograr el número de tickets propuesto. El plazo máximo de extensión es hasta el 01 de Septiembre de 2024. De completar la cantidad de 10.000 tickets vendidos antes de la fecha estipulada, se adelantará el sorteo, dando aviso de la nueva fecha a los correos electrónicos de lso participantes y en la página web oficial.</li>
                <li>En caso de no llegar a la meta de 10.000 tickets vendidos al 30 de Septiembre de 2024 se realizará igualmente el sorteo.</li>
                <li>El ganador/a del concurso no necesita estar presente al momento del sorteo, ya que se le llamará por celular o a través de correo electrónico hasta comunicarnos con al persona ganadora.</li>
                <li>El concurso termina cuando el notario autorizante certifique el ganador del concurso o quede de manifiesto para la organización y los presentes al momento del sorteo el ganador del concuso.</li>
                <li>El ticket que resulte ganador facultará a su propietario, para que éste adquiera la totalidad del inmueble que se sortea como único y exclusivo dueño, mediante la suscripción de las respectivas escrituras públicas y posterior a inscripción en el Registro de Propiedad del Conservador de Bienes Raíces de Ancud. El Plazo para firmar respectivas escrituras públicas será de 30 días hábiles contando desde el día siguiente al sorteo. Si el participante ganador del concurso no quiere o no puede, sin justa causa formar la escritura dentro del plazo indicado anteriormente, se entiende que renuncia al premio y faculta al titular de la propiedad para llevar a cabo un nuevo concurso.</li>
                <li>Los gastos de la escritura pública, señalada en el número anterior y la posterior inscripción de la escritura pública, serán a cargo de quien organiza este concurso.</li>
                <li>Los participantes del concurso reconocen desde ya y aceptan, desde que adquieren los tickets, las bases de este concurso.</li>
                <li>El terreno a la fecha del concurso deberá encontrarse totalmente al día respecto al pago de contribuciones, consumos básicos y/o cualquier otro gasto. El ganador se hará cargo de estos gastos una vez que inscriba la propiedad singularizada a su nombre.</li>
                <li>Podrán participar en el concurso tanto chilenos como extranjeros siempre y cuando cuenten con cédula de identidad nacional. Menores de edad podrán adquirir uno o más tickets, pero deberán ser representados por su tutor legal.</li>
                <li>No podrán adquirir tickets y/o participar en el presente concurso, las siguientes personas: propietario actual del terreno y sus descendientes en todas las líneas rectas. Tampoco podrán adquirir ticket la familia directa del beneficiario Tomás Ross Gómez.</li>
                <li>El organizador del concurso se reserva el derecho de complementar o modificar las bases de esta promoción, incluso iniciada esta.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Banner />
      </div>
    </>
  )
}
