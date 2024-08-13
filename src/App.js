import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Breadcrumb from './components/BreadCrumb'
import AccountSection from './screens/MyAccount'
import Footer from './components/Footer'

function App() {
 return (
  <div className='App'>
   <Header />
   <Navbar />
   <Breadcrumb />
   <AccountSection />
   <Footer />
  </div>
 )
}

export default App
