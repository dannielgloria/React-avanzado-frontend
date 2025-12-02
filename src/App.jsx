import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { UserProvider } from './context/UserContext'
import Navbar from './components/Navbar'
import ContenidoPrivado from './components/ContenidoPrivado'

function App() {

  return (
    <>
      <UserProvider>
        <Navbar />
        <Login />
        <ContenidoPrivado/>
      </UserProvider>
    </>
  )
}

export default App
