import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    return (
    <>
        <Navbar> </Navbar>
        {children}
        <Footer></Footer>
    </> )
}


export default Layout;

                          