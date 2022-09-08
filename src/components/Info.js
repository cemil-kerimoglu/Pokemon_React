import React from "react";
import { useParams } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const Info = ({ detailedInfo }) => {
  // we destructure the params memberName from the object return from the useParams hook
  const { id, info } = useParams();
  console.log(info);
  console.log(detailedInfo);
  const pokemonOfInterest = detailedInfo.find(
    (pokemon) => pokemon.id === Number(id)
  );
  console.log(pokemonOfInterest);
  // const { name, type, base } = pokemonOfInterest;
  let infoOfInterest = pokemonOfInterest[info];

  if(info === 'name') {
    return (
      <Container>
        <Row>
          <Col>
          <div>
            <h2>
              {info}-details about this Pokemon
            </h2>
              <ListGroup className="pokeDetails">
                  { Object.keys(infoOfInterest).map(key => {
                      return (
                          <ListGroup.Item>{`Name in ${key.charAt(0).toUpperCase() + key.slice(1)}: ${infoOfInterest[key]}`}</ListGroup.Item>
                      );
                  }) }
              </ListGroup>
          </div>
          </Col>
        </Row>
    </Container>
    );
  } else if(info === 'type') {
        return (
            <div>
                <h2>{`The Pokemon ${pokemonOfInterest.name.english} is of the following types:`}</h2>
                <ul>
                    { infoOfInterest.map(type => {
                        return (
                            <li>{type}</li>
                        );
                    }) }
                </ul>
            </div>
        )
    } else if(info === "base") {
        return (
            <div>
                <h2>{`The Pokemon ${pokemonOfInterest.name.english} has the following characteristics:`}</h2>
                <ul>
                    { Object.keys(infoOfInterest).map(characteristic => {
                        return (
                            <li>{`${characteristic}: ${infoOfInterest[characteristic]}`}</li>
                        )
                    }) }
                </ul>
            </div>
        )
    }


};

export default Info;
