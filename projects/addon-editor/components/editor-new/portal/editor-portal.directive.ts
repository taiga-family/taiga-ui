import {Directive} from '@angular/core';
import {TuiDropdownPortalService} from '@taiga-ui/cdk';

import {TuiEditorPortalService} from './editor-portal.service';

@Directive({
    selector: '[tuiEditorPortal]',
    providers: [{provide: TuiDropdownPortalService, useExisting: TuiEditorPortalService}],
})
export class TuiEditorPortalDirective {}
