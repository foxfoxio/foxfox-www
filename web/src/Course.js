import React from 'react'
import styled from 'styled-components'

const Coursez = styled.span`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;

  ul {
    list-style: none;
    padding-inline-start: 0;

    li {
      display: inline-block;
      margin: 0.5em;
      border-radius: 8px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

      .cover {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;

        width: auto;
        height: 190px;

        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        padding: 4px;

        @media only screen and (min-width: 768px) {
          height: 223px;
        }
      }

      .detail {
        padding: 0.5em;
        background-color: whitesmoke;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;

        .date {
          display: inline-block;
          -webkit-font-smoothing: antialiased;
          margin-top: -2px;
          padding-bottom: 0;
          width: 60px;

          span {
            display: block;

            :first-child {
              color: #fa3e3e;
              font-size: 12px;
              line-height: 12px;
            }

            font-size: 24px;
            line-height: 28px;
            margin: 2px 0 0 0;
          }
        }

        .desc {
          display: inline-block;
          text-align: left;
          padding: 4px 0 0 12px;

          div {
            :first-child {
              color: #1d2129;
              display: block;
              font-size: 20px;
              font-weight: normal;
              line-height: 28px;
              margin-right: 12px;

              width: 260px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }

            display: inline-block;
            color: #90949c;
            font-size: 14px;
            line-height: 18px;
            margin: 2px 12px 0 0;
          }
        }

        .action {
          hr {
            border: 1px solid white;
            border-top: 1px solid lightgrey;
          }

          button {
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

          .map {
            width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            margin: auto;

            a {
              small {
                color: grey;
                line-height: 3em;
              }
            }
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
    height: 14px;
  }
`

const icons = {
  python: <img alt="python" src="/img/course/python.svg" />
}

const raws = [
  {
    eventURL: 'https://www.facebook.com/events/2471295139773410/',
    coverURL:
      'https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.0-9/70793922_380080146238556_4012675304840495104_o.jpg?_nc_cat=102&_nc_eui2=AeGAZYycBcnLIbFO7ubKkPpZ90ydRINg_h1vvP9QhoQ5SzCJ2xH6D0aZM0RuI83Ja2WyWQlprZGGaSEF0wYIIPwQZKeeB4GERJ51h8QYwu_t5g&_nc_oc=AQlhWvZ4_1lMuSDWl8b1SYncVgFojaMK-bfZ1sMJLn6yO3WXZ11D0-reS1h6eCyueKk&_nc_ht=scontent.fbkk12-3.fna&oh=bc2f58fe1d0c132f70ba6821d3e977ec&oe=5E0C46EB',
    occurMonth: 'SEP',
    occurDate: '21',
    occurAt: 'Saturday, September 21, 2019 9:30 AM – 11:30 AM',
    desc: 'Learn SQL with BigQuery and Data Studio #1',
    venue: 'Clazy Cafe BTS สนามเป้า, Bangkok'
  },
  {
    eventURL: 'https://www.facebook.com/events/489475831634881/',
    coverURL:
      'https://scontent.fbkk8-3.fna.fbcdn.net/v/t1.0-9/70141081_380080332905204_1823014936259854336_o.jpg?_nc_cat=111&_nc_eui2=AeEqmekPz0DDdaZlQ16Qegc55_C1BAJKWKycp3mysnSRtABKqmFfonRIvpVaTRSrnZceIkLC2llY02e3ki-hUezLu3db7Kkgfc_ccfgJkUxWsw&_nc_oc=AQnEJ1HexTGmF3jIOAyqSvWaRJJycoJ7ezL-pYxSJswpRXywhPbkyn94fHUJoAZVQvk&_nc_ht=scontent.fbkk8-3.fna&oh=870ccf42c3e7484aaa571bdf9478462e&oe=5DFA6D3D',
    occurMonth: 'SEP',
    occurDate: '22',
    occurAt: 'Sunday, September 22, 2019 9:30 AM – 11:30 AM',
    desc: 'Learn SQL with BigQuery and Data Studio #2',
    venue: 'Clazy Cafe BTS สนามเป้า, Bangkok'
  }
]

const onMoreButtonClick = e => window.open(e.target.value, '_blank')

const MoreButtonz = ({ value }) => (
  <button onClick={onMoreButtonClick} value={value}>
    <span role="img" aria-label="foxfox">
      🦊
    </span>{' '}
    MORE DETAIL
  </button>
)

const googleMap = venue => `https://www.google.com/maps?safe=off&q=` + encodeURI(venue)

const Card = ({ className, eventURL, occurMonth, occurDate, coverURL, occurAt, icon, desc, venue }) => (
  <li className={className}>
    <div className="cover" />
    <div className="detail">
      <span className="date">
        <span>{occurMonth}</span>
        <span>{occurDate}</span>
      </span>
      <div className="desc">
        <div>
          {icon && icons[icon]} {desc}
        </div>
        <div>{occurAt}</div>
      </div>
      <div className="action">
        <hr />
        {venue && (
          <div className="map">
            <a href={googleMap(venue)} target="_blank" rel="noopener noreferrer">
              <small>
                <span role="img" aria-label="location">
                  📍
                </span>{' '}
                {venue}
              </small>
            </a>{' '}
          </div>
        )}
        <MoreButtonz value={eventURL} />
      </div>
    </div>
  </li>
)

const Cardz = styled(Card)`
  .cover {
    background-image: ${({ coverURL }) => `url('${coverURL}')`};
  }
`

export default () => {
  return (
    <Coursez>
      <ul>
        {raws.map((e, i) => (
          <Cardz key={i} {...e} />
        ))}
      </ul>
    </Coursez>
  )
}
