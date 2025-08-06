import {Component, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {type TuiContext, tuiProvide} from '@taiga-ui/cdk';
import {
    TUI_HINT_DIRECTIONS,
    TuiHint,
    TuiIcon,
    type TuiSizeL,
    type TuiSizeS,
} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {HintControllerDocumentation} from '../abstract/hint-controller-documentation';
import {InheritedDocumentation} from '../abstract/inherited-documentation';
import {AbstractExampleTuiInteractive} from '../abstract/interactive';
import {TextfieldControllerDocumentation} from '../abstract/textfield-controller-documentation';
import Example1 from './examples/1';
import Example2 from './examples/2';

@Component({
    standalone: true,
    imports: [
        Example1,
        Example2,
        FormsModule,
        HintControllerDocumentation,
        InheritedDocumentation,
        TextfieldControllerDocumentation,
        TuiAvatar,
        TuiDemo,
        TuiHint,
        TuiIcon,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent)],
})
export default class PageComponent extends AbstractExampleTuiInteractive {
    @ViewChild('interactiveContent')
    private readonly interactiveIcon: PolymorpheusContent<
        TuiContext<TuiSizeL | TuiSizeS>
    >;

    protected readonly routes = DemoRoute;
    protected readonly themes = ['Taiga UI', 'Bootstrap', 'Material'];
    protected theme = this.themes[0]!;

    protected readonly iconVariants = ['', '@tui.search', 'Interactive content'];
    protected selectedIcon = this.iconVariants[0]!;

    protected readonly iconLeftVariants = ['', '@tui.pie-chart', '@tui.credit-card'];

    protected iconStart = '';

    protected readonly typeVariants: readonly string[] = [
        'text',
        'email',
        'password',
        'tel',
        'url',
    ];

    protected cleaner = false;

    protected editable = true;

    protected filler = '';

    protected prefix = '';

    protected postfix = '';

    protected readonly maxLengthVariants: readonly number[] = [10];

    protected maxLength = null;

    protected readonly inputModeVariants: readonly string[] = ['text', 'numeric'];

    protected inputMode = this.inputModeVariants[0]!;

    protected readonly customContentVariants = [
        '',
        '@tui.bell',
        '<span>LongTextContent</span>',
    ];

    protected customContentSelected = this.customContentVariants[0]!;

    protected password = '';

    protected example2Value = 'mail@example.com';

    protected value = '';

    protected exampleText = '';

    protected disabled = false;

    protected readOnly = false;

    protected labelOutside = false;

    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];

    protected size = this.sizeVariants[2]!;

    protected readonly hintContentVariants: readonly string[] = ['', 'Ivan Ivanov'];

    protected readonly hintDirectionVariants = TUI_HINT_DIRECTIONS;

    protected readonly hintAppearanceVariants = ['', 'error', 'dark'];

    protected invalid = false;

    protected hintContent = this.hintContentVariants[0]!;

    protected hintDirection = this.hintDirectionVariants[0]!;

    protected hintAppearance = this.hintAppearanceVariants[0]!;

    protected get customContent(): string | null {
        return this.customContentSelected;
    }

    protected get iconContent(): PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>> {
        if (this.selectedIcon === '') {
            return '';
        }

        return this.interactiveIcon && this.selectedIcon !== '@tui.search'
            ? this.interactiveIcon
            : '@tui.search';
    }

    protected get isBootstrap(): boolean {
        return this.theme === this.themes[1];
    }

    protected get isMaterial(): boolean {
        return this.theme === this.themes[2]!;
    }

    protected get placeholder(): string {
        return this.isBootstrap ? 'Type a value' : 'Theming sample';
    }

    protected get customizationSize(): TuiSizeL | TuiSizeS {
        return this.isBootstrap ? 's' : 'l';
    }

    protected onClick(): void {
        console.info('Interactive icon clicked');
    }
}
