/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CdkStepper } from './stepper';
/** Button that moves to the next step in a stepper workflow. */
import * as ɵngcc0 from '@angular/core';
export declare class CdkStepperNext {
    _stepper: CdkStepper;
    /** Type of the next button. Defaults to "submit" if not specified. */
    type: string;
    constructor(_stepper: CdkStepper);
    _handleClick(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkStepperNext, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkStepperNext, "button[cdkStepperNext]", never, { "type": "type"; }, {}, never>;
}
/** Button that moves to the previous step in a stepper workflow. */
export declare class CdkStepperPrevious {
    _stepper: CdkStepper;
    /** Type of the previous button. Defaults to "button" if not specified. */
    type: string;
    constructor(_stepper: CdkStepper);
    _handleClick(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CdkStepperPrevious, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CdkStepperPrevious, "button[cdkStepperPrevious]", never, { "type": "type"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1idXR0b24uZC50cyIsInNvdXJjZXMiOlsic3RlcHBlci1idXR0b24uZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgQ2RrU3RlcHBlciB9IGZyb20gJy4vc3RlcHBlcic7XG4vKiogQnV0dG9uIHRoYXQgbW92ZXMgdG8gdGhlIG5leHQgc3RlcCBpbiBhIHN0ZXBwZXIgd29ya2Zsb3cuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtTdGVwcGVyTmV4dCB7XG4gICAgX3N0ZXBwZXI6IENka1N0ZXBwZXI7XG4gICAgLyoqIFR5cGUgb2YgdGhlIG5leHQgYnV0dG9uLiBEZWZhdWx0cyB0byBcInN1Ym1pdFwiIGlmIG5vdCBzcGVjaWZpZWQuICovXG4gICAgdHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKF9zdGVwcGVyOiBDZGtTdGVwcGVyKTtcbiAgICBfaGFuZGxlQ2xpY2soKTogdm9pZDtcbn1cbi8qKiBCdXR0b24gdGhhdCBtb3ZlcyB0byB0aGUgcHJldmlvdXMgc3RlcCBpbiBhIHN0ZXBwZXIgd29ya2Zsb3cuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDZGtTdGVwcGVyUHJldmlvdXMge1xuICAgIF9zdGVwcGVyOiBDZGtTdGVwcGVyO1xuICAgIC8qKiBUeXBlIG9mIHRoZSBwcmV2aW91cyBidXR0b24uIERlZmF1bHRzIHRvIFwiYnV0dG9uXCIgaWYgbm90IHNwZWNpZmllZC4gKi9cbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoX3N0ZXBwZXI6IENka1N0ZXBwZXIpO1xuICAgIF9oYW5kbGVDbGljaygpOiB2b2lkO1xufVxuIl19