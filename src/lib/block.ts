import sha256 from 'crypto-js/sha256';
import Validation from './validation';

/**
 * Block class
 */
export default class Block {
  index: number;
  hash: string;
  timestamp: number;
  previousHash: string;
  data: string;

  /**
   * Create a new block
   * @param index The block index in blockchain
   * @param previousHash The previous block hash
   * @param data The block data
   */
  constructor(index: number, 
              previousHash: string,
              data: string){
    this.index = index;
    this.timestamp = Date.now();
    this.previousHash = previousHash;
    this.data = data;
    this.hash = this.getHash();
  }

  getHash(): string {
    return sha256(this.index + this.data + this.timestamp + this.previousHash).toString();
  }
  
  /**
   * Validates the block
   * @param previousHash 
   * @param previousIndex 
   * @returns Returns if the block is valid
   */
  isValid(previousHash: string, previousIndex: number):Validation {
    if (previousIndex !== this.index -1) return new Validation(false,"Invalid index.");
    if (this.hash !== this.getHash()) return new Validation(false,"Invalid hash.");
    if (!this.data) return new Validation(false,"Invalid data.");
    if (this.timestamp < 1) return new Validation(false,"Invalid timestamp.");
    if (this.previousHash !== previousHash) return new Validation(false,"Invalid previous hash.");
    return new Validation();
  }
}

// 04-Classe Validation
// import sha256 from 'crypto-js/sha256';
// import Validation from './validation';

// /**
//  * Block class
//  */
// export default class Block {
//   index: number;
//   hash: string;
//   timestamp: number;
//   previousHash: string;
//   data: string;

//   /**
//    * Create a new block
//    * @param index The block index in blockchain
//    * @param previousHash The previous block hash
//    * @param data The block data
//    */
//   constructor(index: number, 
//               previousHash: string,
//               data: string){
//     this.index = index;
//     this.timestamp = Date.now();
//     this.previousHash = previousHash;
//     this.data = data;
//     this.hash = this.getHash();
//   }

//   getHash(): string {
//     return sha256(this.index + this.data + this.timestamp + this.previousHash).toString();
//   }
  
//   /**
//    * Validates the block
//    * @param previousHash 
//    * @param previousIndex 
//    * @returns Returns if the block is valid
//    */
//   isValid(previousHash: string, previousIndex: number):Validation {
//     if (previousIndex !== this.index -1) return new Validation(false,"Invalid index.");
//     if (this.hash !== this.getHash()) return new Validation(false,"Invalid hash.");
//     if (!this.data) return new Validation(false,"Invalid data.");
//     if (this.timestamp < 1) return new Validation(false,"Invalid timestamp.");
//     if (this.previousHash !== previousHash) return new Validation(false,"Invalid previous hash.");
//     return new Validation();
//   }
// }

// 03-Cadeia Criptografica
// import sha256 from 'crypto-js/sha256';

// /**
//  * Block class
//  */
// export default class Block {
//   index: number;
//   hash: string;
//   timestamp: number;
//   previousHash: string;
//   data: string;

//   /**
//    * Create a new block
//    * @param index The block index in blockchain
//    * @param previousHash The previous block hash
//    * @param data The block data
//    */
//   constructor(index: number, 
//               previousHash: string,
//               data: string){
//     this.index = index;
//     this.timestamp = Date.now();
//     this.previousHash = previousHash;
//     this.data = data;
//     this.hash = this.getHash();
//   }

//   getHash(): string {
//     return sha256(this.index + this.data + this.timestamp + this.previousHash).toString();
//   }
  
//   /**
//    * Validates the block
//    * @param previousHash 
//    * @param previousIndex 
//    * @returns Returns true if the block is valid
//    */
//   isValid(previousHash: string, previousIndex: number):boolean {
//     if (previousIndex !== this.index -1) return false;
//     if (this.hash !== this.getHash()) return false;
//     if (!this.data) return false;
//     if (this.timestamp < 1) return false;
//     if (this.previousHash !== previousHash) return false;
//     return true;
//   }
// }


// 02-Hash do Bloco
// import sha256 from 'crypto-js/sha256';

// /**
//  * Block class
//  */
// export default class Block {
//   index: number;
//   hash: string;
//   timestamp: number;
//   previousHash: string;
//   data: string;

//   /**
//    * Create a new block
//    * @param index The block index in blockchain
//    * @param previousHash The previous block hash
//    * @param data The block data
//    */
//   constructor(index: number, 
//               previousHash: string,
//               data: string){
//     this.index = index;
//     this.timestamp = Date.now();
//     this.previousHash = previousHash;
//     this.data = data;
//     this.hash = this.getHash();
//   }

//   getHash(): string {
//     return sha256(this.index + this.data + this.timestamp + this.previousHash).toString();
//   }
  
//   /**
//    * Validates the block
//    * @returns Returns true if the block is valid
//    */
//   isValid():boolean {
//     if (this.index < 0) return false;
//     if (!this.hash) return false;
//     if (!this.data) return false;
//     if (this.timestamp < 1) return false;
//     if (!this.previousHash) return false;
//     return true;
//   }
// }




// 01-Classe inicial
// /**
//  * Block class
//  */
// export default class Block {
//   index: number;
//   hash: string;

//   /**
//    * Create a new block
//    * @param index The block index in blockchain
//    * @param hash  The block hash
//    */
//   constructor(index: number, hash: string){
//     this.index = index;
//     this.hash = hash;
//   }
  
//   /**
//    * Validates the block
//    * @returns Returns true if the block is valid
//    */
//   isValid():boolean {
//     if (this.index < 0) return false;
//     if (!this.hash) return false;
//     return true;
//   }
// }