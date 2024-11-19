// Node class for circular linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Function to add a node at the beginning of the circular linked list
function addAtStart(last, value) {
  const newNode = new Node(value);

  if (!last) {
    newNode.next = newNode;
    return newNode;
  }

  newNode.next = last.next;
  last.next = newNode;

  return last;
}

// Function to create a circular linked list with one node
function createList(value) {
  const newNode = new Node(value);
  newNode.next = newNode;
  return newNode;
}

// Function to add a node at the end of the circular linked list
function addAtEnd(last, value) {
  if (!last) return createList(value);

  const newNode = new Node(value);
  newNode.next = last.next;
  last.next = newNode;

  return newNode; // New node becomes the last node
}

// Function to insert a node at a specific position
function insertAtIndex(last, value, index) {
  const newNode = new Node(value);

  if (index === 1) {
    if (!last) return createList(value);

    newNode.next = last.next;
    last.next = newNode;

    return last;
  }

  let current = last.next;
  for (let i = 1; i < index - 1 && current !== last; i++) {
    current = current.next;
  }

  newNode.next = current.next;
  current.next = newNode;

  if (current === last) {
    last = newNode;
  }

  return last;
}

// Function to display the circular linked list
function displayList(last) {
  if (!last) {
    console.log("List is empty.");
    return;
  }

  let temp = last.next;
  do {
    process.stdout.write(temp.data + " ");
    temp = temp.next;
  } while (temp !== last.next);
  console.log();
}

// Function to remove the first node from the circular linked list
function removeFirst(last) {
  if (!last) {
    console.log("List is empty.");
    return null;
  }

  if (last.next === last) return null;

  last.next = last.next.next;

  return last;
}

// Function to remove a node at a given position
function removeAtIndex(last, index) {
  if (!last) {
    console.log("List is empty.");
    return null;
  }

  if (index === 1) return removeFirst(last);

  let current = last.next;
  let previous = null;

  for (let i = 1; i < index && current !== last.next; i++) {
    previous = current;
    current = current.next;
  }

  if (current === last.next) {
    console.log("Invalid position.");
    return last;
  }

  previous.next = current.next;

  if (current === last) {
    last = previous;
  }

  return last;
}

// Example usage
let last = null;

// Create initial list
last = createList(10);
last = addAtEnd(last, 20);
last = addAtEnd(last, 30);
last = addAtEnd(last, 40);

console.log("Initial circular linked list:");
displayList(last);

// Insert at the beginning
last = addAtStart(last, 5);
console.log("After adding 5 at the start:");
displayList(last);

// Insert at position 3
last = insertAtIndex(last, 25, 3);
console.log("After adding 25 at position 3:");
displayList(last);

// Insert at the end
last = addAtEnd(last, 50);
console.log("After adding 50 at the end:");
displayList(last);

// Remove the first node
last = removeFirst(last);
console.log("After removing the first node:");
displayList(last);

// Remove node at position 4
last = removeAtIndex(last, 4);
console.log("After removing node at position 4:");
displayList(last);
