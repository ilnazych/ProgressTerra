
import {useSelector} from 'react-redux';
import './App.css'
import {Header} from './components/header/Header'
import {Modal} from './components/modal/Modal'

function App() {
  const {bonusInfo, status, error} = useSelector((state) => state.toolkit);

  return (
    <div className="wrapper">
      <div className="top-block">
        <Header />
      </div>
      <div className="bottom-block"></div>
      {status === "loading" && <h2 className='status'>Loading...</h2>}
      {error && <h2 className='status'>Произошла ошибка {error}</h2>}
      {bonusInfo && <Modal />}
    </div>
  )
}

export default App
