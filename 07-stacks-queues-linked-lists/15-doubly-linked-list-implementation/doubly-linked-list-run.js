const DoublyLinkedList = require('./doubly-linked-list');
const bt=new DoublyLinkedList()
bt.append(10)
bt.append(20)
bt.prepend("new")
bt.insertAt(2,19)
// bt.printAll()
bt.remove(20)
bt.printAll()


