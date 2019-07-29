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
    eventURL: 'https://www.facebook.com/events/510948563005126/',
    coverURL:
      'https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/67347292_349467542633150_6418725613376372736_o.jpg?_nc_cat=100&_nc_eui2=AeFYVgBUIAMfQ4EZFcb1pnKmn9d9KEOJibUaxCoWm55R5zknEOq-WgkZZ8faEJAoJfcq8AYWw_2wH_qcry4ky_sSczRMAjU5QQ7blMsf3ux-6A&_nc_oc=AQlO4ce_b4xsSftbsFw_AgMAV731c596zb-L0AUj0Lo1r9nwWFfzInJk6qzOmlmjm28&_nc_ht=scontent.fbkk5-5.fna&oh=2ed7c90aa3f40d02c5d0b29f3913187b&oe=5DB1150C',
    occurMonth: 'AUG',
    occurDate: '03',
    occurAt: 'Saturday, August 3, 2019 at 13 PM – 16 PM',
    icon: 'python',
    desc: 'Basic Python for Everyone with Kaggle',
    venue: 'Too Fast To Sleep @Samyan, Rama IV Road, Si Phraya, Bang Rak, Bangkok'
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
        <Cardz {...raws[0]} />
      </ul>
    </Coursez>
  )
}
