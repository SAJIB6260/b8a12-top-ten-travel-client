import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";


const PrivateRoute = ({Children}) => {
    const {user} = useAuth();
    const location = useLocation();

    if(user){
        return Children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;