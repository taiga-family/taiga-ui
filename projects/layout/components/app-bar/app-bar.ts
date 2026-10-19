import {TuiAppBarComponent} from './app-bar.component';
import {TuiAppBarDirective} from './app-bar.directive';
import {TuiAppBarBack} from './app-bar-back.component';
import {TuiAppBarSizeDirective} from './app-bar-size.directive';
import {TuiAppBarButton} from './liquid-glass/app-bar-button.directive';

export const TuiAppBar = [
    TuiAppBarComponent,
    TuiAppBarDirective,
    TuiAppBarBack,
    TuiAppBarSizeDirective,
    TuiAppBarButton,
] as const;
