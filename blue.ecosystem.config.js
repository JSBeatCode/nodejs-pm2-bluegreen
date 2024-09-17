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
      },
      wait_ready: true, // Wait for the application to be in 'ready' state. The app must call `process.send('ready')` for PM2 to consider the instance ready. This ensures the application is fully ready before receiving requests.
      listen_timeout: 50000, // Maximum time (ms) PM2 will wait for the 'ready' signal. Waits for 50,000ms (50 seconds) for the 'ready' signal; if not received, the application will be restarted.
      kill_timeout: 5000  // Time (ms) PM2 will wait before forcefully killing a process. Allows 5,000ms (5 seconds) to finish existing requests before forcefully terminating the process.
    }
  ]
};
