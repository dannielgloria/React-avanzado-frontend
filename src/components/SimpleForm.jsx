import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './SimpleForm.css'

export default function SimpleForm() {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const [age, setAge] = useState();

    const onSubmit = (data) => {
        console.log(data);
        console.log("Edad: " + age);
        var fullname = data.email + " " + data.contry;
        console.log("Nombre completo: " + fullname);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Nombre" {...register("name")}/>
            <br />
            <input placeholder="Apellido" {...register("lastname")}/>
            <br />
            <input placeholder="Email" {...register("email")}/>
            <br />
            <input placeholder="País" {...register("contry")}/>
            <br />
            <input 
                className={errors.pwd ? 'input-error' : ''} 
                placeholder="Contraseña" 
                type="password" {...register("pwd", { required: true, minLength: 8 })}
            />
            <br />
            {errors.pwd?.type === 'required' && <p className="error-message">La contraseña es obligatoria</p>}
            {errors.pwd?.type === 'minLength' && <p className="error-message">La contraseña debe de tener almenos 8 caracteres</p>}

            <p>Forma 2 de mostrar errores</p>
            {errors.pwd && (
                <p className="error-message">
                    {errors.pwd.type === 'required'
                    ? 'Campo obligatorio'
                    : 'El campo debe de tener almenos 8 caracteres'}
                </p>
            )}

            <br />
            <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Edad" ></input>
            <button type="submit">Enviar</button>
        </form>
    );

}