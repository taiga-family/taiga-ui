import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_ICON_RESOLVER} from '@taiga-ui/experimental/tokens';

@Pipe({
    name: 'tuiIcon',
})
export class TuiIconPipe implements PipeTransform {
    readonly transform = inject<TuiStringHandler<string>>(TUI_ICON_RESOLVER);
}
