import React from 'react'
import styled from 'styled-components'

const Appz = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-weight: bold;
  text-align: center;

  > * {
    padding: 10px;
    flex: 1 100%;
  }

  .header {
    background: black;
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
    border: solid;
    border-color: black;
    border-width: 1px;
  }

  .navigation a:hover {
    border: solid;
    border-color: coral;
    border-width: 1px;
  }

  .footer {
    background: black;
    color: whitesmoke;
  }

  .footer span {
    color: coral;
  }

  .hero {
    text-align: center;
  }

  .main {
    text-align: center;
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
              <a href='#course'>Course</a>
            </li>
            <li>
              <a href='#quiz'>Quiz</a>
            </li>
            <li>
              <a href='#faq'>FAQ</a>
            </li>
          </ul>
        </div>
      </header>
      <article className='main'>
        <p>Why</p>
      </article>
      <section className='course'>
        <p>Course</p>
      </section>
      <section className='quiz'>
        <p>Quiz</p>
      </section>
      <footer className='footer'>
        <small>
          made w/ <span>❤</span> foxfox.io
        </small>
      </footer>
    </Appz>
  )
}

export default App
