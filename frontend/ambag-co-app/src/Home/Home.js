import React from "react";
import Itemcard from "./Itemcard";
import data from "./Data";
import { NavBar } from "../Nav/NavBar";

function Home(){
    return(
        <>
        <NavBar/>

        <section className="py-4 container" >
        <div class ="row">

        </div>    
            <div className ="row justify-content-right">
                {data.protductData.map((item)=>{
                    return(<Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} />)
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
export default Home;

