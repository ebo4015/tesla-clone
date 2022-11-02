import React from 'react'
import styled from "styled-components"
import Section from "./Section"
//메인화면
function Home() {
  return (
    <Container>
     <Section
      title ="Model S"
      description = "Order ONline for Touchless Delivery"
      backgroundImg="model-s.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory"
      ></Section>
     <Section
     title ="Model Y"
     description = "Order ONline for Touchless Delivery"
     backgroundImg="model-y.jpg"
     leftBtnText="Custom order"
     rightBtnText="Existing inventory"></Section>
     <Section
     title ="Model 3"
      description = "Order ONline for Touchless Delivery"
      backgroundImg="model-3.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory"
     ></Section>

<Section
     title ="Model  X"
      description = "Order ONline for Touchless Delivery"
      backgroundImg="model-x.jpg"
      leftBtnText="Custom order"
      rightBtnText="Existing inventory"
     ></Section>

<Section
     title ="Lowest Cost Solar"
      description = "Money-basci"
      backgroundImg="solar-panel.jpg"
      leftBtnText="Order now"
      rightBtnText="Exit"
     ></Section>
    
    <Section
     title ="Lowest Cost Solar"
      description = "Money-basci"
      backgroundImg="solar-roof.jpg"
      leftBtnText="Order now"
      rightBtnText="Exit"
     ></Section>
    
    <Section
     title ="Lowest Cost Solar"
      description = "Money-basci"
      backgroundImg="accessories.jpg"
      leftBtnText="Order now"
      
     ></Section>
    </Container>
    

   
  )
}

export default Home

const Container = styled.div`
 height :100vh;
 `
