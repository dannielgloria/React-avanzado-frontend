import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useUser } from './context/UserContext'
import Login from './pages/Login'
import Register from './pages/Register'
import PostList from './components/PostList'
import CreatePost from './components/CreatePost'
import Navigationbar from './components/Navigationbar'

function App() {
  const { user } = useUser()

  return (
    <BrowserRouter>
      <Navigationbar />
      <Routes>
        <Route path="/" element={!user ? <Login /> : <PostList />} />
        <Route path="/register" element={!user ? <Register /> : <PostList />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
