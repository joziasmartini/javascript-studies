const binaryTree = {}

function insert(tree, value) {
  if (tree.value) {
    if (value > tree.value) {
      insert(tree.right, value)
    } else {
      insert(tree.left, value)
    }
  } else {
    tree.value = value
    tree.right = {}
    tree.left = {}
  }
}

valuesToInsert = [10, 11, 9, 8, 13, 12, 7]
valuesToInsert.forEach(insertValues)

function insertValues(value) {
  insert(binaryTree, value)
}

const binaryTreeValues = JSON.stringify(binaryTree, null, 2);

const page = document.getElementById("binaryTreeHtml");

page.innerHTML = binaryTreeValues;
