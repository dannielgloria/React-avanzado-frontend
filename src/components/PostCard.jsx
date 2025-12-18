import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useUser } from "../context/UserContext";
import client from "../service/client";

export default function PostCard({ post, onUpdated }) {
  const { user } = useUser();
  const isOwner = user?.userId === post.user_id._id;

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const isEdited = post.createdAt !== post.updatedAt;

  const handleUpdate = async () => {
    await client.put(`/post/${post._id}`, { title, content });
    setEditing(false);
    onUpdated();
  };

const handleDelete = async () => {
    if (!confirm("¿Deseas eliminar esta publicación?")) return;

    await client.delete(`/post/${post._id}`);
    onUpdated();
};

  return (
    <Card className="mb-3 shadow-sm">

      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <strong>@{post.user_id.username}</strong>
          <div className="d-flex align-items-center gap2 text-muted ">
            <small>
                {new Date(post.createdAt).toLocaleString()}
                {isEdited && " · Editado"}
            </small>
            {isOwner && (
                <Button
                variant="link"
                size="sm"
                className="p-0 text-danger"
                onClick={handleDelete}>
                    <i className="bi bi-trash"></i>
                </Button>
            )}
          </div>
        </div>

        {!editing ? (
          <>
            <Card.Title className="mt-2">{post.title}</Card.Title>
            <Card.Text>{post.content}</Card.Text>

            {isOwner && (
              <Button size="sm" variant="outline-primary" onClick={() => setEditing(true)}>
                Editar
              </Button>
            )}
          </>
        ) : (
          <>
            <Form.Control
              className="mb-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Form.Control
              as="textarea"
              rows={3}
              className="mb-2"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button size="sm" onClick={handleUpdate}>Guardar</Button>{" "}
            <Button size="sm" variant="secondary" onClick={() => setEditing(false)}>
              Cancelar
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
