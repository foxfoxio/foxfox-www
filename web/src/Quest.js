import React from 'react'
import styled from 'styled-components'

import MobileDetect from 'mobile-detect'
const isMobile = new MobileDetect(window.navigator.userAgent).mobile()

const Coverz = styled.div`
  background-image: ${({ coverURL }) => `url('${coverURL}')`};
  background-color: ${({ color }) => color};
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  width: 160px;
  height: 90px;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 4px;
`

const Questz = styled.span`
  display: flex;
  justify-content: center;

  ul {
    list-style: none;
    padding-inline-start: 0;

    li {
      display: inline-block;
      margin: 0.5em;
      border-radius: 8px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

      .detail {
        padding: 0.5em;
        background-color: whitesmoke;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;

        .desc {
          display: inline-block;
          text-align: center;
          margin-bottom: 0.25em;
          font-size: 20px;
        }

        .action {
          hr {
            border: 1px solid white;
            border-top: 1px solid lightgrey;
          }

          button {
            width: 128px;
            height: 3em;
            border-radius: 2em;
            border-color: sandybrown;
            padding: 0.5em;
            padding-left: 2em;
            padding-right: 2em;
            margin: 0.5em;
            background-color: linen;
            box-shadow: 0px 2px white, 0px -1px white;
            font-weight: bold;
            color: crimson;

            cursor: pointer;
            user-select: none;
            -webkit-touch-callout: none;

            :focus {
              outline: 0;
            }
          }

          br + button {
            margin-top: 0;
          }
        }
      }
    }
  }

  article {
    padding: 1em;
    border-radius: 1em;
  }

  img {
    width: auto;
    height: 16px;
  }
`

const icons = {
  python: <img alt="python" src="/img/course/python.svg" />
}

const getQuestURL = id =>
  isMobile
    ? `
https://line.me/R/app/1572417560-M2dWWN42?id=${id}`
    : `https://play.foxfox.io/quiz?id=${id}`

const getScoreURL = id => `https://play.foxfox.io/score?id=${id}`

const raws = [
  {
    questURL: getQuestURL('python/basic'),
    scoreURL: getScoreURL('quiz-python-basic'),
    coverURL: '/img/quest/python-basic.png',
    icon: 'python',
    desc: 'Basic Python',
    color: 'darkseagreen'
  },
  {
    questURL: getQuestURL('sql/basic'),
    scoreURL: getScoreURL('quiz-sql-basic'),
    coverURL: '/img/quest/sql-basic.png',
    desc: 'Basic SQL',
    color: 'darkseagreen'
  },
  {
    questURL: getQuestURL('sql/advance'),
    scoreURL: getScoreURL('quiz-sql-advance'),
    coverURL: '/img/quest/sql-advance.png',
    desc: 'Advance SQL',
    color: 'lightcoral'
  } /*,
  {
    questURL: 'https://foxfox.io/quiz?id=sql/interview',
    coverURL: '/img/quest/sql.png',
    desc: 'Interview SQL',
    color: 'cornflowerblue'
  }*/
]

const onPlayButtonClick = e => window.open(e.target.value, '_blank')
const onScoreButtonClick = e => window.open(e.target.value, '_blank')

const PlayButtonz = ({ questURL, scoreURL }) => [
  <button key="play" onClick={onPlayButtonClick} value={questURL}>
    <span role="img" aria-label="play">
      💎
    </span>{' '}
    PLAY
  </button>,
  <br key={Math.random()} />,
  <button key="score" onClick={onScoreButtonClick} value={scoreURL}>
    <span role="img" aria-label="score">
      🥇
    </span>{' '}
    SCORE
  </button>
]

const Cardz = ({ className, questURL, scoreURL, coverURL, occurAt, icon, desc, color }) => (
  <li className={className}>
    <div>
      <Coverz coverURL={coverURL} color={color} />
      <div className="detail">
        <div key="desc" className="desc">
          <div key="desc">
            {icon && icons[icon]} {desc}
          </div>
          <div key="occurAt">{occurAt}</div>
        </div>
        <div key="action" className="action">
          <PlayButtonz questURL={questURL} scoreURL={scoreURL} />
        </div>
      </div>
    </div>
  </li>
)

export default () => {
  return (
    <Questz>
      <ul>
        {raws.map((e, i) => (
          <Cardz key={i} {...e} />
        ))}
      </ul>
    </Questz>
  )
}
