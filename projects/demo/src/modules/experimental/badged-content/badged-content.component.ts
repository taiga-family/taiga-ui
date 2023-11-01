import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiDocExample,
    TuiDocumentationProperty,
    TuiRawLoaderContent,
} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-badged-content',
    templateUrl: './badged-content.template.html',
    changeDetection,
})
export class ExampleTuiBadgedContentComponent {
    readonly exampleModule: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    readonly exampleHtml: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
    };

    readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
    };

    radiusVariants = ['0.75rem', '50%'];
    radius = this.radiusVariants[0];

    readonly badgeNotificationBaseProperties: Record<string, TuiDocumentationProperty> = {
        tuiSlot: {
            type: null,
            value: 'top',
        },
    };

    getAvatarBaseProperties(): Record<string, TuiDocumentationProperty> {
        return {
            size: {
                type: null,
                value: 'l',
            },
            round: {
                type: 'input',
                value: String(this.radius === '50%'),
            },
            src: {
                type: 'input',
                value: 'yourAvatarSrc',
            },
        };
    }
}
