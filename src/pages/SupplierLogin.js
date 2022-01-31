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
            {/* <DefaultNavbar /> */}
            <div className="flex justify-end mr-10 mt-6 text-gray-700">
                <Link to="/">
                    <div className="ml-4">
                        <p className="text-2xl font-bold">ELIT</p>
                        <div className="flex lowercase text-xs">powered by
                            <img className="w-20 ml-2" src="https://static.wixstatic.com/media/3780c2_8636388420094d4e9de71388d5a89363~mv2.png/v1/fill/w_260,h_80,al_c,q_85,usm_0.66_1.00_0.01/logo.webp" />
                        </div>
                    </div>
                </Link>
                </div>
                <div className="flex justify-end w-full pr-32 h-full items-center mb-20">
                    <form onSubmit={handleSubmit(handleLogin)} ref={form}>
                        <div className="w-96">
                            {/* <CardHeader color="lightBlue">
                                <H5 color="white text-xl" style={{ marginBottom: 0 }}>
                                    Supplier Login
                                </H5>
                            </CardHeader> */}
                            <div contentPosition="none" className=" p-5 mb-5 text-white rounded-lg">
                                <div className="w-full flex items-center justify-between">
                                    <h2 className="text-3xl font-bold text-gray-800">Supplier Login</h2>
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
                                    <Button
                                        color=""
                                        className="bg-primary"
                                        buttonType="submit"
                                        size="md"
                                        ripple="dark"
                                        block={true}
                                        iconOnly={false}
                                    >
                                        Login
                                    </Button>
                                </div>
                                <p className="text-xs text-center mt-5 text-gray">New to Elit Collaboration Platform?</p>
                                <p className="text-xs text-center mt-2 underline font-semibold text-gray"><Link to="/supplier-register">Register Now</Link></p>
                            </CardFooter>
                        </div>
                    </form>
                </div>
            {/* <SimpleFooter /> */}
        </Page>
    );
}
