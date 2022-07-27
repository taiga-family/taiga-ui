import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-tui-format-phone`,
    templateUrl: `./format-phone.template.html`,
    styleUrls: [`./format-phone.style.less`],
    changeDetection,
})
export class ExampleTuiFormatPhoneComponent {
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
    };

    index = `+78005557778`;

    readonly countryCodes = [undefined, `+850`, `+1`, `+52`];
    countryCode = this.countryCodes[0];

    readonly phoneMasks = [
        undefined,
        `####-#############`,
        `### ###-####`,
        `### ###-####`,
    ];

    phoneMask = this.phoneMasks[0];

    get maxLength(): number {
        return !this.countryCode || !this.phoneMask
            ? 12
            : this.countryCode.length + this.phoneMask.length - 2;
    }
}
