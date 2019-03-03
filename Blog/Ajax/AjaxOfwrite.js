var xhrForwrite;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
    xhrForwrite=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
    xhrForwrite=new ActiveXObject("Microsoft.XMLHTTP");
  }

function $(id){                     //获取元素
    return document.getElementById('id');
}
var inputText=document.getElementById('writeIt').getElementsByTagName('input')[0];
var inputArea=document.getElementById('writeIt').getElementsByTagName('textarea')[0];

$(submit).addEventListener('click',AjaxRun,false);


function AjaxRun(){
    if(inputText.value.length!=0&&inputArea.value.length!=0){
        if(xhrForwrite){
            var daTa='Title='+inputText.value+'&'+'content='+inputArea.value;    

            var url="?"+daTa;    //密码:document.getElementsByTagName('input')[1].value;格式都是字符串
            xhrForwrite.open("get",url,true);
            xhrForwrite.send(null);
        }
    }
    else{
        alert('不可以发布残缺的的文章哦！');
    }
}

if(xhrForwrite.onload){             //接收服务器响应
    xhrForwrite.onload=function(){
        let object=JSON.parse(xhrForwrite.responseText);
        if(object.code==1){
            window.location='../ArticleList/ArticleList.html';
            alert('发布成功');
        }
        else{
            alert('发布失败');
        }
    }
}
else{
    if(xhrForwrite.onreadstatuschange){
        xhrForwrite.onreadstatuschange=function(){
            let object=JSON.parse(xhrForwrite.responseText);
            if(object.code==1){
                window.location='../ArticleList/ArticleList.html';
                alert('发布成功');
            }
            else{
                alert('发布失败');
            }
        }
    }
}
