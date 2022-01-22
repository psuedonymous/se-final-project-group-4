export default function CheckoutCard(props) {

    const displayCheckedOutItems = props.items.map((item) => {
        return (<OrderedItemCard
            img={item.i_image}
            title={item.i_name}
            price={item.i_price}
        />)
    })

    return (
        <>
            <div className="row m-3">
                <div className="row address">
                    <div className='row'>
                        <div className="col-lg-11 col-10">
                            <p className="mt-3">{props.address}</p>
                        </div>
                        <div className="col-lg-1 col-2">
                            <i className="fas fa-edit mt-3 float-end"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-3">
                <div className="row headings">
                    <div className="col-lg-10 col-6">
                        <p className="mt-3">{props.shopName}</p>
                    </div>
                    <div className="col-lg-2 col-6">
                        <p className="mt-3 float-end">Unit Price</p>
                    </div>
                </div>
            </div>
            <div className="row m-3">
                    <div className="row">
                        <div className="col-12">
                            {displayCheckedOutItems}
                        </div>
                    </div>
            </div>
            <div className="row m-3">
                <div className="row payment-method">
                    <div className='row'>
                        <div className="col-lg-9 col-5">
                            <p className="mt-3">Payment Method</p>
                        </div>
                        <div className="col-lg-2 col-5">
                            <p className="mt-3">{props.paymentMethod}</p>
                        </div>
                        <div className="col-lg-1 col-2">
                            <i className="fas fa-edit mt-3 float-end" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-3">
                <div className="row payment-method">
                    <div className="col-lg-7 col-1"></div>
                    <div className="col-lg-5 col-11">
                        <div className='row'>
                            <div className="row">
                                <div className="col-lg-7 col-6">
                                    <p className="mt-2 float-end">Subtotal</p>
                                </div>
                                <div className="col-lg-5 col-6">
                                    <p className="float-end mt-2">{props.subtotal}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-7 col-6">
                                    <p className="float-end">Shipping Fee</p>
                                </div>
                                <div className="col-lg-5 col-6">
                                    <p className="float-end">{props.shippingFee}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-7 col-6">
                                    <p className="float-end">Total Amount</p>
                                </div>
                                <div className="col-lg-5 col-6">
                                    <p className="float-end">{props.totalAmount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function OrderedItemCard(props) {
    return (
        <div className="row orders">
            <div className="col-lg-1 col-3">
                <img src={props.img} height={40} width={45} />
            </div>
            <div className="col-lg-10 col-6">
                <p className="mt-3">{props.title}</p>
            </div>
            <div className="col-lg-1 col-3">
                <p className="mt-3 float-end">{props.price}</p>
            </div>
        </div>
    );
};
