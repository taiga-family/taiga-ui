import {NgModule} from '@angular/core';

import {TuiIsoToCountryCodePipe} from './iso-to-country-code.pipe';

@NgModule({
    declarations: [TuiIsoToCountryCodePipe],
    exports: [TuiIsoToCountryCodePipe],
    providers: [TuiIsoToCountryCodePipe],
})
export class TuiIsoToCountryCodeModule {}
