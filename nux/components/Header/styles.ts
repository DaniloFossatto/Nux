import styled from 'styled-components';
import {Sketch, LoginCircle} from '../icons/icons'
export const Container = styled.div`
  padding-top: 10px; 
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #323238;  
  border-spacing: 20px;
  padding-bottom: 10px; 
  max-height: 50px;  
`;
export const Logo = styled.div`
 
& a{
    display: flex; 
    align-items: center;
    justify-content: center;
    text-decoration: none;    
    
  
} 



`
export const LogoIcon = styled(Sketch)`
width: 30px;
height: 30px;
color:#2ba84a;


`


export const Nav = styled.div`
display: flex;
align-items: center;
& a{
    font-size:18px;
    text-decoration: none;
    color:#76757b;
    margin: 30px;
    font-family: 'Oswald', sans-serif;
}
& a:hover{
    color: #2ba84a;
}
& button{
    font-family: 'Oswald', sans-serif;
    background-color: #248232 ;
    color:#fcfffc;
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: none; 
}

& button:hover{
    background-color: #2ba84a;
    cursor: pointer;
}
`
export const UserIcon = styled(LoginCircle)`
width: 30px;
height: 30px;
color: #76757b;
margin-right: 20px;
&:hover{
    color: #2ba84a;
    cursor: pointer;
}
`

