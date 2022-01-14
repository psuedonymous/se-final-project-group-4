import React from "react";
import { NavLink } from "react-router-dom";

export const ShippingMethodIndicator = () => {
    const  methods = [
        {   
            title: 'Deliver',
            path: '/checkout/deliver',
        },
        {   
            title: 'Pick Up',
            path: '/checkout/pick-up',
        },
    ]

    const displayShippingMethods = methods.map((method) => {
        return <NavLink to={method.path}>
            <p className="mt-2">{method.title}</p>
        </NavLink>
    })

    return (
        <div className="methodIndicator">
            {displayShippingMethods}
        </div>
    )
}