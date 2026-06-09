import {NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ElementRef,
    inject,
    viewChildren,
    ViewEncapsulation,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WA_IS_IOS} from '@ng-web-apis/platform';
import {TuiControl} from '@taiga-ui/cdk/classes';
import {TUI_DEFAULT_MATCHER, TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiAutoFocus} from '@taiga-ui/cdk/directives/auto-focus';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiDataList, TuiOption} from '@taiga-ui/core/components/data-list';
import {TuiInput} from '@taiga-ui/core/components/input';
import {TUI_TEXTFIELD_OPTIONS, TuiTextfield} from '@taiga-ui/core/components/textfield';
import {TuiTitle} from '@taiga-ui/core/components/title';
import {TuiDropdownContent} from '@taiga-ui/core/portals/dropdown';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';
import {TuiFlagPipe} from '@taiga-ui/kit/pipes/flag';
import {TUI_COUNTRIES, TUI_INTERNATIONAL_SEARCH} from '@taiga-ui/kit/tokens';
import {getCountryCallingCode} from 'libphonenumber-js/core';

import {type TuiInputPhoneInternationalComponent} from './input-phone-international.component';

@Component({
    selector: 'tui-input-phone-international-content',
    imports: [
        FormsModule,
        NgTemplateOutlet,
        TuiAutoFocus,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiDropdownContent,
        TuiFlagPipe,
        TuiInput,
        TuiOption,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './input-phone-international-content.template.html',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './input-phone-international.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'data-tui-version': TUI_VERSION},
})
export class TuiInputPhoneInternationalContent {
    protected readonly host = inject(TuiControl) as TuiInputPhoneInternationalComponent;
    protected readonly list = viewChildren(TuiOption, {read: ElementRef});
    protected readonly ios = inject(WA_IS_IOS);
    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly label = inject(TUI_INTERNATIONAL_SEARCH);
    protected readonly names = inject(TUI_COUNTRIES);
    protected readonly size = inject(TUI_TEXTFIELD_OPTIONS).size;

    protected readonly filtered = computed(() => {
        const metadata = this.host.metadata();

        return this.host
            .countries()
            .map((iso) => ({
                iso,
                name: this.names()[iso] || '',
                code: metadata ? `+${getCountryCallingCode(iso, metadata)}` : '',
            }))
            .filter(({name, code}) =>
                TUI_DEFAULT_MATCHER(`${name}${code}`, this.host.search()),
            );
    });
}
