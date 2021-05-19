const inputs = Array.from(document.querySelectorAll('.input-component'))

function inputCheck(input, error) {
  if (input.checkValidity()) error.classList.add('hidden')
  else error.classList.remove('hidden')
}

inputs.forEach(function(input) {
  const inputField = input.childNodes[1].childNodes[1]
  const error = input.childNodes[3]
  inputCheck(inputField, error)
  inputField.addEventListener('input', function() {
    inputCheck(inputField, error)
  })
})


