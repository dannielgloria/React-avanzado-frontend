import  { useForm } from "react-hook-form";
import client from "../service/client";

export default function CreatePost() {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            await client.post("/post", data);
            reset();
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Titulo:</label>
                <input type="text" {...register("title")} />

                <label>Contenido:</label>
                <textarea {...register("content")} />
                <button type="submit">Crear Post</button>
            </div>
        </form>
    );
}