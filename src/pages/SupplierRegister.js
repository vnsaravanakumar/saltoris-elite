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

export default function SupplierRegister({data: {companyName, email, registrationNumber}}) {
    return (            
        <Card>
            <CardHeader color="lightBlue" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-xl">Supplier Registration</h2>
                </div>
            </CardHeader>
            <CardBody>
                <form>
                    <h6 className="text-lightBlue-500 text-sm mt-3 mb-6 font-light uppercase">
                        Company Information
                    </h6>
                    <div className="flex flex-wrap mt-10">
                        <div className="w-full lg:w-6/12 mb-10 lg:pr-4 font-light">
                            <Input
                                type="text"
                                color="lightBlue"
                                placeholder="Company Name"
                                size="sm"
                                value={companyName}
                            />
                        </div>
                        <div className="w-full lg:w-6/12 mb-10 lg:pl-4 font-light">
                            <Input
                                type="number"
                                color="lightBlue"
                                placeholder="Registration Number"
                                size="sm"
                                disabled
                                value={registrationNumber}
                            />
                        </div>
                        <div className="w-full lg:w-12/12 mb-10 font-light">
                            <Input
                                type="text"
                                color="lightBlue"
                                placeholder="Address"
                                size="sm"
                            />
                        </div>
                        <div className="w-full lg:w-4/12 lg:pr-4 mb-10 font-light">
                            <Input
                                list="country-list"
                                color="lightBlue"
                                placeholder="Country"
                                iconName="lock"
                                size="sm"
                            />
                            <datalist id="country-list">
                                <option value="India" />
                                <option value="US" />
                                <option value="Australia" />
                            </datalist>
                        </div>
                        <div className="w-full lg:w-4/12 lg:px-4 mb-10 font-light">
                            <Input
                                type="text"
                                color="lightBlue"
                                placeholder="City"
                                size="sm"
                            />
                        </div>
                        <div className="w-full lg:w-4/12 lg:pl-4 mb-10 font-light">
                            <Input
                                type="number"
                                color="lightBlue"
                                placeholder="Pincode"
                                size="sm"
                            />
                        </div>
                    </div>

                    <h6 className="text-lightBlue-500 text-sm my-6 font-light uppercase">
                        Administrator Information
                    </h6>
                    <div className="flex flex-wrap mt-10">
                        <div className="w-full lg:w-6/12 lg:pr-4 mb-10 font-light">
                            <Input
                                type="text"
                                color="lightBlue"
                                placeholder="First Name"
                                size="sm"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 lg:pl-4 mb-10 font-light">
                            <Input
                                type="text"
                                color="lightBlue"
                                placeholder="Last Name"
                                size="sm"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 lg:pr-4 mb-10 font-light">
                            <Input
                                type="text"
                                color="lightBlue"
                                placeholder="Business Role"
                                size="sm"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 lg:pl-4 mb-10 font-light">
                            <Input
                                type="email"
                                color="lightBlue"
                                placeholder="Username (Email Address)"
                                size="sm"
                                value={email}
                            />
                        </div>
                        <div className="w-full lg:w-6/12 lg:pr-4 mb-10 font-light">
                            <Input
                                type="password"
                                color="lightBlue"
                                placeholder="Password"
                                size="sm"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 lg:pl-4 mb-10 font-light">
                            <Input
                                type="password"
                                color="lightBlue"
                                placeholder="Confirm Password"
                                size="sm"
                            />
                        </div>
                    </div>
                </form>
            </CardBody>
            <CardFooter>
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
        </Card>
    );
}
