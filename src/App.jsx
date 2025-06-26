import AboutUs from './components/AboutUs'
import ChooseUs from './components/ChooseUs'
import Footer from './components/Footer/Footer'
import GroupAssociate from './components/GroupAssociate'
import Hero from './components/Hero'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'

const App = () => {
  return (
    <div className=" bg-gray-200">
      <Navbar  />
      <Hero className=""/>
      <Services/>
      <ChooseUs/>
     <GroupAssociate/>
     <Footer/>
     {/* <AboutUs/>  */}

    </div>
  )
}

export default App