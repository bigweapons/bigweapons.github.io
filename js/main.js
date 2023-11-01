// edit contain 1

const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const project = document.querySelector('#project')
const small = document.querySelector('#small')

// edit contain 2
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const projectContent = document.querySelector('#project-content')
const smallContent = document.querySelector('#small-content')

about.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'co',
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 60,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#444')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'co',
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 60,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#444')
    },
  })
})

// edit contain 3
project.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'co',
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 60,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#444')
    },
  })
})

small.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'co',
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 60,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#444')
    },
  })
})