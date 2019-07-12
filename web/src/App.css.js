import styled from 'styled-components'

const font_family =
  'LL Circular Pro Medium Web, -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, sans-serif'

export const Heroz = styled.section`
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

`
export const Learnz = styled.section`
  span {
    span {
      margin-left: -64px;

      div {
        margin-left: -40px;
      }
    }
  }

  .duck {
    display: inline-block;

    small {
      display: block;
    }
  }
`

export const Playz = styled.section`
  span {
    span {
      margin-left: -64px;

      div {
        margin-left: -40px;
      }
    }
  }

  .duck {
    display: inline-block;

    small {
      display: block;
    }
  }
`

export const Enjoyz = styled.section`
  span {
    span {
      margin-left: -64px;

      div {
        margin-left: -40px;
      }
    }
  }

  .duck {
    display: inline-block;

    small {
      display: block;
    }
  }
`

export const Appz = styled.div`
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
