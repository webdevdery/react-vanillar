import React from 'react'
import ProgressBar from '../common/ProgressBar'
import logo from '../../assets/img/image 4.png';
function Header() {
  return (
    <header className="borderBottom fixed-top">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo" />
                </a>
                <div className="position-relative headerRight">
                    <ProgressBar />
                </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header;