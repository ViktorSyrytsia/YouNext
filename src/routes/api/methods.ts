import { postData } from "../../utils/fetch";

export const signUpRequest = (form: any) => {
    const { username, password, confirmPassword } = form;
    const body = {
        username: username.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
    };
    return postData("/api/auth.json", body);
}