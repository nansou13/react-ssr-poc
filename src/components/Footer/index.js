import React from "react";
import Newsletter from "./Newsletter";
import { SCWrap } from "../Layout";
import styled from "styled-components";
import logoSvg from "../../assets/svg/logo-white.svg";

export const SCFooter = styled("div")`
  background: #12123d;
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SCFooterMain = styled("div")`
  padding: 45px 0;
`;

export const SCGrid = styled("div")`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  width: 100%;
  grid-gap: 50px;
`;

export const SCFooterAbout = styled("div")`
  p {
    font-size: 12px;
    letter-spacing: 0.21px;
    margin: 2em 0 4em;
  }
`;

export const SCFooterContact = styled("div")`
  color: #39aea9;
  strong {
    font-size: 20px;
    letter-spacing: 0.34px;
  }

  p {
    font-size: 12px;
    margin: 1em 0;
  }
`;

export const SCFooterLinks = styled("div")`
  display: flex;
  flex-direction: column;

  & > div + div {
    margin-top: 2em;
  }

  h4 {
    font-size: 20px;
    letter-spacing: 0.5px;
    color: ${props => (props.secondary ? "#FFF" : "#39aea9")};
    margin-bottom: 1em;
    text-transform: ${props => (props.secondary ? "uppercase" : "normal")};
  }

  ul {
    list-style-type: none;
  }

  li + li {
    margin-top: 0.5em;
  }

  a {
    font-size: 12px;
    letter-spacing: 0.21px;
    color: ${props => (props.secondary ? "rgba(255,255,255,.4)" : "#FFF")};
  }
`;

const Footer = () => {
  return (
    <SCFooter>
      <Newsletter />
      <SCFooterMain>
        <SCWrap>
          <SCGrid>
            <SCFooterAbout>
              <img height="41px" srcSet={`${logoSvg} 2x`} alt="logo" />
              <p>
                Liiiiife est à l’écoute de vos besoins en matière de maintien à
                domicile. Conseils d’experts, information, accompagnement,
                équipement spécialisé ou solutions innovantes, vous trouverez
                ici ce qu’il vous faut, que vous soyez en perte d’autonomie,
                proche aidant ou professionnel.
              </p>
              <SCFooterContact>
                <strong>01 76 35 01 29</strong>
                <p>
                  (Prix d'un appel local) <br /> Du lundi au vendredi de 9h à
                  18h
                </p>
              </SCFooterContact>
            </SCFooterAbout>
            <SCFooterLinks>
              <div>
                <h4>À propos</h4>
                <ul>
                  <li>
                    <a href="#">Qui sommes-nous?</a>
                  </li>
                  <li>
                    <a href="#">À propos</a>
                  </li>
                  <li>
                    <a href="#">Mentions légales</a>
                  </li>
                  <li>
                    <a href="#">Sécurité</a>
                  </li>
                  <li>
                    <a href="#">CGV</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Aide</h4>
                <ul>
                  <li>
                    <a href="#">Nous contacter</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </SCFooterLinks>
            <SCFooterLinks>
              <div>
                <h4>Vie quotidienne</h4>
                <ul>
                  <li>
                    <a href="#">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#">Dolor sit</a>
                  </li>
                  <li>
                    <a href="#">Este dolor sit</a>
                  </li>
                  <li>
                    <a href="#">Endium caitat</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Incontinence</h4>
                <ul>
                  <li>
                    <a href="#">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#">Dolor sit</a>
                  </li>
                  <li>
                    <a href="#">Este dolor sit</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Orthopédie</h4>
                <ul>
                  <li>
                    <a href="#">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#">Dolor sit</a>
                  </li>
                  <li>
                    <a href="#">Dolor sit</a>
                  </li>
                  <li>
                    <a href="#">Dolor sit</a>
                  </li>
                  <li>
                    <a href="#">Este dolor sit</a>
                  </li>
                </ul>
              </div>
            </SCFooterLinks>
            <SCFooterLinks>
              <div>
                <h4>Vie quotidienne</h4>
                <ul>
                  <li>
                    <a href="#">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#">Dolor sit</a>
                  </li>
                  <li>
                    <a href="#">Este dolor sit</a>
                  </li>
                  <li>
                    <a href="#">Endium caitat</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Incontinence</h4>
                <ul>
                  <li>
                    <a href="#">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#">Dolor sit</a>
                  </li>
                  <li>
                    <a href="#">Este dolor sit</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Orthopédie</h4>
                <ul>
                  <li>
                    <a href="#">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#">Dolor sit</a>
                  </li>
                  <li>
                    <a href="#">Dolor sit</a>
                  </li>
                  <li>
                    <a href="#">Dolor sit</a>
                  </li>
                  <li>
                    <a href="#">Este dolor sit</a>
                  </li>
                </ul>
              </div>
            </SCFooterLinks>
            <SCFooterLinks secondary>
              <div>
                <h4>Media</h4>
                <ul>
                  <li>
                    <a href="#">Qui sommes-nous?</a>
                  </li>
                  <li>
                    <a href="#">À propos</a>
                  </li>
                  <li>
                    <a href="#">Mentions légales</a>
                  </li>
                  <li>
                    <a href="#">Sécurité</a>
                  </li>
                  <li>
                    <a href="#">CGV</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4>Service</h4>
                <ul>
                  <li>
                    <a href="#">Qui sommes-nous?</a>
                  </li>
                  <li>
                    <a href="#">À propos</a>
                  </li>
                  <li>
                    <a href="#">Mentions légales</a>
                  </li>
                  <li>
                    <a href="#">Sécurité</a>
                  </li>
                  <li>
                    <a href="#">CGV</a>
                  </li>
                </ul>
              </div>
            </SCFooterLinks>
          </SCGrid>
        </SCWrap>
      </SCFooterMain>
    </SCFooter>
  );
};

export default Footer;
