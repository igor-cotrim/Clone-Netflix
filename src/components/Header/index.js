import React from 'react'
import './index.css'

export default ({black}) =>{
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-1-1.png" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://occ-0-4359-1123.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABfKQX3GD92_it5CxSGbQbLUaes21NHll7a9jASfp89GAzF3wSUKb5WVgTNeTztGYJBsNZXsRaIJJkIaoAhqGW8oNpWzi.png?r=c71" alt="Avatar"/>
                </a>
            </div>
        </header>
    )
}