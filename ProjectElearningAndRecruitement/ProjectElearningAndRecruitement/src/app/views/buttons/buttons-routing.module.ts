import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonGroupsComponent } from './button-groups/button-groups.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { FileComponent } from './file/file.component';
import { GetfileComponent } from './getfile/getfile.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'buttons'
      },
      {
        path: 'addc',
        component: ButtonsComponent,
        data: {
          title: 'AddCourse'
        }
      },
      {
        path: 'BG',
        component: ButtonGroupsComponent,
        data: {
          title: 'ListCourse'
        }
      },
      {
        path: 'dropdowns',
        component: DropdownsComponent,
        data: {
          title: 'Dropdowns'
        }
      },
      {
        path: 'file',
        component: FileComponent,
        data: {
          title: 'fileadd'
        }
      },
      {
        path: 'getfiles',
        component: GetfileComponent,
        data: {
          title: 'getfiles'
        }
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule {
}
