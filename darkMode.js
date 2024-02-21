const $mode = document.getElementById('btnMode')
function mode() {
  
  const $yellowBtns = document.querySelectorAll('.yellow')
  const $greenBtns = document.querySelectorAll('.green');

  if ($mode.innerText === '🌙') {
    $mode.innerText = '🔆'
    document.querySelector('section').classList.toggle('dark-section')
    document.querySelector('.display').classList.toggle('dark-display')
    $yellowBtns.forEach(el => {
      //console.log(el);
      el.classList.toggle('yellow-light')
      //el.style.color = 'rgba(0, 0,0, .7)'
    })
    $greenBtns.forEach(el => {
      el.classList.toggle('green-light')
    })
    //console.log($yellowBtns);
    document.querySelector('.reset').classList.toggle('reset-light');
    document.querySelector('.equal').classList.toggle('equal-light');
    document.querySelector('.del').classList.toggle('del-light');

    
  }else{
    $mode.innerText = '🌙'
    document.querySelector('section').classList.toggle('dark-section')
    document.querySelector('.display').classList.toggle('dark-display')
    
    $yellowBtns.forEach(el => {
      el.classList.toggle('yellow-light')
    })
    $greenBtns.forEach(el => {
      el.classList.toggle('green-light')
    })

    document.querySelector('.reset').classList.toggle('reset-light');
    document.querySelector('.equal').classList.toggle('equal-light');
    document.querySelector('.del').classList.toggle('del-light');

    
  }

}