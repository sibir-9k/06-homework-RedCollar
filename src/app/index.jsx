import { Slider } from '../features/Slider'
import Logo from '../assets/RC-logo.svg'
import './index.css'

function App() {


  return (
    <>
      <header>
        <img src={Logo} className='logo' />
      </header>
      <Slider />
    </>
  )
}

export default App
