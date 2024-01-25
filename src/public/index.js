// instanciamos el socket desde el cliente, para comunicarse con el servidor
const socket = io();

socket.emit('message', 'Hola me estoy comunicando por websocket');

socket.on('evento_para_socket_individual', data => console.log(data));

socket.on('evento_para_todos_los_socket_menos_este', data => console.log(data));

socket.on('evento_para_todos', data => console.log(data));