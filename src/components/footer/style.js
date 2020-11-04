import styled from "styled-components"
import style from "styled-components"
const Footer = style.div`
  margin: 0px 30px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2), -3px -3px 10px #FFFFFF;
  border-radius: 100px;
  margin-bottom: 37px;
    .footer-bar{
      background: #E9EDF0;
      display: flex;
      padding-top: 27px;
      background-color: transparent;
      .footer-item{
        width: 20%;
        font-size: 22px;
        color: #8394a7;
        text-align: center;
        img{
          display: block;
            margin: auto;
        }
        span{
          max-width: 166px;
          display: inline-block;
        }
      }
      .item1{
        font-weight: bold;
        font-size: 22px;
        color: #3C5674;
        margin-left: 0px
      }
    }
    .footer-help{
      padding: 37px 50px 42px 50px;
      background: #B71F35;
      border-radius: 0px 0px 100px 100px;
      display: flex;
      span{
        display: inline-block;
        width: 487px;
        font-size: 25px;
        color: #FFFFFF;
        margin-left: 50px;
        margin-right: 31px;
      }
      .button-number{
        background: #E9EDF0;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
        border-radius: 90px;
        display: inline-block;
        padding: 11px 16px 11px 31px;
        align-items: center;
        display: flex;
        span{
          width: auto;
          margin: 0px;
          font-weight: 500;
          font-size: 22px;
          line-height: 40px;
          color: #3C5674;
        }
        img{
          margin-left: 13px;
        }
      }
    }
`;
const ColorDiv = styled.div`
  
  div::after{
    width: 100%;
    background: ${props => props.background ? props.background : "white"};
    height: 12px;
    margin-top: 31px;
    content:"";
    display: block;
  }
  [class*="active-bar"]{
      path{
        stroke: ${props => props.background ? props.background : "white"};
        stroke-width: 4;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      line{
        stroke: ${props => props.background ? props.background : "white"};
        stroke-width: 4;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
  }
  .active-bar1{
      path[fill-rule]{
        fill-rule: evenodd;
        clip-rule: evenodd;
        fill: ${props => props.background ? props.background : "white"};
        stroke-width: 0;
      }
  }
  
`;
export { Footer, ColorDiv }