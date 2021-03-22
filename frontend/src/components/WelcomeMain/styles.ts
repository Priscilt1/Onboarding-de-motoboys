import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 10rem;
    img { 
    height: 30rem;
    margin: 0 auto;
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
      height: 22rem;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  p { 
    font-size: 1rem;
    text-align: center;
    font-weight: bold;
    color: var(--purple);
    letter-spacing: .1rem;
  }

  button.register {
    min-width: 16rem;
    background: var(--green);
    color: var(--white);
    font-size: 1rem;
    border: none;
    letter-spacing: .1rem;
    transition: all 0.4s;

    &:hover {
      background: var(--pink);
      color: var(--white);
      opacity: 0.9;
    }
  }

  button {
    min-width: 16rem;
    margin: 1rem auto;
    font-size: 1rem;
    color: var(--purple);
    background:var(--yellow);
    border: none;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem; 
    transition: all 0.4s;
    font-weight: bold;

    &:hover{
      color: var(--yellow);
      background: var(--indigo);
      opacity: 0.9;
    }
  }
`