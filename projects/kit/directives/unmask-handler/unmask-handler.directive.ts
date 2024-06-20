import {Directive, Input} from '@angular/core';
import type {MaskitoOptions} from '@maskito/core';
import {MASKITO_DEFAULT_OPTIONS, maskitoTransform} from '@maskito/core';
import {TuiValueTransformer} from '@taiga-ui/cdk/classes';
import type {TuiMapper} from '@taiga-ui/cdk/types';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {identity} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[maskito][tuiUnmaskHandler]',
    providers: [tuiProvide(TuiValueTransformer, TuiUnmaskHandler)],
})
export class TuiUnmaskHandler extends TuiValueTransformer<string> {
    @Input()
    public tuiUnmaskHandler: TuiMapper<[string], string> = identity;

    @Input()
    public maskito: MaskitoOptions | null = null;

    public override fromControlValue(controlValue: unknown): string {
        return maskitoTransform(
            String(controlValue ?? ''),
            this.maskito || MASKITO_DEFAULT_OPTIONS,
        );
    }

    public override toControlValue(value: string): string {
        return this.tuiUnmaskHandler(value);
    }
}
