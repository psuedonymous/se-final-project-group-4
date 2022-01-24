import React from "react";
import { NavLink } from "react-router-dom";

export const PurchaseStatusIndicator = () => {
    const  status = [
        {   
            title: 'Reserved',
            path: '/my-purchase/reserved?status=reserved',
            cName: "fas fa-clipboard-check"
        },
        {   
            title: 'In Process',
            path: '/my-purchase/in-process?status=in-process',
            cName: "fas fa-box-open"
        }, 
        {   
            title: 'Shipped',
            path: '/my-purchase/shipped?status=shipped',
            cName: "fas fa-shipping-fast"
        },
        {   
            title: 'Completed',
            path: '/my-purchase/completed?status=completed',
            cName: "fas fa-hand-holding-heart"
        },
        {   
            title: 'Cancelled',
            path: '/my-purchase/cancelled?status=cancelled',
            cName: "fas fa-times-circle"
        },
    ]

    const displayStatus = status.map((stat) => {
        return <NavLink to={stat.path}>
            <i className={stat.cName}></i>
            <p>{stat.title}</p>
        </NavLink>
    })

    return (
        <div className="statusIndicator">
            {displayStatus}
        </div>
    )
}

export const DonationStatusIndicator = () => {
    const  status = [
        {   
            title: 'Reserved',
            path: '/my-shop/my-donation/reserved?status=reserved',
            cName: "fas fa-clipboard-check"
        },
        {   
            title: 'In Process',
            path: '/my-shop/my-donation/in-process?status=in-process',
            cName: "fas fa-box-open"
        },
        {   
            title: 'Shipped',
            path: '/my-shop/my-donation/shipped?status=shipped',
            cName: "fas fa-shipping-fast"
        },
        {   
            title: 'Completed',
            path: '/my-shop/my-donation/completed?status=completed',
            cName: "fas fa-hand-holding-heart"
        },
        {   
            title: 'Cancelled',
            path: '/my-shop/my-donation/cancelled?status=cancelled',
            cName: "fas fa-times-circle"
        },
    ]

    const displayStatus = status.map((stat) => {
        return <NavLink to={stat.path}>
            <i className={stat.cName}></i>
            <p>{stat.title}</p>
        </NavLink>

    })

    return (
        <div className="statusIndicator">
             {displayStatus}
        </div>
    )
}