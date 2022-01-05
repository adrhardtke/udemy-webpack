// Import Fonts
// import './fonts.css'

// Import font awesome
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faBacon } from '@fortawesome/free-solid-svg-icons'

library.add(faBacon)
dom.watch()

// bulma
require('./css/styles.scss')