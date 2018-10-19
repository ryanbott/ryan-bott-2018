import React from 'react'
// import Link from 'gatsby-link'
// import styled from 'styled-components'
// import Img from 'gatsby-image'

// import tigwLogo from '../img/tigw.png'


const HomeHero = ({ siteTitle, data }) => (
<section className="hero row home-hero">
    <div className="home-hero__text">
      <h1>Ryan Bott
        <span className="home-hero__text--lead"> is a <br />rare combination</span><br/>

      <span className="home-hero__text--main">
      <span className="home-hero__text--flair">of</span>
        Hard<br />work &amp; <br/> Creativity</span>
      </h1>
        <span className="home-hero__text--attribute">— Kelley Jones, President of Freestyle Creative</span>
    </div>

    <div className="podcast">
      <span className="podcast--number">04.</span>
        <span className="podcast--line"></span>
      <img className="podcast--image" src="../img/tigw-logo.png" alt="Things I Got Wrong, podcast" />
      <a href="https://thingsigotwrong.com/" target="_blank" rel="noopener noreferrer" className="podcast--button">
        <svg stroke="#fff;" fill="#fff;" stroke-width="0" viewBox="0 0 448 512" attr="[object Object]" height="1em" width="1em"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
      </a>
      <p className="podcast--tagline">Your favorite general trivia podcast with a healthy dose of internet and media things.</p>
    </div>
</section>

)

export default HomeHero
