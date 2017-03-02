import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgxUIModule } from '@swimlane/ngx-ui';
import { FlexLayoutModule } from '@angular/flex-layout';

import { APP_BASE_HREF, Location } from '@angular/common';

import { AppComponent } from './app.component';
import { NgxDnDModule } from '../src';

import '@swimlane/ngx-ui/release/index.css';

@NgModule({
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: getBaseLocation
    }
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    NgxUIModule,
    NgxDnDModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseLocation() {
    const paths: string[] = location.pathname.split('/').splice(1, 1);
    const basePath: string = (paths && paths[0]) || '';
    return '/' + basePath;
}
