module.exports = {
  apps: [
    {
      name: 'app',
      script: './app.js',
      instances: 0,
      exec_mode: 'cluster',
      wait_ready: true,
      listen_timeout: 50000,
      kill_timeout: 5000
		//   ,
		//   wait_ready: true, // Wait for the application to be in 'ready' state. The app must call `process.send('ready')` for PM2 to consider the instance ready. This ensures the application is fully ready before receiving requests.
		//   listen_timeout: 50000, // Maximum time (ms) PM2 will wait for the 'ready' signal. Waits for 50,000ms (50 seconds) for the 'ready' signal; if not received, the application will be restarted.
		//   kill_timeout: 5000  // Time (ms) PM2 will wait before forcefully killing a process. Allows 5,000ms (5 seconds) to finish existing requests before forcefully terminating the process.
    }
  ]
}