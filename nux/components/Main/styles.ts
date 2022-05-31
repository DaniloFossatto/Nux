import styled from 'styled-components';

import {ArrowheadDownOutline} from '../icons/icons'

export const Wrapper = styled.div`
display: flex;
align-items: center; 
flex-direction: column;
` 
export const Container = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  flex-direction: row-reverse; 
  height: 85vh;   


  
`;
export const ImgBlock = styled.div`
  
background-image: url("/assets/main.png");
width: 300px;
height: 300px;
border-radius: 50%; 
background-size: cover;
background-position: center;
border: 5px solid #2ba84a;
margin-left: 40px;



`
export const Layout = styled.div`
display: flex;
flex-direction: column;
 color:  #fcfffc;
 animation-name: textInit;
 animation-duration: 2s;
 animation-delay: 1s;
 font-size: 10px;
 max-width: 800px;

 & h2{
   font-size: 40px;
   text-align: left;
 }
 & strong{
     color: #2ba84a;
      text-shadow: 1px 1px 10px #248232;
 }
& p{
  font-size: 30px;
  width: 600px;
  text-align: left;
}
& h4{
  font-size: 20px ;
}
& button{
  width: 200px;
  height: 50px;
  background-color: #121214 ;
  border: 1px solid #248232;
  color:#fcfffc; 
  border-radius: 5px;
  transition: background-color linear 0.5s;
  margin-top: 50px;
}  
& button:hover{
    
    background-color: #248232;
    cursor: pointer;
}

@keyframes textInit{
  0%{
    transform: translateY(1000px);
    
  }
  100%{
    transform: translateY(0);
  }
}
`;
export const Icon = styled.div`
justify-content: center;
display: flex;
align-items: center;

`
export const ArrowDown = styled(ArrowheadDownOutline)`
color: #2ba84a;

width: 40px;
height: 40px;

opacity:0 ;

animation-name: arrow;

animation-duration: 1s;
animation-delay: 3s;
animation-iteration-count: infinite;
animation-timing-function: linear;
@keyframes arrow{
  0%{
    transform: translateY(0px);
    opacity: 1;
  }
  50%{
    transform: translateY(5px);
    opacity: 1;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
  }
`

export const PriceTable = styled.div`
margin-top: 50px;
max-width: 1000px;
display: flex;
flex-direction: column;
text-align: center;
& h1{
  color: #2ba84a ;
  
}
& h2{
  color: #fff;
  
}
& strong{
     color: #2ba84a;
      text-shadow: 1px 1px 10px #248232;
      
 }
& h3{
  color: #fff;
 

}

`
export const About = styled.div`
width: 1000px;
margin-top: 100px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: white;
margin-bottom: 200px;
& h1{
  font-size: 40px;
}
& h3{
  text-align: center;
  
}
& strong{
     color: #2ba84a;
      }
& img{
  width: 350px;
}
`
export const Space = styled.div`
aspect-ratio: 960/100;
width: 100%;
background-repeat: no-repeat;
background-position: center;
background-size: cover; 

margin-bottom: 50px;
background-image:url('/assets/layered-waves-haikei (3).svg') ;
`
export const Table = styled.div`
border-radius: 5px;
width: 1000px;
display: flex;
align-items: center;
justify-content: center;
background-color: #1d1f20;
margin-bottom: 100px;
& img{
  height: 300px;
}
`
export const Box = styled.div`
box-shadow: 1px 1px 10px black;
border-radius: 5px;
height: 500px;
width: 300px;
margin: 40px;
display: flex;
flex-direction: column;

background-color: #212529;
> h4{
  color: #2f4550;
  text-align: left;
  padding-left: 55px ;
}
& h2{
  font-size: 30px;
  margin-top: 30px;
}
& button{
  width: 200px;
  height: 40px;
  margin:auto;
  background-color: #248232;
  border: none;
  color:#fff;
  box-shadow: none;
  border-radius: 2px;

  &:hover{
    cursor: pointer;
  }
}
`