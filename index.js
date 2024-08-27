const express = require('express');
const app = express();


app.get("/", (req, res) => {
    res.send("<h1>server is started</h1>");
});

app.get("/api/login", (req, res) => {
    const list = [
        {
            id: 1,
            name: "ajay",
            address: "baxipalli"
        },
        {
            id: 2,
            name: "senkar",
            address: "venkatraipur"
        },
        {
            id: 3,
            name: "harish",
            address: "gopal pur"
        },
        {
          id: 4,
          name: "naveen",
          address: "gopal pur"
      },
      {
        id: 5,
        name: "harish.B",
        address: "gopal pur"
    },
    {
      id: 6,
      name: "chandu",
      address: "gopal pur"
  },
    ];
    res.send(list);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`server is started on port: ${PORT}`);
});


// chatgpt 

// const express = require('express');
// const axios = require('axios');

// const app = express();

// app.get("/", (req, res) => {
//    res.send("<h1>Server is started</h1>");
// });

// app.get("/api/items", async (req, res) => {
//    try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//       res.json(response.data);
//    } catch (error) {
//       res.status(500).send("Error fetching data");
//    }
// });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Server is started on port: ${PORT}`);
// });
