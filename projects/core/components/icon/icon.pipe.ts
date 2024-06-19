import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {TUI_ICON_RESOLVER} from '@taiga-ui/core/tokens';

@Pipe({
    standalone: true,
    name: 'tuiIcon',
})
export class TuiIconPipe implements PipeTransform {
    public readonly transform = inject<TuiStringHandler<string>>(TUI_ICON_RESOLVER);
}
