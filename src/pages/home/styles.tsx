import styled from 'styled-components';



export const Item = styled.div`
//border: solid;
min-height: 300px;
display: flex;
justify-content: space-between;;
flex-direction: column;
@media(max-width:500px){
  min-height: 250px;
}
@media(min-width:999px){
  min-height: 450px;

}


`