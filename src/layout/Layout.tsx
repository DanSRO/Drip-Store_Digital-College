import { FilterGroup } from "../components/FilterGroup";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Layout = ({children}:any) =>{
    return(
        <>
            <FilterGroup/>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}