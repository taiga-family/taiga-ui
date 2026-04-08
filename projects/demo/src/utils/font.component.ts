import {ClipboardModule} from '@angular/cdk/clipboard';
import {isPlatformServer} from '@angular/common';
import {Component, computed, inject, input, PLATFORM_ID, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocCopy} from '@taiga-ui/addon-doc';
import {TuiTable} from '@taiga-ui/addon-table';
import {tuiInjectElement} from '@taiga-ui/cdk';

@Component({
    selector: 'tr[appFont]',
    imports: [ClipboardModule, TuiDocCopy, TuiTable],
    template: `
        <td tuiTd><ng-content /></td>
        <td tuiTd>
            <tui-doc-copy [cdkCopyToClipboard]="appFont()">
                {{ appFont() }}
            </tui-doc-copy>
        </td>
        <td tuiTd>{{ weight() }}</td>
        <td tuiTd>{{ styles().fontSize }}</td>
        <td tuiTd>{{ styles().lineHeight }} ({{ ratio().toFixed(2) }})</td>
    `,
    styles: `
        [tuiTd]:first-child {
            font: inherit;
        }
    `,
    changeDetection,
    host: {'[style.font]': '`var(${appFont()})`'},
})
export class TuiFont {
    public readonly appFont = input('');

    protected readonly el = tuiInjectElement();
    protected readonly styles = isPlatformServer(inject(PLATFORM_ID))
        ? signal(this.el.style)
        : computed((_ = this.appFont()) => getComputedStyle(this.el));

    protected readonly weight = computed((weight = this.styles().fontWeight) => {
        switch (weight) {
            case '400':
                return 'Regular';
            case '700':
                return 'Bold';
            default:
                return weight;
        }
    });

    protected readonly ratio = computed(
        ({fontSize, lineHeight} = this.styles()) =>
            Number.parseInt(lineHeight) / Number.parseInt(fontSize),
    );
}
