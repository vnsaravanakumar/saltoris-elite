import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
import Tables from 'pages/Tables';
import Maps from 'pages/Maps';
import Footer from 'components/Footer';
import Landing from 'pages/Landing';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import SupplierLogin from 'pages/SupplierLogin';
import BuyerLogin from 'pages/BuyerLogin';
import Register from 'pages/Register';
import SupplierRegister from 'pages/SupplierRegister';
import SupplierPreRegister from 'pages/SupplierPreRegister';
import BuyerRegister from 'pages/BuyerRegister';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

function PostAuth(){
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/tables" component={Tables} />
                <Route exact path="/maps" component={Maps} />
            </div>
        </>
    );
}
function App() {
    return (
        <>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/supplier-login" component={SupplierLogin} />
                    <Route exact path="/buyer-login" component={BuyerLogin} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/supplier-register" component={SupplierPreRegister} />
                    <Route exact path="/buyer-register" component={BuyerRegister} />
                    <Route exact path="/*" component={PostAuth} />
                    {/* <Redirect from="*" to="/postAuth" /> */}
                </Switch>
                {/* <Footer /> */}

        </>
    );
}

export default App;
