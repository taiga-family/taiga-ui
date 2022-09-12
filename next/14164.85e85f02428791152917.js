"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[14164],{

/***/ 14164:
/***/ ((module) => {

module.exports = "```ts\nimport formatDistance from 'date-fns/formatDistance';\n\n@Injectable()\nexport class FormatService extends TuiFormatDateService {\n  format(timestamp: number): Observable<string> {\n    return timer(0, 1000).pipe(map(() => formatDistance(timestamp, Date.now())));\n  }\n}\n\n@Component({\n  // ...\n  providers: [\n    {\n      provide: TuiFormatDateService,\n      useClass: FormatService,\n    },\n  ],\n})\nexport class MyComponent {}\n```\n";

/***/ })

}]);