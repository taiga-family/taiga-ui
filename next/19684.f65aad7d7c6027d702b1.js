"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[19684],{

/***/ 19684:
/***/ ((module) => {

module.exports = "import {Component, Inject} from '@angular/core';\nimport {\n    AbstractControl,\n    AsyncValidatorFn,\n    FormBuilder,\n    FormGroup,\n    Validators,\n} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_CYPRESS, TuiValidationError} from '@taiga-ui/cdk';\nimport {of} from 'rxjs';\nimport {delay} from 'rxjs/operators';\n\nconst latinChars = /^[a-zA-Z]+$/;\n\nfunction asyncValidatorFn(isCypress: boolean): AsyncValidatorFn {\n    return (field: AbstractControl) => {\n        return field.value && latinChars.test(field.value)\n            ? of(null)\n            : of({\n                  error: new TuiValidationError(`Only latin letters allowed`),\n              }).pipe(isCypress ? delay(0) : delay(5000));\n    };\n}\n\n@Component({\n    selector: `tui-field-error-pipe-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFieldErrorPipeExample5 {\n    readonly form: FormGroup;\n\n    constructor(\n        @Inject(FormBuilder) private readonly fb: FormBuilder,\n        @Inject(TUI_IS_CYPRESS) isCypress: boolean,\n    ) {\n        this.form = this.fb.group({\n            text: [`русский текст`, Validators.required],\n        });\n\n        this.form.controls[`text`].setAsyncValidators(asyncValidatorFn(isCypress));\n        this.form.controls[`text`].markAsTouched();\n    }\n}\n";

/***/ })

}]);