import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { ReactNode } from 'react';

import {Home, Pool, Service} from './pages';
import {MainHeader} from './components';
import { Footer } from './components/footer';


interface ChildrenProps{
  children: ReactNode;
}
const Layout = ({children}:ChildrenProps) => {
  return (
    <>
      <Container>
        <Session>
        <MainHeader/>
        <Item>
          {children}
          </Item>
          </Session>
      </Container>
      <Footer/>

      </>
  )
}

const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home/></Layout>} />
      <Route path='/service' element={<Layout><Service/></Layout>}/>
      <Route path='/pool' element={<Layout><Pool/></Layout>}/>
      
    </Routes>
  );
};


export default Rout;

const Container = styled.div`
display: flex;
max-width: auto;
justify-content: center;
min-height: 600px;
max-height:100vh ;
`
const Session = styled.div`
width: 80%;
display: flex;
height: auto;
flex-direction:column;
`

const Item = styled.div`
//border: solid;
width: 100%;
height: 100vh;
margin-top: 4rem;

`
