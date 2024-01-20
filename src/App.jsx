import {BrowserRouter , Routes , Route} from 'react-router-dom'


export default function App() {
  return (
    <BrowserRouter>
     <Header/>
     <Routes>
       {/* <Route path='/' element={<Home/>}/>
       <Route path='/sign-in' element={<Signin/>}/>
       <Route path='/sign-up' element={<Signup/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/profile' element={<Profile/>}/> */}
     </Routes>
    </BrowserRouter>
  )
}
