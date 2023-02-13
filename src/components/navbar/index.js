import React from 'react'
import "./styles.css"
function Index() {
  return (
    <nav className='navbar'>
        <h1 className='Header'> Estarta Blog</h1>
<div className='buttons'>
       <a className='btn1' href='/'>Home</a>
        <button className='btn2'><a href='/'>New Blog</a></button>
        </div>
    </nav>
  )
}

export default Index