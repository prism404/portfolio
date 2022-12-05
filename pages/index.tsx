import Head from 'next/head';
import Header from '../components/Header';
import Focus from '../components/Focus';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import ContactMe from '../components/ContactMe';
import Link from 'next/link';
import Image from 'next/image';
import OakTree from '../components/img/oak-tree.png';


export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-500/10 scrollbar-thumb-pink-200/80">
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

      { /* ================ Education ================ */ }
      <section id='education' className='snap-center'>
          <Education />
      </section>

      { /* ================ Projects ================ */ }
      <section id='projects' className='snap-center'>
          <Projects />
      </section>

      { /* ================ Skills ================ */ }
      <section id='skills' className='snap-center'>
          <Skills />
      </section>

      { /* ================ Hobbies ================ */ }

      { /* ================ Contact Me ================ */ }
      <section id='contact' className='snap-center'>
          <ContactMe />
      </section>

      <Link href="#focus">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-end mr-4'>
            <Image src={OakTree} alt="" className='h-6 w-6 md:h-8 md:w-8 rounded full filter grayscale hover:grayscale-0 cursor-pointer' />
          </div>
        </footer>
      </Link>

    </div>
  )
}
