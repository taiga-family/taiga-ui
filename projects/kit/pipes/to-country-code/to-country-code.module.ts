import {NgModule} from '@angular/core';

import {TuiToCountryCodePipe} from './to-country-code.pipe';

@NgModule({
    declarations: [TuiToCountryCodePipe],
    exports: [TuiToCountryCodePipe],
})
export class TuiExtractCountryCodeModule {}
