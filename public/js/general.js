dropdown = () => {
  if (document.documentElement.clientWidth > 480) {
    menuitems = document.getElementsByClassName('menuitem')
    document.getElementById('togglemenu').classList.value = 'shownmenu'
  
    for (let index = 0; index < menuitems.length; index++) {
      menuitems[index].classList.toggle('show')
    }  
  } else {
    document.getElementById('togglemenu').classList.value = 'hiddenmenu'
  }
  icons = document.getElementsByClassName('material-icons')
  for (let index = 0; index < icons.length; index++) {
    document.documentElement.clientHeight <= 480 ? icons[index].classList.add('smallicon') : console.log(icons[index].classList.remove('smallicon')) 
  }
}

showMenu = () => {
  menuitems = document.getElementsByClassName('menuitem')
  document.getElementById('togglemenu').classList.toggle('hiddenmenu')
  document.getElementById('togglemenu').classList.toggle('shownmenu')
  
  for (let index = 0; index < menuitems.length; index++) {
    menuitems[index].classList.toggle('show')
  }
}

dropdown()
window.addEventListener('resize', dropdown)