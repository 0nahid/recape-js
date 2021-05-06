var name = [3, 5, 6, 3, 2, 4, 5, 6, 3, 5, 78, 7, 9, 5, 6, 2, 6, 55, 6, 65, 5, 99, 6, 25, 56, 6, 59, 5, 6, 8];
var uniqueId = [];
for (var i = 0; i < name.length; i++) {
    var element = name[i];
    var elementIndex = uniqueId.indexOf(element);
    if (elementIndex == -1) {
        uniqueId.push(element);
    }
}
console.log(uniqueId);