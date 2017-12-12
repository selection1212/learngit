function tree2ary(root){
    var ary = [];
    if(root.left === null || root.right === null){
        return null;
    } else {
        ary.push(root)
    }
  

}
el.setAttribute('onclick','doSomething()')

delegation
var ul document.querySelector('ul');
ul.addEventListener('click',function(event){
    if(event.target.tagName.toLowerCase()==='li'){
        console.log('halo')
    }
});



function highlightCode(node,keywords){
    var text = node.textContent;
    node.textContent =  "";
    var match , pos = 0;
    while(match = keywords.exec(text)){
        var before = text.slice(pos,match.index);
        node.appendChild(document.createTextNode(before))
        var strong = document.createElement("strong");
        strong.appendChild(document.createTextNode(match[0]));
        node.appendChild(strong);
        pos = keywords.lastIndex;
    }
    var after = text.slice(pos);
    node.appendChild(document.createTextNode(after));

}
var languages ={
    javascript:/\b(function|return|var)\b/g
};
function hightlightAllCode(){
    var pres= document.body.getElementsByTagName("pre");
    for (var i = 0; i< pres.length; i++){
        var pre = pre[i];
        var lang = pre.getAttribute("data-languages");
        if(languages.hasOwnProperty(lang)){
            highlightCode(pre,languages[lang])
        }
    }

}

var pre = document.getElementsByTagName("pre");

    Array.from(pre).forEach(it =>{
        var text = pre.textContent;
        pre.textContent ="";

        var keywords = /\b(function|if|var|for)\b/g;
        var match, pos = 0;
        while(match = keywords.exec(text)){
            var before = text.slice(pos,match.index);
            pre.appendChild(document.createTextNode(before));
            var strong = document.createElement("strong");
            strong.appendChild(document.createTextNode(match[0]));
            pre.appendChild(strong);
            pos = match.lastIndex;
        }
        var after = text.slice(pos);
        pre.appendChild(document.createTextNode(after));
    })
