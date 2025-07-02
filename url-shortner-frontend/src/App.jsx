import './App.css'
import { BrowserRouter } from 'react-router'
import { getApps } from './utils/helper';

function App() {

  const CurrentApp = getApps();
  return (
    <>
    <BrowserRouter>
      <CurrentApp/>
    </BrowserRouter>
    </>
  )
}

export default App
