import React from 'react'
// import { Link } from 'gatsby'

import HomeHero from '../components/homeHero'
import ContentArea from '../components/contentArea'
import ClientSpotlight from '../components/clientSpotlight'
import CodeTools from '../components/codeTools'
import TheProcess from '../components/theProcess'

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

const IndexPage = ({siteTitle, data}) => (
<main>
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

  <HomeHero />
  <ContentArea />

  <ClientSpotlight/>
  <CodeTools/>
  <TheProcess/>

  <section id="half">
    <div className="row half">
      <div className="half_text">
        <h2 className="">Prints and Shirts</h2>
        <hr className="header_line" style={{backgroundColor: "#242A46"}} />
        <p>I'm in the process of turning many of my favorite art pieces and graphics into shirts, prints, phone cases and more.</p>

        <a href="https://www.teepublic.com/user/ryanbott" ><button className="half_button" style={{backgroundColor: "#242A46"}}>Shop Merch</button></a>
      </div>
      <div className="half_image">
        {/*<Img sizes={data.artOnTable.sizes} alt="Art On Desk Web" />*/}
      </div>
    </div>
  </section>


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

</main>
)

export default IndexPage
