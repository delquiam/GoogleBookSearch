import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input } from "../components/Form";
import { Button } from "../components/Button";
import Results from "../components/Results";

class Search extends Component {
  state = {
    books: [],
    search: ""
  };

  componentDidMount() {
    this.searchBook("");
  }

  searchBook = query => {
    API.search(query)
      .then(res => this.setState({ books: res.data.items }))
      .catch(err => console.log(err));
  };

  saveBook = book => {
    const title = book.title;
    const author = book.authors;
    API.saveBook(book)
      .then(() => {
        // API.savedBook();
        alert('Saved "' + title + '"');
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBook(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="12">
            <List header="Book Search">
              <ListItem>
                <Input
                  id="search"
                  name="search"
                  // label="Book"
                  size="12"
                  handleInputChange={this.handleInputChange}
                />

                <Row>
                  <Col size="12">
                    <Button
                      colors="deep-blue right"
                      handleClickEvent={this.handleFormSubmit}
                    >
                      Search
                    </Button>
                  </Col>
                </Row>
              </ListItem>
            </List>
          </Col>
        </Row>

        <Row>
          <Col size="12">
            <List header="Search Results">
              {this.state.books.length > 0 ? (
                this.state.books.map(book => (
                  <Results
                    key={book.id}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors || []}
                    description={book.volumeInfo.description}
                    image={
                      book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.thumbnail
                        : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png"
                    }
                    link={book.volumeInfo.infoLink}
                    id={book.id}
                    btnColors="blue lighten-2"
                    btnLabel="Save"
                    handleClickEvent={() =>
                      this.saveBook({
                        title: book.volumeInfo.title,
                        authors: book.volumeInfo.authors || [],
                        description: book.volumeInfo.description,
                        image: book.volumeInfo.imageLinks
                          ? book.volumeInfo.imageLinks.thumbnail
                          : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/387928/book%20placeholder.png",
                        link: book.volumeInfo.infoLink
                      })
                    }
                  />
                ))
              ) : (
                <ListItem></ListItem>
              )}
            </List>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
