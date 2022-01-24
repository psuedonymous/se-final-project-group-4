import { NavBar } from "../components/NavBar";
import { PurchaseStatusIndicator } from '../assets/ItemStatus'
import './MyPurchasePage.css';
import { Routes, Route, Outlet } from "react-router-dom";

export default function MyPurchasePage() {
    return (
        <>
            <NavBar />
            <div className='my-purchase'>
                <div className='status-container'>
                    <PurchaseStatusIndicator />
                    <div className='status mt-4'>
                        <Routes>
                            <Route path='/my-purchase/reserved'/>
                            <Route path='/my-purchase/in-process'/>
                            <Route path='/my-purchase/shipped'/>
                            <Route path='/my-purchase/completed'/>
                            <Route path='/my-purchase/cancelled'/>
                        </Routes>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}