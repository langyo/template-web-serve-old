import SocketClient from 'wsbash-h5-client';
import config from './initSocket';

let clients = config.enable ? config.list.map(n => new SocketClient(n)) : null;

export default clients;
