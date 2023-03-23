import type {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import type {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiPortalItem<C = any> {
    readonly component: PolymorpheusComponent<any, any>;
    readonly content: PolymorpheusContent<C>;
    readonly context?: C;
    readonly appearance?: string;
    readonly activeZone?: TuiActiveZoneDirective | null;
}
