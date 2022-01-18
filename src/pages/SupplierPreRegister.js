import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Input from '@material-tailwind/react/Input';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from 'components/DefaultNavbar';
import SimpleFooter from 'components/SimpleFooter';
import Page from 'components/register/Page';
import Container from 'components/register/Container';
import { useHistory } from 'react-router-dom';
import React, { useState, useRef } from "react";
import AuthService from "../services/auth.service";
import { useForm } from "react-hook-form";
import { FormInput } from "../components/form/FormInput";
import SupplierRegister from "./SupplierRegister";

export default function SupplierPreRegister() {
    const form = useRef();
    const checkBtn = useRef();
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [preRegister, setPreRegister] = useState(true);
    const [preRegisterValues, setPreRegisterValues] = useState();
    
    const errorMessages = {
        email: {
            pattern: "Please enter a valid email",
            required: "Email is required"
        },
        companyName: {
            required: "Company name is required"
        }
    }

    const errorMessage = (field) => {
            const type = errors?.[field]?.type;
            return errorMessages[field][type];
    }

    const { register, handleSubmit, formState, control, getValues } = useForm();

    const { errors } = formState; 

    const handleRegister = (data, e) => {
        e.preventDefault();
        //alert("handler")
        setMessage("");
        setLoading(true);
    
        //form.current.validateAll();
    
        //if (checkBtn.current.context._errors.length === 0) {
          const prom = AuthService.customerPreCheck(email, password)
          prom.then(
            () => {
              //history.push("/supplier-register");
              setPreRegisterValues({...data, registrationNumber: Math.round(Math.random() * 10000000000)});
              setPreRegister(false);
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
                {preRegister ? 
                <Card>
                    <form onSubmit={handleSubmit(handleRegister)} ref={form}>
                    <div color="lightBlue" contentPosition="none" className="bg-sky-500 p-5 text-white rounded-lg">
                        <div className="w-full flex items-center justify-between">
                            <h2 className="text-xl">Supplier Registration</h2>
                        </div>
                    </div>
                    <CardBody>
                        <h6 className="text-lightBlue-500 text-sm mt-3 mb-6 font-light uppercase">
                            Company Information
                        </h6>
                        <div className="flex flex-wrap ">
                            <div className="w-full mb-10  font-light">
                                <FormInput 
                                    control={control}
                                    name="companyName"
                                    label="Company Legal Name"
                                    validation={errorMessage("companyName")}
                                    rules={{ required: true }}
                                />
                            </div>
                            <div className="w-full  mb-10 font-light">
                                <FormInput 
                                    control={control}
                                    name="email"
                                    label="Email ID"
                                    validation={errorMessage("email")}
                                    rules={{ required: true, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/ }}
                                    type="email"
                                />
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="-pt-4">
                        <div className="flex justify-center">
                            <Button
                                color="lightBlue"
                                buttonType="submit"
                                size="md"
                                ripple="dark"
                            >
                                Register
                            </Button>
                        </div>
                    </CardFooter>
                    </form>
                </Card> :
                <SupplierRegister data={preRegisterValues} />}
            </Container>
        </Page>
    );
}
