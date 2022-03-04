//  declaration of variables 
const articleForm = document.querySelector('#add-new-article-form'); // getting the content of the blog form through add-new-article-form id of the add-blog.html

// saving data(articles) from the dashboard  to the firebase database
articleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('articles').add({
        title: articleForm.title.value,
        article: articleForm.article.value,
        date: articleForm.date.value
        
    });
    articleForm.title.value = '';
    articleForm.article.value = '';
    articleForm.date.value = '';
    alert("The article was created");
    location.href = "dashboard.html";
});
