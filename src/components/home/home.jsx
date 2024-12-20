"use client";

import AddCart from "@/components/addCart";
import Cart from "@/components/cart";
import Deals from "@/components/home/Deals";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroSection from "@/components/home/HeroSection";
import Nav from "@/components/Nav";

export default function Home() {
    return (
        <>
            <Nav />
            <div className="container mx-auto relative">
                <HeroSection /> {/*  heroSection */}
            </div>
            <div className="container mx-auto relative">
                <FeaturedProducts /> {/*  Featured Products */}
            </div>
            <div className="container mx-auto relative">
                <Deals /> {/*  Featured Products Deals*/}
            </div>


            <div className="bg-[#2093ff] py-5 px-4 container mx-auto">
                <p>Top category</p>
                <p>Offers</p>
                <p>Newest Products</p>
                <p>Reviews</p>
                <p>Newsletters</p>
                <Cart></Cart>
                <AddCart></AddCart>
            </div>
        </>
    );
}
