import React from 'react'
import styled from 'styled-components'

const font_family =
  'LL Circular Pro Medium Web, -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, sans-serif'
const Appz = styled.div`
  display: flex;
  flex-flow: row wrap;

  text-align: center;
  background: white;
  text-align: center;
  font-family: ${font_family};

  > * {
    padding: 0.5em;
    flex: 1 100%;
  }

  .header {
    background: deepskyblue;
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
    border-radius: 8px;
    background-color: white;
    color: deepskyblue;
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

  .icon {
    image-rendering: pixelated;
  }

  h3 {
    text-shadow: -1px 0 red, 1px 0 cyan;
  }

  .learn {
    display: flex;
    background-image: url('/img/home/cover.jpg');
    background-size: cover;
    background-repeat: no-repeat
    background-position: 40% 25%;
    height: 50vh;
    
    .title {
      margin: auto;
      margin-bottom: 10vh;
      
      div {
        font-weight: 400;
        font-size: 2em;
        text-shadow: -1px 0 red, 1px 0 cyan;
      }
    }

    .icon {
      width: auto;
      height: 64px;
    }

    @media only screen and (min-width: 768px) {
      background-position: 50% 60%;
      height: 72vh;

      .title {
        margin-bottom: 20vh;
      }

      .icon {
        height: 128px;
      }
    }
  }

  .team {
    overflow: hidden;

    div {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      max-width: 40em;
      margin: auto;

      img {
        width: auto;
        height: 4em;
        border-radius: 50%;
        border-color: powderblue;
        border-width: thick;
        border-style: solid;
        margin: 0.5em;

        @media only screen and (min-width: 768px) {
          height: 6em;
          margin: 1em;
        }
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
    margin-bottom: 1em;
    overflow: hidden;

    div {
      display: flex;
      justify-content: space-evenly;
      max-width: 40em;
      margin: auto;

      img {
        padding-top: 0;
        margin: 0.5em;
        width: auto;
        height: 3em;

        @media only screen and (min-width: 768px) {
          height: 4em;
        }
      }
    }
  }

  .leg {
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightskyblue;
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
    background: deepskyblue;
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
        <div className='title'>
          <div>Learning is fun!</div>
          <div>/</div>
          <img className='icon' alt='fox' src='/img/fox.png' />
        </div>
      </section>
      <section className='play'>
        <h2>Coming Soon!</h2>
        <p>It's time to change how we learn :)</p>
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
              Data Analyst
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
          <img alt='Disrupt Technology Venture' src='/img/disrupt-logo.svg' />
          <img alt='Stormbreaker Venture' src='/img/stormbreaker-logo.svg' />
          <img alt='สำนักงานส่งเสริมเศรษฐกิจดิจิทัล (depa)' src='/img/depa-logo.png' />
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
