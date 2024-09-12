import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent {
  files1: TreeNode[] = [
    {
      label: 'test1',
      data:{ icon:'pi pi-file', goTo:2 },
      // icon: 'pi pi-file'
    },
    {
      label: 'test2',
      data:{ icon:'pi pi-file', goTo:1 },
      // icon: 'pi pi-file',
      children: [
        { 
          label: 'test2-1', 
          data:{ icon:'pi pi-file', goTo:2 },
          // icon: 'pi pi-file', 
        }
      ]
    },
  ];

  addNode(node:TreeNode){
    if(!node.children){
      node.children = [];
    }
    node.children.push({
      label:"test-child",
      data:{icon:"pi pi-file"}
    })
  }
}
