import {TuiPushComponent} from './push.component';
import {TuiPushDirective} from './push.directive';
import {TuiPushAlert} from './push-alert.component';

export const TuiPush = [TuiPushComponent, TuiPushAlert, TuiPushDirective] as const;
