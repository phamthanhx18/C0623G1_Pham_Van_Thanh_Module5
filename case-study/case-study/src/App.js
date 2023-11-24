import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListVilla from "./pages/villa/ListVilla";
import ListHouse from "./pages/house/ListHouse";
import ListRoom from "./pages/room/ListRoom";
import DetailVilla from "./pages/villa/DetailVilla";
import DetailHouse from "./pages/house/DetailHouse";
import DetailRoom from "./pages/room/DetailRoom";
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
import EditHouse from "./components/dashboard/service/EditHouse";
import EditVilla from "./components/dashboard/service/EditVilla";
import EditRoom from "./components/dashboard/service/EditRoom";
import React from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
                <Route path="/dashboard/villa/edit/:id" Component={EditVilla}/>
                <Route path="/dashboard/house/add" Component={CreateHouse}/>
                <Route path="/dashboard/house/edit/:id" Component={EditHouse}/>
                <Route path="/dashboard/room/add" Component={CreateRoom}/>
                <Route path="/dashboard/room/edit/:id" Component={EditRoom}/>
            </Routes>
            <Footer/>
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;
