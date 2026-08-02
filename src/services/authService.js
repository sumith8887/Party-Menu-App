import { LOGIN_API } from "../utils/constants";

export async function signIn(email, password) {
    const response = await fetch(LOGIN_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const data = await response.json();

    return data;
}