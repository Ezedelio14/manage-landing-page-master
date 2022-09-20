import styled from "styled-components";
export const Container = styled.div`
  display: flex;
`;
export const ContainerItem = styled.div`
  display: flex;
  margin: 7em auto 4em auto;
  div {
    width: 36em;
    margin: 0 1em;
    background-color: hsl(0, 0%, 98%, 1.5);
  }
  img {
    position: absolute;
    width: 6em;
    top: 104.5em;
    margin-bottom: 5em;
    transform: translateX(-50%);
  }
  h3 {
    padding-top: 5em;
  }
`;