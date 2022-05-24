import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from 'components/sidebar/Sidebar';
import Dashboard from 'pages/Dashboard';
import Orders from 'pages/Orders';
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
import React, {useState} from 'react';
// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import 'assets/styles/react-grid-layout.css';
import 'assets/styles/react-resizable.css';
import './App.css';
import { AppStateProvider } from 'services/app.context';

let defaultAppState = {
    customizeDashboard: false
};

function PostAuth(){
    const [hideText, setHideText] = useState(false);
    return (
        <>
            <Sidebar hideText={hideText} setHideText={setHideText} />
            <div className={hideText ? "md:ml-20":"md:ml-64"}>
                <Route exact path="/overview" component={Dashboard} />
                <Route exact path="/purchaseOrders" component={Orders} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/tables" component={Tables} />
                <Route exact path="/maps" component={Maps} />
            </div>
        </>
    );
}
function App() {
    return (
        <AppStateProvider appState={defaultAppState}>
                <Switch>
                    {/* <Route exact path="/" component={Landing} /> */}
                    <Route exact path="/" component={SupplierLogin} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/supplier-login" component={SupplierLogin} />
                    <Route exact path="/buyer-login" component={BuyerLogin} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/supplier-register" component={SupplierPreRegister} />
                    {/* <Route exact path="/buyer-register" component={BuyerRegister} /> */}
                    <Route exact path="/*" component={PostAuth} />
                    {/* <Redirect from="*" to="/postAuth" /> */}
                </Switch>
                {/* <Footer /> */}

        </AppStateProvider>
    );
}

export default App;
