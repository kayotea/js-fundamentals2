var x = 2;
var y = 8;
sumXtoY(x,y)
function sumXtoY(x, y){
    var sum = 0;
    for (var i = x; i < y; i++){
        sum += i;
    }
    console.log(sum);
}

var array = [1,2,5,-3,0]
console.log(findMin(array));
function findMin(arr){
    var min = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}

console.log(findAvg(array));
function findAvg(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += i;
    }
    return sum/arr.length;
}

// anonymous functions assigned to variables

var sumbetween = function (x,y){
    var sum = 0;
    for (var i = x; i < y; i++){
        sum += i;
    }
    console.log(sum);
}

var find_min = function(arr){
    var min = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}

var find_avg = function(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum += i;
    }
    return sum/arr.length;
}

// methods of an object

var object = {
    sumbetween : function (x,y){
        var sum = 0;
        for (var i = x; i < y; i++){
            sum += i;
        }
        console.log(sum);
    },
    find_min : function(arr){
        var min = arr[0];
        for (var i = 1; i < arr.length; i++){
            if (min > arr[i]){
                min = arr[i];
            }
        }
        return min;
    },
    find_avg : function(arr){
        var sum = 0;
        for (var i = 0; i < arr.length; i++){
            sum += i;
        }
        return sum/arr.length;
    }
}

// object person

//console.log(person.say_name);
//console.log(Object.keys(person));
// console.log(typeof person);
// console.log(person);
// for (key in person){
//     console.log('hi');
//     console.log(key, person[key]);
// }

var me = new person('Jules');
me.say_name();
me.say_something('I am cool');
me.walk();
me.run();
me.crawl();
me.see_distance();

function person (name){
    this.name = name;
    this.distance_travelled = 0;
    this.say_name = function(){
        console.log('My name is '+this.name);
    },
    this.say_something = function(param){
        console.log(this.name+" says "+param);
    },
    this.walk = function(){
        console.log(this.name+" is walking");
        this.distance_travelled += 3;
    },
    this.run = function(){
        console.log(this.name+" is running");
        this.distance_travelled += 10;
    }
    this.crawl = function(){
        console.log(this.name+" is crawling");
        this.distance_travelled += 1;
    },
    this.see_distance = function(){
        console.log(this.name+" has travelled "+String(this.distance_travelled));
    }
}
