function inOrder(root) {
    if(root.left) {
        inOrder(root.left)
    } 
    console.log(root.data)
    if(root.right) {
        inOrder(root.right)
    }
}

function findOrAdd(currentNode, newNode) {
    if(currentNode.data == newNode.data){
        return true
      }
    if(newNode.data < currentNode.data){
        if(currentNode.left){
          return findOrAdd(currentNode.left, newNode)
        } else {
          return currentNode.left = newNode
        }
    }

    if(newNode.data > currentNode.data){
        if(currentNode.right){
          return findOrAdd(currentNode.right, newNode)
        } else {
          return currentNode.right = newNode
        }
      }

}

function max(currentNode) {
    if(!currentNode.right) {
        return currentNode
    } else {
        return max(currentNode.right)
    }
}


function min(currentNode) {
    if(!currentNode.left) {
        return currentNode
    } else {
        return max(currentNode.left)
    }
}