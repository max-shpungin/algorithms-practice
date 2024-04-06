"use strict";
class listNode {
    constructor(val = 0) {
        this.val = val;
    }
}
class MyLinkedList {
    constructor() {
        this.left = new listNode();
        this.right = new listNode();
        [this.left.next, this.right.prev] = [this.right, this.left];
    }
    _find(index) {
        let curr = this.left.next;
        while (curr && index > 0) {
            curr = curr.next;
            index--;
        }
        if (curr && index === 0)
            return curr;
        return null;
    }
    get(index) {
        let target = this._find(index);
        if (!target || target === this.right)
            return -1;
        return target.val;
    }
    addAtHead(val) {
        const newNode = new listNode(val);
        const next = this.left.next;
        const prev = this.left;
        newNode.next = next;
        newNode.prev = prev;
        prev.next = newNode;
        next.prev = newNode;
    }
    addAtTail(val) {
        const newNode = new listNode(val);
        const next = this.right;
        const prev = this.right.prev;
        newNode.next = next;
        newNode.prev = prev;
        prev.next = newNode;
        next.prev = newNode;
    }
    addAtIndex(index, val) {
        const target = this._find(index);
        if (!target)
            return;
        if (target === this.right) {
            this.addAtTail(val);
            return;
        }
        const newNode = new listNode(val);
        const prev = target.prev;
        const next = target;
        newNode.prev = prev;
        newNode.next = next;
        prev.next = newNode;
        next.prev = newNode;
    }
    deleteAtIndex(index) {
        const target = this._find(index);
        if (!target || target === this.right)
            return;
        const prev = target.prev;
        const next = target.next;
        prev.next = next;
        next.prev = prev;
    }
}
/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/ 
//# sourceMappingURL=ll.js.map