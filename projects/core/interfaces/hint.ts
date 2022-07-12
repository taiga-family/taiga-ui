import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiHint {
    readonly id: string | null;
    readonly component: PolymorpheusComponent<object, object>;
    readonly content: PolymorpheusContent;
    readonly activeZone: TuiActiveZoneDirective | null;
}
