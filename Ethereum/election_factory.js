import web3 from './web3';
import ElectionFactory from './Build/ElectionFact.json';

const instance = new web3.eth.Contract(
	JSON.parse(ElectionFactory.interface),
    '0x9C8D481f17b3cf9c8C11b516134FD4db1689223C'
);

export default instance; 