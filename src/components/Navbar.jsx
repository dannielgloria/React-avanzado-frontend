import { useUser } from "../context/UserContext";
import './Navbar.css';

export default function Navbar() {
    const { user, logout } = useUser();
    
    return (
        <nav className="navbar">
            <h2>MedioBlog</h2>
            {user ? (
                <div>
                    <span>Bienvenido, {user.username}</span>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <span>No has iniciado sesión</span>
            )}
        </nav>
    );
}