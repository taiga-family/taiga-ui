import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Less} from '!!raw-loader!./examples/2/index.less';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';
import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';
import {Component, forwardRef, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiCodeCVCLength} from '@taiga-ui/addon-commerce/types';
import {TuiNotificationsService} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../change-detection-strategy';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {AbstractExampleTuiInteractive} from '../abstract/interactive';

@Component({
    selector: 'example-input-card-grouped',
    templateUrl: './input-card-grouped.template.html',
    styleUrls: ['./input-card-grouped.style.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputCardGroupedComponent),
        },
    ],
})
export class ExampleTuiInputCardGroupedComponent extends AbstractExampleTuiInteractive {
    readonly exampleImportModule = exampleImportModule;

    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
        LESS: example2Less,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
    };

    readonly cards = {
        common: 'https://ng-web-apis.github.io/dist/assets/images/common.svg',
        universal: 'https://ng-web-apis.github.io/dist/assets/images/universal.svg',
        mutation:
            'https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg',
    };

    cardSrcVariants: readonly string[] = Object.keys(this.cards);

    cardSrcSelected: PolymorpheusContent | null = null;

    autocompleteEnabled = false;

    exampleText = '0000 0000 0000 0000';

    readonly codeLengthVariants: TuiCodeCVCLength[] = [3, 4];

    codeLength: TuiCodeCVCLength = this.codeLengthVariants[0];

    pseudoInvalid: boolean | null = null;

    readOnly = false;

    control = new FormControl();

    constructor(
        @Inject(TuiNotificationsService)
        private readonly notifications: TuiNotificationsService,
    ) {
        super();
    }

    get cardSrc(): PolymorpheusContent | null {
        return typeof this.cardSrcSelected === 'string'
            ? (this.cards as any)[this.cardSrcSelected]
            : this.cardSrcSelected;
    }

    get disabled(): boolean {
        return this.control.disabled;
    }

    set disabled(value: boolean) {
        if (value) {
            this.control.disable();
        } else {
            this.control.enable();
        }
    }

    onBinChange(bin: string) {
        this.notifications.show(`bin: ${bin}`).subscribe();
    }

    getContentVariants(
        template: PolymorpheusContent,
    ): ReadonlyArray<PolymorpheusContent> | null {
        return [...this.cardSrcVariants, template];
    }
}
