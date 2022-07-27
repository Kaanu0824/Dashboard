import { StyledTitle,
    Avatar,
    StyledButton,
    ButtonGroup} 
    from "../components/styles";



//logo
import Logo from "./../assets/git.png";

const Home = () =>{
    return (
       <div>
        <div>
            <Avatar image={Logo}/>
        </div>
            <StyledTitle size={50} >
                Welcome To STK
            </StyledTitle>
            <ButtonGroup>
                <StyledButton to="/login">Login</StyledButton>
                <StyledButton to="/signup">Signup</StyledButton>
            </ButtonGroup>
        
       </div>
    );
}

export default Home;