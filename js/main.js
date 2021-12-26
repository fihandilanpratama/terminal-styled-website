const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const projects = document.querySelector('#projects')
const projectsContent = document.querySelector('#projects-content')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

const setWinBox = (title, width, height, element, content) => {
  element.addEventListener('click', () => {
    new WinBox({
      title: title,
      background: '#00aa00',
      x: 'center',
      y: 'center',
      width: width,
      height: height,
      mount: content,
      onfocus: function() {
        this.setBackground('#00aa00')
      },
      onblur: function() {
        this.setBackground('#777')
      }
    })
  })
}

const isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

// display in mobile
if(isMobile.any()) {
  setWinBox('About me', '100%', '320px', about, aboutContent)
  setWinBox('My projects', '100%', '320px', projects, projectsContent)
  setWinBox('Contact me', '100%', '320px', contact, contactContent)
} 
// display in desktop/tablet
else {
  setWinBox('About me', '450px', '320px', about, aboutContent)
  setWinBox('My projects', '450px', '320px', projects, projectsContent)
  setWinBox('Contact me', '450px', '320px', contact, contactContent)
}