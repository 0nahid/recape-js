var marks = [12, 5, 2, 6, 5, 9, 9, 95, , 64, 9885, 6, 9, 651, 5, 4, 8, 8, 77];
var max = marks[0];
for (var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = element;
    }
}
console.log('The highest element is', max);