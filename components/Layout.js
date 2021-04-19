import Navbar from "./Navbar"

const Layout = ({ children }) => {
    return (
        <div className='page-container'>
            <Navbar />
            {children}   
        </div>
    )
}

export default Layout
