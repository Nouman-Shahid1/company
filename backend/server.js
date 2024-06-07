// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const dataRoutes = require("./routes/dataRoutes");

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// mongoose;
// mongoose
//   .connect("mongodb://localhost:27017/mernData")
//   .then(() => console.log("MongoDB connected successfully"))
//   .catch((err) => console.log("MongoDB connection error:", err));

// app.use("/api/data", dataRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const dataRoutes = require("./routes/dataRoutes");

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// mongoose;
// mongoose
//   .connect("mongodb://localhost:27017/mernData")
//   .then(() => console.log("MongoDB connected successfully"))
//   .catch((err) => console.log("MongoDB connection error:", err));

// app.use("/api/data", dataRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dataRoutes = require("./routes/dataRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Mongoose connection
mongoose
  .connect("mongodb://localhost:27017/mernData")
  .then(() => console.log("Local MongoDB connected successfully"))
  .catch((err) => console.log("Local MongoDB connection error:", err));

// MongoDB Atlas connection using the native driver
const uri =
  "mongodb+srv://muhammadnoumansha140:l68GyXX01dXm1cFO@cluster0.1evm6vt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to MongoDB Atlas");
  } catch (e) {
    console.error("Connection to MongoDB Atlas failed:", e);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

app.use("/api/data", dataRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
