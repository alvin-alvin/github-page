import Dark from '../theme/Dark'
import Light from '../theme/Light'

export function getTheme() {
  if (new Date().getHours() < 20) {
    return Dark
  } else {
    return Light
  }
}
