const slide = document.getElementById('slide')
        let picture = 1

        sliderStart = () => {
            switchPicture = () => {
            picture++
            if (picture > 5) {
                picture -= 5;    
            }
            return picture
            }

            return setInterval(() => {
                slide.setAttribute('src', './media/Temp' + switchPicture() + '.png')
            }, 5000)
        }

        const interval = sliderStart()