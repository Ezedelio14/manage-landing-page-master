import React from "react";
import ImgIntro from "../../../img/illustration-intro.svg";
import * as C from "./styles";
import Button from "../../button";

const Home = () => {
  return (
    <>
      <C.Container>
        <C.IllustrationIntro>
          <div>
            <h1>
              Bring everyone
              <br />
              together to build
              <br />
              better products.
            </h1>
            <p>
              Manage makes it simple for software teams
              <br />
              to plan day-to-day tasks while keeping the
              <br />
              larger team goals in view.
            </p>
            <Button
              id="Get Started"
              color="hsl(0, 0%, 98%)"
              background="hsl(12, 88%, 59%)"
              colorBtn="red"
            />
          </div>
          <C.Img>
            <img src={ImgIntro} alt="Img Intro" />
          </C.Img>
        </C.IllustrationIntro>
        <C.AboutManage>
          <div>
            <h2>
              What's different about
              <br />
              Manage?
            </h2>
            <p>
              Manage provides all the functionality your
              <br />
              team needs, without the complexity. Our
              <br />
              software is tailor-made for modern digital
              <br />
              product teams.
            </p>
          </div>
          <div>
            <C.List>
              <C.Number>01</C.Number>
              <div>
                <h3>Track company-wide progress</h3>
                <p>
                  See how your day-to-day tasks fit into the wider vision.
                  <br />
                  Go from tracking progress at the milestone level all the way
                  done done to the smallest of details. Never lose sight of{" "}
                  <br />
                  the bigger picture again.
                </p>
              </div>
            </C.List>
            <C.List>
              <C.Number>02</C.Number>
              <div>
                <h3>Advanced built-in reports</h3>
                <p>
                  Set internal delivery estimates and track progress toward
                  company goals. Our customizable dashboard helps you <br />
                  build out the reports you need to keep key stakeholders
                  <br />
                  informed.
                </p>
              </div>
            </C.List>
            <C.List>
              <C.Number>03</C.Number>
              <div>
                <h3>Everything you need in one place</h3>
                <p>
                  Stop jumping from one service to another to <br />
                  Communicate, store files, track tasks and share
                  <br /> documents. Manage offers an all-in-one team
                  <br />
                  productivity solution.
                </p>
              </div>
            </C.List>
          </div>
        </C.AboutManage>
        <C.WhatSaid>
          <h2>What they've said</h2>
          <p>slide</p>
          <Button
            id="Get Started"
            color="hsl(0, 0%, 98%)"
            background="hsl(12, 88%, 59%)"
            colorBtn="red"
          />
        </C.WhatSaid>
        <C.Simplify>
          <div>
            <h2>
              Simplify how your team <br />
              works today.
            </h2>
            <Button
              id="Get Started"
              color="hsl(12, 88%, 59%)"
              background="hsl(0, 0%, 98%)"
              colorBtn="white"
            />
          </div>
        </C.Simplify>
      </C.Container>
    </>
  );
};

export default Home;
