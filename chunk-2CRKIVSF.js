import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {MaskitoPipe} from '@maskito/angular';
import {maskitoTransform} from '@maskito/core';
import {maskitoPhoneOptionsGenerator} from '@maskito/phone';
import metadata from 'libphonenumber-js/max/metadata';

@Component({
    imports: [MaskitoPipe],
    template: 'Phone: {{ rawValue | maskito: mask }}',
    encapsulation,
    changeDetection,
    host: {'(click)': 'showUtilityPower()'},
})
export default class Example {
    protected rawValue = '12125552368';
    protected readonly mask = maskitoPhoneOptionsGenerator({
        metadata,
        countryIsoCode: 'US',
    });

    protected showUtilityPower(): void {
        console.info(maskitoTransform(this.rawValue, this.mask));
    }
}
`;export{e as default};
