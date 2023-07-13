let title = document.getElementById('title');
let imageUrl = document.getElementById('imageUrl');
let name = document.getElementById('name');
let category = document.getElementById('category');
let story = document.getElementById('story');
let submit = document.getElementById('submit');

submit.addEventListener('click',(e)=>{

    e.preventDefault();
    document.getElementById('story-image').src=imageUrl.value;
    document.querySelector('.story-title').innerText = title.value;
    document.querySelector('.story-data').innerText = story.value;
    document.querySelector('.story-author').innerText = name.value;
})

