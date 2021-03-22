import styled from 'styled-components'

export const Container = styled.header`
    background: var(--purple);
    height: 7rem;
`

export const Content = styled.div`
	max-width: 1120px;
	margin: 0 auto;
	padding: 1rem 1rem 12rem;
	display: flex;
	align-items: center;
	justify-content: space-between;

  img {
    width: 9rem;
  }

	button {
		font-size: 1rem;
		color: #fff;
		background: var(--yellow);
		border: 0;
		padding: 0 2rem;
		border-radius: 0.25rem;
		height: 3rem;
		transition: filter 0.2s;
    
		&:hover {
			filter: brightness(0.9);
      
		}
	}


  nav {
    ul {
      display: flex;
      flex-direction: row;
      font-weight: bold;

    @media (min-width: 320px) and (max-width: 767px) {
      flex-direction: column;
    }

      li {
        list-style: none;
        padding: 0.10rem;

        a { 
        display: flex;
        align-items: center;
        text-decoration: none;
        color: var(--white);
        padding: 0.25rem;
        transition: 0.2s;

        @media (min-width: 767px) {
          padding: 0.7rem;
          font-size: 1.2rem;
          margin: 0.5rem;
        }

        &:hover{
          background: var(--yellow);
          border-radius: 0.50rem;
          color: var(--purple);
        }
        }
      }
    }
  }
`