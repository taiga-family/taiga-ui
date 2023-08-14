import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Directive, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiFocusableModule,
} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TEXTFIELD_CONTROLLER_PROVIDER,
    tuiAsTextfieldHost,
    TuiPrimitiveTextfieldModule,
    TuiScrollbarModule,
    TuiSvgModule,
    TuiTextfieldComponent,
    TuiTooltipModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiTextareaComponent} from './textarea.component';
import {TuiTextareaDirective} from './textarea.directive';

/**
 * @deprecated use {@link TuiTextareaComponent}
 */
@Component({
    selector: `tui-text-area`,
    templateUrl: `./textarea.template.html`,
    styleUrls: [`./textarea.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiTextAreaComponent),
        tuiAsControl(TuiTextAreaComponent),
        TEXTFIELD_CONTROLLER_PROVIDER,
        MODE_PROVIDER,
    ],
    host: {
        '($.data-mode.attr)': `mode$`,
        '[class._ios]': `isIOS`,
    },
})
export class TuiTextAreaComponent extends TuiTextareaComponent {}

/**
 * @deprecated use {@link TuiTextareaDirective}
 */
@Directive({
    selector: `tui-text-area`,
    providers: [tuiAsTextfieldHost(TuiTextAreaDirective)],
})
export class TuiTextAreaDirective extends TuiTextareaDirective {}

/**
 * @deprecated use {@link TuiTextareaModule}
 */
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiFocusableModule,
        TuiScrollbarModule,
        TuiTooltipModule,
        TuiWrapperModule,
        TuiSvgModule,
        TuiPrimitiveTextfieldModule,
        PolymorpheusModule,
    ],
    declarations: [TuiTextAreaComponent, TuiTextAreaDirective],
    exports: [TuiTextAreaComponent, TuiTextAreaDirective, TuiTextfieldComponent],
})
export class TuiTextAreaModule {}
