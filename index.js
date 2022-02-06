const allNumbers = document.getElementById('input-for-array')
const dellNumbers = document.getElementById('input-for-dell')
const icon = document.getElementById('icon')
const copyWindow = document.querySelector('.copy-window')


let arr =[]

allNumbers.addEventListener('input', (e) => {

  e.target.value.split(' ').forEach(num => {

      arr.push(num)
  })
})




function getPureNum(e) {
    arr = arr.filter((num)=> num !== e.target.value)

    copyWindow.innerHTML = arr.join(' ')
    e.target.value = 'null'
}

dellNumbers.onchange = getPureNum

function copytext() {
    navigator.clipboard.writeText(copyWindow.textContent)

    copyWindow.textContent ? copyWindow.innerHTML = 'Скопированно!!!' : ''
}

icon.addEventListener('click', copytext)