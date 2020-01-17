const sha=require('sha256')

class Block{
  constructor(index,timestamp,data,prevHash){
    this.index=index;
    this.timestamp=timestamp;
    this.data=data;
    this.prevHash=prevHash;
    this.thisHash=sha(
      this.index+this.timestamp+this.data+this.prevHash
    )
  }
}

const createGenesisBlock=()=>new Block(0,Date.now(),'Genisis Block',0)

const nextBlock=(prevBlock,data)=>
 new Block(prevBlock.index+1,Date.now(),data,prevBlock.thisHash)


let createBlockChain=num=>{
  const blockChain=[createGenesisBlock()];
  let prevBlock=blockChain[0];

  for(let i=1; i<num; i+=1){
    const blockToAdd=nextBlock(prevBlock ,`This is block #${i}`);
    blockChain.push(blockToAdd);
    prevBlock=blockToAdd;
  }
console.log(blockChain)
}

const lengthToCreate=11;

createBlockChain(lengthToCreate)



