var prompt = require('sync-prompt').prompt;

var score = prompt('score: ');
score = parseInt(score);
var letter = grade(score);
console.log(letter);

function grade(x)
{
  if(x>=90)
  {
    return 'A';
  }
  else if(x>=80)
  {
    return 'B';
  }
  else if(x>=70)
  {
    return 'C';
  }
  else if(x>=60)
  {
    return 'D';
  }
  else
  {
    return 'F';
  }
}
