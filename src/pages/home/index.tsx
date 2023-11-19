import { Input,Button } from '../../components';
import * as S from './styles';
import user from '../../img/user.png'
import key from '../../img/key.png'

export const Home = () => {
  const handleClick = ()=>{
    alert('oi')
  }
  return (
    <>
      <S.Item>
      <Input avatar={user} placeholderText='Entre com seu e-mail' imageText='userIcon'/>
      <Input inputType='password'avatar={key} placeholderText='Senha' imageText='keyIcon'/>
      <Button text='ENTRAR' color='#233327' bg='#2DC74F' onClick={handleClick}/>
      </S.Item>
    </>
  )
}

