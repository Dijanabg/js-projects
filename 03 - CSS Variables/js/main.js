const inputs = document.querySelectorAll('.controls input')
function handleUpdate(){
    //console.log(this.value)
    const data = this.dataset.sizing || ''
    //console.log(data)
    //console.log(this.name)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + data)
}
inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemovee', handleUpdate))