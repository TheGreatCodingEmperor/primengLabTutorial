import { Component } from '@angular/core';
import { TestService } from '../test.service';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-global-tree',
  templateUrl: './global-tree.component.html',
  styleUrls: ['./global-tree.component.scss']
})
export class GlobalTreeComponent {
  get files1(){
    return this.test.files1;
  }
  constructor(
    private test:TestService
  ){

  }

  addNode(){
    this.test.files1.push({
      label:"test-child",
      data:{icon:"pi pi-file"}
    })
  }


}
