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
import Page from 'components/login/Page';
import Container from 'components/login/Container';
import { Link, useHistory } from 'react-router-dom';
import AuthService from "../services/auth.service";
import { Controller, useForm } from "react-hook-form";
import { FormInput } from "../components/form/FormInput";

export default function SupplierLogin() {

    const form = useRef();
    const checkBtn = useRef();
    const history = useHistory();

    //const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const onSubmit = data => console.log(data);

    // const onChangeEmail = (e) => {
    //     const email = e.target.value;
    //     setEmail(email);
    // };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const errorMessage = (field) => {
            const type = errors?.[field]?.type;

            switch(field){
                case "email":
                    if(type == "pattern") return "Please enter a valid email"
                    if(type == "required") return "Email is required"
                    break;
                case "password":
                    if(type == "minLength") return "Password should be atleast 8 characters"
                    if(type == "required") return "Password is required"
                    if(type == "pattern") return "Password should contain atleast one letter, one number and one special character"
                    break;
            }
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
              history.push("/dashboard");
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
                <Container>
                    <form onSubmit={handleSubmit(handleLogin)} ref={form}>
                        <Card>
                            {/* <CardHeader color="lightBlue">
                                <H5 color="white text-xl" style={{ marginBottom: 0 }}>
                                    Supplier Login
                                </H5>
                            </CardHeader> */}
                            <div color="lightBlue" contentPosition="none" className=" bg-sky-500 p-5 mb-5 text-white rounded-lg">
                                <div className="w-full flex items-center justify-between">
                                    <h2 className="text-xl">Supplier Login</h2>
                                </div>
                            </div>
                            <CardBody>
                                <div className="mb-12 px-4 bg-bb">
                                    <FormInput 
                                        control={control}
                                        name="email"
                                        label="Email Address"
                                        iconName="email"
                                        validation={errorMessage("email")}
                                        rules={{ required: true, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/ }}
                                        type="email"
                                    />
                                </div>
                                <div className="mb-8 px-4">
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
                                <div className="mb-4 px-4">
                                    <Checkbox
                                        color="lightBlue"
                                        text="Remember Me"
                                        id="remember"
                                        size="sm"
                                    />
                                </div>
                            </CardBody>
                            <CardFooter>
                                <div className="flex justify-center bg-bb">
                                    {/* <Link to="/dashboard"> */}
                                        <Button
                                            color="lightBlue"
                                            buttonType="submit"
                                            size="md"
                                            ripple="dark"
                                        >
                                            Get Started
                                        </Button>
                                    {/* </Link> */}
                                </div>
                            </CardFooter>
                        </Card>
                    </form>
                </Container>
            <SimpleFooter />
        </Page>
    );
}
