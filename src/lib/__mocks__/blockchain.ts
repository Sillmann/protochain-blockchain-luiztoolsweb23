import Block from './block';
import Validation from '../validation';
import BlockInfo from '../blockInfo';

/**
 * Mocked blockchain class
 */
export default class Blockchain {
  blocks: Block[];
  nextIndex : number = 0;
  static readonly DIFFICULTY_FACTOR = 5;  
  static readonly MAX_DIFFICULTY = 62;  

  /**
   * Create a new mocked blockchain
   */
  constructor() {
    this.blocks = [new Block({
      index: 0,
      hash: "abc",
      previousHash:"",
      data:"Genesis Block",
      timestamp: Date.now()
    } as Block)];
  }

  getLastBLock(): Block {
    return this.blocks[this.blocks.length -1];
  }

  getDifficulty(): number {
    return Math.ceil(this.blocks.length / Blockchain.DIFFICULTY_FACTOR);
  }

  addBlock(block: Block) :Validation {

    if (block.index < 0) return new Validation(false, "Invalid mock block");

    this.blocks.push(block);
    this.nextIndex++;

    return new Validation();
  }

  getBlock(hash: string) : Block | undefined {
    return this.blocks.find(b => b.hash === hash);
  }

  isValid(): Validation {
    return new Validation();
  }

  getFeePerTx() : number {
    return 1;
  }

  getNextBlock() : BlockInfo {
    const data = new Date().toString();
    const difficulty = this.getDifficulty();
    const previousHash = this.getLastBLock().hash;
    const index = this.blocks.length;
    const feePerTx = this.getFeePerTx();
    const maxDifficulty = Blockchain.MAX_DIFFICULTY;
    return {
      data: new Date().toString(),
      difficulty: 0,
      previousHash: this.getLastBLock().hash,
      index: 1,
      feePerTx: this.getFeePerTx(),
      maxDifficulty: 62
    } as BlockInfo;
  }

}

