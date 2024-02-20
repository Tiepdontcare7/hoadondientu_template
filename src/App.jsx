import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from './pages/Page';
import HoaDon from './pages/tracuu/tracuuhoadon/mainhoadon';
import Inhoadon from './pages/tracuu/inhoadon';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/page' element={<Page/>}/>
          <Route path='/in' element={<Inhoadon/>}/>
          <Route>
          <Route path='/tra-cuu/tra-cuu-hoa-don' element={<HoaDon/>}/>
          <Route path='/page' element={<Page/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
