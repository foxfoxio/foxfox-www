import React from 'react'
import styled from 'styled-components'

const Appz = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-weight: bold;
  text-align: center;
  background: white;
  text-align: center;
  font-family: LL Circular Pro Medium Web, -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, sans-serif;

  > * {
    padding: 0.5em;
    flex: 1 100%;
  }

  .header {
    background: skyblue;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  .header-left {
    display: flex;
    width: fit-content;
    align-items: center;
  }

  .header-right {
    display: flex;
    width: fit-content;
  }

  .logo {
    width: 32px;
    height: auto;
  }

  .logo-text {
    width: auto;
    height: 1em;
  }

  .navigation {
    list-style: none;
    margin: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
  }

  .navigation a {
    text-decoration: none;
    display: block;
    padding: 0.5em;
    color: white;
    border: 1px solid rgba(0,0,0,0);
  }

  .navigation a:hover {
    border: 1px solid coral;
  }

  h2 {
    font-size: 30px;
    font-weight: 500;
    letter-spacing: -1px;
    line-height: 38px;
  }

  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 26px;
    color: #8e9aa3;
  }

  .trusted {
    background: #eeeeee;
    background-image: url("/img/4dot.png");
    color: black;
    text-shadow: -1px 0 red, 1px 0 cyan;

    .trusted-logo{
      display: flex;
      justify-content: center;
      
      img {
        padding: 1em;
        padding-top:0;
      }
    }
  }

  .leg {
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightgrey;
    background-image: url("/img/4dot.png");
    height: 2em;

    small {
      padding: 1em;
    }
  }

  .footer {
    color: white;

    display: flex;
    justify-content: space-around;
    background: darkgrey;
    background-image: url("/img/4dot.png");
    
    span {
    color: coral;
  }
`

const App = () => {
  return (
    <Appz>
      <header className='header'>
        <div className='header-left'>
          <img className='logo' alt='FoxFox Logo' src='/img/foxfox-logo.svg' />
          <img className='logo-text' alt='FoxFox Text Logo' src='/img/foxfox-text.svg' />
        </div>
        <div className='header-right'>
          <ul className='navigation'>
            <li>
              <a href='#learn'>Learn</a>
            </li>
            <li>
              <a href='#play'>Play</a>
            </li>
            <li>
              <a href='#enjoy'>Enjoy</a>
            </li>
          </ul>
        </div>
      </header>
      <section className='learn'>
        <div>
          What I need to learn to become a
          <select>
            <option value='ds'>Data Scientist</option>
            <option value='de'>Data Engineer</option>
            <option value='bd'>Blockchain Developer</option>
            <option value='fd'>Fullstack Developer</option>
          </select>
        </div>
        <div>\</div>
        <div>
          <img alt='duck' src='/img/duck-l.png' width='16px' height='auto' />
        </div>
      </section>
      <section className='play'>
        <h2>For everyone.</h2>
        <p>Let's enjoy your new skills!</p>
      </section>
      <section className='trusted'>
        <h3>
          <span role='img' aria-label='Terms'>
            👍🏻
          </span>{' '}
          TRUSTED BY
        </h3>
        <div className='trusted-logo'>
          <img width='auto' height='64px' alt='Disrupt Technology Venture' src='/img/disrupt-logo.svg' />
          <img width='auto' height='64px' alt='Stormbreaker Venture' src='/img/stormbreaker-logo.svg' />
          <img width='auto' height='64px' alt='สำนักงานส่งเสริมเศรษฐกิจดิจิทัล (depa)' src='/img/depa-logo.png' />
        </div>
      </section>
      <section className='leg'>
        <a href='mailto:info@foxfox.io'>
          <small>
            <span role='img' aria-label='Contact'>
              ✉️
            </span>
            info<span>@</span>foxfox.io
          </small>
        </a>
        <a href='/policy'>
          <small>
            <span role='img' aria-label='Terms'>
              🔏
            </span>
            Privacy Policy
          </small>
        </a>
        <a href='/terms'>
          <small>
            <span role='img' aria-label='Terms'>
              📝
            </span>
            Terms
          </small>
        </a>
      </section>
      <footer className='footer'>
        <small>
          made with <span>❤</span> © 2019 FOXFOX CO.,LTD.
        </small>
      </footer>
    </Appz>
  )
}

export default App
