import { navbar } from './navbar.js'
import { imageSection } from './imgSection.js'
import { slogan } from './slogan.js'
import { gallery } from './gallery.js'
import { footer } from './footer.js'
navbar();
imageSection();
slogan();
gallery();
footer();

const lightbox = new SimpleLightbox('.galleryContainer a'); 