
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Home from './Pages/Home';
import { Card } from './Component/Card';
function App() {
  return (
    <div className=' min-h-screen flex flex-wrap justify-between bg-black'>
      <div className=' w-full heblock'>
        <Header />
        <main>
          <Home />
          <Card />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
