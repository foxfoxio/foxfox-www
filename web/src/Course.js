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
  python: <img alt='python' src='/img/course/python.svg' />
}

const raws = [
  {
    eventURL: 'https://www.facebook.com/events/2285369731726296/',
    coverURL:
      'https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/65385449_2706839999329560_6010863209571942400_n.jpg?_nc_cat=102&_nc_eui2=AeE1U8IvIdvisHEPc-53Vg_Nrqe-P-Mae8GGzXezmChbs-jrFVTI8MmJqlHNsCi8qeah1gPu0dJvcDe5keWFEamv7RzVcZ5_Wz1cRf_9eJIQYw&_nc_oc=AQkZ-vYY7ypzzeZIje-Cjh8DRNFHusvh7DyXkcylh9OUY-mwzOZIg1p4WmzDZcnDrzYt7FxsEWPxv76SE23mxiEi&_nc_ht=scontent.fbkk5-6.fna&oh=313362ea55dbee49d0e4d9f286dd8677&oe=5DB85352',
    occurMonth: 'JUL',
    occurDate: '20',
    occurAt: 'Saturday, July 20, 2019 at 9 AM – 12:30 PM',
    desc: 'Free - SQL for Data Science #3',
    venue: 'BIG Co-Working 129 Rama IX Road, Huai Khwang, Bangkok, Thailand 10310'
  },
  {
    eventURL: 'https://www.facebook.com/events/695208040919202/',
    coverURL: '/img/course/2019-07-03-cover-ying-python.jpg',
    occurMonth: 'AUG',
    occurDate: '03',
    occurAt: 'Saturday, August 3, 2019 at 9 AM – 12:30 PM',
    icon: 'python',
    desc: 'Python for Data Science',
    venue: 'Too Fast To Sleep @Samyan, Rama IV Road, Si Phraya, Bang Rak, Bangkok'
  }
]

const onMoreButtonClick = e => window.open(e.target.value, '_blank')

const MoreButtonz = ({ value }) => (
  <button onClick={onMoreButtonClick} value={value}>
    <span role='img' aria-label='foxfox'>
      🦊
    </span>{' '}
    MORE DETAIL
  </button>
)

const googleMap = venue => `https://www.google.com/maps?safe=off&q=` + encodeURI(venue)

const Card = ({ className, eventURL, occurMonth, occurDate, coverURL, occurAt, icon, desc, venue }) => (
  <li className={className}>
    <div className='cover' />
    <div className='detail'>
      <span className='date'>
        <span>{occurMonth}</span>
        <span>{occurDate}</span>
      </span>
      <div className='desc'>
        <div>
          {icon && icons[icon]} {desc}
        </div>
        <div>{occurAt}</div>
      </div>
      <div className='action'>
        <hr />
        {venue && (
          <div className='map'>
            <a href={googleMap(venue)} target='_blank'>
              <small>
                <span role='img' aria-label='location'>
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
        <Cardz {...raws[1]} />
      </ul>
    </Coursez>
  )
}
