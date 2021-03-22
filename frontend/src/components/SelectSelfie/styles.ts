import styled from 'styled-components'

export const Container = styled.div`
   position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin-top: 2rem;
    padding: 1.5rem 1rem;
    background-color: var(--purple);
    border-radius: 0.25rem;
    box-shadow: 0 2px 2px -6px var(--gray);
    
    img {
      width: 5rem;
      display: flex;
      align-self: center;
      margin-right: 1rem;
    }

    h2 {   
      color: var(--white);
      text-align: center;
      letter-spacing: 0.1rem;
      font-size: 1rem;
    }

    p {
      letter-spacing: .05rem;
      margin-top: 1rem;
      color: var(--yellow);
      font-size: .95rem;
    }

    input { 
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      overflow: hidden;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
`