import React, {useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Card } from 'react-bootstrap';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);


useEffect(async () => {
const response = await fetch(url);
const data = await response.json();
const [item] = data.results;
setData(item);
setLoading(false);
}, []);

return {data, loading};
}

export default() => {
  const {data, loading} = useFetch('https://randomuser.me/api/')
  

return (
  <div className='center'>
    <p>Reload the page to get another random user</p>
    {loading ? <div style={{fontSize: '8rem'}} ><Spinner style={{width: '8rem', height: '8rem'}} animation="grow" /></div> : 
    <div> 
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.picture.large} />
      <Card.Body style={{ backgroundColor: '#333', color: '#fff' }}>
        <Card.Title>
          <strong>{data.name.title}. {data.name.first} {data.name.last} </strong>
        </Card.Title>
        <Card.Text>
          Gender: {data.gender} <br/> <hr/>
          Age: {data.dob.age} <br/> <hr/>
          Location: {data.location.country} <br/> <hr/>
          Email: {data.email} <br/> 
        </Card.Text>
      </Card.Body>
    </Card>
     
      </div>}
    
  </div>
);
};
