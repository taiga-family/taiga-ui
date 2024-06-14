import type {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import type {PolymorpheusComponent, PolymorpheusContent} from '@taiga-ui/polymorpheus';

export interface TuiPortalItem<C = any> {
    readonly activeZone?: TuiActiveZoneDirective | null;
    readonly appearance?: string;
    readonly component: PolymorpheusComponent<any>;
    readonly content: PolymorpheusContent<C>;
    readonly context?: C;
}
