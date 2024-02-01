import Banner from "@/app/[lang]/components/Banner";
import { Metadata } from "next";
import DuchenneImage from "@public/duchenne.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: '¿Qué es Duchenne? | Tomas contra Duchenne',
  description: 'Es un desorden progresivo del músculo que causa la pérdida de su función y por lo tanto los afectados terminan perdiendo totalmente su independencia.',
  openGraph: {
    siteName: 'Tomas contra Duchenne',
    locale: 'es-CL',
    type: 'website',
    title: '¿Qué es Duchenne? | Tomas contra Duchenne',
    description: 'Es un desorden progresivo del músculo que causa la pérdida de su función y por lo tanto los afectados terminan perdiendo totalmente su independencia.',
    url: 'https://ayudatomas.com/duchenne',
    images: [
      {
        url: '/tomas-og.jpg',
        width: 662,
        height: 487,
      },
    ],
  },
}

export default function Duchenne() {
  return (
    <>
      <Image
        src={DuchenneImage}
        className="object-cover md:hidden"
        alt=""
        quality={100}
      />
      <div className="container-box space-y-10">
        <h1>Distrofia Muscular de Duchenne (DMD)</h1>
        <p>La Distrofia Muscular de Duchenne (DMD) es la distrofia muscular más común diagnosticada durante la infancia. Limita significativamente los años de vida de los afectados. Afecta a 1 de cada 5.000 niños en el mundo (alrededor de 20.000 casos nuevos cada año).</p>
        <p>Es un desorden progresivo del músculo que causa la pérdida de su función y por lo tanto los afectados terminan perdiendo totalmente su independencia. La enfermedad es causada por una mutación en el gen que codifica la distrofina. Debido a que la distrofina está ausente, las células musculares se dañan fácilmente. </p>
        <p>La debilidad muscular progresiva lleva a problemas médicos graves. Los niños necesitan silla de ruedas alrededor de los 12 años y la expectativa de vida promedio es de 30 años. La DMD se manifiesta principalmente en los varones debido a que el gen de la DMD se encuentra en el cromosoma X.</p>
        <p>La mutación del gen que causa Duchenne, generalmente se transmite de la madre al hijo, sin embargo un 35% de los casos ocurren por mutación espontánea “de-novo”. Puede ocurrir en cualquier familia, no conoce fronteras y afecta a todas las culturas y razas.</p>
        <h2>Etapas</h2>
        <h3>Edad Temprana (desde el diagnóstico hasta los 7)</h3>
        <p>Físicamente, el niño en general se moverá más lentamente o con mayor dificultad que otros niños de su edad. Puede parecer torpe y caerse con frecuencia, y tener dificultad para escalar, saltar o correr.</p>
        <h3>Etapa de Transición (edades de 6 a 9)</h3>
        <p>Durante este tiempo, un niño con Duchenne tendrá más y más dificultad para caminar en la medida que sus cuadriceps (los músculos al frente de los muslos) crecen débiles.</p>
        <p>Aunque puede no ser aparente, puede empezar a presentar problemas de corazón que requieren tratamiento médico.</p>
        <p>En general, la fatiga es común y pueden necesitar el uso de una silla de ruedas ligera o scooter eléctrico para distancias largas.</p>
        <h3>Pérdida de Capacidad para Caminar (edades de 10 a 14)</h3>
        <p>Los años de adolescencia traen una continua progresión de debilidad. Cerca de los 12 años de edad, la mayoría de los niños con Duchenne necesitan usar una silla de ruedas motorizada de manera regular. Las actividades que involucran los brazos, piernas o tronco requerirán de ayuda o soporte mecánico.</p>
        <h3>Etapa Joven adulto (edades 15+)</h3>
        <p>Cuando la evolución de la enfermedad progresa, las condiciones respiratorias y cardíacas que amenazan la vida se hacen más prevalentes. Los síntomas mayores de las complicaciones del corazón y pulmones incluyen respiración corta, fluido en los pulmones, edema o hinchazón en los pies y parte baja de las piernas. Las familias pueden optar por tener un tubo de traqueotomía que le ayudará a respirar.</p>
        <p>Hasta hace unos años los adultos jóvenes con Duchenne usualmente fallecían antes de los 30 años debido a este tipo de complicaciones, pero actualmente con los cuidados y tratamientos apropiados pueden sobrepasar los 40.</p>
        <p className="text-lg">Fuente: <a href="https://www.duchenne-spain.org/que-es-duchenne" className="text-secondary font-bold underline" target="_blank">https://www.duchenne-spain.org/que-es-duchenne</a></p>
        <h3>Tratamiento que necesita Tomás, Elevidys</h3>
        <p>ELEVIDYS aborda la causa genética de Duchenne (mutaciones en el gen de la distrofina que provocan la falta de la proteína distrofina) mediante la administración de un gen que codifica una forma abreviada de distrofina a las células musculares conocidas como micro-distrofina ELEVIDYS. Esta aprobación acelerada se basa en un aumento en la expresión de la proteína microdistrofina ELEVIDYS en el músculo esquelético. ELEVIDYS está respaldado por evidencia biológica y empírica, además de datos de eficacia de dos estudios clínicos.</p>
        <p className="text-lg">Fuente: <a href="https://www.duchenne-spain.org/blog/sarepta-therapeutics-anuncia-la-aprobacion-por-parte-de-la-fda-de-elevidys-la-primera-terapia-genica-para-tratar-la-distrofia-muscular-de-duchenne" className="text-secondary font-bold underline" target="_blank">https://www.duchenne-spain.org/blog/sarepta-therapeutics-anuncia-la-aprobacion-por-parte-de-la-fda-de-elevidys-la-primera-terapia-genica-para-tratar-la-distrofia-muscular-de-duchenne/</a></p>
      </div>
      <div className="mt-10">
        <Banner />
      </div>
    </>
  )
}
