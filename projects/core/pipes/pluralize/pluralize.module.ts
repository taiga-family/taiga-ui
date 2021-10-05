import {NgModule} from '@angular/core';
import {TuiPluralizePipe} from './pluralize.pipe';

/** @deprecated use Angular built-in pipe https://angular.io/api/common/I18nPluralPipe */
@NgModule({
    exports: [TuiPluralizePipe],
    declarations: [TuiPluralizePipe],
})
export class TuiPluralizePipeModule {}
