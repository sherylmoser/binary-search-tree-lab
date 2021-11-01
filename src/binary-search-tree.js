class TreeNode {
    constructor(element) {
        this.element = element;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }
    insert(element) {
        if (this.root == null) {
            this.root = new TreeNode(element);
            this.size += 1;
        }
        else {
            let current = this.root;
            while (current != null) {
                if (current.element.key == element.key) {
                    // key is the same as current
                    break;
                }
                else if (element.key > current.element.key) {
                    // key is greater than current
                    if (current.right == null) {
                        current.right = new TreeNode(element);
                        this.size += 1;
                        break;
                    }
                    else {
                        current = current.right;
                    }
                }
                else {
                    // key is less than current
                    if (current.left == null) {
                        current.left = new TreeNode(element);
                        this.size += 1;
                        break;
                    }
                    else {
                        current = current.left;
                    }
                }
            }
        }
    }
    // similar to insert, just looking for a match rather than inserting new elements
    find(key) {
        let current = this.root;
        while (current != null) {
            if (current.element.key == key) {
                return current.element
            }
            else if (key > current.element.key) {
                current = current.right
            }
            else {
                current = current.left
            }
        }
        return null
    }
    remove(key) {

    }
    // returns a sorted array of the items in the tree
    toArray() {

    }
}