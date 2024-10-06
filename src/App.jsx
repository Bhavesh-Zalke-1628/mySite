
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import { Outlet } from 'react-router-dom'
import 'devicon/devicon.min.css';
function App() {

  return (
    <div className=' min-h-screen flex flex-wrap justify-between bg-gray-400'>
      <div className=' w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
