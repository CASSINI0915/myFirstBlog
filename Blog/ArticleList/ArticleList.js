var myDiary=document.getElementById('userList');    //日志数目
var sDiary=myDiary.getElementsByTagName('p')[2];
var myArticles=document.getElementById('articleDiv').getElementsByTagName('div');
sDiary.innerHTML='日志:'+myArticles.length;

//默认内容
for(var i=0;i<myArticles.length;i++){
    var j=i+1;
    myArticles[i].innerHTML='<h1>您的第'+j+'篇文章的标题</h1>'+
    '<p style="font-style:Italic;">您的第'+j+'篇文章的内容</p>';
}

//点击了哪个功能选项
var whichClick=document.getElementById('functionList').getElementsByTagName('div');

//写博客
whichClick[3].onclick=function(){
    window.location='../writeArticle/writeArticle.html';
}



//点击文章
