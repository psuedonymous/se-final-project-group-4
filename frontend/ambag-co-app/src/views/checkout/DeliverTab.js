export default function Deliver() {
    const shippingFee = 120;

    return (
        <>
            <div className="row m-3">
                <div className="row address">
                    <div className="row">
                        <div className="col-lg-11 col-10">
                            <p className="mt-3">Balabago, Jaro</p> {/* buyer's address */}
                        </div>
                        <div className="col-lg-1 col-2">
                            <i className="fas fa-edit mt-3 float-end"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-3">
                <div className="row headings">
                    <div className="col-lg-8 col-5">
                        <p className="mt-3">K Store</p>
                    </div>
                    <div className="col-lg-2 col-4">
                        <p className="mt-3 float-end">Unit Price</p>
                    </div>
                    <div className="col-lg-2 col-3">
                        <p className="mt-3 float-end">Qty</p>
                    </div>
                </div>
            </div>
            <div className="row m-3">
                <div className="row payment-method">
                    <div className="row">
                        <div className="col-lg-9 col-5">
                            <p className="mt-3">Payment Method</p>
                        </div>
                        <div className="col-lg-2 col-5">
                            <p className="mt-3">Cash on Delivery</p>
                        </div>
                        <div className="col-lg-1 col-2">
                            <i className="fas fa-edit mt-3 float-end"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row m-3">
                <div className="row payment-method">
                    <div className="col-lg-7 col-1"></div>
                    <div className="col-lg-5 col-11">
                        <div className="row">
                            <div className="col-lg-7 col-6">
                                <p className="mt-2 float-end">Subtotal</p>
                            </div>
                            <div className="col-lg-5 col-6">
                                <p className="float-end mt-2"></p> {/*total of all ordered items*/}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7 col-6">
                                <p className="float-end">Shipping Fee</p>
                            </div>
                            <div className="col-lg-5 col-6">
                                <p className="float-end">{shippingFee}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7 col-6">
                                <p className="float-end">Total Amount</p>
                            </div>
                            <div className="col-lg-5 col-6">
                                <p className="float-end"></p> {/*subtotal + sf*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}