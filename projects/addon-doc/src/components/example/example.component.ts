import {
    Attribute,
    ChangeDetectionStrategy,
    Component,
    Inject,
    Input,
} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiNotification, TuiNotificationsService} from '@taiga-ui/core';
import {TUI_COPY_TEXTS} from '@taiga-ui/kit';
import {ClipboardCopyService} from '../../services/clipboard-copy.service';
import {TUI_DOC_EXAMPLE_TEXTS} from '../../tokens/i18n';

// Ambient type cannot be used without dynamic https://github.com/angular/angular/issues/23395
// @dynamic
@Component({
    selector: 'tui-doc-example',
    templateUrl: './example.template.html',
    styleUrls: ['./example.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocExampleComponent {
    @Input()
    heading: string | null = null;

    @Input()
    description: string | null = null;

    @Input()
    content: Record<string, string> = {};

    activeItemIndex = 0;

    readonly defaultTab = this.texts[0];

    constructor(
        @Attribute('id')
        readonly id: string | null,
        @Inject(ClipboardCopyService)
        private readonly clipboardCopyService: ClipboardCopyService,
        @Inject(TuiNotificationsService)
        private readonly notifications: TuiNotificationsService,
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(TUI_COPY_TEXTS) readonly copyTexts: [string, string],
        @Inject(TUI_DOC_EXAMPLE_TEXTS) readonly texts: [string, string, string],
    ) {}

    get activeItem(): string {
        return this.tabs[this.activeItemIndex];
    }

    get tabs(): ReadonlyArray<string> {
        return this.getTabs(this.content);
    }

    get code(): string {
        const code = this.content[this.activeItem];

        return code ? code.trim() : '';
    }

    get isDefaultItem(): boolean {
        return this.activeItem === this.defaultTab;
    }

    @tuiPure
    private getTabs(content: Record<string, string>): ReadonlyArray<string> {
        return [this.defaultTab, ...Object.keys(content)];
    }

    copyExampleLink() {
        const hashPosition = this.windowRef.location.href.indexOf('#');
        const currentUrl =
            hashPosition > -1
                ? this.windowRef.location.href.substr(0, hashPosition)
                : this.windowRef.location.href;
        const url = `${currentUrl}#${this.id}`;

        this.clipboardCopyService.copyToClipboard(url);

        this.notifications
            .showNotification(this.texts[1], {
                label: this.texts[2],
                status: TuiNotification.Success,
            })
            .subscribe();
    }

    copyCodeExample() {
        this.clipboardCopyService.copyToClipboard(this.code);
    }
}
