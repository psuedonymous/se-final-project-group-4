import ItemCard from "../components/ItemCard";
import { Items } from "../assets/Items";
import { NavBar } from "../components/NavBar";

export default function Home() {
    return (
        <>
            <NavBar />
            <section className="py-4 container" >
                <div class="row">

                </div>
                <div className="row justify-content-right">
                    {Items.map((item) => {
                        return (<ItemCard img={item.img} title={item.title} desc={item.desc} price={item.price} />)
                    })}

                </div>
                <div >
                    <button type="button" class="btn btn-primary btn-lg float-end">
                        +
                    </button>
                </div>
            </section>


        </>
    );
};
