//获得焦点。placeholder消失，失去焦点时再出现
var inputText=document.getElementById('writeIt').getElementsByTagName('input')[0];
var inputArea=document.getElementById('writeIt').getElementsByTagName('textarea')[0];

inputText.onfocus=function(){
    this.placeholder="";
}
inputText.onblur=function(){
    this.placeholder="请输入标题";
}
inputArea.onfocus=function(){
    this.placeholder="";
}
inputArea.onblur=function(){
    this.placeholder="请输入内容";
}

//输入字体大小一致
inputText.oninput=function(){
    this.style.fontSize='15px';
}
inputArea.oninput=function(){
    this.style.fontSize='15px';
}
//alert(inputArea.offsetWidth+','+inputArea.offsetHeight);

//新写的博客应该连接到原来的博客后面

var onSubmit=document.getElementById('submit');
onSubmit.onclick=function(){
    if(inputText.value!=''&&inputArea.value!=''){     //不可发布残文章
        addNew();
        window.location="../ArticleList/ArticleList.html"
    }
}

//获得输入的值