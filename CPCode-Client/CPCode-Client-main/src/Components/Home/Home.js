import Libraries from "../Libraries/Libraries";
import NavBar from "../NavBar/navbar";

import styled from "styled-components";

export default function Home()
{
    const GridContainer = styled.div`
        display : grid ;
        grid-template-rows: auto 1fr;
        height: 100vh;
    `;
    return(
        <GridContainer>
            <NavBar/>
            <Libraries/>
        </GridContainer>
    )
}