import { describe, test, expect, jest } from '@jest/globals';
import Blockchain from '../src/lib/blockchain';
import Block from '../src/lib/block';

jest.mock('../src/lib/block');

describe("Blockchain tests", () => {

  test('Should be has genesis blocks',() => {
    const blockchain = new Blockchain();
    expect(blockchain.blocks.length).toEqual(1);
  })

  test('Should be valid (genesis)',() => {
    const blockchain = new Blockchain();
    expect(blockchain.isValid().success).toEqual(true);
  })

  test('Should be valid (two blocks)',() => {
    const blockchain = new Blockchain();
    blockchain.addBlock(new Block({
      index:1,
      previousHash:blockchain.blocks[0].hash, 
      data:"Block 2"
    } as Block));
    expect(blockchain.isValid().success).toEqual(true);
  })

  test('Should NOT be valid',() => {
    const blockchain = new Blockchain();
    blockchain.addBlock(new Block({
      index:1,
      previousHash:blockchain.blocks[0].hash, 
      data:"Block 2"
    } as Block));
    blockchain.blocks[1].index = -1;
    expect(blockchain.isValid().success).toEqual(false);
  })

  test('Should add block',() => {
    const blockchain = new Blockchain();
    const result = blockchain.addBlock(new Block({
      index:1,
      previousHash:blockchain.blocks[0].hash, 
      data:"Block 2"
    } as Block));
    // console.log(result.message);
    expect(result.success).toEqual(true);
  })

  test('Should get block',() => {
    const blockchain = new Blockchain();
    const block = blockchain.getBlock(blockchain.blocks[0].hash);
    expect(block).toBeTruthy();
  })

  test('Should NOT add block',() => {
    const blockchain = new Blockchain();
    const block = new Block({
      index:-1,
      previousHash:blockchain.blocks[0].hash, 
      data:"Block 2"
    } as Block)
    const result = blockchain.addBlock(block);
    expect(result.success).toEqual(false);
  })

  test('Should get next block info', () => {
    const blockchain = new Blockchain();
    const info = blockchain.getNextBlock();
    expect(info.index).toEqual(1);
  })

})

// 06-addBlock, Fallback e Casting
// import { describe, test, expect } from '@jest/globals';
// import Blockchain from '../src/lib/blockchain';
// import Block from '../src/lib/block';

// describe("Blockchain tests", () => {

//   test('Should be has genesis blocks',() => {
//     const blockchain = new Blockchain();
//     expect(blockchain.blocks.length).toEqual(1);
//   })

//   test('Should be valid (genesis)',() => {
//     const blockchain = new Blockchain();
//     expect(blockchain.isValid().success).toEqual(true);
//   })

//   test('Should be valid (two blocks)',() => {
//     const blockchain = new Blockchain();
//     blockchain.addBlock(new Block({
//       index:1,
//       previousHash:blockchain.blocks[0].hash, 
//       data:"Block 2"
//     } as Block));
//     expect(blockchain.isValid().success).toEqual(true);
//   })

//   test('Should NOT be valid',() => {
//     const blockchain = new Blockchain();
//     blockchain.addBlock(new Block({
//       index:1,
//       previousHash:blockchain.blocks[0].hash, 
//       data:"Block 2"
//     } as Block));
//     blockchain.blocks[1].data = "a transfere 2 para b";
//     expect(blockchain.isValid().success).toEqual(false);
//   })

//   test('Should add block',() => {
//     const blockchain = new Blockchain();
//     const result = blockchain.addBlock(new Block({
//       index:1,
//       previousHash:blockchain.blocks[0].hash, 
//       data:"Block 2"
//     } as Block));
//     // console.log(result.message);
//     expect(result.success).toEqual(true);
//   })

//   test('Should get block',() => {
//     const blockchain = new Blockchain();
//     const block = blockchain.getBlock(blockchain.blocks[0].hash);
//     expect(block).toBeTruthy();
//   })

//   test('Should NOT add block',() => {
//     const blockchain = new Blockchain();
//     const block = new Block({
//       index:-1,
//       previousHash:blockchain.blocks[0].hash, 
//       data:"Block 2"
//     } as Block)
//     const result = blockchain.addBlock(block);
//     expect(result.success).toEqual(false);
//   })

// })

// 05-Blockchain server
// import { describe, test, expect } from '@jest/globals';
// import Blockchain from '../src/lib/blockchain';
// import Block from '../src/lib/block';

// describe("Blockchain tests", () => {

//   test('Should be has genesis blocks',() => {
//     const blockchain = new Blockchain();
//     expect(blockchain.blocks.length).toEqual(1);
//   })

//   test('Should be valid (genesis)',() => {
//     const blockchain = new Blockchain();
//     expect(blockchain.isValid().success).toEqual(true);
//   })

