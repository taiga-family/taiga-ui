import {Component, HostListener} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {MaskitoPipe} from '@maskito/angular';
import {maskitoTransform} from '@maskito/core';
import {maskitoPhoneOptionsGenerator} from '@maskito/phone';
import metadata from 'libphonenumber-js/max/metadata';

@Component({
    standalone: true,
    imports: [MaskitoPipe],
    template: `
        Phone: {{ rawValue | maskito: mask }}
    `,
    encapsulation,
    changeDetection,
})
export default class Example {
    protected rawValue = '12125552368';
    protected readonly mask = maskitoPhoneOptionsGenerator({
        metadata,
        countryIsoCode: 'US',
    });

    @HostListener('click')
    protected showUtilityPower(): void {
        console.info(maskitoTransform(this.rawValue, this.mask));
    }
}
