import styled from "styled-components";
// import imgBackHome from "../../assets/img/backHome.png"
import imgBackHome from "../../assets/img/imgBackHome.png";
import imgWaveFooter from "../../assets/img/waveFooter.png";

export const HomePageDivAll = styled.div`
  position: relative;
  /* height: 100%; */
  height: 100%;
  display: block;
  width: 100vw;
  /* width: 100%; */
  /* justify-content: space-between; */
  flex-direction: column;
  margin: 0;
`;

export const HomePageImgDiv = styled.div`
  background-image: url(${imgBackHome});
  background-size: cover;
  width: 100vw;

  height: 100vh;
  color: white;
  overflow-x: hidden;
`;

export const divMenuBar = styled.div`
  width: 100%;
  ul {
    height: 120px;
    display: flex;
    flex-direction: row;
    /* background-color: red; */

    text-align: center;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    button {
      text-align: center;
      align-self: center;
      justify-content: center;
      background-color: transparent;
      border: 1px solid white;
      width: 105px;
      height: 28px;
      border-radius: 5px;
      color: white;
      font-size: 16px;
      padding-bottom: 3px;
      cursor: pointer;
    }
  }

  .divLis {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  li {

    color: white;
    font-size: 14px;
    cursor: pointer;

    a {
      color: white;
    }
  }

  @media (max-width: 930px) {
    li{
      padding: 0 0.5rem ;
      font-size: 10px;
    }
    .divLis{
      button{
        padding-bottom: 1px;
        font-size: 12px;
        width: 70px;
        height: 25px;
      }
    }

  }
`;

export const HomePageImgDivContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .text {
    margin-left: 90px;
    text-align: left;
    height: 65%;
    margin-bottom: 3rem;

    h5 {
      /* font-size: 49px; */
      font-size: 3vw;
      font-weight: normal;
      span {
        font-weight: bold;
      }
    }
    p {
      margin-top: 15px;
      font-size: 14px;
    }
  }
  .img {
    height: 100%;
    margin-left: -5rem;
    margin-top: -2rem;
    width: 40vw;
    img {
      width: 40vw;
      object-fit: contain;
    }

    .whatsIcon{
      width: 5vw;
      margin-top: 70vh;
      position: fixed;
    }
  }

  @media (max-width: 768px) {

    display: flex;
    flex-direction: column;

  }

`;

export const SectionCar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  margin-top: -3rem;
  position: relative;

  .cardContainer {
    height: 100%;
    transition: all 2s ease-in-out;
    display: flex;

  }
  .card {
    width: 100%;
    display: flex;
    overflow-x: hidden;

    height: 475px;
  }

  .cardContent {

    overflow-x: hidden;
    max-width: 918px;
    height: 100%;
    display: flex; /* Adicionado para permitir o alinhamento dos itens */
    justify-content: center;
  }

  .text {
    width: 50%;
    padding: 2rem;
    display: flex; /* Adicionado para permitir o alinhamento vertical */
    flex-direction: column; /* Para empilhar os elementos verticalmente */
    justify-content: left; /* Alinhamento vertical */
    overflow-x: hidden;
    background-color: #f8f8f8;
    align-items: end;
    display: flex; /* Adicionado para permitir o alinhamento dos itens */
    border-right: none;
    color: #5e5873;
    margin-top: 2.4rem;
    border-start-start-radius: 16px;
    border-end-start-radius: 16px;

    h5 {
      font-size: 28px;
      font-weight: normal;
    }
    p {
      font-size: 18px;
      margin: 2rem 0rem;
      padding-right: 1rem;
    }
  }

  .img {
    width: 60%;
    display: flex;
    justify-content: right;
    align-items: center;
    margin: 0;
    border-radius: 16px;
    margin-left: -220px;

  }

  img {
    max-width: 100%;
    max-height: 100%; /* Alterado de 'height' para 'max-height' para evitar esticamento */
    object-fit: contain;
  }

  @media (max-width: 948px) {

    display: flex;
    flex-direction: column;
    .text{
      h5{

        font-size: 14px;}
      p{
        font-size: 10px;
      }

    }
  }

`;

