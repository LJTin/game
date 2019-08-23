const theScript = document.createElement('script');
theScript.innerHTML = `
    alert("恭喜你安装成功");
    var el = document.getElementsByClassName('btn play-btn')[0]
        el.addEventListener('click',function(){
            var targetNode = document.querySelector('#box');
            var nodes = targetNode.childNodes
            function a(){
                if(nodes[0].style.backgroundColor!== nodes[1].style.backgroundColor && nodes[0].style.backgroundColor!== nodes[2].style.backgroundColor){
                    return nodes[0]
                }
                for(var i =0;i<nodes.length;i++){
                    if(nodes[0].style.backgroundColor !== nodes[i].style.backgroundColor){
                        return nodes[i]
                    }
                }
            }
            setInterval(function(){
                a().click()
            },0)
        })
`
document.body.appendChild(theScript);

