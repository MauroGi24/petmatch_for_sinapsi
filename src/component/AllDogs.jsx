import SingleDog from "./SingleDog";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { fetchDogData } from '../data/fetch.js'; 

function AllDogs() {
    const [dogData, setDogData] = useState(null);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const getDogData = async () => {
          try {
            const data = await fetchDogData();
            setDogData(data);
          } catch (error) {
            setError(true);
          }
        };
    
        getDogData();
      }, []);
    
      if (error) {
        return <div className="text-error">Errore nel caricamento dei dati. Riprova più tardi.</div>;
      }
    
      if (!dogData) {
        return <div>Caricamento...</div>;
      }
  return (
    <Container className="mt-5">
      <Row>
        {dogData.map((element) => (
          <Col xs={12} md={6} lg={4} xxl={3} className="mb-5">
            <SingleDog dogData={element} />
          </Col>
        ))}  
      </Row>
    </Container>
  );
}

export default AllDogs;