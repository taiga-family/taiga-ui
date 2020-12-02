import {Component, Inject} from '@angular/core';
import {ClipboardCopyService} from '@taiga-ui/addon-doc';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'typography',
    templateUrl: './typography.template.html',
    styleUrls: ['./typography.style.less'],
    changeDetection,
})
export class TypographyComponent {
    constructor(
        @Inject(ClipboardCopyService)
        private readonly clipboardCopyService: ClipboardCopyService,
    ) {}

    copyCodeExample(color: string) {
        this.clipboardCopyService.copyToClipboard(color);
    }
}
