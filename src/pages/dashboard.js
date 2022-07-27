import { StyledTitle,
    Avatar,
    StyledButton,
    ButtonGroup,
    StyledFormArea} 
    from "../components/styles";

//logo
import Logo from "./../assets/git.png";

const Dashboard = () =>{
    return (
       <div>
        <div>
            <Avatar image={Logo}/>
        </div>
           <StyledFormArea>
           <StyledTitle size={65}>  Welcome to STK</StyledTitle>
                <ButtonGroup>
                <StyledButton to="#">log out</StyledButton>
                </ButtonGroup>
           </StyledFormArea>
       </div>
    );
}

export default Dashboard;