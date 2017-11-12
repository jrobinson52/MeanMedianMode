var numbers = [ 65, 98, 45, 48, 12, 67, 50, 82, 03, 69, 73, 08, 44, 64, 48, 51, 15, 49, 18, 91 ]

function mean(numbers) {
  var total = 0;
  for (i = 0; i < numbers.length; i++)  {
      total = total + numbers[i];
    }
  return total/numbers.length;
}

function median(numbers) {
  numbers.sort(function(a,b){
    return a-b;
  });

  var half = Math.floor(numbers.length / 2);

  if(numbers.lenght % 2) {
    return numbers[half];
  }
  else {
    return (numbers[half - 1] + numbers[half]) / 2;
  }
}

function mode(numbers) {
  var singles = [];
  var counts = [];

  for (i = 0; i < numbers.length; i++) {
    if(singles.includes(numbers[i]))  {
      for(j = 0; j < singles.length; j++)
        if (singles[j] == numbers[i]) {
          counts[j]++;
        }
      }
    else {
      singles.push(numbers[i]);
      counts.push(1);
    }

  }


var high = 0;
var index = 0;
for(i = 0; i < singles.length; i++)  {
    if(counts[i] > high) {
      high = counts[i];
      index = i;
    }
  }
  return singles[index];
}


document.write("The mean is: " + mean(numbers) + "<br />");
document.write("The median is: " + median(numbers) + "<br />");
document.write("The mode is: " + mode(numbers) + "<br />");
