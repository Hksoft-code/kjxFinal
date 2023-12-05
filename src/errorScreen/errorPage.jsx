import {
    useRouteError
} from "react-router-dom"
import styled from "styled-components"

const ErrorPage = () =>{
    
    const error = useRouteError();
    console.error(error);

    return(
        <Section>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred</p>
            <p>
                <i>
                    {error.status}
                </i>
            </p>
            <p>
                <i>{error.statusText}</i>
            </p>
        </Section>
    )
}

export default ErrorPage;

const Section = styled.section`
    width:100%;
    height:80vh;
    background-color:grey;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`