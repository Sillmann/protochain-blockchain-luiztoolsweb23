import Block from './block';
import Validation from './validation';

/**
 * Blockchain class
 */
export default class Blockchain {
  blocks: Block[];
  nextIndex : number = 0;

  /**
   * Create a new
   */
  constructor() {
    this.blocks = [new Block(this.nextIndex,"","Genesis Block")];
  }

  getLastBLock(): Block {
    return this.blocks[this.blocks.length -1];
  }

  addBlock(block: Block) :Validation {
    const lastBlock = this.getLastBLock();

    const validation = block.isValid(lastBlock.hash, lastBlock.index);

    if (!validation.success)  
      return new Validation(false,`Invalid block: ${validation.message}`);

    this.blocks.push(block);
    this.nextIndex++;
    return new Validation();
  }

  getBlock(hash: string) : Block | undefined {
    return this.blocks.find(b => b.hash === hash);
  }

  isValid(): Validation {
    for(let i=this.blocks.length - 1; i > 0; i--){
      const currentBlock = this.blocks[i];
      const previousBlock = this.blocks[i-1];
      const validation = currentBlock.isValid(previousBlock.hash, previousBlock.index);
      if (!validation.success) 
        return new Validation(false, `Invalid block #${currentBlock.index}: ${validation.message}`);
    }
    return new Validation();
  }
}

// 05-Blockchain server
// import Block from './block';
// import Validation from './validation';

// /**
//  * Blockchain class
//  */
// export default class Blockchain {
//   blocks: Block[];
//   nextIndex : number = 0;

//   /**
//    * Create a new
//    */
//   constructor() {
//     this.blocks = [new Block(this.nextIndex,"","Genesis Block")];
//   }

//   getLastBLock(): Block {
//     return this.blocks[this.blocks.length -1];
//   }

//   addBlock(block: Block) :Validation {
//     const lastBlock = this.getLastBLock();

//     const validation = block.isValid(lastBlock.hash, lastBlock.index);

//     if (!validation.success)  
//       return new Validation(false,`Invalid block: ${validation.message}`);

//     this.blocks.push(block);
//     this.nextIndex++;
//     return new Validation();
//   }

//   getBlock(hash: string) : Block | undefined {
//     return this.blocks.find(b => b.hash === hash);
//   }

//   isValid(): Validation {
//     for(let i=this.blocks.length - 1; i > 0; i--){
//       const currentBlock = this.blocks[i];
//       const previousBlock = this.blocks[i-1];
//       const validation = currentBlock.isValid(previousBlock.hash, previousBlock.index);
//       if (!validation.success) 
//         return new Validation(false, `Invalid block #${currentBlock.index}: ${validation.message}`);
//     }
//     return new Validation();
//   }
// }

// 04-Classe Validation
// import Block from './block';
// import Validation from './validation';

// /**
//  * Blockchain class
//  */
// export default class Blockchain {
//   blocks: Block[];
//   nextIndex : number = 0;

//   /**
//    * Create a new
//    */
//   constructor() {
//     this.blocks = [new Block(this.nextIndex,"","Genesis Block")];
//   }

//   getLastBLock(): Block {
//     return this.blocks[this.blocks.length -1];
//   }

//   addBlock(block: Block) :Validation {
//     const lastBlock = this.getLastBLock();

//     const validation = block.isValid(lastBlock.hash, lastBlock.index);

//     if (!validation.success)  
//       return new Validation(false,`Invalid block: ${validation.message}`);

//     this.blocks.push(block);
//     this.nextIndex++;
//     return new Validation();
//   }

//   isValid(): Validation {
//     for(let i=this.blocks.length - 1; i > 0; i--){
//       const currentBlock = this.blocks[i];
//       const previousBlock = this.blocks[i-1];
//       const validation = currentBlock.isValid(previousBlock.hash, previousBlock.index);
//       if (!validation.success) 
//         return new Validation(false, `Invalid block #${currentBlock.index}: ${validation.message}`);
//     }
//     return new Validation();
//   }
// }

// 03-Cadeia Criptografica
// import Block from './block';

// /**
//  * Blockchain class
//  */
// export default class Blockchain {
//   blocks: Block[];
//   nextIndex : number = 0;

//   /**
//    * Create a new
//    */
//   constructor() {
//     this.blocks = [new Block(this.nextIndex,"","Genesis Block")];
//   }

//   getLastBLock(): Block {
//     return this.blocks[this.blocks.length -1];
//   }

//   addBlock(block: Block) :boolean {
//     const lastBlock = this.getLastBLock();

//     if (!block.isValid(lastBlock.hash, lastBlock.index)) return false;
//     this.blocks.push(block);
//     this.nextIndex++;
//     return true;
//   }

//   isValid(): boolean {
//     for(let i=this.blocks.length - 1; i > 0; i--){
//       const currentBlock = this.blocks[i];
//       const previousBlock = this.blocks[i-1];
//       const isValid = currentBlock.isValid(previousBlock.hash, previousBlock.index);
//       if (!isValid) return false;
//     }
//     return true;
//   }
// }


// 02-Hash do Bloco
// import Block from './block';

// /**
//  * Blockchain class
//  */
// export default class Blockchain {
//   blocks: Block[];

//   /**
//    * Create a new
//    */
//   constructor() {
//     this.blocks = [new Block(0,"","Genesis Block")];
//   }
// }

// 01-Classe inicial
// import Block from './block';

// /**
//  * Blockchain class
//  */
// export default class Blockchain {
//   blocks: Block[];

//   /**
//    * Create a new
//    */
//   constructor() {
//     this.blocks = [new Block(0,"genesis")];
//   }
// }
