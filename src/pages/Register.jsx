import { useForm } from "react-hook-form";
import { Container, Form, Button, Alert } from "react-bootstrap";
import client from "../service/client";
import { useUser } from "../context/UserContext";

export default function Register() {
    const { login } = useUser
    const { 
        register,
        handleSubmit,
        formState: {errors},
        setError
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await client.post("/auth/register", data);
            login(response.data)
        } catch (error) {
            console.error("Error en el registro:", error);
            setError('root', { 
                message: 'No se pudo registrar el correo o username'
            })
        }
    };
    
    return (
        <Container className="mt-5" style={{ maxWidth: '400px' }}>
            <h2 className="mb-4 text-center">Registro</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Ingresa tu correo"
                    {...register('email', { required: 'El correo es obligatorio' })}
                />
                {errors.email && (
                    <Form.Text className="text-danger">{errors.email.message}</Form.Text>
                )}
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingresa un username"
                    {...register('username', { required: 'El username es obligatorio' })}
                />
                {errors.username && (
                    <Form.Text className="text-danger">{errors.username.message}</Form.Text>
                )}
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Tu contraseña"
                    {...register('password', { required: 'La contraseña es obligatoria' })}
                />
                {errors.password && (
                    <Form.Text className="text-danger">{errors.password.message}</Form.Text>
                )}
                </Form.Group>

                {errors.root && <Alert variant="danger">{errors.root.message}</Alert>}

                <div className="d-grid">
                <Button variant="success" type="submit">
                    Registrarse
                </Button>
                </div>
            </Form>
        </Container>
    );
}