const tree = {
    value: 1,
    children: [
      {
        value: 2,
        children: [
          {
            value: 3,
            children: [],
          },
        ],
      },
      {
        value: 4,
        children: [
          {
            value: 5,
            children: [],
          },
        ],
      },
      {
        value: 6,
        children: [],
      },
    ]
  }

  function travel_tree(tree){
    let node = tree
    console.log(node.value);
    if(node.children.length){
        node.children.forEach(element => {
            travel_tree(element)
        });
    }
  }

  function travel_tree2(tree){
    
  }
  travel_tree(tree)