import React from 'react';

import { Container, Layout, ImgBlock, ArrowDown, Icon,PriceTable, Wrapper, Table, Box, About, Space} from './styles';
import CheckoutButton from '../CheckoutButton'




const Main: React.FC = () => {
  
  return <Wrapper><Container>
  <ImgBlock></ImgBlock>
    <Layout>
        
      
        <h4><strong>"</strong> HELLO WORLD <strong>"</strong></h4>
         <h2>Você esta na <strong>NUX</strong></h2>
        <strong><p>Uma escola de programação onde você vai aprender deis de os fundamentos até as tecnologias mais aclamadas do mercado em uma trilha linear que vai te preparar para o mercado da melhor forma possivel!</p></strong>
        
        <button>Explore</button> 
      
    </Layout>
    
   
</Container>
 <Icon>
        <ArrowDown /></Icon>
<About id='sobre'>
  <h1>Você deve estar se perguntando <strong>"ta mas quem são vocês?"</strong></h1>
  <h3 >Nós somos uma escola de programção onde nós garantimos que você vai ter o melhor desenvolvimento proficional com diploma assinado. Nosso professores são especialistas em desenvolvimento WEB e estão prontos para te ajudar com todas as suas duvidas.</h3>
  <img   src="/assets/undraw_certification_re_ifll.svg" alt=""  />
  <h3>Estamos prontos para te ensinar como se programa de verdade em uma trilha completa deis de os fundamentos até as partes mais avançadas. Não perca mais tempo e embarque logo nessa!</h3>
</About>
<Space/>
<PriceTable>
  <h1>Ei! você está pensando em se tornar um desenvolvedor?</h1>
  <h2>Esta no lugar certo, aqui nós revelaremos todos os <strong>segredos</strong> da programação em uma trilha linear onde você vai aprender tudo que precisa!</h2>
  <h3><strong>Não perca mais tempo</strong> e veja abaixo nosso plano:</h3>
  <Table id='tech'>
    
    <img src="/assets/undraw_online_payments_re_y8f2.svg" alt="" />
    <Box><h1>Full-Stack</h1>
          <h3>Jornada Completa para você:</h3>
          <h4>* cara a cara com a Web</h4>
          <h4>* Web por trás dos panos</h4>
          <h4>* Tudo sobre Html</h4>
          <h4>* Curso completo de Css</h4>
          <h4>* Dominando JavaScript</h4>
          <h4>* Frameworks-Css</h4>
          <h4>* Seu Primeiro Freelance</h4>
          <h4>* React Completo</h4>
          <h4>* Node Completo </h4>
          <h4>* Conceitos Typescript</h4>
          <h2>R$29,90/mês</h2>
          <CheckoutButton />
          </Box>
    
  </Table>
</PriceTable>
</Wrapper>;
};


export default Main;