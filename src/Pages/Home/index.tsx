import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import svgLogo from "../../assets/svg/Logo.svg";
import svgForDetailPerfil from "../../assets/svg/detailImgPerfil.svg";
import ImgNote from "../../assets/img/notebookPng.png";
import imgForCar1 from "../../assets/img/imgForCar1.png";
import imgForCar2 from "../../assets/img/imgForCar2.png";
import imgForCar3 from "../../assets/img/imgForCar3.png";
import imgForCar4 from "../../assets/img/imgForCar4.png";
import imgForPerfil1 from "../../assets/img/imgPerfil1.png";
import imgForPerfil2 from "../../assets/img/imgPerfil2.png";
import imgForPerfil3 from "../../assets/img/imgPerfil3.png";
import imgCardsAccept from "../../assets/img/Bandeiras.png";
import imgCertificate from "../../assets/img/Certificados.png";
import imgLogoFooter from "../../assets/img/imgLogoFooter.png";
import imgArrowRight from "../../assets/img/arrow.png";
import whatsIcon from "../../assets/img/whatsIcon.png";
import { CommonInput } from "../../components/Input";
import { Link } from "react-scroll";

export function Home() {
  const divRef = useRef<HTMLDivElement>(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [indexForCar, setIndexForCar] = useState(0);
  const [allImagesForCarr, setAllImagesForCarr] = useState([
    {
      img: imgForCar1,
      textTitle: "Pagamentos com máxima aprovação",
      textDesc:
        "Venda online com a maior taxa de aprovação possível. Reduza o número de vendas recusadas, autorize o maior número de pagamentos, receba e gerencie seu dinheiro de forma flexível.",
      link: "Cadastre-se",
    },
    {
      img: imgForCar2,
      textTitle: "Checkout de alta conversão",
      textDesc:
        "Uma solução de checkout com inúmeros recursos para potencializar ainda mais as suas vendas online. Customize toda a experiência de pagamento, ofereça produtos adicionais, recupere clientes, gere links para que outras pessoas possam promover seus produtos e mais.",
      link: "Saiba mais",
    },
    {
      img: imgForCar3,
      textTitle: "Controle total do seu fluxo financeiro",
      textDesc:
        "Filtre as informações que você quer ver e acompanhe seu extrato diariamente para saber quando você vai receber pelas suas vendas. Precisa do dinheiro antes? Antecipe os seus recebíveis com apenas alguns cliques!",
      link: "Clique e conheça",
    },
    {
      img: imgForCar4,
      textTitle: "Receba as vendas parceladas em até 2 dias úteis",
      textDesc:
        "Solicite a antecipação de recebíveis online e receba pagamentos com agilidade, sem burocracia e sem juros abusivos. Vamos ajudar o seu negócio a adquirir capital de giro recebendo um dinheiro que já é seu!",
      link: "Aproveite",
    },
  ]);

  useEffect(() => {
    const newOptions = [
      { label: "Opção 1", value: "Opção 1" },
      { label: "Opção 2", value: "Opção 2" },
      { label: "Opção 3", value: "Opção 3" },
    ];
    setSelectedOptions(newOptions);
  }, []);

  function changeCarr(param) {
    // Define a opacidade inicial
    let opacity = 1;
  
    // Define a função para reduzir gradativamente a opacidade
    const reduceOpacity = () => {
      // Reduz a opacidade em pequenos decrementos
      opacity -= 0.08;
      if (divRef.current) {
        // Define a opacidade atual no elemento
        divRef.current.style.opacity = String(opacity);
      }
      // Verifica se a opacidade ainda é maior que 0
      if (opacity > 0) {
        // Agendando a próxima redução de opacidade
        setTimeout(reduceOpacity, 5); // Ajuste aqui a velocidade da transição
      } else {
        // Quando a opacidade chegar a 0, altera o index do carrinho, se necessário
        if (param === "next" && indexForCar < 3) {
          setIndexForCar((prevValue) => prevValue + 1);
        } else if (param !== "next") {
          setIndexForCar((prevValue) => prevValue - 1);
        }
        // Após mudar o índice, inicia a transição para restaurar a opacidade
        setTimeout(restoreOpacity, 5); // Tempo de espera antes de restaurar a opacidade
      }
    };
  
    // Inicia a redução de opacidade
    reduceOpacity();
  }
  
  // Função para restaurar a opacidade
  function restoreOpacity() {
    // Define a opacidade inicial
    let opacity = 0;
  
    // Define a função para aumentar gradativamente a opacidade
    const increaseOpacity = () => {
      // Aumenta a opacidade em pequenos incrementos
      opacity += 0.08;
      if (divRef.current) {
        // Define a opacidade atual no elemento
        divRef.current.style.opacity = String(opacity);
      }
      // Verifica se a opacidade ainda é menor que 1
      if (opacity < 1) {
        // Agendando o próximo aumento de opacidade
        setTimeout(increaseOpacity, 5); // Ajuste aqui a velocidade da transição
      }
    };
  
    // Inicia o aumento de opacidade
    increaseOpacity();
  }
  

  return (
    <S.HomePageDivAll>
      <div>
        <S.HomePageImgDiv>
          <S.divMenuBar>
            <ul>
              <img src={svgLogo} alt="Logo" />
              <div className="divLis">
                <li>
                  <Link smooth={true} duration={900} to="solutions">
                    Soluções
                  </Link>
                </li>
                <li>
                  <Link smooth={true} duration={800} to="simulator">
                    Tarifas
                  </Link>
                </li>
                <li>
                  <Link smooth={true} duration={700} to="depositions">
                    Depoimentos
                  </Link>
                </li>
                <li>
                  <Link smooth={true} duration={600} to="register">
                    Cadastro
                  </Link>
                </li>
                <li>
                  <Link smooth={true} duration={500} to="footer">
                    Contato
                  </Link>
                </li>
                <button>Entrar</button>
              </div>
            </ul>
          </S.divMenuBar>
          <S.HomePageImgDivContent>
            <div className="text">
              <h5>
                Tecnologia e <br />
                segurança pra <br /> você <span>vender mais.</span>
              </h5>
              <p>
                venda online com a segurança e tecnologia <br /> mpays. Soluções
                simples e flexiveis para <br /> digitalizar o seu negocio.
              </p>
            </div>
            <div className="img">
              <img src={ImgNote} alt="Notebook img" />
              <img className="whatsIcon" src={whatsIcon} alt="whatsIcon" />
            </div>
          </S.HomePageImgDivContent>
        </S.HomePageImgDiv>
        <S.SectionCar>
          {indexForCar > 0 && (
            <img
              src={imgArrowRight}
              onClick={() => changeCarr("return")}
              alt=""
              style={{ transform: "rotateY(180deg)", cursor: "pointer" }}
            />
          )}
          <div className="cardContainer">
            <div className="card" id="solutions" ref={divRef}>
              <div className="cardContent">
                <div className="text">
                  <div>
                    <h5>{allImagesForCarr[indexForCar]?.textTitle}</h5>
                    <p>{allImagesForCarr[indexForCar]?.textDesc}</p>
                    <a href="">{allImagesForCarr[indexForCar]?.link}</a>
                  </div>
                </div>
                <div className="img">
                  <img
                    src={allImagesForCarr[indexForCar]?.img}
                    alt="Notebook img"
                  />
                </div>
              </div>
            </div>
          </div>

          <img
            src={imgArrowRight}
            onClick={() => changeCarr("next")}
            style={{ cursor: "pointer" }}
            alt=""
          />
        </S.SectionCar>
        <S.SimulatorDiv id="simulator">
          <div className="content">
            <div className="text">
              <div>
                <h5>
                  Simulador de <br /> vendas mpays
                </h5>
                <p>
                  Veja quanto você recebe nas vendas <br /> no crédito, débito e
                  parcelado.
                </p>
              </div>
            </div>
            <div className="divForm">
              <form action="">
                <div className="divInputs">
                  <CommonInput
                    typeInp="input"
                    placeholder="R$ 899,00"
                    name="value"
                    label="Valor"
                    marginBottom={30}
                  />
                  <CommonInput
                    typeInp="select"
                    options={selectedOptions}
                    placeholder="R$ 899,00"
                    name="paymentType"
                    label="Tipo de pagamento"
                    type="text"
                  />
                </div>
                <div className="texts">
                  <div className="contentTexts">
                    <h5>VOCÊ RECEBE:</h5>
                    <div>
                      <p>NA HORA</p>
                      <p>Não disponivel</p>
                    </div>
                    <div>
                      <p>EM 10 DIAS</p>
                      <p>R$ 949,70</p>
                    </div>
                    <div>
                      <p>EM 30 DIAS</p>
                      <p>R$ 959,70</p>
                    </div>
                    <span>
                      Todas as simulações usam as taxas <br /> iniciais
                      informadas no site.
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </S.SimulatorDiv>
        <S.Depositions>
          <div className="container" id="depositions">
            <div className="cardContent">
              {/* <div> */}
              <div className="divTitle">
                <h5>Depoimentos</h5>
                <p>O suporte ao cliente é nossa primeira prioridade.</p>
              </div>
              {/* </div> */}
              <div className="cards">
                <div className="card">
                  <div className="divImgCard">
                    <img className="imgPerfil" src={imgForPerfil1} alt="" />
                    <img className="detail" src={svgForDetailPerfil} alt="" />
                  </div>
                  <div className="divCardDesc">
                    <div>
                      <p>
                        A mpays foi a plataforma onde eu tive a maior taxa de
                        aprovação de crédito do mercado.
                      </p>
                      <span>Carlos Eduardo Amaral</span>
                      <p>CEO da Amaral Mídia</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="divImgCard">
                    <img className="imgPerfil" src={imgForPerfil2} alt="" />
                    <img className="detail" src={svgForDetailPerfil} alt="" />
                  </div>
                  <div className="divCardDesc">
                    <div>
                      <p>
                        O principal diferencial é a taxa de cartão recusado ser
                        muito baixa, aumentando nossa taxa de conversão e o
                        faturamento.”
                      </p>
                      <span>Renato Laureano</span>
                      <p>Fundador da Anellimn Store</p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="divImgCard">
                    <img className="imgPerfil" src={imgForPerfil3} alt="" />
                    <img className="detail" src={svgForDetailPerfil} alt="" />
                  </div>
                  <div className="divCardDesc">
                    <div>
                      <p>
                        Depois de muito pesquisar, decidi migrar para a mpays e
                        já nas primeiras semanas nossa taxa de conversão subiu
                        para 94%.
                      </p>
                      <span>Armando Girão</span>
                      <p>Fundador da Orion E-commerce</p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="register" />
            </div>
            <div className="register">
              <div className="container">
                <div className="text">
                  <div>
                    <h5>Crie sua conta</h5>
                    <p>
                      Preencha o formulário ao lado para cadastrar-se no mpays.
                    </p>
                  </div>
                </div>
                <div className="divForm">
                  <form action="">
                    <div className="divInputs">
                      <CommonInput
                        typeInp="input"
                        placeholder="Nome"
                        name="Name"
                        label="Nome e sobrenome *"
                        marginBottom={30}
                      />
                      <CommonInput
                        typeInp="input"
                        placeholder="E-mail"
                        name="email"
                        label="E-mail *"
                        marginBottom={30}
                      />
                      <CommonInput
                        typeInp="input"
                        placeholder="Telefone"
                        name="telephone"
                        label="Telefone *"
                        marginBottom={30}
                      />
                      <CommonInput
                        typeInp="input"
                        placeholder="*******"
                        name="password"
                        label="Senha *"
                        type="password"
                        marginBottom={30}
                      />
                      <button>Cadastrar</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </S.Depositions>
        <S.Footer id="footer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,160L80,144C160,128,320,96,480,117.3C640,139,800,213,960,224C1120,235,1280,181,1360,154.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
              data-darkreader-inline-fill=""
            ></path>
          </svg>

          <div className="container">
            <div className="divAllColumn">
              <div className="divColumnsSeparate">
                <div className="column">
                  <h3>Endereço</h3>
                  <p>
                    R. dos Andradas, 1234 Centro Histórico Porto Alegre - RS
                    90020-008
                  </p>
                </div>
                <div className="column">
                  <h3>Legal</h3>
                  <p>Termos de uso</p>
                  <p>Política de privacidade</p>
                </div>
                <div className="column">
                  <h3>Contato</h3>
                  <p>contato@mpays.com</p>
                  <p>(51) 98314.3325</p>
                  <div></div>
                </div>
                <div className="column" style={{ width: "300px" }}>
                  <h3>Aceitamos</h3>
                  <img src={imgCardsAccept} alt="" />
                  <p>*Demais cartões sob contratação.</p>
                </div>
              </div>

              <div className="column">
                <img src={imgCertificate} alt="" />
              </div>
            </div>
            <div className="copyRigAndLogo">
              <p>Copyright @ 2022 mpays</p>
              <img src={imgLogoFooter} alt="" />
            </div>
            <div>
              <footer>
                mpays é um produto da Multti Tecnologia e Integrações, empresa
                brasileira registrada no CNPJ nº 33.511.889/0001-20. A atividade
                de subcredenciamento é dispensada de autorização do Banco
                Central do Brasil, conforme termos da Circular nº 3.885/2018.
                Demais dispositivos aplicáveis, como o disposto nas Circulares
                nº 3.682/2013, 3.886/2018, 3.952/2019 e Resolução nº 24/2020 são
                rigorosamente cumpridos.
              </footer>
            </div>
          </div>
        </S.Footer>
      </div>
    </S.HomePageDivAll>
  );
}
