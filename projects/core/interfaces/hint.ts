import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

export interface TuiHint {
    readonly id: string | null;
    readonly component: PolymorpheusComponent<Record<string, any>, Record<string, any>>;
    readonly activeZone: TuiActiveZoneDirective | null;
}
