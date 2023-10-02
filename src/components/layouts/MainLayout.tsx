import { Footer, Header } from "components"
import { Outlet } from "react-router-dom"
import styled from "styled-components"


export const MainLayout = () => {
  return (
    <div>
        <Header/>
        <MainWrapper id="main-content">
            <Outlet/>
        </MainWrapper>
        <Footer/>
    </div>

  )
}

const MainWrapper = styled.div`
    max-width: var(--max-width);
    margin: auto;
    padding: 40px;
`