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