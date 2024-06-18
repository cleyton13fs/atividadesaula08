const uls = document.querySelectorAll('ul');
let items = [];

uls.forEach(ul => {
    const ulItems = ul.querySelectorAll('li.item');
    
    items = items.concat(Array.from(ulItems));
});

console.log(items);

