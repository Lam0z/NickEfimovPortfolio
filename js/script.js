const likes=document.querySelectorAll('.item__like')


for (let item of likes){
    item.addEventListener('click',(evt)=>{
        evt.preventDefault()
        let likesCount = item.querySelector('.item__like-count')
        item.classList.toggle('item__like-active')
        if(item.classList.contains('item__like-active')){
            likesCount.textContent++
        }else{
            likesCount.textContent--
        }
        
    })
}