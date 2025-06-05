// Import the Express framework
const express = require('express');

// Create an Express app instance
const app = express();

// Create an HTTP server using the Express app
const http = require('http').createServer(app);

// Initialize Socket.IO and bind it to the HTTP server
const io = require('socket.io')(http);

// Serve static files (like index.html, style.css, etc.) from the current directory
app.use(express.static(__dirname));

// Listen for client connections via Socket.IO
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for 'chat message' events from a client
  socket.on('chat message', (msg) => {
    // Broadcast the received message to all connected clients
    io.emit('chat message', msg);
  });

  // Handle client disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server on port 3000
http.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
