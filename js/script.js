function countDays(d){
  
  const today = new Date;
  const event = new Date(d);
  const date = event - today;
  let a=Math.round((date)/(1000*60*60*24))
  
  if (a===0) {
  return "Today is the day"
  } else if (a<0){
  return "The day is in the past"
  } else {
  return `${a} days`

  }
}

const btn = document.getElementById("button");
btn.onclick = function submit() {
  const d = document.getElementById("date").value
  document.getElementById('info').innerHTML = `<h3><strong>${countDays(d)}!</strong></h3>`
}

