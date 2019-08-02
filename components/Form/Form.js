import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;    
  }
  to {
    background-position: 100% 100%;    
  }
`;

const Form = styled.form`
  font-size: 1.5rem;
  font-weight: 700;

  .form-group {
    /* display: flex;
    flex-direction: column;
    align-items: flex-start; */
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;
  }

  .label-title {
    margin-bottom: 1rem;
  }

  input,
  textarea,
  select {
    font-size: 1.5rem;
    padding: 0.6rem 1.2rem;
    border-radius: 0.3rem;
    border: 0.2rem solid ${props => props.theme.lightGrey3};
    max-width: 100%;

    &:focus {
      outline: 0;
    }
  }

  input[type='text'] {
    height: 5rem;
  }

  textarea {
    width: 100%;
    height: 15rem;
  }

  .input-focus-effect {
    width: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: ease all 0.3s;
    height: 0.2rem;
    background-image: linear-gradient(
      to right,
      ${props => props.theme.blue},
      ${props => props.theme.blue}
    );
  }

  input:focus:not([readonly]) + span.input-focus-effect,
  textarea:focus:not([readonly]) + span.input-focus-effect {
    width: 100%;
  }

  button,
  input[type='submit'] {
    width: auto;
    background: ${props => props.theme.blue};
    box-shadow: 0 0.8rem 1.5rem rgba(0, 0, 0, 0.1);
    color: ${props => props.theme.white};
    border-radius: 0.4rem;
    border: 0;
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 600;
    padding: 0.7rem 3.2rem;
    letter-spacing: 0.1rem;
    transition: all 0.2s;
    :hover {
      background-color: ${props => props.theme.darkBlue};
    }
  }
  button:not(:disabled):not(.disabled),
  input[type='submit']:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  fieldset {
    border: 0;
    padding: 0;
    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 1rem;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        #60a3bc 0%,
        #74b9ff 50%,
        #60a3bc 100%
      );
      margin-bottom: 1rem;
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
