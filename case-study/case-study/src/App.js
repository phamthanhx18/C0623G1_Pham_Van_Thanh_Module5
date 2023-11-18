import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ListService from "./components/serivce/ListService";
import EditService from "./components/serivce/EditService";
import AddService from "./components/serivce/AddService";
import ListCustomer from "./components/customer/ListCustomer";
import AddCustomer from "./components/customer/AddCustomer";
import EditCustomer from "./components/customer/EditCustomer";
import ListContract from "./components/contract/ListContract";
import AddContract from "./components/contract/AddContract";

function App() {
  return (
    <>
      <Header/>
        <ListCustomer />
        <AddCustomer />
        <EditCustomer />
        <ListContract />
        <AddContract />
      <Footer/>
    </>
  );
}

export default App;
