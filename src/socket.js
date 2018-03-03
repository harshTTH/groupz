import io from 'socket.io-client';

const socket = io('http://localhost:3000/api/members');

export default socket;
