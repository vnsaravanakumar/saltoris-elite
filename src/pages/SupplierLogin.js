import React, { useState, useRef } from "react";
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Checkbox from '@material-tailwind/react/Checkbox';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from 'components/DefaultNavbar';
import SimpleFooter from 'components/SimpleFooter';
import Page from 'components/preauth/Page';
import Container from 'components/preauth/Container';
import { Link, useHistory } from 'react-router-dom';
import AuthService from "../services/auth.service";
import { useForm } from "react-hook-form";
import { FormInput } from "../components/form/FormInput";

export default function SupplierLogin() {

    const form = useRef();
    const history = useHistory();

    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const { register, handleSubmit, formState: { errors }, control } = useForm();

    const errorMessages = {
        email: {
            pattern: "Please enter a valid email",
            required: "Email is required"
        },
        password: {
            pattern: "Password should contain atleast one letter, one number and one special character",
            required: "Password is required",
            minLength: "Password should be atleast 8 characters"
        }
    }

    const errorMessage = (field) => {
            const type = errors?.[field]?.type;
            return errorMessages[field][type];
    }
    const handleLogin = (data, e) => {
        e.preventDefault();
        //alert("handler")
        setMessage("");
        setLoading(true);
    
        //form.current.validateAll();
    
        //if (checkBtn.current.context._errors.length === 0) {
          const prom = AuthService.login("email", password)
          prom.then(
            () => {
              history.push("/overview");
            },
            (error) => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              setLoading(false);
              setMessage(resMessage);
            }
          );
        // } else {
        //   setLoading(false);
        // }
    };
      
    return (
        <Page>
            <DefaultNavbar />
            <div className="flex justify-end w-full h-full relative items-center ">
                <form onSubmit={handleSubmit(handleLogin)} ref={form}>
                    <Container className="max-w-sm">
                        <Card>
                            <div contentPosition="none" className=" p-5 mb-5 text-white rounded-lg">
                                <div className="w-full justify-center">
                                    {/* <div className="uppercase font-bold pb-4 text-center text-gray-500 text-[10px]">sign in | sign up</div> */}
                                    <h2 className="text-lg text-center font-bold text-gray-800">Supplier Login</h2>
                                </div>
                            </div>
                            <div className="mb-6 px-4 bg-bb">
                                <FormInput 
                                    control={control}
                                    name="email"
                                    label="User Name"
                                    iconName="email"
                                    validation={errorMessage("email")}
                                    rules={{ required: true, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/ }}
                                    type="email"
                                />
                            </div>
                            <div className="mb-2 px-4">
                                <FormInput
                                    control={control}
                                    name="password"
                                    label="Password"
                                    iconName="lock"
                                    type="password"
                                    validation={errorMessage("password")}
                                    rules={{ required: true, minLength: 8, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/i}}
                                />
                            </div>
                            {/* <div className="mb-4 px-4 text-[10px] text-gray-700 text-right">
                                Forgot Username or Forgot Password
                            </div> */}
                            <div className="flex justify-center bg-bb">
                                <Button
                                    color="blue"
                                    className="bg-primary my-6"
                                    buttonType="submit"
                                    size="md"
                                    ripple="dark"
                                    block={true}
                                    iconOnly={false}
                                >
                                    Login
                                </Button>
                            </div>
                            {/* <p className="text-xs text-center mt-5 text-black font-semibold">Join the ELIT Network | 
                            <span className="text-xs text-center mt-2 font-semibold text-primary-blue"><Link to="/supplier-register"> Register Here</Link></span></p> */}
                        </Card>
                    </Container>

                </form>
            </div>
        </Page>
    );
}
