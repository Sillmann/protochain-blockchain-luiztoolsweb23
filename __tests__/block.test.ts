import { describe, test, expect, beforeAll } from '@jest/globals';
import Block from '../src/lib/block';

describe("Block tests", () => {

  let genesis: Block;

  beforeAll(()=>{
    genesis = new Block(0, "", "Genesis Block");
  })

  test('Should be valid',() => {
    const block = new Block(1,genesis.hash,"block 2");
    const valid = block.isValid(genesis.hash,genesis.index);
    //expect(valid).toEqual(true);
    expect(valid.success).toBeTruthy();
  })

  test('Should NOT be valid (previous hash)',() => {
    const block = new Block(1,"abc","block 2");
    const valid = block.isValid(genesis.hash,genesis.index);
    expect(valid.success).toBeFalsy();
  })

  test('Should NOT be valid (timestamp)',() => {
    const block = new Block(1,genesis.hash,"block 2");
    block.timestamp = -1;
    block.hash = block.getHash();
    const valid = block.isValid(genesis.hash,genesis.index);
    expect(valid.success).toBeFalsy();
  })

  test('Should NOT be valid (hash)',() => {
    const block = new Block(1,genesis.hash,"block 2");
    block.hash = "";
    const valid = block.isValid(genesis.hash,genesis.index);
    expect(valid.success).toBeFalsy();
  })

  test('Should NOT be valid (data)',() => {
    const block = new Block(1,genesis.hash,"");
    const valid = block.isValid(genesis.hash,genesis.index);
    expect(valid.success).toBeFalsy();
  })

  test('Should NOT be valid (index)',() => {
    const block = new Block(-1,genesis.hash,"block 2");
    const valid = block.isValid(genesis.hash,genesis.index);
    expect(valid.success).toBeFalsy();
  })

})



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