import {type TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {
    type PolymorpheusComponent,
    type PolymorpheusContent,
} from '@tinkoff/ng-polymorpheus';

export interface TuiPortalItem<C = any> {
    readonly activeZone?: TuiActiveZoneDirective | null;
    readonly appearance?: string;
    readonly component: PolymorpheusComponent<any>;
    readonly content: PolymorpheusContent<C>;
    readonly context?: C;
}
