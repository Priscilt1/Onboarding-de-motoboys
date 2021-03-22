import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--purple);
  height: 18rem;

  h1{ 
    font-family: aglet sans;
    font-size: 3rem;
    color: var(--white);
    font-weight: bold;
    display: flex;
    justify-content: center;
    padding-top: 90px;
    text-align: center;

    @media (min-width: 767px) {
      font-size: 4rem;
    }

  }
  p {
   
  }
`