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

export function StatusIcon({ status }: {status:string}) {
  if(status == '') return <div></div>
  const animations: AnimationsProps = {
    waiting:{ text: 'Seu cadastro ainda esta em analise', svg: animationWaiting},
    approved:{ text: 'Seu cadastro foi aprovado!💜', svg: animationApproved},
    disapproved:{ text: 'Seu cadastro foi reprovado!', svg: animationDisapproved}
  }

  return (
    <Container>
        <h1>{animations[status].text} </h1>
        
      <Content>
        <Lottie config={{animationData: animations[status].svg, loop:true}} />
      </Content>

    </Container>
  )
}
 

