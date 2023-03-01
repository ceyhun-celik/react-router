import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
    // kullanıcı oturum açmış mı?
    const { user } = useAuth()

    const location = useLocation()
    
    // eğer oturum açmamışsa, yönlendirme işlemi yap
    if (!user) {
        return <Navigate to="/auth/login" replace={true} state={{ 
            return_url: location.pathname + location.search
         }} />
    }

    // eğer oturum açmışsa children ı return et
    return children

}
