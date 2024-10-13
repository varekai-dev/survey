import { InfoScreen, SingleSelectScreen } from './screen'

export interface Survey {
  screens: (InfoScreen | SingleSelectScreen)[]
}
