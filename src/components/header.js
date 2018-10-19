import React from 'react'
// import { Link } from 'gatsby'

const MainNav = [
  {
    name: 'About',
    link: '/about'
  },{
    name: 'Gear',
    link: '/gear'
  },{
    name: 'Web Dev',
    link: '/work'
  },{
    name: 'Shop',
    link: '/shop'
  },
]

const Header = ({ siteTitle }) => (
  <header id="header" className="header">
    <div className="header-logo">
      <a href="/" aria-label="Return to Ryan Bott's homepage">r.b</a>
    </div>
    <div>
      <nav className="nav">
        <ul>
          {MainNav.map(link => (
            <li key={link.name}>
              <a href={link.link} className={link.name.toLowerCase()}  alt={link.name}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
	</header>
)

export default Header
