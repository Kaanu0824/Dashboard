// styled  components
import{StyledTextInput,
    StyledFormArea,
    StyledFormButton,
    StyledLabel,
    Avatar,
    StyledTitle,
    colors,
    ButtonGroup,
    ExtraText,
    TextLink,
    CopyrightText} 
    from "./../components/styles";

//logo
import logo from "./../assets/git.png";

//formik
import {Formik, Form} from "formik";
import { TextInput } from "../components/FormLib";
import * as Yup from "yup";


//icons
import {FiMail,FiLock} from "react-icons/fi";

const login = ({}) => {
    return (
       <div>
         <Avatar image={logo}/>
        <StyledFormArea>
            <StyledTitle color={colors.primary} size={40}> 
            Member Login
            </StyledTitle>
            <Formik
                 initialValues={{
                    email:"",
                    password:"",
                 }}
                 validationSchema = {Yup.object({
                        email : Yup.string()
                            .email("invalid email Address")
                            .required("Required"),
                        password: Yup.string()
                            .min(8,"password is too short")
                            .max(30,"password is too long")
                            .required("Required"),
                    })
                 }
                 onSubmit={(values,{setSubmitting}) =>{
                    console.log(values);
            
                 }}
            >
 
                {({isSubmitting})=>(
                    <Form>
                        <TextInput
                            name="email"
                            type="text"
                            label="Email Address"
                            placeholder="kaanu@gmail.com"
                            icon={<FiMail/>}
                        />

                        <TextInput
                            name="password"
                            type="password"
                            label="password"
                            placeholder="*******"
                            icon={<FiLock/>}
                        />

                        <ButtonGroup>
                            <StyledFormButton type="submit">
                                Login 
                            </StyledFormButton>

                            
                        </ButtonGroup>
                    </Form>
                )}
            </Formik>

            <ExtraText>
                New here ? <TextLink to="/Signup">Signup</TextLink>
            </ExtraText>

        </StyledFormArea>
        <CopyrightText>
            All right Reserved &copy; 2022
        </CopyrightText>
       </div>
    );
}

export default login;

