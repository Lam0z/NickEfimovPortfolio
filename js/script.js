const likes=document.querySelectorAll('.item__like')
const images=document.querySelectorAll('.portfolio img')
const projectTemplate=document.querySelector('#project__template').content
const projects=document.getElementsByClassName('project')
const navigation=document.querySelector('.portfolio__navigation-list')
const works=document.querySelectorAll('.item')
const resumeTemplate=document.querySelector('#resume__template').content
const resumeDiv=resumeTemplate.querySelector('.resume')
const resumeShowBtns=document.querySelectorAll('.information__btn')
const burger=document.querySelector('.main-nav__burger')
const mainNavHide=document.querySelector('.main-nav__hide')
const mainNavHideLinks=document.querySelectorAll('.main-nav__hide .main-nav__link')

//show and hide main-nam menu
burger.addEventListener('click',()=>{
    burger.classList.toggle('main-nav__burger-active')
    if( burger.classList.contains('main-nav__burger-active')){mainNavHide.classList.remove('hidden')}else{mainNavHide.classList.add('hidden')}
})
for(let link of mainNavHideLinks){
    link.addEventListener('click',()=>{
        mainNavHide.classList.add('hidden')
        burger.classList.toggle('main-nav__burger-active')
    })
}

//hide resume window
let hideResume=(resume)=>{
    resume.addEventListener('click',(evt)=>{
        if(evt.target===resumeDiv||evt.target.classList.contains('btn-close')){
            resume.classList.add('hidden')
        }
    })
}
let showResume=(btn,resume)=>{
    btn.addEventListener('click',()=>{
        document.body.appendChild(resumeTemplate)
        resume.classList.remove('hidden')
        hideResume(resume)
    })
}
for(let i=0;i<resumeShowBtns.length;i++){
    showResume(resumeShowBtns[i],resumeDiv) 
}

// filter my created works per sitetype
navigation.addEventListener('change',()=>{
    for(let work of works){
        if(navigation.value!=work.dataset.sitetype&&navigation.value!='all'){
            work.classList.add('hidden')
          }else{
            work.classList.remove('hidden')
          }
    }
})

let projectsData=[
    {
        img:'images/Cruises.JPG',
        title:'Организация морских прогулок',
        url:'projects/cruises/index.html',
        subtitle:'website',
        client: 'Клиент: WEB студия',
        description:'Организация морских прогулок по черному морю'
    }, 
    {
        img:'images/Abojur.jpg',
        title:'Студия Дизайнерского текстиля',
        url:'projects/abojur/index.html',
        subtitle:'website',
        client: 'Клиент: WEB студия',
        description:'Интерьерный текстиль по индивидуальным размерам с доставкой на дом'
    },
    {
        img:'images/Yoga.jpg',
        title:'Группа для занятий Йогой',
        url:'projects/yoga/index.html',
        subtitle:'website',
        client: 'Клиент: WEB студия',
        description:'Работаем с 2011 года, у нас работают сертифицированные инструктора по Кундалини-йоге. Большой опыт преподавания йоги для начинающих и продолжающих.'
    },
    {
        img:'images/Watches.JPG',
        title:'Магазин часов',
        url:'projects/wathesshop/index.html',
        subtitle:'Интернет магазин',
        client: 'Клиент: WEB студия',
        description:'Все часы производятся в Швейцарии и имеют сертификаты качества. Настоящие швейцарские часы — это предмет гордости и престижа.'
    },
    {
        img:'images/AltHome.JPG',
        title:'Аренда домов загородной недвижимости',
        url:'projects/althome/index.html',
        subtitle:'Интернет магазин',
        client: 'Клиент: WEB студия',
        description:'Отдохните от суеты мегаполиса в уютном тёплом доме в окружении экологически чистых лесов, рек и озёр'
    },
    {
        img:'images/Monstroy.JPG',
        title:'Строительные работы',
        url:'projects/monstory/index.html',
        subtitle:'Интернет магазин',
        client: 'Клиент: WEB студия',
        description:'Компания ЗАО «НCП «МонтCтрой» успешно работает на российском рынке с 1992 года, и за это время зарекомендовала себя как ведущий разработчик качественных систем установок для предприятий, выполняет полный комплекс строительно-монтажных и пуско-наладочных работ по электроснабжению зданий и сооружений.'
    }
    
]
//create projects windows
let createTemplates=(data)=>{
        let clonedProject=projectTemplate.cloneNode(true)
        let projectImg=clonedProject.querySelector('.project__img')
        let projectLink=clonedProject.querySelector('.project__link')
        let projectSubtitle=clonedProject.querySelector('.project__subtitle')
        let projectClient=clonedProject.querySelector('.project__client')
        let projectDescription=clonedProject.querySelector('.project__description')
        projectImg.src=data.img
        projectLink.textContent=data.title
        projectLink.href=data.url
        projectSubtitle.textContent=data.subtitle
        projectClient.textContent=data.client
        projectDescription.textContent=data.description   
        document.body.appendChild(clonedProject)
}

for(let i=0;i<projectsData.length;i++){
    createTemplates(projectsData[i])
}

//close project window
let hideProject=(openedProject)=>{
    openedProject.addEventListener('click',(evt)=>{
        let projectCloseBtn=openedProject.querySelector('.btn-close')
        if(evt.target===projectCloseBtn||evt.target===openedProject){
            openedProject.classList.add('hidden')
        }
    })
}


//add click on image
let addClickHandler=(img,project)=>{
    img.addEventListener('click',()=>{
            project.classList.remove('hidden')  
            hideProject(project)
            
    })
}

//add events on elements
for(let i =0;i<images.length;i++){
    addClickHandler(images[i],projects[i])

}

// Likes
for(let item of likes){
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