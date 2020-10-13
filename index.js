import PKG from './package.json';
import Block from './src/blockchain/block';

const { name, version, description, author } = PKG;
const { genesis } = Block;

//console.log(`${name} ${version} ${description} ${author}`); //alt + 96

/*
//Primer bloque
const block = new Block('07/09/2020', 'pr3v10us-hash', 'h4sh', 'd4t4');
console.log(block.toString());

//Segundo bloque
const block_2 = new Block(Date.now(), genesis.hash, 'h4sh2', 'transaccion1');
console.log(block_2.toString());
*/

const block1 = Block.mine(genesis, 'transact1');
console.log(block1.toString());

const block2 = Block.mine(block1, 'transact2');
console.log(block2.toString());

