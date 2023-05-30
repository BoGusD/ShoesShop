import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  .form-input {
    width: 200px;
    height: 30px;
    margin: 5px;
    padding: 5px;
  }
  .form-label {
    padding: 5px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .form-button {
    width: 120px;
    height: 40px;
    margin-top: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .form-button:hover {
    background-color: #0056b3;
  }
`;
