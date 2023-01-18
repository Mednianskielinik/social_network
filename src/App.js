import React, {Suspense, useEffect} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer"
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

const DialogListContainer = React.lazy(() => import('./components/Dialog/DialogListContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

function App(props) {

    useEffect(() => {
        props.initializeApp()
    })

    if (!props.initialized) {
        return <Preloader/>
    }
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path="/profile" element={<ProfileContainer/>}/>
                            <Route path="/profile/:id" element={<ProfileContainer/>}/>
                            <Route path="/dialogs"
                                   element={<DialogListContainer/>}/>
                            <Route path="/users"
                                   element={<UsersContainer/>}/>
                            <Route path="/login"
                                   element={<Login/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </BrowserRouter>
    );
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initializeApp})(App);