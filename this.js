/* 
    this 키워드

    this 는 호출한 메소드를 소유하고 있는 객체를 가르킴
    "어떻게 호출했느냐"에 따라서 달라짐
*/


var kim = {
    name : 'kim',
    first : 10,
    second: 20, 
    sum : function(){
        return this.first + this.second;
    }
}

//console.log("kim.sum(kim.first, kim.second",  kim.sum(kim.first, kim.second));
console.log("kim2.sum(kim.first, kim.second",  kim.sum());
