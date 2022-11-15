let h3 = document.createElement('h3');
document.body.append(h3);

let list = document.createElement('list');
document.body.append(list);

let a1 = document.createElement('a');
list.append(a1);
a1.textContent = 'Google';
a1.href = 'https://www.google.com/';
a1.target = '_blank';

let a2 = document.createElement('a');
list.append(a2);
a2.textContent = 'Yandex';
a2.href = 'https://www.yandex.ru/';
a2.target = '_blank';

let a3 = document.createElement('a');
list.append(a3);
a3.textContent = 'Altshu';
a3.href = 'https://www.altshu.com/';
a3.target = '_blank';

h3.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus accusamus perferendis quo? Sint temporibus at iste. Perferendis ex nostrum maxime ea at quibusdam! Vel consequuntur deleniti mollitia, adipisci fugit similique quisquam excepturi dolorem! Mollitia aut reiciendis quaerat obcaecati fuga labore. Enim libero repellat expedita similique! Ea vel modi ducimus maiores.';

h3.style.borderWidth = '2px'; 
h3.style.border = 'solid'; 
h3.style.borderRadius = '10px';  
h3.style.borderColor = 'red';
h3.style.fontWeight = 'lighter';
h3.style.padding = '15px'; 

list.style.display = 'flex';
list.style.justifyContent = 'space-between';
list.style.paddingLeft = '10px';
list.style.paddingRight = '10px';