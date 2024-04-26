import styled from "styled-components";


export const Input = styled.div`

  display: flex;
  flex-direction: column;

  label{
    font-size: 12px;
    margin-bottom: 3px;
  }
  input, select{
    border: solid 1px #E9ECEF;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    width: 100%;
  }

  select option[disabled] {
    color: red; /* Defina a cor desejada para o texto do placeholder */
  }
    
`


