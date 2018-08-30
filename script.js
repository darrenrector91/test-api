var header = document.querySelector('header');
    var section = document.querySelector('section');

    var requestURL = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=77baacafee3041bfa11c405858586681';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();

    request.onload = function() {
        var newsText = request.response;
        var news = JSON.parse(newsText);
        showArticles(news);
    }

    function showArticles(jsonObj) {
      var articles = jsonObj['articles'];

      for(var i = 0; i < articles.length; i++) {
        var myArticle = document.createElement('article');
        var title = document.createElement('h2');
        var a = document.createElement('a');
        a.href = articles[i].url;
        a.appendChild(document.createTextNode(articles[i].url));
        var p = document.createElement('p');
        p.appendChild(a);
        title.textContent = articles[i].title;
        myArticle.appendChild(title);
        myArticle.appendChild(p);
        section.appendChild(myArticle);
      }
    }