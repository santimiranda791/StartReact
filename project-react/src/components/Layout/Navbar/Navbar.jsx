import React from 'react'
import{ItemNavbar} from '../../Ui/ItemNavbar/ItemNavbar'


export const Navbar = () => {
  return (
    <nav>
        <ul className='List'>
          <ItemNavbar  contenido="Inicio"/>
          <ItemNavbar contenido="Nudo"/>
          <ItemNavbar contenido="Final"/>
        </ul>
      </nav>
  )
}
