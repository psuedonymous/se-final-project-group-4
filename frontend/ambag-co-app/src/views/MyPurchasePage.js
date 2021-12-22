import { NavBar } from "../components/NavBar";
import { PurchaseProgressStatus, PurchaseStatusIndicator } from '../assets/ItemStatus'
import { Route, Routes } from 'react-router-dom';
import './MyPurchasePage.css';

export default function MyPurchasePage() {
    return (
        <>
            <NavBar />
            <div className='my-purchase'>
                <div className='status-container'>
                    <PurchaseStatusIndicator />
                    <div className='status mt-4'>
                        {PurchaseProgressStatus.map((status) => {
                            return <Routes>
                                <Route path={status.url}></Route>
                            </Routes>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}