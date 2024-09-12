let text = document.getElementById("text");




function changT(){
    text.textContent = "Hello from onclick"; 
}


function incchangSize(){
    text.style.fontSize = "large";
}

function decchangSize(){
    text.style.fontSize = "small";
}

function changBg(){
    text.style.backgroundColor = "blue";
}


function changBgIMG(){
    text.style.backgroundColor = "blue";
}


const imgs = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0UxowmmisT2CKJo5gzCmqYH7CEawFrb7ddw&s', 'https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg'];
        let indx = 0;
        function changeImg() {
            indx = (indx + 1) % imgs.length;
            document.getElementById('IMG').src = imgs[indx];
        }