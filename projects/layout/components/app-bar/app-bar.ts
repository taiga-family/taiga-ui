import {TuiAppBarComponent} from './app-bar.component';
import {TuiAppBarDirective} from './app-bar.directive';
import {TuiAppBarBack} from './app-bar-back.component';
import {TuiAppBarSizeDirective} from './app-bar-size.directive';

export const TuiAppBar = [
    TuiAppBarComponent,
    TuiAppBarDirective,
    TuiAppBarBack,
    TuiAppBarSizeDirective,
] as const;
