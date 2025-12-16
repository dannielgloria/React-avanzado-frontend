import { useForm } from "react-hook-form";
import client from "../service/client";

export default function Login() {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await client.post("/auth/login", data);
            alert("Bienvenid@");
            console.log("Login exitoso:", response.data);
        } catch (error) {
            alert("Error de login");
            console.error("Error de login:", error);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email:</label>
                <input type="text" {...register("email")} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" {...register("password")} />
            </div>
            <button type="submit">Login</button>
        </form>
    );
}