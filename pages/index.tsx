import Head from 'next/head';
import Header from '../components/Header';
import Focus from '../components/Focus';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Portfolio</title>
      </Head>

        <Header />

      { /* ================ Landing Part ================ */ }
        <section id='focus' className='snap-center'>
          <Focus />
        </section>

      { /* ================ About ================ */ }
      <section id='about' className='snap-center'>
          <About/>
      </section>

      { /* ================ Projects ================ */ }
      <section id='experience' className='snap-center'>
          <Projects />
      </section>

      { /* ================ Skills ================ */ }
      <section id='skills' className='snap-center'>
          <Skills />
      </section>

      { /* ================ Experience ================ */ }

      { /* ================ Hobbies ================ */ }

      { /* ================ Contact Me ================ */ }

    </div>
  )
}
