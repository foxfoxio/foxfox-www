import React from 'react'
import styled from 'styled-components'

const Coursez = styled.span`
  display: flex;
  justify-content: center;

  ul {
    list-style: none;
    padding-inline-start: 0;

    li {
      border-radius: 8px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

      .cover {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;

        width: 320px;
        height: 160px;

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
            box-shadow: 0px 2px white, 0px -1px white;

            :focus {
              outline: 0;
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
const Cardz = styled.li`
  .cover {
    background-image: ${({ src }) => `url('${src}')`};
  }
`

export default () => {
  return (
    <Coursez>
      <ul>
        <Cardz src='/img/course/2019-07-03-cover-ying-python.jpg'>
          <div className='cover' />
          <div className='detail'>
            <span className='date'>
              <span>AUG</span>
              <span>03</span>
            </span>
            <div className='desc'>
              <div>
                <img alt='python' src='/img/course/python.svg' /> Hello Python
              </div>
              <div>Public · Hosted by Noob Learning</div>
            </div>
            <div className='action'>
              <hr />
              <button>
                <span role='img' aria-label='foxfox'>
                  🦊
                </span>{' '}
                MORE DETAIL
              </button>
            </div>
          </div>
        </Cardz>
      </ul>
    </Coursez>
  )
}
