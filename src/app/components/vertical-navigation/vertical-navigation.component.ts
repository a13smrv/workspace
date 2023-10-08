import { Component } from '@angular/core'
import { ENavigationItems, TNavigationItems } from './vertical-navigation.types'

@Component({
  selector: 'app-vertical-navigation',
  templateUrl: './vertical-navigation.component.html',
  styleUrls: ['./vertical-navigation.component.scss'],
})
export class VerticalNavigationComponent {
  navigationItems: TNavigationItems = [
    ENavigationItems.Dashboard,
    ENavigationItems.Planner,
    ENavigationItems.Budget,
    ENavigationItems.Notepad,
  ]
}
