import {NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {Component, inject, TemplateRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialogService} from '@taiga-ui/addon-mobile';
import {TUI_IS_MOBILE, TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiDialogService} from '@taiga-ui/experimental';
import {TuiAvatar, TuiFloatingContainer, TuiProgressBar, TuiSlides} from '@taiga-ui/kit';
import {TuiAppBar, TuiCard, TuiCell, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        NgIf,
        NgSwitch,
        NgSwitchCase,
        TuiAppBar,
        TuiAvatar,
        TuiButton,
        TuiCard,
        TuiCell,
        TuiFloatingContainer,
        TuiHeader,
        TuiProgressBar,
        TuiRepeatTimes,
        TuiSlides,
        TuiTitle,
        TuiSurface,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    @ViewChild(TemplateRef)
    private readonly template?: TemplateRef<any>;

    private readonly dialogs = inject(TUI_IS_MOBILE)
        ? inject(TuiSheetDialogService)
        : inject(TuiDialogService);

    protected step = 1;
    protected direction = 0;

    protected onClick(): void {
        this.step = 1;
        this.direction = 0;
        this.dialogs.open(this.template, {appearance: 'fullscreen'}).subscribe();
    }

    protected onStep(step: number): void {
        this.direction = step;
        this.step += step;
    }
}
