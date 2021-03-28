import styled from 'styled-components'

export const Container = styled.form`
  margin-top: 7rem;
  padding: 2rem 2rem;

  @media(max-width: 767px) {
    padding: 1rem 1rem;
    margin-top: 5rem;
  }
`

export const Content = styled.div`
  input { 
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-size: 1rem;
    &::placeholder {
      color: var(--gray-dark);
    }
    & + input { 
      margin-top: 1rem;
    }
  }

  .error {
      border: 0.3rem solid var(--pink);
    }

    span { 
      color: var(--pink);
      font-weight: bold;
    }

  button[type="button"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: var(--background);
    border-radius: 0.25rem;
    border: none;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    letter-spacing: .1rem;
    transition: all 0.4s;

    &:hover {
      background: var(--yellow);
      color: var(--gray-dark);
      opacity: 0.9;
    }
  }

  h3 { 
    position: absolute;
    top: 0;
    width: 100%;
    color: var(--white);
    background: var(--pink);
    text-align: center;
    font-size: 1.2rem;
    padding: 1rem;
  }
`