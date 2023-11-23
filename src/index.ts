fetch('http://localhost:3000/Users/create', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'yourValue',
    password: 'yourOtherValue',
  }),
});

