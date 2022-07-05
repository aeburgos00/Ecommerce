import './Navbar.css'


const NavbarMio = () => {
    return (
        <div>
            <nav className='navbarContainer'>
                <div className='logo flex-center'>
                    <a href='#'>VIRTUAL SPORT</a>
                </div>
                <div className='nav'>
                    <a className='TextoNav' href='#'>Inicio</a>
                    <a className='TextoNav' href='#'>Productos</a>
                    <a className='TextoNav' href='#'>Categorias</a>
                    <a className='TextoNav' href='#'>Contacto</a>
                </div>
                <div className='flex-center'>
                    <h3 className='carrito'>
                    /*Carrito*/
                    </h3>
                </div>
            </nav>
        </div>
    )
}

export default NavbarMio;
