import {Directive} from '@angular/core';
import {TuiPortalService} from '@taiga-ui/cdk';

import {TuiEditorPortalService} from './editor-portal.service';

@Directive({
    selector: `[tuiEditorPortal]`,
    providers: [{provide: TuiPortalService, useExisting: TuiEditorPortalService}],
})
export class TuiEditorPortalDirective {}
