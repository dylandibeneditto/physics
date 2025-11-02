import './style.css'
import Experience from './experience/experience'
import { initDevtools } from '@pixi/devtools'

const experience = new Experience(document.getElementById("canvas"))

initDevtools({experience.app});