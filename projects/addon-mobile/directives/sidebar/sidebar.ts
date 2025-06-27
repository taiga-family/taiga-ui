import {TuiSidebarComponent} from './sidebar.component';
import {TuiSidebarDirective} from './sidebar.directive';

/**
 * @deprecated use {@link TuiDrawer} instead
 */
export const TuiSidebar = [TuiSidebarComponent, TuiSidebarDirective] as const;
