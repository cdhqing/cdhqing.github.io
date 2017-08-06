//给定如下整数 n, 输出从 0 - n 的所有偶数。
var n = 10 + Math.ceil(Math.random() * 90);
var result ='';
for (var i = 0; i <= n; i +=2) {
 if(result === '') {
   result=result+i;
 } else {
   result=result +"," + i;
 }
  
}
console.log("0 - n 的所有偶数:"+result);
//给定如下整数 n, 输出从 2 - n 之间的所有素数。素数是只能表示为它自身和 1 的乘积的整数。
var n = 10 + Math.ceil(Math.random() * 90);//表示[10,100)的数
var array =[];
for (var num = 2;num <= n;num++) {
  for(var i=2;i<num;i++) {
    if (num % i ===0){
      break;   //若能整除说明n不是素数，跳出当前循环
    }
  }
  if(i==num){  //到这一步说明当前num 不能被2~num-1之间的数整除，可以做输出
    array.push(num);
  }
}
console.log(n+"内的素数  "+array);

/**
 * 给定长方形的宽和高，计算其面积并返回。
 * 若 宽 === 高，则只需要传入宽的值。
 * @param {number} width 宽
 * @param {number} height 高
 * @return {number}
 */
function area(width, height=width) {
  return width * height;
}
console.log("长方形的面积："+area(7));


/**编写以下函数 max()
 * 输入任意数目的数字参数，返回其中最大的数字。
 * @return {number}
 */

function max() {
  var maxnum=arguments[0];
  for(var i=0;i<arguments.length;i++) {
    if(maxnum<arguments[i]) {
      maxnum=arguments[i];
    }
  }
  return maxnum;
}

console.log("最大的数字："+max(1,2,7,4,3,4,5,6,8));

/**
 * 给定数字 x，返回 x 自乘 n 次的结果。
 * @param {number} x
 * @param {number} n - 正整数
 * @return {number}
 */
function pow(x, n) {
   var i = 0;
   var result = 1;
   while(i<=n){
     result = result*x;
     i++;
   }
  return result;
}
console.log("x^n结果"+pow(2,8));

function pow(x,n) {

  var result=1;
  if(n<0){
    n=Math.abs(n);
  }
  for(var i = 0; i<n;i++) {
    result=result*x;
  }
  return result;
}
console.log(pow(2,-3));


/**
编写以下函数 appearances()
 * 计算在某段文本 content 中出现某个特定字符串 search 的次数。
 * @param {string} content - 被搜索的文本内容
 * @param {string} search - 查找的字符串
 * @return {number} 字符串 search 在 content 中出现的次数，没有则返回 0。
*/

function appearances(content,search) {
  var count = 0;
  var index = 0;
  while(index > -1){
    index=content.indexOf(search,index);
    if(index > -1 ) {
      index ++;
      count ++;
      
    }
  }
  return count;
}
console.log("查找 前端 出现的次数:"+appearances("我们一起学起前端，前端基础很重要", "前端"));

var array1="111222334455";
//console.log(array1.indexOf(1);
var a ;
a=array1.indexOf(2);
console.log(a);


/**
编写以下函数 sumOfArray()
 * 给一定个数字数组，计算该数组元素的和。
 * 输入 [1, 2, 3] 返回 6。
 * @param {number[]} numbers
 * @return {number}
 */
function sumOfArray(numbers) {
  var result = 0;
  for(var i = 0; i<arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
console.log("计算数据元素的和:"+sumOfArray(1,2,3,4));


/**
编写以下函数 reverseOfString()
 * 给定一个字符串，将这个字符串反转并返回。
 * 输入 'ABCDE' 返回 'EDCBA'。
 * @param {string} s
 * @return {string}
 */
function reverseOfString(s) {
   var result = s.split('').reverse().join('');
   
    return result;
}

console.log(reverseOfString("ABeeedfDE"));


/**
编写以下函数 sx()
 * 给定一个公元年份(1 - 10000)，返回相应中国农历年的 emoji 图案。
 * 输入 2018 返回 "🐶"。已知公元 2017 年是中国农历鸡年。
 * @param {number} year 
 * @param {string}
 */

function sx(year) {
  var rooster = "🐔";
  var sxs = ["🐭", "🐮", "🐯", "🐰", "🐲", "🐍", "🐴", "🐑", "🐵", "🐔", "🐶", "🐷"];
  return sxs[sxs.indexOf(rooster) + ((year - 2017) % 12)];


}
console.log(sx(2016));

/**编写以下函数 unique()
 * 给定一个数字数组，移除其中的重复元素后返回。
 * 输入 [1, 1, 3, 4, 3, 6] 返回 [1, 3, 4, 6]。
 * @param {number[]} numbers
 * @return {number[]}
 */
function unique(numbers) {
    var newNum = [];
    numbers.forEach(function (item) {
        if (newNum.indexOf(item) == -1)  newNum.push(item);    
    });
    return newNum;
}
console.log(unique([1,2,3,1,2,1,3,2,1]));

function unique1(numbers) {
  var newNum = [];
  for(var i = 0; i<numbers.length;i++) {
    if(newNum.indexOf(i) == -1) {
      newNum.push(i);
    }
  }
  return newNum;
}
console.log(unique1([1,2,3,1,2,1,3,2,1]));