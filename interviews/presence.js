const foo = [
    { name : 'ASDF', value : 123, children : [
            { a : 'aaa' },
            { b : 'bbb' }
        ]},
    { name : 'ZXCV', value : 456, children : [
            { a : 'aaa' },
            { b : 'BBB' }
        ]},
    { name : 'ASDF', value : 123, children : [
            { c : 'ccc' },
            { d : 'ddd' }
        ]},
    { name : 'ZXCV', value : 456, children : [
            { a : 'aaa' },
            { g : 'ggg' }
        ]},
];

// {
//   ASDF : {
//      name : 'ASDF', value : 123, children : [
//       { a : 'aaa' },
//       { b : 'bbb' },
//       { c : 'ccc' },
//       { d : 'ddd' }
//     ]
//   },
//   ZXCV : {
//      name : 'ZXCV', value : 456, children : [
//       { a : 'aaa' },
//       { b : 'BBB' },
//       { g : 'ggg' }
//     ]
//   }
// }

res = {}
foo.forEach(data => {
    if(res[data.name] == null)
        res[data.name] = data
    else{
        for(let child of data.children){
            console.log(`Children -> ${JSON.stringify(res[data.name].children)}`)
            console.log(`Child -> ${JSON.stringify(child)}`)
            if(!res[data.name].children.map(c => Object.values(c)[0]).includes(Object.values(child)[0]))
                res[data.name].children.push(child)
        }
    }
})
console.log(res)
