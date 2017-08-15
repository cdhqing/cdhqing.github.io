(function(){

    let $result = document.querySelector('#result .expr');         //选中显示结果
    let $delete = document.querySelector('.btn.other.del');  //选中删除按键
    let $clear = document.querySelector('.btn.other.ac');  //选中删除按键
    let $numbers = document.querySelectorAll('.btn.num');    //选中数字按键
    let $jia = document.querySelector('.btn.com.jia');    
    let $equal = document.querySelector('.btn.com.equal');    
    let $cheng = document.querySelector('.btn.com.cheng');    
    let $jian = document.querySelector('.btn.com.jian');  
    let $chu = document.querySelector('.btn.com.chu');  
    var calculator = {
            result:'0',
        };

    $delete.addEventListener('click',function(){
        console.log(calculator.result);
        if (calculator.result.length === 1) {
            calculator.result = '0';
        } else {
            calculator.result = calculator.result.slice(0,calculator.result.length-1);
        }
        setResult(calculator.result);
    });  
    
     $jia.addEventListener('click',function(){
        setResult(calculator.result + '+');
    });
     $jian.addEventListener('click',function(){
        setResult(calculator.result + '-');
    });
    
    $cheng.addEventListener('click',function(){
        setResult(calculator.result + '*');
    });
   $chu.addEventListener('click',function(){
        setResult(calculator.result + '/');
    });
    
    $clear.addEventListener('click',function(){
        calculator.result = '0';
        setResult(calculator.result);
    }); 
    
   
    $equal.addEventListener('click',function(){
        setResult(String(eval(calculator.result)));
    });
    for (let $number of $numbers) {
        $number.addEventListener('click',function(event){
        //    console.log(event.currentTarget);
        //    console.log(event.currentTarget.dataset.number);
           var number = event.currentTarget.dataset.number;
           if (calculator.result === '0') {
               calculator.result = number;
           } else {
               calculator.result += number;
           }
          setResult(calculator.result);
        });
    };

    function setResult(value) {
        calculator.result = value;
        $result.innerText = value;
    }

    

  $result.innerText = calculator.result;
})();
console.log("est");