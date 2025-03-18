import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import type {TuiDurationOptions} from '@taiga-ui/core/animations';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils/miscellaneous';

@Pipe({
    standalone: true,
    name: 'tuiAnimation',
})
export class TuiAnimationPipe implements PipeTransform {
    private readonly speed = inject(TUI_ANIMATIONS_SPEED);
    public readonly transform = ({
        duration,
        speed,
        value,
        ...params
    }: Partial<{duration: number; speed: number; value: string}> &
        Record<string, any> = {}): TuiDurationOptions => ({
        value: value ?? '',
        params: {
            ...params,
            duration: (duration ?? 1) * tuiGetDuration(speed ?? this.speed),
        },
    });
}
