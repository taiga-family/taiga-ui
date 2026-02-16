import {PercentPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    model,
    output,
} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiSlider} from '@taiga-ui/core/components/slider';
import {TuiHint} from '@taiga-ui/core/portals/hint';
import {TUI_PREVIEW_ZOOM_TEXTS} from '@taiga-ui/kit/tokens';
import {map, merge, of, skip, startWith, switchMap, timer} from 'rxjs';

import {TuiPreviewAction} from '../action/preview-action.directive';
import {TUI_PREVIEW_ICONS, type TuiPreviewIcons} from '../preview.options';

@Component({
    selector: 'tui-preview-zoom',
    imports: [FormsModule, PercentPipe, TuiButton, TuiHint, TuiPreviewAction, TuiSlider],
    templateUrl: './preview-zoom.template.html',
    styleUrl: './preview-zoom.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPreviewZoom {
    protected readonly icons: TuiPreviewIcons = inject(TUI_PREVIEW_ICONS);
    protected readonly texts = inject(TUI_PREVIEW_ZOOM_TEXTS);
    protected readonly sliderLabel = computed(
        () => `${this.texts().zoomOut} / ${this.texts().zoomIn}`,
    );

    public readonly min = input(0.5);
    public readonly max = input(2);
    public readonly value = model(1);
    public readonly reset = output();

    protected readonly hint = toSignal(
        toObservable(this.value).pipe(
            skip(1),
            switchMap(() => merge(of(true), timer(1000).pipe(map(TUI_FALSE_HANDLER)))),
            startWith(false),
        ),
        {requireSync: true},
    );

    protected clamp(value: number): void {
        this.value.set(tuiClamp(value, this.min(), this.max()));
    }
}
