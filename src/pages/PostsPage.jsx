import { Container, Row, Col } from "react-bootstrap";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import { useState } from "react"

export default function PostsPage() {
    const [refresh, setRefresh] = useState(false);

    return(
        <Container className="mt-4">
            <Row className=" justify-content-center ">
                <Col md={8} >
                    <CreatePost onCreated={() => setRefresh(!refresh)}/>
                    <PostList key={refresh}/>
                </Col>
            </Row>
        </Container>
    )
}