//   test('Should be valid (two blocks)',() => {
//     const blockchain = new Blockchain();
//     blockchain.addBlock(new Block(1,blockchain.blocks[0].hash, "Block 2"));
//     expect(blockchain.isValid().success).toEqual(true);
//   })

//   test('Should NOT be valid (two blocks)',() => {
//     const blockchain = new Blockchain();
//     blockchain.addBlock(new Block(1,blockchain.blocks[0].hash, "Block 2"));
//     blockchain.blocks[1].data = "a transfere 2 para b";
//     expect(blockchain.isValid().success).toEqual(false);
//   })

//   test('Should add block',() => {
//     const blockchain = new Blockchain();
//     const result = blockchain.addBlock(new Block(1,blockchain.blocks[0].hash, "Block 2"));
//     // console.log(result.message);
//     expect(result.success).toEqual(true);
//   })

//   test('Should get block',() => {
//     const blockchain = new Blockchain();
//     const block = blockchain.getBlock(blockchain.blocks[0].hash);
//     expect(block).toBeTruthy();
//   })

//   test('Should NOT add block',() => {
//     const blockchain = new Blockchain();
//     const block = new Block(-1,blockchain.blocks[0].hash,"Block 2")
//     const result = blockchain.addBlock(block);
//     expect(result.success).toEqual(false);
//   })

// })


// 04-Classe Validation
// import { describe, test, expect } from '@jest/globals';
// import Blockchain from '../src/lib/blockchain';
// import Block from '../src/lib/block';

// describe("Blockchain tests", () => {

//   test('Should be has genesis blocks',() => {
//     const blockchain = new Blockchain();
//     expect(blockchain.blocks.length).toEqual(1);
//   })

//   test('Should be valid (genesis)',() => {
//     const blockchain = new Blockchain();
//     expect(blockchain.isValid().success).toEqual(true);
//   })

//   test('Should be valid (two blocks)',() => {
//     const blockchain = new Blockchain();
//     blockchain.addBlock(new Block(1,blockchain.blocks[0].hash, "Block 2"));
//     expect(blockchain.isValid().success).toEqual(true);
//   })

//   test('Should NOT be valid (two blocks)',() => {
//     const blockchain = new Blockchain();
//     blockchain.addBlock(new Block(1,blockchain.blocks[0].hash, "Block 2"));
//     blockchain.blocks[1].data = "a transfere 2 para b";
//     expect(blockchain.isValid().success).toEqual(false);
//   })

//   test('Should add block',() => {
//     const blockchain = new Blockchain();
//     const result = blockchain.addBlock(new Block(1,blockchain.blocks[0].hash, "Block 2"));
//     // console.log(result.message);
//     expect(result.success).toEqual(true);
//   })

//   test('Should NOT add block',() => {
//     const blockchain = new Blockchain();
//     const block = new Block(-1,blockchain.blocks[0].hash,"Block 2")
//     const result = blockchain.addBlock(block);
//     expect(result.success).toEqual(false);
//   })

// })




// 03-Cadeia Criptografica
// import { describe, test, expect } from '@jest/globals';
// import Blockchain from '../src/lib/blockchain';
// import Block from '../src/lib/block';

// describe("Blockchain tests", () => {

//   test('Should be has genesis blocks',() => {
//     const blockchain = new Blockchain();
//     expect(blockchain.blocks.length).toEqual(1);
//   })

//   test('Should be valid (genesis)',() => {
//     const blockchain = new Blockchain();
//     expect(blockchain.isValid()).toEqual(true);
//   })

//   test('Should be valid (two blocks)',() => {
//     const blockchain = new Blockchain();
//     blockchain.addBlock(new Block(1,blockchain.blocks[0].hash, "Block 2"));
//     expect(blockchain.isValid()).toEqual(true);
//   })

//   test('Should NOT be valid (two blocks)',() => {
//     const blockchain = new Blockchain();
//     blockchain.addBlock(new Block(1,blockchain.blocks[0].hash, "Block 2"));
//     blockchain.blocks[1].data = "a transfere 2 para b";
//     expect(blockchain.isValid()).toEqual(false);
//   })

//   test('Should add block',() => {
//     const blockchain = new Blockchain();
//     const result = blockchain.addBlock(new Block(1,blockchain.blocks[0].hash, "Block 2"));
//     expect(result).toEqual(true);
//   })

//   test('Should NOT add block',() => {
//     const blockchain = new Blockchain();
//     const block = new Block(-1,blockchain.blocks[0].hash,"Block 2")
//     const result = blockchain.addBlock(block);
//     expect(result).toEqual(false);
//   })

// })



// 02-Hash do Bloco
// import { describe, test, expect } from '@jest/globals';
// import Blockchain from '../src/lib/blockchain';

// describe("Blockchain tests", () => {

//   test('Should be has genesis blocks',() => {
//     const blockchain = new Blockchain();
//     expect(blockchain.blocks.length).toEqual(1);
//   })

// })