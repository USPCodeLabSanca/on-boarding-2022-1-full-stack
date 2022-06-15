const express = require("express");
const mongoose = require("mongoose");
var morgan = require('morgan')
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

// app.use(require("./routes/User")); -> exemplo da monitoria
app.use(require("./routes/Board"));
app.use(require("./routes/Card"));
app.use(require("./routes/CardList"));
app.use(require('./routes/auth.router'))
const PORT = 5300;

mongoose.connect(process.env.CONN_STR, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    app.listen(PORT, () => {
        console.log(`App listening at http://localhost:${PORT}`);
    });
});
