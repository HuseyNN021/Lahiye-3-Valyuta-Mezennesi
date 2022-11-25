const btn=document.querySelectorAll('.ul-mezenne1 li');
btn.forEach(item=>{
    item.addEventListener('click',(event)=>{
        event.target.style.backgroundColor='red'
    });
})
