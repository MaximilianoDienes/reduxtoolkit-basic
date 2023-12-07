import React from 'react'

const UserList = () => {
  const users = [
    {
      "id": 1,
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
      "id": 2,
      "email": "janet.weaver@reqres.in",
      "first_name": "Janet",
      "last_name": "Weaver",
      "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
      "id": 3,
      "email": "emma.wong@reqres.in",
      "first_name": "Emma",
      "last_name": "Wong",
      "avatar": "https://reqres.in/img/faces/3-image.jpg"
    }
  ];

  return (
    <div>
      {
        users.map((user, index) => (
          <div key={index}>
            <h3>{user.first_name} {user.last_name}</h3>
            <h4>{user.email}</h4>
            <img src={user.avatar}></img>
          </div>
        ))
      }
    </div>
  )
}

export default UserList