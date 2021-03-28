import { Lottie } from '@crello/react-lottie'
import animationWaiting from './animationWaiting.json'
import animationApproved from './animationApproved.json'
import animationDisapproved from './animationDisapproved.json'
import { Container, Content } from './styles'

interface AnimatioItemProps {
  text: String, 
  svg: Object 
}

interface AnimationsProps {
  [key: string]: AnimatioItemProps,
}

export function StatusIcon({
  status,
  disapprovedInLastTenMinutes
} : {
  status:string,
  disapprovedInLastTenMinutes: boolean
}) {
  if(status == '') return <div></div>
  const animations: AnimationsProps = {
    waiting:{ text: 'Seu cadastro ainda esta em analise', svg: animationWaiting},
    approved:{ text: 'Seu cadastro foi aprovado!💜', svg: animationApproved},
    disapproved:{ text: 'Seu cadastro foi reprovado!', svg: animationDisapproved}
  }

  return (
    <Container>
        {status === "approved" && (
          <h2>
          Você não tem cadastro pendente
          </h2>
        )}      
        <h1>
          {animations[status].text}
        </h1>
        {status === 'disapproved' && (
          <h2>
            Você pode se cadastrar novamente {disapprovedInLastTenMinutes && 'em 10 minutos'}
          </h2>
        )}
        
      <Content>
        <Lottie config={{animationData: animations[status].svg, loop:true}} />
      </Content>

    </Container>
  )
}
 

