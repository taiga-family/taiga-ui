import {NgModule} from '@angular/core';
import {BootstrapComponent} from './bootstrap/bootstrap.component';
import {MaterialComponent} from './material/material.component';

@NgModule({
    declarations: [MaterialComponent, BootstrapComponent],
    exports: [MaterialComponent, BootstrapComponent],
})
export class ThemesModule {}
