const express = require("express");
const cors = require('cors');
const exphbs = require("express-handlebars");
const dbService = require('./src/services/dbService')
const websiteRoute = require('./src/routes/websiteRoute');
const apiRoute = require("./src/api/api.route");

const app = express();


app.engine("handlebars", exphbs.engine({
  layoutsDir: __dirname + '/src/views/nonexistent_layouts', 
  defaultLayout: false
}));
app.set("view engine", "handlebars");
app.set("views", "./src/views");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', websiteRoute);
app.use("/api", apiRoute);


dbService.connectAndCreateDatabase();


app.listen((process.env.PORT || 3000), () => {
  console.log(`Server is running on port http://localhost:3000`);
});
