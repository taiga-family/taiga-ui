"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[71416],{

/***/ 71416:
/***/ ((module) => {

module.exports = "import {ChangeDetectorRef, Component, Inject, NgZone, OnInit} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TUI_IS_CYPRESS,\n    TuiDestroyService,\n    tuiWatch,\n    tuiZoneOptimized,\n} from '@taiga-ui/cdk';\nimport {Observable, timer} from 'rxjs';\nimport {takeUntil} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-input-inline-example-3`,\n    templateUrl: `./template.html`,\n    styleUrls: [`./style.less`],\n    providers: [TuiDestroyService],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputInlineExample3 implements OnInit {\n    count = `0`;\n\n    constructor(\n        @Inject(ChangeDetectorRef) private readonly cd: ChangeDetectorRef,\n        @Inject(TuiDestroyService) private readonly destroy$: Observable<unknown>,\n        @Inject(NgZone) private readonly zone: NgZone,\n        @Inject(TUI_IS_CYPRESS) readonly isCypress: boolean,\n    ) {}\n\n    ngOnInit(): void {\n        if (this.isCypress) {\n            return;\n        }\n\n        timer(0, 3000)\n            .pipe(\n                tuiZoneOptimized(this.zone),\n                tuiWatch(this.cd),\n                takeUntil(this.destroy$),\n            )\n            .subscribe(value => {\n                this.count = String(value);\n            });\n    }\n}\n";

/***/ })

}]);