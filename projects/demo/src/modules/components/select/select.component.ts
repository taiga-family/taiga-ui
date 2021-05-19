import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Less} from '!!raw-loader!./examples/2/index.less';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';

import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Less} from '!!raw-loader!./examples/3/index.less';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';

import {default as example4Html} from '!!raw-loader!./examples/4/index.html';
import {default as example4Less} from '!!raw-loader!./examples/4/index.less';
import {default as example4Ts} from '!!raw-loader!./examples/4/index.ts';

import {default as example5Html} from '!!raw-loader!./examples/5/index.html';
import {default as example5Less} from '!!raw-loader!./examples/5/index.less';
import {default as example5Ts} from '!!raw-loader!./examples/5/index.ts';

import {default as example6Html} from '!!raw-loader!./examples/6/index.html';
import {default as example6Less} from '!!raw-loader!./examples/6/index.less';
import {default as example6Ts} from '!!raw-loader!./examples/6/index.ts';

import {default as example7Html} from '!!raw-loader!./examples/7/index.html';
import {default as example7Less} from '!!raw-loader!./examples/7/index.less';
import {default as example7Ts} from '!!raw-loader!./examples/7/index.ts';

import {default as exampleDeclareForm} from '!!raw-loader!./examples/import/declare-form.txt';
import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, forwardRef, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ALWAYS_FALSE_HANDLER, TuiBooleanHandler, TuiIdentityMatcher} from '@taiga-ui/cdk';
import {PolymorpheusContent, PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

class Account {
    constructor(readonly name: string, readonly balance: number) {}

    toString(): string {
        return `${this.name} (${this.balance})`;
    }
}

@Component({
    selector: 'example-tui-select',
    templateUrl: './select.template.html',
    styleUrls: ['./select.style.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiSelectComponent),
        },
    ],
})
export class ExampleTuiSelectComponent extends AbstractExampleTuiControl {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;
    readonly exampleDeclareForm = exampleDeclareForm;

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

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
        LESS: example4Less,
    };

    readonly example5: FrontEndExample = {
        TypeScript: example5Ts,
        HTML: example5Html,
        LESS: example5Less,
    };

    readonly example6: FrontEndExample = {
        TypeScript: example6Ts,
        HTML: example6Html,
        LESS: example6Less,
    };

    readonly example7: FrontEndExample = {
        TypeScript: example7Ts,
        HTML: example7Html,
        LESS: example7Less,
    };

    readonly items = [new Account('Ruble', 500), new Account('Dollar', 237)];

    readonly valueTemplateVariants = ['', 'Template'];

    selectedValueTemplate = this.valueTemplateVariants[0];

    readonly identityMatcherVariants: ReadonlyArray<TuiIdentityMatcher<Account>> = [
        (item1, item2) => item1 === item2,
        (item1, item2) => item1.balance === item2.balance,
    ];

    identityMatcher = this.identityMatcherVariants[0];

    control = new FormControl(null, Validators.required);

    readonly disabledItemHandlerVariants: ReadonlyArray<TuiBooleanHandler<Account>> = [
        ALWAYS_FALSE_HANDLER,
        (item: Account) => item.balance < 300,
    ];

    @ViewChild('valueTemplateContent')
    private valueTemplateRef?: PolymorpheusTemplate<{}>;

    get valueContent(): PolymorpheusContent {
        return this.valueTemplateRef && this.selectedValueTemplate
            ? this.valueTemplateRef
            : '';
    }

    setValue() {
        this.control.setValue(new Account('Dollar', 237));
    }
}
