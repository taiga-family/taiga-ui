import type {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import type {PolymorpheusComponent, PolymorpheusContent} from '@taiga-ui/polymorpheus';

export interface TuiPortalItem<C = any> {
    readonly activeZone?: TuiActiveZone | null;
    readonly appearance?: string;
    readonly component: PolymorpheusComponent<any>;
    readonly content: PolymorpheusContent<C>;
    readonly context?: C;
}
