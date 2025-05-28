// import { FilterGroup } from "../components/FilterGroup";
import { Footer } from "../components/Footer";
// import { Header } from "../components/Header";
import React from 'react';
import { MainHeader } from "../components/MainHeader";
export const Layout = ({children}:{children:React.ReactNode}) =>{
    return(
        <>
            {/* <FilterGroup/>
            <Header/> */}
            <MainHeader/>
            {children}
            <Footer/>
        </>
    );
}