// import { FilterGroup } from "../components/FilterGroup";
import { Footer } from "../components/Footer";
import React from 'react';
import { MainHeader } from "../components/MainHeader";
export const Layout = ({children}:{children:React.ReactNode}) =>{
    return(
        <>           
            <MainHeader/>
            {children}
            <Footer/>
        </>
    );
}