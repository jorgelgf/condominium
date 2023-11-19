import { useState } from 'react' ;
import * as S from './styles'
interface ImageProps{
  avatar?: string
  imageText?:string
  placeholderText?:string
  inputType?:string
}
export const Input = ({avatar,imageText,placeholderText,inputType}:ImageProps) => {
  const [validator, setValidator ] = useState(false)

  return (
    <S.Container>
    {!validator &&<S.DivAvatar><img src={avatar} alt={imageText}/></S.DivAvatar>}
    <S.InputComponent type={inputType} placeholder={placeholderText} onClick={()=>setValidator(false)}/>
    </S.Container>
  )
}
