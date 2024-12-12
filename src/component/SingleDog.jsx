import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

function SingleDog({ dogData }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <>
      {/* Front Side */}
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Card className="card">
              <div className="card-img-wrapper">
                <Card.Img src={dogData.url} alt="Dog" />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="card-title">
                  {dogData.breeds[0]?.name || "Crossbred"}
                </Card.Title>
                <Card.Text className="card-text">
                  <span>
                    <strong>Weight (kg): </strong>
                    {dogData.breeds[0]?.weight.metric || "Unknown"}
                  </span>
                  <span>
                    <strong>Height (cm): </strong>
                    {dogData.breeds[0]?.height.metric || "Unknown"}
                  </span>
                  <span>
                    <strong>Life span: </strong>
                    {dogData.breeds[0]?.life_span || "Unknown"}
                  </span>
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button className="card-button" onClick={handleFlip}>
                    More info
                  </Button>
                  <Button className="card-button">Adopt now</Button>
                </div>
              </Card.Body>
            </Card>
          </div>

          {/* Back Side */}
          <div className="flip-card-back">
            <Card className="card">
              <Card.Body className="d-flex flex-column">
                <Card.Title>
                  More about {dogData.breeds[0]?.name || "This dog"}
                </Card.Title>
                <Card.Text>
                  <p>
                    <strong>Breed for: </strong>
                    {dogData.breeds[0]?.bred_for || "Unknown"}
                  </p>
                  <p>
                    <strong>Temperament: </strong>
                    {dogData.breeds[0]?.temperament || "Unknown"}
                  </p>
                </Card.Text>
                <Button className="card-button" onClick={handleFlip}>
                  Go Back
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleDog;
