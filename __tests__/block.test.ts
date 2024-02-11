import { describe, test, expect, beforeAll } from '@jest/globals';
import Block from '../src/lib/block';
import BlockInfo from '../src/lib/blockInfo';

describe("Block tests", () => {

  const exampleDifficulty = 0;
  const exampleMiner = "silvio";
  let genesis: Block;

  beforeAll(()=>{
    genesis = new Block({
      data:"Genesis Block"
    } as Block);
  })

  test('Should be valid',() => {
    const block = new Block({
      index:1,
      previousHash:genesis.hash, 
      data:"Block 2"
    } as Block);

    block.mine(exampleDifficulty,exampleMiner);

    const valid = block.isValid(genesis.hash,genesis.index,exampleDifficulty);
    expect(valid.success).toBeTruthy();
  })

  test('Should create from block info',() => {
    const block = Block.fromBlockInfo({
      data: "Block 2",
      difficulty: exampleDifficulty,
      feePerTx: 1,
      index: 1,
      maxDifficulty: 62,
      previousHash: genesis.hash
    } as BlockInfo);

    block.mine(exampleDifficulty,exampleMiner);

    const valid = block.isValid(genesis.hash,genesis.index,exampleDifficulty);
    expect(valid.success).toBeTruthy();
  })

  test('Should NOT be valid (fallbacks)',() => {
    const block = new Block();
    const valid = block.isValid(genesis.hash,genesis.index,exampleDifficulty);
    expect(valid.success).toBeFalsy();
  })

  test('Should NOT be valid (previous hash)',() => {
    const block = new Block({
      index:1,
      previousHash:"abc", 
      data:"Block 2"
    } as Block);
    const valid = block.isValid(genesis.hash,genesis.index,exampleDifficulty);
    expect(valid.success).toBeFalsy();
  })

  test('Should NOT be valid (timestamp)',() => {
    const block = new Block({
      index:1,
      previousHash:genesis.hash, 
      data:"Block 2"
    } as Block);
    block.timestamp = -1;
    block.hash = block.getHash();
    const valid = block.isValid(genesis.hash,genesis.index,exampleDifficulty);
    expect(valid.success).toBeFalsy();
  })

  test('Should NOT be valid (empty hash)',() => {
    const block = new Block({
      index:1,
      previousHash:genesis.hash, 
      data:"Block 2"
    } as Block);

    block.mine(exampleDifficulty, exampleMiner);

    block.hash = "";

    const valid = block.isValid(genesis.hash,genesis.index,exampleDifficulty);
    expect(valid.success).toBeFalsy();
  })

  test('Should NOT be valid (no mined)',() => {
    const block = new Block({
      index:1,
      previousHash:genesis.hash, 
      data:"Block 2"
    } as Block);

    const valid = block.isValid(genesis.hash,genesis.index,exampleDifficulty);
    expect(valid.success).toBeFalsy();
  })

  test('Should NOT be valid (data)',() => {
    const block = new Block({
      index:1,
      previousHash:genesis.hash, 
      data:""
    } as Block);
    const valid = block.isValid(genesis.hash,genesis.index,exampleDifficulty);
    expect(valid.success).toBeFalsy();
  })

  test('Should NOT be valid (index)',() => {
    const block = new Block({
      index:-1,
      previousHash:genesis.hash, 
      data:"Block 2"
    } as Block);
    const valid = block.isValid(genesis.hash,genesis.index,exampleDifficulty);
    expect(valid.success).toBeFalsy();
  })

})


// 06-addBlock, Fallback e Casting
// import { describe, test, expect, beforeAll } from '@jest/globals';
// import Block from '../src/lib/block';

// describe("Block tests", () => {

//   let genesis: Block;

//   beforeAll(()=>{
//     genesis = new Block({
//       data:"Genesis Block"
//     } as Block);
//   })

//   test('Should be valid',() => {
//     const block = new Block({
//       index:1,
//       previousHash:genesis.hash, 
//       data:"Block 2"
//     } as Block);
//     const valid = block.isValid(genesis.hash,genesis.index);
//     expect(valid.success).toBeTruthy();
//   })

//   test('Should NOT be valid (fallbacks)',() => {
//     const block = new Block();
//     const valid = block.isValid(genesis.hash,genesis.index);
//     expect(valid.success).toBeFalsy();
//   })

//   test('Should NOT be valid (previous hash)',() => {
//     const block = new Block({
//       index:1,
//       previousHash:"abc", 
//       data:"Block 2"
//     } as Block);
//     const valid = block.isValid(genesis.hash,genesis.index);
//     expect(valid.success).toBeFalsy();
//   })

//   test('Should NOT be valid (timestamp)',() => {
//     const block = new Block({
//       index:1,
//       previousHash:genesis.hash, 
//       data:"Block 2"
//     } as Block);
//     block.timestamp = -1;
//     block.hash = block.getHash();
//     const valid = block.isValid(genesis.hash,genesis.index);
//     expect(valid.success).toBeFalsy();
//   })

//   test('Should NOT be valid (hash)',() => {
//     const block = new Block({
//       index:1,
//       previousHash:genesis.hash, 
//       data:"Block 2"
//     } as Block);
//     block.hash = "";
//     const valid = block.isValid(genesis.hash,genesis.index);
//     expect(valid.success).toBeFalsy();
//   })

