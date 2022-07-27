import styled from "styled-components";

//background
import background from "./../assets/back1.png";

// React Router
import { Link } from "react-router-dom";

export const colors ={
    primary:"#fff",
    theme:"#BE185D",
    light1:"#F3F4F6",
    light2:"#E5E7EB",
    dark1:"#1F2937",
    dark2:"#4B5563",
    dark3:"#9CA3AF",
    red:"#DC2626",
    blue:"#FFF5F5"
}

//Styled Components
export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display : flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient (0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${background});
    background-size:cover;
    background-attachment: fixed:
    
`;

//Home
export const StyledTitle = styled.h2`
    font-size: ${(props) => props.size}px;
    text-align:center:
    color:${(props) => props.color ? props.color: colors.theme};
    color : ${colors.theme};
    margin-bottom: 20px;
    margin: 75px;
`;

export const Avatar = styled.div`
    width : 410px;
    height: 135px;
    background-image : url(${props => props.image});
    background-size: cover;
    background-position: center;
    margin: auto;
`;

export const StyledButton = styled(Link) `
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size:16px;
    border: 2px solid ${colors.theme};
    border-radius:25px;
    color:${colors.theme};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;

    &:hover{
        background-color: ${colors.theme};
        color: ${colors.primary};
        cursor: pointer:
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
`;



// Inpur Login ( form)

export const StyledTextInput = styled.input `
    width : 350px;
    padding : 15px;
    padding-left : 50px;
    font-size : 15px;
    letter-spacing: 2px;
    color: ${colors.dark1};
    background-color: ${colors.light3};
    border:0;
    outline:0;
    display:block;
    margin: 30px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && `backgroung-color:${colors.red};color:${colors.primary};`}

    &:focus{
        background-color:${colors.dark2};
        color: ${colors.primary};
    }
`;

export const StyledLabel = styled.p`
text-align: left;
font-size: 20px;
font-weight : bold;
padding-left : 65px;
margin-top: 20px;

`;

export const StyledFormArea = styled.div`
background-color: ${props => props.bg || colors.blue};
text-align: center;
padding : 25px 25px ;
margin: 30px auto ;;
   

`;

export const StyledFormButton = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size:16px;
    border: 2px solid ${colors.theme};
    border-radius:25px;
    color:${colors.theme};
    transition: ease-in-out 0.3s;

    &:hover{
        background-color: ${colors.theme};
        color: ${colors.primary};
        cursor: pointer:
    }

`;

// export const ErrorMsg = styled.div`
//     font-size: 11px;
//     color: ${colors.red}
//     margin-top : -5px;
//     margin-bottam: 10px;
//     text-align: left;
// `;

export const ExtraText = styled.p`
    font-size: ${(props) => props.size }px;
    text-align: center;
    color: ${(props) => (props.color? props.color: colors.dark2)}
    padding: 2px;
    margin-top: 10px;
    font-size: 20px;
`;

export const TextLink = styled(Link)`
    text-decoration : none;
    color: ${colors.theme};
    transition: ease-in-out 0,3s;

    &.hover {
        text-decoration: underline;
        letter-spacing : 2px;
        font-weight: bold;
    }
`;


//Icons
export const StyledIcon = styled.p`
    color: ${colors.dark1};
    position : absolute;
    font-size; 21px;
    top : 70px;
    ${(props) => props.right && `right: 80px;`};
    ${(props) => !props.right && `left: 80px;`};
`;

//copyright
export const CopyrightText = styled.p`
    padding : 5px;
    margin : 20px;
    text-align : center;
    color : ${colors.black};
`;