import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListContainerComponent } from './components/list-container/list-container.component';
import { MaterialUiModule } from './utils/material-ui/material-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListItemInputComponent } from './components/list-item-input/list-item-input.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [AppComponent, ListContainerComponent, ListItemInputComponent, ListComponent],
  imports: [
    BrowserModule,
    MaterialUiModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
