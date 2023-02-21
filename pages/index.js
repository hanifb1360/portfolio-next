import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Hanif Bahari | Front-End Developer</title>
        <meta name="description" content="I’m a front-end web developer with a background in design" />
        
      </Head>
      <Main />
      <div className="mt-10">
        <About />
      </div>
      <div className="mt-24">
        <Skills />
      </div>
      <div className="mt-6">
        <Projects />
      </div>
      <div className="mt-10">
        <Contact />
      </div>
    </div>
  )
}

