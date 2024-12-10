
import Home from './Pages/Home';
import Skill from "./Component/SkillComponent";
import { Card } from './Component/Card';
import Navbar from './Component/Header';
function App() {
  return (
    <div className=' min-h-screen flex flex-wrap justify-between bg-black'>
      <div className=' w-full heblock'>
        <Navbar />
        <main>
          <Home />
          <Skill />
          <Card />
        </main>
      </div>

    </div>
  )
}

export default App