export const SimulatorDiv = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #e9ecef;
  height: 35rem;
  justify-content: center;

  .content {
    margin-top: 20rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    height: 100%;
  }

  .text {
    display: flex;
    flex-direction: column;
    width: 30%;
    color: #5e5873;
    h5 {
      font-weight: 400;
      font-size: 49px;
      margin-bottom: 2rem;
    }
    p {
      font-weight: 500;
      font-size: 18px;
    }
  }

  .divForm {
    display: flex;
    box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.1); /* deslocamento-x deslocamento-y desfoque cor */
    border-radius: 10px; /* Define o border-radius */
    width: 45%;
    height: auto;
    justify-content: flex-end; /* Alinha os itens para a direita */
    justify-content: center; /* Alinha os itens para a direita */
    form {
      padding: 1rem;
      background-color: #f8f8f8;
      display: flex;
      width: 100%;
      align-self: flex-end;
      justify-self: flex-end;

      .divInputs {
        width: 55%;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        .divInput {
          display: flex;
          flex-direction: column;

          label {
            font-size: 12px;
            margin-bottom: 3px;
          }
          input {
            border: solid 1px #e9ecef;
            padding: 0.5rem 1rem;
            border-radius: 5px;
          }
        }
        /* justify-content: center; */
      }

      .texts {
        width: 45%;
        justify-content: center;
        padding: 0.2rem;
        color: #5e5873;
        h5 {
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        span {
          font-size: 12px;
          margin-top: 1rem;
        }

        div {
          display: flex;
          width: 200px;
          justify-content: space-between;
          margin: 0.9rem 0;
          p {
            font-size: 12px;
            width: 100px;
          }
        }
        .contentTexts {
          display: flex;
          flex-direction: column;
          width: auto;
        }
      }
    }
  }
`;

export const Depositions = styled.div`
  display: flex;

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .cardContent {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    .divTitle {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #5e5873;
      margin-top: 4rem;
      h5 {
        color: #5e5873;
        font-weight: normal;
        font-size: 49px;
        margin-bottom: 1rem;
      }
      p {
        font-size: 18px;
      }
    }

    .cards {
      margin-top: 5rem;
      display: flex;
      justify-content: space-around;
      width: 80%;
      .card {
        display: flex;
        width: 35%;
        justify-content: center;
        flex-direction: column;
        .detail {
          width: 8%;
          margin-bottom: 2rem;
          margin-top: 1rem;
        }

        .detail:nth-of-type(2) {
          margin-bottom: 3rem;
        }

        .divImgCard {
          margin-bottom: -10rem;
          z-index: 99999;
          width: 80%;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          margin-left: 1rem;

          .imgPerfil {
            margin-bottom: 2rem;
            width: 40%;
          }
        }

        .divCardDesc {
          height: 310px;
          width: 90%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          background-color: #fafafa;
          border-radius: 8px;
          padding-bottom: 2rem;

          div {
            width: 99%;
            text-align: center;
            p {
              margin-top: 1rem;
              margin-bottom: 1rem;
              font-size: 14px;
            }
            /* p:nth-of-type(2) {
              margin-bottom: 0rem;
            } */
            span {
              font-weight: 500;
              font-size: 18px;
            }
          }
        }
      }
    }
  }

  .register {
    width: 100%;
    display: flex;
    margin-top: 8rem;
    justify-content: center;

    .container {
      display: flex;
      width: 80%;
      justify-content: center;
      flex-direction: row;
      align-items: flex-start;
    }

    .text {
      display: flex;
      flex-direction: column;
      width: 60%;

      color: #5e5873;
      h5 {
        font-weight: 400;
        font-size: 49px;
        margin-bottom: 2rem;
      }
      p {
        font-weight: 500;
        font-size: 18px;
      }
    }
  }

  .divForm {
    display: flex;
    width: 50%;
    justify-content: flex-end; /* Alinha os itens para a direita */
    justify-content: center; /* Alinha os itens para a direita */

    form {
      padding: 1rem;
      display: flex;
      width: 100%;
      align-self: flex-end;
      justify-self: flex-end;

      .divInputs {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 1rem;

        button {
          color: white;
          width: 120px;
          padding: 0.5rem 1rem;
          font-size: 14px;
          background-color: #7d45dc;
          border-radius: 6px;
        }
      }
    }
  }
`;

export const Footer = styled.div`
  background-color: #f8f8f8;
  background-size: cover;
  width: 100vw;
  color: white;
  overflow-x: hidden;
  color: black;

  justify-content: center;
  overflow: hidden;

  .container {
    padding: 0rem 7rem;
    margin-top: 20px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .copyRigAndLogo {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 3rem;

      p {
        color: #5e5873;
      }
    }
  }

  .divAllColumn {
    height: 250px;
    width: 100%;
    color: #5e5873;
    display: flex;
    justify-content: space-between;

    .divColumnsSeparate {
      color: #5e5873;
      display: flex;
      justify-content: space-evenly;
    }
    .column {
      width: 170px;
      h3 {
        font-size: 18px;
        font-weight: normal;
        margin-bottom: 2rem;
      }

      p {
        font-size: 12px;
        margin-bottom: 1rem;
        margin-top: 1rem;
      }
    }
  }

  footer {
    color: #5e5873;
    text-align: center;
    font-size: 12px;
    margin-bottom: 2rem;
  }
`;
