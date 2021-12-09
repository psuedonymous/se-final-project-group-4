import { Items } from "../../assets/Items";
import { NavBar } from "../../components/NavBar";
import { MyItemCard } from "./MyItemCard";
import './MyShopPage.css';

export default function MyShopPage() {
    return (
        <>
            <NavBar />
            <div className="row m-3">
                <div className="title">
                    My Items
                </div>
            </div>
           <section className="container">
           <div className="row justify-content-center">
                {Items.map((item) => {
                    return (<MyItemCard img={item.img} name={item.name} price={item.price} />)
                })}
            </div>
           </section>
        </>
    )
}