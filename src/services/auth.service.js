import axios from "axios";
import { environment } from "../utils/config";

export const SignUp = async (payload) => {
    const developemtUrl = environment.DEVELOPMENT_URL;
    try {
        return await axios.post(developemtUrl + 'api/v1/signup', payload);
    } catch (error) { 
        throw error;
    }
}

export const SignIn = async (payload) => {
    const developemtUrl = environment.DEVELOPMENT_URL;
    try {
        return await axios.post(developemtUrl + 'api/v1/login', payload);
    } catch (error) {
        throw error;
    }
}