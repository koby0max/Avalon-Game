import { io } from 'socket.io-client';

const socket = io("https://avalon-backend-cru1.onrender.com"); // your backend URL

export default socket;
// Socket.IO client setup
