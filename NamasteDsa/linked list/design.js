function Node(val){
    this.value = val;
    this.next=null;
}

var myLinkedList = function(){
    this.head = null;
    this.size=0;
}

myLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val)
    newNode.next = this.head;
    this.head = newNode
    this.size++
    return head
};


var obj = new myLinkedList()
//  var param_1 = obj.get(index)
  console.log(obj.addAtHead(5))
// console.log(myLinkedList.prototype)