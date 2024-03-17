import React from 'react'
import {Link,NavLink} from 'react-router-dom'

 export default function Header() {
  return (
   <>
      <nav className="min-h-14 bg-blue-500 flex  flex-row-reverse items-center ">
          <ul className='flex justify-center items-center min-w-96 min-h-14 mr-16 gap-11'>
          <li>
               <NavLink
                to={"/"}
                className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                   }
                    >
                    Home
              </NavLink>
          </li>
            <li>
              <NavLink 
              to={"/about"}
              className={({isActive}) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                 }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
              to={"text_to_speech"}
              className={({isActive}) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                 }
              >
               Text to Speech
              </NavLink>
            </li>

            <li>
              <NavLink
               to={'/community'}
               className={({isActive}) =>
               `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
               
              >
                 community
              </NavLink>

      </li>

       <li>
              <NavLink

               to={'https://chromewebstore.google.com/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn/reviews?hl=en'}
               className={({isActive}) =>
               `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
               
              >
                Extension
              </NavLink>
            </li>
            
          </ul>


       </nav>

</>
  )
    }