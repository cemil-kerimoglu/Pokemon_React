import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';


const Pokemon = ({ pokemonInfo }) => {
  // we destructure the params memberName from the object return from the useParams hook
  const { id } = useParams();
  console.log(id);
  console.log(pokemonInfo);
  const pokemonOfInterest = pokemonInfo.find(
    (pokemon) => pokemon.id === Number(id)
  );
  console.log(pokemonOfInterest);
  const { name, type, base } = pokemonOfInterest;
  return (
    <Container>
      <Row>
        <Col>
        <div>
          <h2>
            Information about this Pokemon {name.english}
          </h2>
          <ListGroup className="pokeInformation">
            <Link key={id} to="name">
              <ListGroup.Item>Names</ListGroup.Item>
            </Link>
            <Link key={id} to="type">
              <ListGroup.Item>Types</ListGroup.Item>
            </Link>
            <Link key={id} to="base">
              <ListGroup.Item>Bases</ListGroup.Item>
            </Link>
          </ListGroup>
          <Outlet />
        </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Pokemon;
