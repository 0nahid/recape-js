function getArrayValue(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [25, 26, 3, 2, 5, 6, 95, 6, 6, 6, 8, 56, 265, 55, 266, 665, 65, 65, 56, 266, 5, 356, 255];
var result = getArrayValue(numbers);
var result1 = getArrayValue([10,20,30,40,50,60,70,80,90,100]);
console.log('Total of the numbers: ', result);
console.log('Total of the numbers: ', result1);