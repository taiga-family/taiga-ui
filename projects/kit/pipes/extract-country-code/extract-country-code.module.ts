import {NgModule} from '@angular/core';
import {TuiIsoToCountryCodeModule} from '@taiga-ui/kit/pipes/iso-to-country-code';

import {TuiExtractCountryCodePipe} from './extract-country-code.pipe';

@NgModule({
    declarations: [TuiExtractCountryCodePipe],
    exports: [TuiExtractCountryCodePipe],
    providers: [TuiExtractCountryCodePipe],
    imports: [TuiIsoToCountryCodeModule],
})
export class TuiExtractCountryCodeModule {}
