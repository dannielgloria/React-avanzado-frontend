import { useUser } from "../context/UserContext";

export default function ContenidoPrivado() {
    const { user } = useUser();

    if (!user) {
        return <p>Debes iniciar sesión para ver este contenido.</p>;
    }
    
    return (
        <div>
            <h2>Contenido Privado</h2>
            <p>¡Bienvenido al contenido exclusivo, {user.username}!</p>
            <h3>#0821TIYG21</h3>
        </div>
    );
}