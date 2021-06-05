const btn = document.querySelector('.btn');


const url = './API/ajax.txt';



btn.addEventListener('click', () =>{
showTxt(url);
})





function showTxt(url){

    const xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open('GET', url);
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            const element = document.createElement(`p`);
            element.textContent = xhr.responseText;
            document.body.appendChild(element);
        }
        else{
            console.log({
                status: xhr.status,
                txt: xhr.statusText,
            });
        }
    }
    
    
    
    
    xhr.send();
}








