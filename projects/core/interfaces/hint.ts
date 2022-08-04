import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiHint<C = any> {
    readonly id: string | null;
    readonly component: PolymorpheusComponent<object, object>;
    readonly appearance: string;
    readonly activeZone: TuiActiveZoneDirective | null;
    readonly content: PolymorpheusContent<C>;
    readonly context?: C;
}
