import React from "react";
import { Button, Button2 } from "../Button";
import { Col, Row } from "../Grid";
import { ListItem } from "../List";


const Results = props => {
  return(
    <ListItem id={props.id}>
      <Row>
        <Col size="10">
          <h5 className="book-title">{props.title}</h5>
          <h6>Written by:&nbsp;
            <span className="book-authors">
              {(props.authors.length >= 1) ? props.authors.join(", ") : "N/A"}
            </span>
          </h6>
        </Col>

        <Col size="2">
          <Button colors={"right " + props.btnColors} handleClickEvent={props.handleClickEvent}>
            {props.btnLabel}
          </Button>

          <Button2 colors="light-blue lighten-1 right" link={props.link}>
            View
          </Button2>
        </Col>
      </Row>

      <Row>
        <Col size="3">
          <img className="book-image" src={props.image} alt={props.title} />
        </Col>

        <Col size="9">
          <p className="book-image">{props.description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Results;