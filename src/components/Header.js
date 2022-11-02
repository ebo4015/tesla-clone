 import React,{useState} from 'react'
 import styled from "styled-components"
 import MenuIcon from '@mui/icons-material/Menu';
 import CloseIcon from '@mui/icons-material/Close';


 function Header() {

  const [burgerStatus , setBurgerStatus] = useState(false);
   return (
     <div> 
      <Container>
      <a>
         <img src="/images/logo.svg" alt=""></img> {/* logo*/}
      </a>

      {/* 메뉴*/}
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
       </Menu>
       <RightMenu>
        <a href="#">shop</a>
        <a href="#">Tesla Account</a>
         <CustomMenu onclick={()=>setBurgerStatus(true)}></CustomMenu>
       </RightMenu>
       <BurgerNav show ={burgerStatus}>
        <CloseWapper>
        <CustomClose onClick={()=>setBurgerStatus(false)}></CustomClose>
        </CloseWapper>
        
         <li><a href="#">Exsiting Ivnentory</a></li>
         <li><a href="#">Used Ivnentory</a></li>
         <li><a href="#">Trade in</a></li>
         <li><a href="#">Cybertruck</a></li>
         <li><a href="#">Roadaste</a></li>
         <li><a href="#">Roadaste</a></li>
         <li><a href="#">Roadaste</a></li>
         <li><a href="#">Roadaste</a></li>
       </BurgerNav>
      </Container>
       
     </div>
   )
 }
 
 export default Header
 const Container = styled.div`
  z-index:1;
  min-height: 60px;
  position :fixed;
  display:flex;
  justify-content: space-between;
  align-items :center;
  padding : 0 20px;
  top:0;
  left:0;
  right:0;
 `

 const Menu = styled.div`
  display : flex;
  align-items: center;
  justify-content :center;
  flex :1;

  a {
    font-weight : 600;
    text-decoration : uppercase;
    padding : 0 10px;
    flex-wrap : nowrap;
  }
 `

 const RightMenu = styled.div`
 display :flex;
 align-items:center;
  a {
    font-weight : 600;
    text-decoration : uppercase;
    margin-right:10px;
    
  }
  @media(max-width: 768px)  {
    display:none;
  }
  `

 const CustomMenu  = styled(MenuIcon)`
  cursor : pointer;`

 const BurgerNav = styled.div`
  position :fixed; //위치고정
   // 위치 왼쪽으로THffla
  top : 0; 
  bottom: 0;
  right: 0;
  background:white;
  width:300px;
  z-index:16;  //레이어
 list-style: none;
 padding:20px;
  display:flex;
  text-align:start;
  flex-direction:column;
   transform : ${props=>{props.show ? 'translateX(0)' : 'translateX(100%)'}};
  li{
    padding: 15px 0;
   border-bottom:1px solid rgba(0,0,0, .2);
   
    a{
    font-weight: 600;
    
      }
  }
  
 `

 const CustomClose = styled(CloseIcon)`
 cursor:pointer;
 `

 const CloseWapper =styled.div`
   display:flex;
   justify-content:flex-end;
   `