import { Component } from '@angular/core'
import { ENavigationItems, TNavigationItems } from 'src/app/components/vertical-navigation/vertical-navigation.types'

@Component({
  selector: 'app-sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: ['./sidebar-navigation.component.scss'],
})
export class SidebarNavigationComponent {
  navigationItems: TNavigationItems = [
    ENavigationItems.Dashboard,
    ENavigationItems.Planner,
    ENavigationItems.Budget,
    ENavigationItems.Notepad,
  ]
}