//   test('Should NOT be valid (data)',() => {
//     const block = new Block({
//       index:1,
//       previousHash:genesis.hash, 
//       data:""
//     } as Block);
//     const valid = block.isValid(genesis.hash,genesis.index);
//     expect(valid.success).toBeFalsy();
//   })

//   test('Should NOT be valid (index)',() => {
//     const block = new Block({
//       index:-1,
//       previousHash:genesis.hash, 
//       data:"Block 2"
//     } as Block);
//     const valid = block.isValid(genesis.hash,genesis.index);
//     expect(valid.success).toBeFalsy();
//   })

// })


// 04-Classe Validation
// import { describe, test, expect, beforeAll } from '@jest/globals';
// import Block from '../src/lib/block';

// describe("Block tests", () => {

//   let genesis: Block;

//   beforeAll(()=>{
//     genesis = new Block(0, "", "Genesis Block");
//   })

//   test('Should be valid',() => {
//     const block = new Block(1,genesis.hash,"block 2");
//     const valid = block.isValid(genesis.hash,genesis.index);
//     //expect(valid).toEqual(true);
//     expect(valid.success).toBeTruthy();
//   })

//   test('Should NOT be valid (previous hash)',() => {
//     const block = new Block(1,"abc","block 2");
//     const valid = block.isValid(genesis.hash,genesis.index);
//     expect(valid.success).toBeFalsy();
//   })

//   test('Should NOT be valid (timestamp)',() => {
//     const block = new Block(1,genesis.hash,"block 2");
//     block.timestamp = -1;
//     block.hash = block.getHash();
//     const valid = block.isValid(genesis.hash,genesis.index);
//     expect(valid.success).toBeFalsy();
//   })

//   test('Should NOT be valid (hash)',() => {
//     const block = new Block(1,genesis.hash,"block 2");
//     block.hash = "";
//     const valid = block.isValid(genesis.hash,genesis.index);
//     expect(valid.success).toBeFalsy();
//   })

//   test('Should NOT be valid (data)',() => {
//     const block = new Block(1,genesis.hash,"");
//     const valid = block.isValid(genesis.hash,genesis.index);
//     expect(valid.success).toBeFalsy();
//   })

//   test('Should NOT be valid (index)',() => {
//     const block = new Block(-1,genesis.hash,"block 2");
//     const valid = block.isValid(genesis.hash,genesis.index);
//     expect(valid.success).toBeFalsy();
//   })

// })


// 03-Cadeia criptografica
// import { describe, test, expect, beforeAll } from '@jest/globals';
// import Block from '../src/lib/block';

// describe("Block tests", () => {

//   let genesis: Block;

//   beforeAll(()=>{
//     genesis = new Block(0, "", "Genesis Block");
//   })

//   test('Should be valid',() => {
//     const block = new Block(1,genesis.hash,"block 2");
//     const valid = block.isValid(genesis.hash,genesis.index);
//     //expect(valid).toEqual(true);
//     expect(valid).toBeTruthy();
//   })

//   test('Should NOT be valid (previous hash)',() => {
//     const block = new Block(1,"abc","block 2");
//     const valid = block.isValid(genesis.hash,genesis.index);
//     expect(valid).toBeFalsy();
//   })

//   test('Should NOT be valid (timestamp)',() => {
//     const block = new Block(1,genesis.hash,"block 2");
//     block.timestamp = -1;
//     block.hash = block.getHash();
//     const valid = block.isValid(genesis.hash,genesis.index);
//     expect(valid).toBeFalsy();
//   })

//   test('Should NOT be valid (hash)',() => {
//     const block = new Block(1,genesis.hash,"block 2");
//     block.hash = "";
//     const valid = block.isValid(genesis.hash,genesis.index);
//     expect(valid).toBeFalsy();
//   })

//   test('Should NOT be valid (data)',() => {
//     const block = new Block(1,genesis.hash,"");
//     const valid = block.isValid(genesis.hash,genesis.index);
//     expect(valid).toBeFalsy();
//   })

//   test('Should NOT be valid (index)',() => {
//     const block = new Block(-1,genesis.hash,"block 2");
//     const valid = block.isValid(genesis.hash,genesis.index);
//     expect(valid).toBeFalsy();
//   })

// })


// 02-Hash do Bloco
// import { describe, test, expect } from '@jest/globals';
// import Block from '../src/lib/block';

// describe("Block tests", () => {

//   test('Should be valid',() => {
//     const block = new Block(1,"abc","block 2");
//     const valid = block.isValid();
//     //expect(valid).toEqual(true);
//     expect(valid).toBeTruthy();
//   })

//   test('Should NOT be valid (previous hash)',() => {
//     const block = new Block(1,"","block 2");
//     const valid = block.isValid();
//     expect(valid).toBeFalsy();
//   })

//   test('Should NOT be valid (timestamp)',() => {
//     const block = new Block(1,"abc","block 2");
//     block.timestamp = -1;
//     const valid = block.isValid();
//     expect(valid).toBeFalsy();
//   })

//   test('Should NOT be valid (hash)',() => {
//     const block = new Block(1,"abc","block 2");
//     block.hash = "";
//     const valid = block.isValid();
//     expect(valid).toBeFalsy();
//   })

//   test('Should NOT be valid (data)',() => {
//     const block = new Block(1,"abc","");
//     const valid = block.isValid();
//     expect(valid).toBeFalsy();
//   })

//   test('Should NOT be valid (index)',() => {
//     const block = new Block(-1,"abc","block 2");
//     const valid = block.isValid();
//     expect(valid).toBeFalsy();
//   })

// })