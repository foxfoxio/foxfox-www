import React from 'react'
import styled from 'styled-components'

const Coursez = styled.span`
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

      .cover {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;

        width: 400px;
        height: 210px;

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
          width: 64px;

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

              width: 280px;
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
            padding: 0.5em;
            padding-left: 2em;
            padding-right: 2em;
            margin: 0.5em;
            background-color: white;
            box-shadow: 0px 2px white, 0px -1px white;
            cursor: pointer;

            :focus {
              outline: 0;
            }
          }

          .map {
            width: 330px;
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
    height: 16px;
  }
`

const icons = {
  python: <img alt="python" src="/img/course/python.svg" />
}

const raws = [
  {
    eventURL: 'https://www.facebook.com/events/2070199543287309/',
    coverURL:
      'https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/66753948_2739338309413062_7001306054126469120_n.jpg?_nc_cat=108&_nc_eui2=AeGJEJEot9X2ejtn6iVYthuwZzeTlnrCc2iWrM19OssWpkQawZcvXjpaExjXhsO4Mra74HXV0hIsfhxlbMfATfUBVuHWSgxLJYbdvYtwoY3b0w&_nc_oc=AQl-i1ZFLs6acBzQn4wFaXKopFNSVpUlWHJ9DejZT23Vpe1tH0GLHKrWdou-tsh9zfg&_nc_ht=scontent.fbkk22-1.fna&oh=65a955d705c93553028e131a3a0456e2&oe=5DB8A79B',
    occurMonth: 'JUL',
    occurDate: '27',
    occurAt: 'Saturday, July 27, 2019 at 9 AM – 5:30 PM',
    desc: 'เรียนรัว R, SQL, Machine Learning ครั้งที่ 03/2019',
    venue: 'BIG Co-Working 129 Rama IX Road, Huai Khwang, Bangkok, Thailand 10310'
  },
  {
    eventURL: 'https://web.facebook.com/events/912670962412399/',
    coverURL:
      'https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/67542696_1081657002030011_5451014720754548736_o.jpg?_nc_cat=104&_nc_eui2=AeEDDdAzi6T4Ds6NXO_3ibS5O9U4Xhp3aTac-4eTeAKwRxYgFSfa6nhc9LUEzjR41HzmmZUnvc29KifyQpzkiCVFWavA4l0sP5ie7W5t6TRhGQ&_nc_oc=AQnxvQOme-KI5gD0doQoeco5uw61rGmnMImghQKnf8PtzrnkVqcPxwY9WxnNfZPFm-s&_nc_ht=scontent.fbkk22-1.fna&oh=d3437db9676b78297ec4a1c28a105e8e&oe=5DAEFF0D',
    occurMonth: 'AUG',
    occurDate: '03',
    occurAt: 'Saturday, August 3, 2019 at 13 PM – 16 PM',
    icon: 'python',
    desc: 'Python for Data Science',
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
        {/*
        <Cardz {...raws[1]} />
        */}
      </ul>
    </Coursez>
  )
}
