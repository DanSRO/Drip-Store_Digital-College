import { ReactNode, useContext, useEffect, useState, createContext } from "react";

interface UserData{
    id:number;
    name:string;
    email:string;
}
interface AuthContextType{
    isAuthenticated:boolean;
    user:UserData | null;
    login:(token:string, userData:UserData) => void;
    logout:()=>void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider:React.FC<{children: ReactNode}> = ({children}) =>{
    const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<UserData | null>(null);

    useEffect(()=>{
        const token = localStorage.getItem('authToken');
        const storedUser = localStorage.getItem('user');
        if(token && storedUser){
            TODO:
            try{
                setUser(JSON.parse(storedUser));
                setAuthenticated(true);
            }catch(e){
                console.error("Erro ao parsear dados do usuário do localStorage: ", e);
                logout();
            }
        }
    }, []);

    const login = (token:string, userData:UserData)=>{
        localStorage.setItem('authToken', token);
        localStorage.setItem('user', JSON.stringify(userData));
        setAuthenticated(true);
        setUser(userData);
    }
    const logout = ()=>{
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        setAuthenticated(false);
        setUser(null);
        //Opção para retornar para a página inicial ou de login
        window.location.href='/login';
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(context === undefined){
        throw new Error('useAuth deve ser usado dentro de um AuthProvider.');
    }
    return context;
};