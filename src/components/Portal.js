import React from 'react'
import ReactDOM  from 'react-dom'

function PortalDemo(){
  return ReactDOM.createPortal(
    <div>
        <h1>
          Portal
          </h1>
          <p>
            This is a portal componentss
          </p>

          <nav>
        <ul>
          <li>
           Home
          </li>
          <li>
            Blogs
          </li>
          <li>
            Contact
          </li>
        </ul>
      </nav>
    </div>
      ,
          document.querySelector('.portal-live')
        
  )
}

export default PortalDemo