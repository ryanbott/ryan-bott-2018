import React from 'react'
// import { Link } from 'gatsby'

const FooterNav = [
  {
    name: 'Work',
    link: '/work'
  }, {
    name: 'Shop',
    link: 'https://www.teepublic.com/user/ryanbott'
  }, {
    name: 'Contact Me',
    link: '/contact'
  },
]

const SocialLinks = [
  {
    name: 'Instagram',
    link: 'http://instagram.com/ryanbott'
  }, {
    name: 'Dribbble',
    link: 'http://dribbble.com/ryanbott'
  }, {
    name: 'Behance',
    link: 'https://www.behance.net/ryanbott'
  },{
    name: '500px',
    link: 'http://500px.com/ryanbott'
  },
]

const Footer = ({ siteTitle }) => (
<footer id="footer" className="footer">
  <div className="footer-top">
    <div className="container row">
      <h4>Explore</h4>
      <div className="footer__column">
        <ul>
          {FooterNav.map(link => (
            <li key={link.name}>
              <a href={link.link} className={link.name.toLowerCase()}  alt={link.name}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer__column">
        <ul>
          {FooterNav.map(link => (
            <li key={link.name}>
              <a href={link.link} className={link.name.toLowerCase()}  alt={link.name}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>


    <div className="container row">
      <h4>Recent Articles</h4>
      <div className="footer__column">
        <ul>
          {FooterNav.map(link => (
            <li key={link.name}>
              <a href={link.link} className={link.name.toLowerCase()}  alt={link.name}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer__column">
        <ul>
          {FooterNav.map(link => (
            <li key={link.name}>
              <a href={link.link} className={link.name.toLowerCase()}  alt={link.name}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>

  <div className="header-logo">
    <a href="/" aria-label="Return to Ryan Bott's homepage">r.b</a>
  </div>

  <div className="footer-bottom">
    <div className="container row">
      <div className="footer-bottom__social">
        <ul>
          {SocialLinks.map(link => (
            <li key={link.name}>
              <a href={link.link} className={link.name.toLowerCase()} target="_blank" rel="noopener noreferrer" alt={link.name}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="copyright">
        <span>&copy; Ryan Bott {new Date().getFullYear()}</span>
      </div>
    </div>
  </div>
</footer>
)

export default Footer
