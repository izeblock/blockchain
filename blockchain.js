// Import
const Block = require("./block");

class Blockchain{

    constructor(){
        this.chain= [Block.genesis()]; // Array m. Genesis-Block
    }
}