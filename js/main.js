//  declaration of variables 
const messageForm = document.getElementById('send-message-form'); // getting elements of the form through send-message-form id of the index.html
var navbar = document.getElementById("nav"); // Get the navbar
var sticky = navbar.offsetTop; // Get the offset position of the navbar
var mobileBtn = document.getElementById('mobile-cta'); // get the hamburger
const articleList = document.querySelector('.article-container');

// =====================================================================================

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// change the nav style to block from none on phone responsiveness screen
const addBlock =()=>{
  navbar.style.display = "block";
  mobileBtn.removeEventListener("click", addBlock,);
};
mobileBtn.addEventListener('click', addBlock);

// ==========================================================================================

// saving data(messages) from the user through the index.html form
messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('messages').add({
      name: messageForm.name.value,
      email: messageForm.email.value,
      message: messageForm.message.value
  });
  messageForm.name.value = '';
  messageForm.email.value = '';
  messageForm.message.value = '';
  alert("Message sent");
});

// ===============================================================================================

// create element & render article(function to render articles from fire base firestore)
const renderArticle = function(doc){

    let article = document.createElement('article');
    article.setAttribute('article-id', doc.id);


    let articleImg = document.createElement('div');
    articleImg.className = 'article-img';

    let img = document.createElement('img');
    img.setAttribute("id", "article-img");

    let articleContent = document.createElement('div');
    articleContent.className = 'article-content';

    let h2 = document.createElement('h2');

    let dateComment = document.createElement('div');
    dateComment.className = 'date-comment';


    let date = document.createElement('div');
    date.className = 'date';
   
    let i1 = document.createElement('i');
    i1.className = 'material-icons';

    let span1 = document.createElement('span');
    span1.setAttribute("id", "date");

    let comment = document.createElement('div');
    comment.className = 'comment';
   
    let i2 = document.createElement('i');
    i2.className = 'material-icons';

    let span2 = document.createElement('span');
    span2.setAttribute("id", "comment-count");

    let p = document.createElement('p');

    let span3 = document.createElement('span');
    span3.setAttribute("id", "link");

    let readMore = document.createElement('a');
    var link = document.createTextNode("Read-more");

    
    img.src ="../assets/article-img.jpeg"
    img.alt ="Article image"
    h2.textContent = doc.data().title;
    i1.innerHTML = "event"
    span1.textContent = doc.data().date;
    i2.innerHTML = "comment";
    span2.innerHTML = 4;
    p.textContent = doc.data().article.substring(0,140);
    readMore.addEventListener('click', (e) => {
      e.preventDefault();
      location.href = "../blog.html#"+doc.id;
    })
 

    articleImg.appendChild(img);
    articleContent.appendChild(h2);
    date.appendChild(i1);
    date.appendChild(span1);
    comment.appendChild(i2);
    comment.appendChild(span2);
    dateComment.appendChild(date);
    dateComment.appendChild(comment);
    readMore.appendChild(link); 
    span3.appendChild(readMore);
    p.appendChild(span3);
    articleContent.appendChild(dateComment);
    articleContent.appendChild(p);
    article.appendChild(articleImg);
    article.appendChild(articleContent);
    articleList.appendChild(article);
}

// getting data(articles) from the firebase
db.collection('articles').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderArticle(doc);
    });
});





     



















