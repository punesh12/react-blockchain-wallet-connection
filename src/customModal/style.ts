import styled from "styled-components";

export const ModalContainer = styled.div<any>`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;

export const ModalContent = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 425px;
  height: 50%;
  font-weight: 600;
  background: #c9d6ff;
  background: -webkit-linear-gradient(to left, #e2e2e2, #c9d6ff);
  background: linear-gradient(to left, #e2e2e2, #c9d6ff);
  border-radius: 8px;
  padding: 40px;
  margin: 0 auto;
  border: none;
  outline: none;
  overflow: none;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  box-shadow: 5px 6px 6px rgba(0, 0, 0, 0.15);
`;
