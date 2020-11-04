import styled from 'styled-components';
const Main = styled.div`
  background: #001d43;
  font-family: Montserrat, sans-serif;
  .header {
    display: flex;
    height: 178px;
    position: relative;
    overflow: hidden;
    .logo-group {
      .back-ground-img {
        margin-left: 27px;
      }
      .logo {
        position: absolute;
        top: 25.82px;
        left: 37.17px;
      }
    }

    .time-header {
      position: absolute;
      right: 67px;
      top: 50px;
      span {
        font-weight: 600;
        font-size: 72px;
        line-height: 55px;
        color: rgba(255, 255, 255, 0.5);
      }
      p {
        font-size: 20px;
        line-height: 55px;
        color: #ffffff;
      }
    }
  }
  .body {
    background: #e9eef1;
    // height: 1744px;
    overflow: hidden;
    border-radius: 30px 30px 0px 0px;
    padding-top: 195px;
    .input-slider {
      width: 740px;
      margin: auto;
      margin-bottom: 150px;
      .ant-slider {
        margin-bottom: 27px;
        padding: 0px;
        height: 25px;
        border-radius: 90px;
        box-shadow: 4px 4px 20px #d3dbe6, -4px -4px 30px #ffffff,
          inset 2px 2px 1px rgba(0, 0, 0, 0.2),
          inset -2px -2px 1px #ffffff;
        .ant-slider-rail {
          display: none;
        }
        .ant-slider-track {
          background: linear-gradient(
            180deg,
            #83cdef 0%,
            #97d9f7 25.2%,
            #054d87 100%
          );
          height: 100%;
          border-radius: 90px;
        }
        .ant-slider-handle {
          opacity: 0;
        }
      }
      img {
        margin-bottom: 11px;
      }
      span {
        font-style: italic;
        font-weight: 300;
        font-size: 25px;
        line-height: 40px;
        color: #082a55;
        margin-left: 10px;
      }
    }
    .services {
      width: 729px;
      box-shadow: -20px -20px 40px #ffffff, 20px 20px 40px #d3dbe6;
      border-radius: 90px;
      margin: auto;
      padding: 40px 40px 1px 40px;
      .item{
        height: 310px;
        width: 650px;
        margin-bottom: 32px;
        > div{
          padding-top: 75px;
          padding-left: 50px;
          width: 100%;
          height: 100%;
          background: #e9edf0;
          border-radius: 65px;
          display: flex;
          img{
            width: 73px;
            height: 73px;
          }
          .item-content{
            margin-left: 20px;
            .item-title{
              font-weight: 600;
              font-size: 50px;
              line-height: 61px;
              color: #3C5674;
            }
            .item-sub{
              margin-top: 14px;
              font-style: italic;
              font-weight: 300;
              font-size: 25px;
              line-height: 40px;
              color: #082A55;
              span{
                display: block;
              }
            }
          }
        }
        .active{
          box-shadow: inset 20px 20px 40px rgba(211, 219, 230, 0.6),
          inset -20px -20px 40px #ffffff;
        }
        .inactive{
          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        }
      }
    }
    .go-back{
      margin-top: 64px;
      margin-left: 55px;
      margin-bottom:74px;
      font-weight: 500;
      font-size: 30px;
      color: #3C5674;
      span{
        margin-left: 7px;
      }
    }
  }
`;
const Service = styled.div`
  height: 310px;
  width: 650px;
  margin-bottom: 32px;
    > div{
      padding-top: 75px;
      padding-left: 50px;
      width: 100%;
      height: 100%;
      background: #e9edf0;
      border-radius: 65px;
      display: flex;
      img{
        width: 73px;
        height: 73px;
      }
      .item-content{
        margin-left: 20px;
        .item-title{
          font-weight: 600;
          font-size: 50px;
          line-height: 61px;
          color: #3C5674;
        }
        .item-sub{
          margin-top: 14px;
          font-style: italic;
          font-weight: 300;
          font-size: 25px;
          line-height: 40px;
          color: #082A55;
              span{
                display: block;
              }
            }
          }
        }
      .active{
        box-shadow: inset 20px 20px 40px rgba(211, 219, 230, 0.6),
        inset -20px -20px 40px #ffffff;
      }
      .inactive{
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      }
    }
`
const Display = styled.div`
display : ${props => props.display ? "none" : "block"}
`
export { Main, Service, Display };
