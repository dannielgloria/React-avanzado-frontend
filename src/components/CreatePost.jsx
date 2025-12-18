import { useForm } from "react-hook-form";
import { Card, Button, Form } from "react-bootstrap";
import client from "../service/client";

export default function CreatePost({ onCreated }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    await client.post("/post", data);
    reset();
    onCreated();
  };

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Control
            className="mb-2"
            placeholder="Título"
            {...register("title", { required: true })}
          />
          <Form.Control
            as="textarea"
            rows={3}
            className="mb-2"
            placeholder="¿Qué estás pensando?"
            {...register("content", { required: true })}
          />
          <Button type="submit">Publicar</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
