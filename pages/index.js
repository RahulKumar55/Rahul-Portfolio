import Navbar from '../components/Navbar';
import MyInfo from '../components/MyInfo';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts';
import About from '@/components/about';

export default function Home() {
  return (
    <>
      <Navbar />
        <MyInfo />
        <About/>
        <Skills />
        <Projects />
        <Contacts />
    </>
  );
}
