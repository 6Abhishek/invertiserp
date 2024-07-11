var count = 1
function showlist(){ 
    if (count % 2 != 0){
    document.querySelector('#a1').style.display="block";
    }
    else{
        document.querySelector('#a1').style.display="none";
    }
    count++;
}


function result_tab(){
    document.querySelector('.c1').style.display="block";
    document.querySelector('.c2').style.display="none";
    document.querySelector('#a1').style.display="none";
}

function showresult(){
    document.querySelector('.result').style.display="block";
    document.querySelector('.c1').style.display="none";
}