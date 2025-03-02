import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({links}) => {
  return (
     <ul className='flex flex-col pt-4 items-center'>
        {links.map((link, idx) =>
        (
           <li key={idx}>
              <NavLink href={link.path} title={link.title} />
           </li>
           ))}
     </ul>
  )
}

export default MenuOverlay