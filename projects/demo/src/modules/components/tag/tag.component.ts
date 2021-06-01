import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Less} from '!!raw-loader!./examples/2/index.less';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';

import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Less} from '!!raw-loader!./examples/3/index.less';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';

import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, TemplateRef, ViewChild} from '@angular/core';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiStatusT} from '@taiga-ui/kit';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tag',
    templateUrl: './tag.template.html',
    styleUrls: ['./tag.style.less'],
    changeDetection,
})
export class ExampleTuiTagComponent {
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
        LESS: example3Less,
    };

    removable = false;

    disabled = false;

    editable = false;

    autoColor = false;

    hoverable = false;

    showLoader = false;

    value = 'John Cleese';

    maxLengthVariants: number[] = [10, 20];

    maxLength = null;

    readonly statusVariants: readonly TuiStatusT[] = [
        'default',
        'primary',
        'custom',
        'success',
        'error',
        'warning',
    ];

    status = this.statusVariants[0];

    readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeL> = ['s', 'm', 'l'];

    size: TuiSizeS | TuiSizeL = this.sizeVariants[1];

    @ViewChild('errorIcon')
    errorTemplate?: TemplateRef<{}>;

    readonly leftContentVariants = ['Error icon'];

    leftContentSelected = null;

    get leftContent(): PolymorpheusContent | null {
        return this.errorTemplate && this.leftContentSelected !== null
            ? this.errorTemplate
            : null;
    }

    editTag(value: string) {
        this.value = value;
    }
}
