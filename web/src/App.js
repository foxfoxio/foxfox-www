import React from 'react'
import styled from 'styled-components'

const font_family =
  'LL Circular Pro Medium Web, -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, sans-serif'
const Appz = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-weight: bold;
  text-align: center;
  background: white;
  text-align: center;
  font-family: ${font_family};

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
    border: 1px solid rgba(0, 0, 0, 0);
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
    line-height: 1em;
    color: #8e9aa3;
  }

  select {
    font-family: ${font_family};
  }

  h3 {
    text-shadow: -1px 0 red, 1px 0 cyan;
    margin-bottom: 2em;
  }

  .team {
    width: 100%;

    div {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      max-width: 40em;
      margin: auto;

      img {
        width: 6em;
        height: 6em;
        border-radius: 50%;
        padding: 0.25em;
      }

      div {
        display: flex;
        flex-direction: column;
        margin: 0.5em;

        span {
          font-weight: 400;
          color: darkgrey;

          small {
            color: coral;
          }
        }
      }
    }
  }

  .trusted {
    width: 100%;
    margin-bottom: 1em;

    div {
      display: flex;
      justify-content: space-evenly;
      max-width: 40em;
      margin: auto;

      img {
        padding-top: 0;
        margin: 0.5em;
      }
    }
  }

  .leg {
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightgrey;
    background-image: url('/img/4dot.png');
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
    background-image: url('/img/4dot.png');

    span {
      color: coral;
    }
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
          <p>
            I want to be{' '}
            <select>
              <option value='ds'>Data Scientist</option>
              <option value='de'>Data Engineer</option>
              <option value='bd'>Blockchain Developer</option>
              <option value='fd'>Fullstack Developer</option>
            </select>
          </p>
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
      <section className='team'>
        <h3>
          <span role='img' aria-label='Terms'>
            🦊
          </span>{' '}
          TEAM
        </h3>
        <div>
          <div>
            <img width='auto' alt='katopz' src='/img/home/katopz.jpg' />
            <span>KATOPZ</span>
            <small>
              <span role='img' aria-label='Terms'>
                👨🏻‍💻
              </span>
              Full Stacks Developer
            </small>
          </div>
          <div>
            <img width='auto' alt='ying' src='/img/home/ying.jpg' />
            <span>YING</span>
            <small>
              <span role='img' aria-label='Terms'>
                👩🏻‍🔬
              </span>
              Data Scientist
            </small>
          </div>
          <div>
            <img width='auto' alt='toy' src='/img/home/toy.jpg' />
            <span>TOY</span>
            <small>
              <span role='img' aria-label='Terms'>
                👨🏻‍🔬
              </span>
              Data Analysis
            </small>
          </div>
          <div>
            <img width='auto' alt='tay' src='/img/home/tay.jpg' />
            <span>TAY</span>
            <small>
              <span role='img' aria-label='Terms'>
                👨🏻‍💻
              </span>
              Blockchain Developer
            </small>
          </div>
        </div>
      </section>
      <section className='trusted'>
        <h3>
          <span role='img' aria-label='Terms'>
            👍🏻
          </span>{' '}
          TRUSTED BY
        </h3>
        <div>
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
