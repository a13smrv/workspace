import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from 'src/app/app-routing.module'
import { AppComponent } from 'src/app/app.component'
import { VerticalNavigationComponent } from 'src/app/components/vertical-navigation/vertical-navigation.component'
import { SidebarNavigationComponent } from 'src/app/components/sidebar-navigation/sidebar-navigation.component'

@NgModule({
  declarations: [
    AppComponent,
    VerticalNavigationComponent,
    SidebarNavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
