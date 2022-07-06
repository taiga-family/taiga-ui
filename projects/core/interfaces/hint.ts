import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

export interface TuiHint {
    readonly id: string | null;
    readonly component: PolymorpheusComponent<object, object>;
    readonly activeZone: TuiActiveZoneDirective | null;
}
