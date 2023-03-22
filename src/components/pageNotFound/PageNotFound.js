import React from 'react'
import './PageNotFound.css'
function PageNotFound() {
  return (
    <div className='pageNot-found_wrapper'>
        <h2 className='pageNot-found_title'>Page not found!!!</h2>
        <a className='pageNot-found_home' href='/michado-portfolio'>Go back home</a>
    </div>
  )
}

export default PageNotFound