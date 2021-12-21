import { NavLink } from "react-router-dom"

export const StatusIndicator = () => {
    const status = [
        {
            title: 'Reserved',
            path: '/my-donation/reserved',
            cName: 'fas fa-clipboard-check'
        },
        {
            title: 'In Process',
            path: '/my-donation/in-process',
            cName: 'fas fa-box-open'
        },
        {
            title: 'Shipped',
            path: '/my-donation/shipped',
            cName: 'fas fa-shipping-fast'
        },
        {
            title: 'Completed',
            path: '/my-donation/completed',
            cName: 'fas fa-hand-holding-heart'
        },
        {
            title: 'Cancelled',
            path: '/my-donation/cancelled',
            cName: 'far fa-times-circle'
        },
    ]
    return (
        <div className="statusIndicator">
            {status.map((stat, index) => {
                return (
                    <>
                    <NavLink  activeClassName="activeLink" key={index} to={stat.path}>
                        <i className={stat.cName }></i>  
                        <p> { stat.title}</p>
                    </NavLink>
                    <hr />
                    </>
                )
           })}
        </div>
    )
}

export const ProgressStatus = [
    {
        title: 'Reserved',
        url: '/my-donation/reserved',
    },
    {
        title: 'In Process',
        url: '/my-donation/in-process',
    },
    {
        title: 'Shipped',
        url: '/my-donation/shipped',
    },
    {
        title: 'Completed',
        url: '/my-donation/completed',
    },
    {
        title: 'Cancelled',
        url: '/my-donation/cancelled',
    },
]