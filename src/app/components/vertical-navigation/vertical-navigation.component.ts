import { Component, Input } from '@angular/core'
import { TNavigationItems } from './vertical-navigation.types'

@Component({
  selector: 'app-vertical-navigation',
  templateUrl: './vertical-navigation.component.html',
  styleUrls: ['./vertical-navigation.component.scss'],
})
export class VerticalNavigationComponent {
  @Input({ required: true }) navigationItems: TNavigationItems = []
}
