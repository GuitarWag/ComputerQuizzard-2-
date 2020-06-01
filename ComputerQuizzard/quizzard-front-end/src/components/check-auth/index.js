import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {useAuthContext} from "../../contexts/auth";

const CheckAuth = () => {
    const { user } = useAuthContext();
    const history = useHistory();

    useEffect(() => {
        if (!user) {
            history.push('/')
        }
    }, [user, history]);

    return null;
}

export default CheckAuth;
