import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AppComponent } from './app.component';
import { Test2Component } from './test2/test2.component';
import { GlobalTreeComponent } from './global-tree/global-tree.component';

const routes: Routes = [
  { component:TestComponent, path: 'test1' },
  { component:Test2Component, path: 'test2' },
  { component:GlobalTreeComponent, path: 'global-tree' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
