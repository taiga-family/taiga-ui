import {Directive, SkipSelf} from '@angular/core';
import {TUI_TEXTFIELD_APPEARANCE} from '@taiga-ui/core/tokens';
import {TUI_INPUT_COUNT_OPTIONS} from '@taiga-ui/kit/components/input-count/input-count-options';
import {InputCountOptions} from '@taiga-ui/kit';

@Directive({
    selector: '[tuiTableMode]',
    providers: [
        {
            provide: TUI_TEXTFIELD_APPEARANCE,
            // TODO: remove in ivy compilation
            useValue: 'table', // TuiAppearance.Table
        },
        {
            provide: TUI_INPUT_COUNT_OPTIONS,
            deps: [[new SkipSelf(), TUI_INPUT_COUNT_OPTIONS]],
            useFactory: inputCountOptionsFactory,
        },
    ],
})
export class TuiTableModeDirective {}

export function inputCountOptionsFactory(options: InputCountOptions): InputCountOptions {
    return {...options, hideButtons: true};
}
