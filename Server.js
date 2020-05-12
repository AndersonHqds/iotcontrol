const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

class Server {
  static PORT = 3001;

  constructor() {
    this.createApp();
    this.config();
    this.listen();
  }

  createApp() {
    try {
      this.app = express();
      this.app.use(cors());
      this.app.use(bodyParser.urlencoded({ extended: false }));
      this.app.use(bodyParser.json());
      this.app.use(express.static(__dirname + '/../public'));
    } catch (error) {
      console.log(error);
    }
  }

  config() {
    try {
      this.port = process.env.PORT || Server.PORT;
    } catch (error) {
      console.log(error);
    }
  }

  listen() {
    try {
      this.app.listen(this.port, () => {
        console.log(`Express server is running on localhost:${this.port}`);
      });
    } catch (error) {
      console.log(error);
    }
  }

  getApp() {
    return this.app;
  }
}

module.exports = { Server };
