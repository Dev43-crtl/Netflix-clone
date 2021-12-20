import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../templates/Home/Home';
import { Inicio } from '../../templates/Inicio';
import { Login } from '../../templates/Login';
import { Movies } from '../Movies'
import { FakeLoading } from '../FakeLoading';

export const Routers = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/browse" element={<Inicio/>}></Route>
                <Route path="/movies" element={<Movies/>}></Route>
                <Route path="/watch" element={<FakeLoading/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}