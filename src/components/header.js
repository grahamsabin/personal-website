import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <div className="containter">
      <div className="inner-header">
        <div className="logo">
          <Link to="/">SABIN</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)



export default Header
