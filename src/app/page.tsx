import Floatbar from './components/tsx/Floatbar'
import Intro from './components/tsx/Intro'
import Skill from './components/tsx/Skill'
import Project from './components/tsx/Project'
import Contact from './components/tsx/Contact'

export default function Home() {
  return (
    <div className=''>
      <Intro/>
      <Floatbar />
      <Skill/>
      <Project/>
      <Contact/>
    </div>
      
  )
}
