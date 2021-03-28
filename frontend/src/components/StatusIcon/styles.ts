import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-size: 2rem;
    color: var(--purple);
    text-align: center;
    padding: 0;
  }
  h2 {
    font-size: 1.2rem;
    color: var(--green);
    margin-top: 1rem;
    padding: 0;
  }
`

export const Content = styled.div`
  svg { 
    height: 30rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    max-width: 20rem
  }  
`