import styled from "styled-components";
import bck from "../../../img/bg-simplify-section-desktop.svg";

export const Container = styled.div`
  h1,
  h2,
  h3 {
    color: hsl(228, 39%, 23%);
  }
  h2 {
    font-size: 37.7px;
  }
  p {
    color: hsl(227, 12%, 61%);
    padding: 2em 0;
    line-height: 1.7em;
  }
  width: 100vw;
  margin: auto;
  max-width: 1440px;
  .img {
    position: absolute;
    top: 72em;
    left: -34rem;
    z-index: -1;
  }
  @media (max-width: 1024px) {
    width: 375px;
  }
`;

export const IllustrationIntro = styled.section`
  width: 80%;
  margin: 62px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 3.3em;
  }
  p {
    width: 341px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column-reverse;

    text-align: center;
    div {
      width: 80%;
    }
    h1 {
      font-size: 35px;
    }
    p {
      width: 299px;
      margin: auto;
    }
  }
`;

export const AboutManage = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    text-align: center;
    width: 100%;
    flex-direction: column;
    h2 {
      font-size: 35px;
    }
  }
`;

export const WhatSaid = styled.section`
  width: 100%;
  margin: 62px auto;
  text-align: center;
  .btn {
    margin-top: 31px;
  }
`;

export const Simplify = styled.section`
  width: 100%;
  height: 13em;
  background-color: hsl(12, 88%, 59%);
  background-image: url(${bck});
  background-repeat: no-repeat;
  background-position: right -9em;
  div {
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1024px) {
      height: 13em;
      width: 21em;
      text-align: center;
      flex-direction: column;
    }
    h2 {
      color: hsl(0, 0%, 98%);
      width: 12em;
      @media (max-width: 1024px) {
        width: 321px;
      }
    }
  }

  @media (max-width: 1024px) {
    height: 26em;
    display: flex;
    justify-content: space-between;
    justify-content: center;

    div {
      height: 15em;
    }
  }
`;

export const Img = styled.div`
  img {
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
`;

export const Number = styled.span`
  margin-right: 25px;
  margin-bottom: auto;
  padding: 10px 25px;
  border-radius: 20px;
  color: hsl(0, 0%, 98%);
  background-color: hsl(12, 88%, 59%);
`;

export const List = styled.div`
  width: 580px;
  display: flex;
  h3 {
    padding-top: 10px;
  }
  p {
    width: 28rem;
    margin-left: 97px;
  }
  @media (max-width: 1024px) {
    justify-content: center;
    width: 375px;
    margin-left: 12px;
    p {
      text-align: left;
      margin-left: 0px;
      width: 346px;
    }
    h3 {
      width: 375px;
      text-align: left;
      background-color: hsl(13, 100%, 96%);
      padding: 12px 0px;
      border-radius: 20px 0px 0px 20px;
    }
  }
`;
