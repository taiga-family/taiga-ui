import {Component, forwardRef, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '../../../change-detection-strategy';
import {AbstractExampleTuiReactiveField} from '../../components/abstract/reactive-field';

import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {TuiNotificationsService} from '@taiga-ui/core';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';
import {FrontEndExample} from '../../interfaces/front-end-example';

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
export class ExampleTuiInputCardGroupedComponent extends AbstractExampleTuiReactiveField {
    readonly exampleImportModule = exampleImportModule;

    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly cards = {
        common: 'https://ng-web-apis.github.io/dist/assets/images/common.svg',
        universal: 'https://ng-web-apis.github.io/dist/assets/images/universal.svg',
        intersection:
            'https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg',
        mutation:
            'https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg',
    };

    cardSrcVariants = Object.keys(this.cards);

    cardSrcSelected: string | null = null;

    autocompleteEnabled = false;

    exampleText = '0000 0000 0000 0000';

    readonly codeLengthVariants = [3, 4];

    codeLength = this.codeLengthVariants[0];

    control = new FormControl();

    constructor(
        @Inject(TuiNotificationsService)
        private readonly notifications: TuiNotificationsService,
    ) {
        super();
    }

    get cardSrc(): string | null {
        return this.cardSrcSelected === null
            ? null
            : (this.cards as any)[this.cardSrcSelected];
    }

    onBinChange(bin: string) {
        this.notifications.show(`bin: ${bin}`).subscribe();
    }
}
