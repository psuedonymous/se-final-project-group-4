const { NavLink } = require("react-bootstrap")

export const PurchaseStatusIndicator = () => {
    const  status = [
        {   
            title: 'Reserved',
            url: '/my-purchase/reserved',
            cName: "fas fa-clipboard-check"
        },
        {   
            title: 'In Process',
            url: '/my-purchase/in-process',
            cName: "fas fa-box-open"
        },
        {   
            title: 'Shipped',
            url: '/my-purchase/shipped',
            cName: "fas fa-shipping-fast"
        },
        {   
            title: 'Completed',
            url: '/my-purhase/completed',
            cName: "fas fa-hand-holding-heart"
        },
        {   
            title: 'Cancelled',
            url: '/my-purchase/cancelled',
            cName: "fas fa-times-circle"
        },
    ]

    return (
        <div className="statusIndicator">
            {status.map((stat) => {
                return <NavLink to={stat.url}>
                    <i className={stat.cName}></i>
                    <p>{stat.title}</p>
                </NavLink>
            })}

        </div>
    )
}

export const DonationStatusIndicator = () => {
    const  status = [
        {   
            title: 'Reserved',
            url: '/my-donation/reserved',
            cName: "fas fa-clipboard-check"
        },
        {   
            title: 'In Process',
            url: '/my-donation/in-process',
            cName: "fas fa-box-open"
        },
        {   
            title: 'Shipped',
            url: '/my-donation/shipped',
            cName: "fas fa-shipping-fast"
        },
        {   
            title: 'Completed',
            url: '/my-donation/completed',
            cName: "fas fa-hand-holding-heart"
        },
        {   
            title: 'Cancelled',
            url: '/my-donation/cancelled',
            cName: "fas fa-times-circle"
        },
    ]

    return (
        <div className="statusIndicator">
            {status.map((stat) => {
                return <NavLink to={stat.url}>
                    <i className={stat.cName}></i>
                    <p>{stat.title}</p>
                </NavLink>
            })}

        </div>
    )
}


export const PurchaseProgressStatus = [
    {
        url: '/my-purchase/reserved'
    },
    {
        url: '/my-purchase/in-process'
    },
    {
        url: '/my-purchase/shipped'
    },
    {
        url: '/my-purchase/completed'
    },
    {
        url: '/my-purchase/cancelled'
    },
]

export const DonationProgressStatus = [
    {
        url: '/my-donation/reserved'
    },
    {
        url: '/my-donation/in-process'
    },
    {
        url: '/my-donation/shipped'
    },
    {
        url: '/my-donation/completed'
    },
    {
        url: '/my-donation/cancelled'
    },
]