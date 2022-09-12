"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[66769],{

/***/ 66769:
/***/ ((module) => {

module.exports = "<tui-input-files\n    *ngIf=\"!control.value\"\n    accept=\"image/*\"\n    [formControl]=\"control\"\n    (reject)=\"onReject($event)\"\n></tui-input-files>\n\n<tui-files class=\"tui-space_top-1\">\n    <tui-file\n        *ngIf=\"control.valueChanges | async as file\"\n        [file]=\"file\"\n        (removed)=\"removeFile()\"\n    ></tui-file>\n\n    <tui-file\n        *ngIf=\"rejectedFiles$ | async as file\"\n        state=\"error\"\n        [file]=\"file\"\n        (removed)=\"clearRejected()\"\n    ></tui-file>\n</tui-files>\n";

/***/ })

}]);