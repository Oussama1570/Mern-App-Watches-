import React from 'react'
import {Link} from "react-router-dom"
import "./Pagenotfound.css"
import Layout from "../components/Layout/Layout";





const Pagenotfound = () => {
  return (
    <Layout>
    <div className='pnf'>


     <h1 className='pnf-title'>404</h1>
        <h1 className='pnf-heading'>Oops !Page not found</h1>
        
        <Link to="/" className='pnf-btn'> Go Back
        </Link>
        
    </div>
    </Layout>
  )
}

export default Pagenotfound
