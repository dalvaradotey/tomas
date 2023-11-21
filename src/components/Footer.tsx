import SocialNetworks from "./SocialNetworks/SocialNetworks";

export default function Footer() {
  return (
    <section className='flex flex-col justify-center items-center my-12'>
      <p className="mb-4 text-gray-800 text-base font-thin">Apóyame en redes sociales</p>
      <SocialNetworks />
    </section>
  )
}