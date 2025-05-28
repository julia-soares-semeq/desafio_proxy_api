import LoginForm from './components/LoginForm'
import ApiServices from './components/ApiServies'
import UserCorp from './components/UserCorp'
import Tree from './components/Tree'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InfoAtivos from './components/InfoAtivos'


function App() {
  return(
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginForm />} />
      <Route path='/home' element={<Home/>} />
      <Route path='/apiservices'element={<ApiServices />}/>
      <Route path='/usercorp'element={<UserCorp />}/>
      <Route path='/tree'element={<Tree />}/>
      <Route path='/info'element={<InfoAtivos />}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App