import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
export default function HomePage() {
  return (
    <section className='home'>
   {/*    YA QUE TIENEN DIFERENTES FONDOS */}
        <Header/>
        <Hero/>
      <Footer/>
    </section>
  )
}
