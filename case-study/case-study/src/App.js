import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListVilla from "./components/serivce/villa/ListVilla";
import ListHouse from "./components/serivce/house/ListHouse";
import ListRoom from "./components/serivce/room/ListRoom";
import DetailVilla from "./components/serivce/villa/DetailVilla";
import DetailHouse from "./components/serivce/house/DetailHouse";
import DetailRoom from "./components/serivce/room/DetailRoom";
import Dashboard from "./components/dashboard/Dashboard";
import TableCustomer from "./components/dashboard/customer/TableCustomer";
import TableContract from "./components/dashboard/contract/TableContract";
import TableService from "./components/dashboard/service/TableService";
import AddCustomer from "./components/dashboard/customer/AddCustomer";
import EditCustomer from "./components/dashboard/customer/EditCustomer";
import AddContract from "./components/dashboard/contract/AddContract";
import CreateVilla from "./components/dashboard/service/CreateVilla";
import CreateHouse from "./components/dashboard/service/CreateHouse";
import CreateRoom from "./components/dashboard/service/CreateRoom";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" Component={HomePage}/>
                <Route path="/villa" Component={ListVilla}/>
                <Route path="/villa/:id" Component={DetailVilla}/>
                <Route path="/house" Component={ListHouse}/>
                <Route path="/house/:id" Component={DetailHouse}/>
                <Route path="/room" Component={ListRoom}/>
                <Route path="/room/:id" Component={DetailRoom}/>
                <Route path="/dashboard" Component={Dashboard}/>
                <Route path="/dashboard/customer" Component={TableCustomer}/>
                <Route path="/dashboard/customer/add" Component={AddCustomer}/>
                <Route path="/dashboard/customer/edit/:id" Component={EditCustomer}/>
                <Route path="/dashboard/service" Component={TableService}/>
                <Route path="/dashboard/contract" Component={TableContract}/>
                <Route path="/dashboard/contract/add" Component={AddContract}/>
                <Route path="/dashboard/villa/add" Component={CreateVilla}/>
                <Route path="/dashboard/house/add" Component={CreateHouse}/>
                <Route path="/dashboard/room/add" Component={CreateRoom}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
