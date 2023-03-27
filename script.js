const count=document.querySelector("#countdown");

setTimeout(function(){
count.innerText="10";
setTimeout(function(){
  count.innerText="9";
  setTimeout(function(){
    count.innerText="8";
    setTimeout(function(){
      count.innerText="7";
      setTimeout(function(){
        count.innerText="6";
        setTimeout(function(){
          count.innerText="5";
          setTimeout(function(){
            count.innerText="4";
            setTimeout(function(){
              count.innerText="3";
              setTimeout(function(){
                count.innerText="2";
                setTimeout(function(){
                  count.innerText="1";
                  setTimeout(function(){
                    count.innerText="Happy independence day";},1000)
                  },1000)
                },1000)
              },1000)
            },1000)
          },1000)
        },1000)
      },1000)
    },1000)
  },1000)
},1000)
document.body.append(count);
