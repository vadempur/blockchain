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

const creategenesisBlock=()=>new Block(0,Date.now(),'Genisis Block',0)

const nextBlock=(prevBlock,data)=>
 new Block(prevBlock.index+1,Date.now(),data,prevBlock.thisHash)

 