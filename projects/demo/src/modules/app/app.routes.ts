import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {getRoutes} from './get-routes';

@NgModule({
    imports: [
        RouterModule.forRoot(getRoutes(), {
            initialNavigation: 'enabled',
            scrollPositionRestoration: 'top',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
