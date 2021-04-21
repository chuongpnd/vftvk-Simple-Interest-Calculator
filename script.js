function compute() {
  const year = document.getElementById('numberYears').value;
  const slideRate = document.getElementById('slideRate').value;
  const amount = document.getElementById('numberAmount').value;
  console.log(slideRate);
  if (amount === '' || amount < 0) {
    alert('Please fill amount');
    return;
  }
  if (slideRate === null || slideRate === 0) {
    alert('Please fill Rate');
    return;
  }
  if (year === '' || amount < 0) {
    alert('Please fill Year');
    return;
  }
  const total = ((amount * slideRate) / 100) * year;
  document.getElementById('total').value = total;
}

function updateTextInput(val) {
  document.getElementById('valueRate').value = val + '%';
}
