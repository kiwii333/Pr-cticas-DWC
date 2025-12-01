var cont = 0;
        var temp = setInterval (function(){
            alert('');
            cont++;
            if(cont <= 5){
                clearInterval(temp);
            }
        },500);