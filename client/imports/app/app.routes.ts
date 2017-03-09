import { Route } from '@angular/router';

import { GroupComponent } from './groups/group-list.component';

export const routes: Route[] = [
    { path: '', redirectTo: 'groups/hardware', pathMatch: 'full'},
    { path: 'groups/:groupName', component: GroupComponent }
];