import TweenLite from 'gsap/TweenLite'
import 'gsap/ScrollToPlugin'

const scroll = href => {
  const link = href.split('/')
  const section = document.querySelector(link[link.length - 1])
  const page = document.querySelector('#main')
  TweenLite.to(page, 1.2, { scrollTo: section })
}
export default { scroll }
