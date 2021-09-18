// const myList=document.getElementById('myList');
// const pearsItem=document.getElementById('pearsItem');

// console.log(myList);
// console.log(pearsItem);

// const orangesItem=document.createElement('li');
// orangesItem.textContent ='Oranges';

// myList.insertBefore(orangesItem,pearsItem);

// function addTo(parent,toInsert){
//     const fisrtChild=parent.fisrtChild;
//     parent.insertBefore(toInsert,fisrtChild);
// }
// addTo(myList,orangesItem);

///////////////////////


// const myList=document.getElementById('myList');
// const listChildren=myList.children;

// const bananasItem=listChildren[1];
// const bananasCopy=bananasItem.cloneNode(true);

// myList.appendChild(bananasCopy);
// document.writeln(bananasItem.textContent);

///////////////////////////Node.nextElementSibling Property - Javascript DOM
const applesItem=document.querySelector("#myList > li:first-of-type");
const bananasItem=applesItem.nextElementSibling;
document.writeln(bananasItem);
