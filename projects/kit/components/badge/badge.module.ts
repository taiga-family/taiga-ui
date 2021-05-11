import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiBadgeComponent} from './badge.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule],
    declarations: [TuiBadgeComponent],
    exports: [TuiBadgeComponent],
})
export class TuiBadgeModule {}
