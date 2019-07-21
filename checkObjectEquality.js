var object1 = {
    name: "Manoram",
    age: 23
};
var object2 = {
    name: "Manoram",
    age: 23,
    salary: 300
};
var object3 = {
    name: "Manoram",
    age: 23
};

function checkObjEquality(obj1, obj2) {
    var obj1Values = Object.values(obj1);
    var obj2Values = Object.values(obj2);
    if(obj1Values.length == obj2Values.length) {
        for(var i = 0; i < obj1Values.length; i++) {
            if(obj1Values[i] != obj2Values[i]) {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}

console.log("Are Object1 and Object2 equal? " + checkObjEquality(object1, object2));
console.log("Are Object1 and Object3 equal? " + checkObjEquality(object1, object3));