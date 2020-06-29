*ar biankaMass = 70;
var nickMass =99;
var biankaHeight = 1.70;
var nickHeight = 2;

var biankaBmi = (biankaMass / biankaHeight) * 2;
var nickBmi = (nickMass / nickHeight) * 2;
console.log(biankaBmi, nickBmi)

var higherBmi = biankaBmi < nickBmi;
console.log('Is Nick\'s BMI higher than Bianka\'s? ' + higherBmi);
