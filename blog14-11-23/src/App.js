import './App.css';
import React from "react";
import { Component } from "react";
import Categories from "./Categories";
import Blogs from "./Blogs";
import Header from "./Header";
import { Col, Container, Row } from "reactstrap";



export default class App extends Component {
  state = {
    currentCategory: "",
    blogs: []
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getBlogs(category.id)
  };

  getBlogs = (categoryId) => {
    let url = "http://localhost:3000/blogs";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ blogs: data }))
  };

  componentDidMount() {
    this.getBlogs();
  }
  addToCart = (blog) => {
    let newBlog = this.state.blogs;

    var addedItem = newBlog.find((c) => c.id === blog.id);

    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newBlog.push({ blog: blog, quantity: 1 });
    }
    this.setState({ blogs: newBlog });
  };
  editBlog = (blog) => {
    this.setState({ editBlog: blog, modal: true })
    console.log(blog);

  }
  updateBlog = () => {
    const { editBlog, blogs } = this.state;
    const updatedBlogs = this.state.blogs.map((blog) => {
      return (blog.id === editBlog.id ? { ...blog, title: editBlog.title, content: editBlog.content } : blog)
    })
    this.setState({ blogs: updatedBlogs, modal: false, editBlog: null })

  }
  render() {
    return (

      <Container>
        <Header></Header>
        <Row>
          <Col xs="3">
            <Categories
              changeCategory={this.changeCategory}
              currentCategory={this.state.currentCategory}
            />
          </Col>
          <Col xs="9">
            <Blogs
              addToCart={this.addToCart}
              blogs={this.state.blogs}
              currentCategory={this.state.currentCategory}
              editBlog={this.editBlog}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}