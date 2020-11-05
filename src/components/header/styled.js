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
      margin-left: auto;
      margin-top: 50px;
      margin-right: 67px;
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
`;
export { Main };
