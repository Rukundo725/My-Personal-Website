const updatePost = document.querySelector('.upload-article');
const title = document.getElementById('title');
const article = document.getElementById('article');
const date = document.getElementById('date');

db.collection('articles').doc(id).get().then(res => {
    title.value = res.data().title;
    article.value = res.data().article;
    date.value = res.data().date;
})

updatePost.addEventListener('click',(e)=>{
    e.preventDefault();
    db.collection('articles').doc(id).update({
        article: article.value,
        date: date.value,
        title: title.value
    }).then(res=>{
        title.value = "";
        article.value = "";
        alert("Post updated");
        location.href = "dashboard.html";
    }).catch(err=>{
        alert("Error: " + err.message)
    })
})