// React is lazy

// const arr = [1,2,3];
// const arr2 = [4,5,6];
// const copy = [...arr2, ...arr, 4];

// // copy.push(4);

// console.log(arr);
// console.log(copy);

const user = {
  username: 'alice',
  age: 42,
  likes: ['waffles', 'hamburgers'],
  friend: {
    likes: []
  }
};

const copy = {
  ...user,
  username: 'bob',
  likes: [
    ...user.likes,
    'cake'
  ]
};

// copy.likes.push('cake');

// copy.username = 'Bob';

console.log(user);
console.log(copy);
