import React from "react";
import { Link, Outlet } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


// const cageFight = document.querySelector('.cageFight');
//
// document.querySelector('.addPokemonBtn').addEventListener('click', (event) => {
//   let choosenPokemon = event.target.value;
// });
//
// if (choosenPokemon !== '') {
//   cageFight.append(choosenPokemon);
// }

const Pokemons = ({ myPokemons }) => {
  console.log(myPokemons);
  return (
    <>
    <Container>
      <Row>
        <Col className="text-center">
        <div>
          <img className="logo" src="https://www.pngall.com/wp-content/uploads/13/Pokemon-Logo-Background-PNG.png" />
          <h3>Choose your two fighting Pokemons</h3>
            {myPokemons?.map((pokemon, i) => {
              return (
              <ListGroup className="pokeList">
                <Link key={i} to={`pokemon/${pokemon.id}`}>
                  <ListGroup.Item>
                    {pokemon.name.english}
                    <Button className="addPokemonBtn" variant="primary" value="{pokemon.name.english}">Add Pokemon to cage</Button>{' '}
                  </ListGroup.Item>
                </Link>
              </ListGroup>
              );
            })}
          <Outlet />
        </div>
        </Col>
      </Row>
    </Container>
    <div className="cage">
      <p><b>Poke fight</b></p>
      <ul className="cageFight">
        <li>Pokemon 1</li>
        <li>Pokemon 2</li>
      </ul>
    </div>
    </>
  );
};

export default Pokemons;
