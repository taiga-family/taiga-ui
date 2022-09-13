"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[26349],{

/***/ 26349:
/***/ ((module) => {

module.exports = "<div class=\"tui-player\">\n    <audio\n        #audio\n        tuiMedia\n        src=\"assets/media/strays.mp3\"\n        [(currentTime)]=\"currentTime\"\n        [(paused)]=\"paused\"\n    ></audio>\n    <button\n        tuiIconButton\n        type=\"button\"\n        shape=\"rounded\"\n        appearance=\"secondary\"\n        title=\"Play/Pause\"\n        [icon]=\"icon\"\n        (click)=\"toggleState()\"\n    ></button>\n    <div>\n        <a\n            tuiLink\n            href=\"https://waterplea.bandcamp.com/\"\n        >\n            Waterplea\n        </a>\n        — Strays\n        <input\n            tuiSlider\n            type=\"range\"\n            step=\"any\"\n            class=\"slider\"\n            [max]=\"audio.duration\"\n            [(ngModel)]=\"currentTime\"\n        />\n    </div>\n</div>\n";

/***/ })

}]);