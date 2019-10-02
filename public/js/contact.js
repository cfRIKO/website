form = document.getElementById('contact_form')
send = form.elements.send

send.onclick = () => {
  x = window.open(`mailto:feltenrc@gmail.com?subject=${form.elements.subject.value}&body=${form.elements.body.value}`, '_blank')
  x.close()
}
