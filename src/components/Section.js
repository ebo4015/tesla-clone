import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade'; //react-reveal -> itemText
//wrap이 어떻게 작동하나? 가운데 배경
//ITEMTEXT 가운데
function Section({title,backgroundImg,description,leftBtnText,rightBtnText}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
        <ButtonGroup>
          <LeftButton>
           {leftBtnText}
            </LeftButton>
            {rightBtnText&& 
            <RightButton>
            {rightBtnText}
            </RightButton>}
            
        </ButtonGroup>
       </Fade> 
        {/*화살표 */}
        <DownArrow src="./images/down-arrow.svg"></DownArrow>
     </Buttons>
    </Wrap>
  )
}

export default Section
//component를 function사용안하고 지정
const Wrap = styled.div`
 width: 100vh;
 height:100vh;
 background-size :cover;
 background-position : center;
 background-repeat : no-repeat;
 background-image : url('./images/model-s.jpg');
 display :flex;
 flex-direction : column;
 justify-content : space-between;  //vertical
 align-items : center;  //horizontal 버튼이 중앙ㅇ로 옮겨짐
 background-image : ${props=>`url("./images/${props.bgImage}")`}
`

const ItemText = styled.div`
  z-index:10;
  padding-top:15vh;
  text-align: center;
`


const ButtonGroup = styled.div` 
display :flex; //위아래 버튼이 양옆으로 됨
margin-bottom: 30px;
@media (max-width: 768px){
  flex-direction :column;
}
`

const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8); 
height: 40px;
width: 256px;
color: white;
display : flex;
justify-content : center;
align-items : center;
border-radius : 100px;
opacity:0.85; 
text-transform :uppercase;
font-size: 12px;
cursor : pointer;
margin :8px;
`

//left랑 right 버튼이 같아서 이렇게 지정
const RightButton = styled(LeftButton)`
background-color: white;
opacity: 0.65;
color: black;
`


const DownArrow = styled.img`
 
  height:40px;
  animation : animateDown infinite 1.5s;
  overflow-x : hidden;

`
const Buttons =styled.div`
`