import './App.css';
import Main from "./components/Main";
import Footer from "./components/Footer";
import {Fragment, useState} from "react";
import NavBar from "./components/NavBar";
// import {useState} from "@types/react";

function App() {

    const [insertItem, setInsertItem] = useState([])

    return (
        <Fragment>
            <NavBar/>
            <Main
                insertItem={insertItem}
                setInsertItem={setInsertItem}
            />

            <Footer/>
        </Fragment>
    )
}

export default App;
