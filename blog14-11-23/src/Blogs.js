import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardGroup,
    CardTitle,
    Button,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    FormText
} from "reactstrap";

export default class Blogs extends Component {

    state = {
        selectedBlog: null,
        modalOpen: false,
    };

    toggleModal = () => {
        this.setState((state) => ({ modalOpen: !state.modalOpen }));
    };

    showBlogDetails = (blog) => {
        this.setState({ selectedBlog: blog });
        this.toggleModal();

    };

    render() {
        const { blogs } = this.props;
        const { selectedBlog, modalOpen } = this.state;

        return (
            <div>
                <h2>{this.props.currentCategory}</h2>
                <CardGroup>
                    {blogs.map((blog) => (
                        <Col xs="3" key={blog.id}>
                            <Card
                                style={{ marginLeft: "10px", marginRight: "10px" }}
                            >
                                <CardImg
                                    top
                                    width="100%"
                                    src={blog.image}
                                    alt={blog.title}
                                />
                                <CardBody>
                                    <CardTitle tag="h5">{blog.title}</CardTitle>
                                    <CardText>{blog.content}</CardText>

                                    <Button onClick={() => this.showBlogDetails(blog)}>
                                        Card Details
                                    </Button>
                                    <Button className="ml-2" color="info" onClick={() => this.props.editBlog(blog)}>
                                        Edit
                                    </Button>
                                    <Button className="ml-2" color="danger">
                                        Delete
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </CardGroup>

                <Modal isOpen={modalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Blog Details</ModalHeader>
                    <ModalBody>
                        {selectedBlog && (
                            <div>
                                <h3>{selectedBlog.title}</h3>
                                <p>{selectedBlog.content}</p>
                            </div>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggleModal}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>

            </div>
        );
    }
}
