# CHAT-APPLICATION

COMPANY : CODTECH IT SOLUTIONS PVT. LTD.

NAME : RAHUL MAURYA

INTERN ID : CT08DA939

DOMAIN : FULL STACK WEB DEVELOPMENT

DURATION : 8 WEEKS

MENTOR : NEELA SANTHOSH KUMAR

# Task Description: CHAT-APPLICATION

#Online visit
 https://chat-qbkz.onrender.com/

# Live Chat Application
This is a simple real-time **Live Chat Application** built with **Node.js, Express**, and **Socket.IO** on the backend, and **HTML, Bootstrap 5**, and **JavaScript** on the frontend. It enables multiple users to join a chat room, send messages, and see messages from others instantly, providing a seamless real-time chatting experience.

## Features
**Real-time communication:** Messages are delivered instantly to all connected users using WebSocket technology powered by Socket.IO.

**User identification:** Users are prompted to enter their name before joining the chat to identify who sends each message.

**Responsive UI:** The frontend uses Bootstrap 5 to ensure the chat interface looks clean and is responsive across devices.

**Auto-scroll:** The chat window automatically scrolls to the newest message to keep the conversation in view.

**1Simple & lightweight:** The app is easy to deploy and requires minimal dependencies, making it ideal for learning or quick prototyping.

## Technology Stack
**Node.js & Express:** For serving static files and running the web server.

**Socket.IO:** Enables real-time bi-directional communication between clients and server.

**HTML + Bootstrap 5:** For building a user-friendly and responsive frontend interface.

**JavaScript:** Handles client-side socket events, \user input, and DOM manipulation.

## How It Works
**Server Setup:**
The backend is powered by Express.js, which serves static files including the HTML, CSS, and client JavaScript files. It also sets up an HTTP server that Socket.IO uses to establish WebSocket connections with clients.

**Connection & Messaging:**
When a user opens the chat page, they are prompted to enter their name. This username is stored in the browser session and used to tag all messages sent from that user. The client then connects to the server via Socket.IO and emits a "chat message" event whenever the user sends a message.

**Broadcasting Messages:**
The server listens for incoming chat messages from any client and immediately broadcasts the message to all connected clients, including the sender. This ensures everyone in the chat room sees all messages in real-time.

**Frontend Display:
On the frontend, incoming messages are dynamically added to the chat window with the sender's name and the message text. The chat container automatically scrolls to show the latest message.

# Outputs

![Image](https://github.com/user-attachments/assets/9e40389f-b853-45a9-af1c-69bd477f075f)


![Image](https://github.com/user-attachments/assets/cdda4015-cd7c-4ae4-92bd-09ff22fd5f83)


![Image](https://github.com/user-attachments/assets/f3a406f5-a4fa-494d-ab54-e00bb19f8877)


![Image](https://github.com/user-attachments/assets/80b87106-11a8-4522-813d-8f57b907e5fc)


![Image](https://github.com/user-attachments/assets/925c152d-b1ac-49ee-8959-af463ca01045)


![Image](https://github.com/user-attachments/assets/59c6a64d-0795-4c8e-be74-1ca90f6bf7ee)
