import { useForm } from "react-hook-form";
import { useUser } from "../context/UserContext";
import './Login.css';

export default function Login() {
    const { user, login } = useUser();
    const { register, handleSubmit, formState: {errors}} = useForm();

    if (user) return null;

    const onSubmit = data => {
        login(data.username, data.password);
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} aria-label="Formulario de login">
            <input
                type="text"
                placeholder="Username"
                className={errors.password ? "input-field input-error" : "input-field"}
                {...register("username", { required: "El nombre de usuario es obligatorio" })}
            />
            {errors.username && <span role="alert" className="error-message">{errors.username.message}</span>}
            
            <input 
                type="password"
                placeholder="Password"
                className={errors.password ? "input-field input-error" : "input-field"}
                {...register("password", { required: "La contraseña es obligatoria" })}
            />
            {errors.password && <span role="alert" className="error-message">{errors.password.message}</span>}
            
            <button type="submit" className="login">Login</button>
        </form>
    );
}