import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  files1: TreeNode[] = [
    {
      label: 'test1',
      data:{ icon:'pi pi-file' },
      key:'test1'
      // icon: 'pi pi-file'
    },
    {
      label: 'test2',
      data:{ icon:'pi pi-file' },
      // icon: 'pi pi-file',
      children: [
        { 
          label: 'test2-1', 
          data:{ icon:'pi pi-file' },
          // icon: 'pi pi-file', 
        }
      ]
    },
  ];
  constructor() { }
}
