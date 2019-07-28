import React from 'react'

import { Appz, Heroz, Learnz, Playz /*, Enjoyz*/ } from './App.css'
import Course from './Course'
import Quest from './Quest'

const App = () => {
  return (
    <Appz>
      <header className="header">
        <div className="header-left">
          <img className="logo" alt="FoxFox Logo" src="/img/foxfox-logo-white.svg" />
          <img className="logo-text" alt="FoxFox Text Logo" src="/img/foxfox-text-dense-white.svg" />
        </div>
        <div className="header-right">
          <ul className="navigation">
            <li>
              <a href="#learn">Learn</a>
            </li>
            <li>
              <a href="#play">Play</a>
            </li>
            {/* <li>
              <a href="#enjoy">Enjoy</a>
            </li> */}
          </ul>
        </div>
      </header>
      <Heroz>
        <div className="title">
          <div>
            <span>Learning is </span>{' '}
            <span className="fun">
              <img alt="fun" src="/img/fun.svg" />
            </span>
          </div>

          <div>/</div>
          <img className="icon" alt="fox" src="/img/fox.png" />
        </div>
      </Heroz>
      <Learnz>
        <h3>
          <span role="img" aria-label="learn">
            🧪
          </span>{' '}
          LEARN
        </h3>
        <span>
          <span>
            Let's learn by doing
            <div>\</div>
          </span>
          <img alt="kat" src="/img/kat.png" width="32px" height="auto" />
        </span>{' '}
        <span className="duck">
          <small>wow!</small>
          <small>/</small>
          <img alt="duck" src="/img/duck.png" width="16px" height="auto" />
        </span>
      </Learnz>
      <Course />
      <Playz>
        <h3>
          <span role="img" aria-label="play">
            💎
          </span>{' '}
          PLAY
        </h3>
        <span>
          <span>
            Let's play to up skills
            <div>\</div>
          </span>
          <img alt="kat" src="/img/fox.png" width="32px" height="auto" />
        </span>{' '}
        <span className="duck">
          <small>wow!</small>
          <small>/</small>
          <img alt="duck" src="/img/duck.png" width="16px" height="auto" />
        </span>
      </Playz>
      <Quest />
      {/*<Enjoyz>
        <h3>
          <span role="img" aria-label="enjoy">
            🏂
          </span>{' '}
          ENJOY
        </h3>
        <span>
          <span>
            Let's enjoy new skills
            <div>\</div>
          </span>
          <img alt="kat" src="/img/foo.png" width="32px" height="auto" />
        </span>{' '}
        <span className="duck">
          <small>wow!</small>
          <small>/</small>
          <img alt="duck" src="/img/duck.png" width="16px" height="auto" />
        </span>
      </Enjoyz> */}
      <section className="team">
        <h3>
          <span role="img" aria-label="Terms">
            🦊
          </span>{' '}
          TEAM
        </h3>
        <div>
          <div>
            <img width="auto" alt="katopz" src="/img/home/katopz.jpg" />
            <span>
              <span role="img" aria-label="Terms">
                👨🏻‍💻
              </span>
              KATOPZ
            </span>
            <small>Fullstack Dev</small>
          </div>
          <div>
            <img width="auto" alt="ying" src="/img/home/ying.jpg" />
            <span>
              <span role="img" aria-label="Terms">
                👩🏻‍🔬
              </span>
              YING
            </span>
            <small>Data Scientist</small>
          </div>
          <div>
            <img width="auto" alt="toy" src="/img/home/toy.jpg" />
            <span>
              <span role="img" aria-label="Terms">
                👨🏻‍🔬
              </span>
              TOY
            </span>
            <small>Data Analyst</small>
          </div>
          <div>
            <img width="auto" alt="tay" src="/img/home/tay.jpg" />
            <span>
              <span role="img" aria-label="Terms">
                👨🏻‍💻
              </span>
              TAY
            </span>
            <small>Blockchain Dev</small>
          </div>
        </div>
      </section>
      <section className="trusted">
        <h3>
          <span role="img" aria-label="Terms">
            👍🏻
          </span>{' '}
          TRUSTED BY
        </h3>
        <div>
          <img alt="Disrupt Technology Venture" src="/img/disrupt-logo.svg" />
          <img alt="Stormbreaker Venture" src="/img/stormbreaker-logo.svg" />
          <img alt="สำนักงานส่งเสริมเศรษฐกิจดิจิทัล (depa)" src="/img/depa-logo.png" />
        </div>
      </section>
      <section className="leg">
        <a href="mailto:info@foxfox.io">
          <small>
            <span role="img" aria-label="Contact">
              ✉️
            </span>
            info<span>@</span>foxfox.io
          </small>
        </a>
        <a href="/policy.html">
          <small>
            <span role="img" aria-label="Terms">
              🔏
            </span>
            Privacy Policy
          </small>
        </a>
        <a href="/terms.html">
          <small>
            <span role="img" aria-label="Terms">
              📝
            </span>
            Terms
          </small>
        </a>
      </section>
      <footer className="footer">
        <small>
          made with <span>❤</span> © 2019 FOXFOX CO.,LTD.
        </small>
      </footer>
    </Appz>
  )
}

export default App
