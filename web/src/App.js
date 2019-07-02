import React from 'react'
import styled from 'styled-components'

const Appz = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-weight: bold;
  text-align: center;
  background: white;

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

  .hero {
    text-align: center;
  }

  .main {
    text-align: center;
  }

  .trusted {
    background: #eeeeee;
    background-image: url("/img/4dot.png");
    color: black;
    text-shadow: -0.06em 0 red, 0.06em 0 cyan;

    .trusted-logo{
      display: flex;
      justify-content: center;
      
      img {
        padding: 1em;
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
              <a href='#why'>Why</a>
            </li>
            <li>
              <a href='#learn'>Learn</a>
            </li>
            <li>
              <a href='#test'>Test</a>
            </li>
            <li>
              <a href='#faq'>FAQ</a>
            </li>
          </ul>
        </div>
      </header>
      <section className='hello'>
        <p>Hello</p>
      </section>
      <section className='how'>
        <p>TODO : How it work</p>
      </section>
      <section className='trusted'>
        <h2>
          <span role='img' aria-label='Terms'>
            👍🏻
          </span>{' '}
          TRUSTED BY
        </h2>
        <div className='trusted-logo'>
          <img width='auto' height='64px' alt='Disrupt Technology Venture' src='/img/disrupt-logo.svg' />
          <img width='auto' height='64px' alt='Stormbreaker Venture' src='/img/stormbreaker-logo.svg' />
        </div>
      </section>
      <section className='leg'>
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
          made w/ <span>❤</span> © 2019 FOXFOX CO.,LTD.
        </small>
      </footer>
    </Appz>
  )
}

export default App
