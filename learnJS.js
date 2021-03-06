# JavaScript


## Map
```sh
const arra1 = ['Abc', 'jsd', 'edg', 'werf', 'waesr'];
const arra2 = arra1.map( el => {
  
  return '<h2>Hello, I am ${el} </h2>';
});

console.log(arra1, arra2);
```

```sh

### Output

["Abc", "jsd", "edg", "werf", "waesr"]
["<h2>Hello, I am ${el} </h2>", "<h2>Hello, I am ${el} </h2>", "<h2>Hello, I am ${el} </h2>", "<h2>Hello, I am ${el} </h2>", "<h2>Hello, I am ${el} </h2>"]


```

