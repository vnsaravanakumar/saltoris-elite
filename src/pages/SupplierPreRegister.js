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

export default function SupplierPreRegister() {
    const form = useRef();
    const checkBtn = useRef();
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //alert("handler")
        setMessage("");
        setLoading(true);
    
        //form.current.validateAll();
    
        //if (checkBtn.current.context._errors.length === 0) {
          const prom = AuthService.customerPreCheck(email, password)
          prom.then(
            () => {
              history.push("/supplier-register");
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
                <Card>
                <form onSubmit={handleSubmit} ref={form}>
                    <div color="lightBlue" contentPosition="none" className=" bg-sky-500 p-5 text-white rounded-lg">
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
                                    <Input
                                        type="text"
                                        color="lightBlue"
                                        placeholder="Company Legal Name"
                                        size="sm"
                                    />
                                </div>
                                <div className="w-full  mb-10 font-light">
                                    <Input
                                        type="email"
                                        color="lightBlue"
                                        placeholder="Email ID"
                                        size="sm"
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
                </Card>
            </Container>
        </Page>
    );
}
