// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'blue-app',     // Application name
      script: './app.js',     // Script file to be executed
      instances: 3,           // Number of instances to run in cluster mode. Setting to 0 will automatically create instances based on the number of CPU cores.
      exec_mode: 'cluster',   // Run in cluster mode (creates multiple processes to distribute traffic. The alternative is 'fork' mode for a single process).
      env: {
        NODE_ENV: 'production',
        PORT: 3000,            // All instances will run on the same port.
        LANDING: 'indexblue'
      }
    }
  ]
};
