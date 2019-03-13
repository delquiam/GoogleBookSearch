import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import Results from "../components/Results";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({
          books: res.data,
          title: "",
          author: "",
          description: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="12">
            <List header="Saved Books">
              {this.state.books.map(book => (
                <Results
                  key={book._id}
                  title={book.title}
                  authors={book.authors}
                  description={book.description}
                  image={book.image}
                  link={book.link}
                  id={book._id}
                  btnColors="grey lighten-1"
                  btnLabel="Delete"
                  handleClickEvent={() => this.deleteBook(book._id)}
                />
              ))}
            </List>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Saved;
