import { useForm } from "react-hook-form";
import client from "../service/client";

export default function Register() {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await client.post("/auth/register", data);
            alert("Registro exitoso");
            console.log("Registro exitoso:", response.data);
        } catch (error) {
            alert("Error en el registro");
            console.error("Error en el registro:", error);
        }
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>UserName:</label>
                <input type="text" {...register("username")} />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" {...register("email")} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" {...register("password")} />
            </div>
            <button type="submit">Registrarme</button>
        </form>
    );
}