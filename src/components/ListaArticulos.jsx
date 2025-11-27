import React, { useEffect, useState } from "react";
import './ListaArticulos.css'

export default function ListaArticulos() {
    const [articulos, setArticulos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(response => {
            if (!response.ok) throw new Error('Error en la petición');
            return response.json();
        })
        .then(data => setArticulos(data))
        .catch(err => setError(err.message))
        .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) return <p>Cargando artículos...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
    <div className="articulos">
    {articulos.map(art => (
        <div className="card" key={art.id}>
            <h3 className="title">{art.title}</h3>
            <p className="body">{art.body}</p>
        </div>
    ))}
    </div>
  );
}