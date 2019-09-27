if (document.documentElement.clientWidth > 480) {
  menuitems = document.getElementsByClassName('menuitem')
  document.getElementById('togglemenu').classList.toggle('shownmenu')

  for (let index = 0; index < menuitems.length; index++) {
    menuitems[index].classList.toggle('show')
  }  
} else {
  document.getElementById('togglemenu').classList.toggle('hiddenmenu')
}


showMenu = () => {
  menuitems = document.getElementsByClassName('menuitem')
  document.getElementById('togglemenu').classList.toggle('hiddenmenu')
  document.getElementById('togglemenu').classList.toggle('shownmenu')
  
  for (let index = 0; index < menuitems.length; index++) {
    menuitems[index].classList.toggle('show')
  }
}