import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TreeModule} from 'primeng/tree';
import {ButtonModule} from 'primeng/button';
import {TreeNode} from 'primeng/api';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { GlobalTreeComponent } from './global-tree/global-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    GlobalTreeComponent
  ],
  imports: [
    TreeModule,
    ButtonModule,


    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
