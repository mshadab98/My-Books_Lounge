import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import BookDetails from '../pages/BookDetails'
import Books from '../pages/Books'
import Create from '../pages/Create'
import PageNotFound from '../pages/PageNotFound'
import Favourite from '../pages/Favourite'
import About from '../pages/About'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const Allroute = () => {
  return (
   <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/about" element ={<About/>}/>
        <Route path='/books' element = {<Books/>}/>
    <Route path = "/booldetails/:id" element={<BookDetails/>}/>
    <Route path = "/create" element={<Create/>}/>
    <Route path = "/signIn" element = {<SignIn/>}/>
    <Route path = "/signUp" element = {<SignUp/>}/>
    <Route path = "/fav" element={<Favourite/>}/>
    <Route path = "*" element={<PageNotFound/>}/>
   </Routes>
  )
}

export default Allroute