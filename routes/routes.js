class Routes {
  constructor(app) {
    this.app = app;
  }

  controlArduino(commands) {
    commands.forEach((command) => console.log(`Running command: ${command.type} with the state: ${command.state}`));
  }

  getData() {
    this.app.post('/controls', (request, response) => {
      try {
        const type = request.body.type;

        if (type === 'arduino') {
          this.controlArduino(request.body.commands);
        }

        response.json(request.body.commands);
      } catch (error) {
        console.log(error);
      }
    });
  }

  getRoutes() {
    this.getData();
  }
}

module.exports = { Routes };
