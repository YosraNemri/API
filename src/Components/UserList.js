import React, {useEffect, useState} from 'react'
import UserCard from './UserCard'
import axios from 'axios'
import { Container, Row } from "reactstrap";

function UserList() {
  const [list, setList] = useState ([])
   
  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then (res => setList(res.data))
    .catch(err => console.log(err));

  }, [])
   
    return (
      <> 
      <Container>
      <Row>

             {list.map((user, i) => (
              <UserCard key={i} user={user} />
            ))}
      </Row>
      </Container>
      </>
    );
}

export default UserList
