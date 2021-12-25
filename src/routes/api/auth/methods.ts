import { postData } from "../../../utils/fetch";

export const signUpRequest = (form: any) => {
    const { username, password, confirmPassword } = form;
    const body = {
        username: username.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
    };
    return postData("/api/auth/sign-up.json", body);
}

export const signInRequest = (form: any) => {
    const { username, password } = form;
    const body = {
        username: username.value,
        password: password.value,
    };
    return postData("/api/auth/sign-in.json", body);
}