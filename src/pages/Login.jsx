import { useForm } from "react-hook-form";
import client from "../service/client";
import { Container, Form, Button, Alert, FormControl } from "react-bootstrap";
import { useUser } from "../context/UserContext";

export default function Login() {
    const { login } = useUser()

    const {
        register, handleSubmit, formState: {errors}, setError
    } = useForm()

    const onSubmit = async (data) => {
        try {
            const response = await client.post("/auth/login", data);
            login(response.data)
        } catch (error) {
            console.error("Error de login:", error);

            setError('root',{message: 'Correo o contraseña invalidos',})
        }
    };
    return (
        <Container className="mt-5" style={{ maxWidth: '400px' }}>
            <h2 className="mb-4 text-center">Iniciar sesión</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Correo:</Form.Label>
                    <FormControl type="email" placeholder="Ingresa tu correo"
                    {...register('email',{ required: 'Correo obligatorio'})}/>
                    {errors.email && (
                        <Form.Text className="text-danger">{errors.email.message}</Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña: </Form.Label>
                    <FormControl type="password" placeholder="Ingresa tu contraseña"
                    {...register('password',{ required: 'Contraseña obligatoria'})}/>
                    {errors.password && (
                        <Form.Text className="text-danger">{errors.email.password}</Form.Text>
                    )}
                </Form.Group>

                {errors.root && <Alert variant="danger">{errors.root.message}</Alert>}

                <div className="d-grid">
                    <Button variant="primary" type="submit">Ingresar</Button>
                </div>
            </Form>
        </Container>
    );
}