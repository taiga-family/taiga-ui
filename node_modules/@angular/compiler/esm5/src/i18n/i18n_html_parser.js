/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __assign } from "tslib";
import { MissingTranslationStrategy } from '../core';
import { DEFAULT_INTERPOLATION_CONFIG } from '../ml_parser/interpolation_config';
import { ParseTreeResult } from '../ml_parser/parser';
import { digest } from './digest';
import { mergeTranslations } from './extractor_merger';
import { Xliff } from './serializers/xliff';
import { Xliff2 } from './serializers/xliff2';
import { Xmb } from './serializers/xmb';
import { Xtb } from './serializers/xtb';
import { TranslationBundle } from './translation_bundle';
var I18NHtmlParser = /** @class */ (function () {
    function I18NHtmlParser(_htmlParser, translations, translationsFormat, missingTranslation, console) {
        if (missingTranslation === void 0) { missingTranslation = MissingTranslationStrategy.Warning; }
        this._htmlParser = _htmlParser;
        if (translations) {
            var serializer = createSerializer(translationsFormat);
            this._translationBundle =
                TranslationBundle.load(translations, 'i18n', serializer, missingTranslation, console);
        }
        else {
            this._translationBundle =
                new TranslationBundle({}, null, digest, undefined, missingTranslation, console);
        }
    }
    I18NHtmlParser.prototype.parse = function (source, url, options) {
        if (options === void 0) { options = {}; }
        var interpolationConfig = options.interpolationConfig || DEFAULT_INTERPOLATION_CONFIG;
        var parseResult = this._htmlParser.parse(source, url, __assign({ interpolationConfig: interpolationConfig }, options));
        if (parseResult.errors.length) {
            return new ParseTreeResult(parseResult.rootNodes, parseResult.errors);
        }
        return mergeTranslations(parseResult.rootNodes, this._translationBundle, interpolationConfig, [], {});
    };
    return I18NHtmlParser;
}());
export { I18NHtmlParser };
function createSerializer(format) {
    format = (format || 'xlf').toLowerCase();
    switch (format) {
        case 'xmb':
            return new Xmb();
        case 'xtb':
            return new Xtb();
        case 'xliff2':
        case 'xlf2':
            return new Xliff2();
        case 'xliff':
        case 'xlf':
        default:
            return new Xliff();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bl9odG1sX3BhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9pMThuL2kxOG5faHRtbF9wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUVuRCxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUUvRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFHcEQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNoQyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDMUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUN0QyxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDdEMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFdkQ7SUFNRSx3QkFDWSxXQUF1QixFQUFFLFlBQXFCLEVBQUUsa0JBQTJCLEVBQ25GLGtCQUFtRixFQUNuRixPQUFpQjtRQURqQixtQ0FBQSxFQUFBLHFCQUFpRCwwQkFBMEIsQ0FBQyxPQUFPO1FBRDNFLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBR2pDLElBQUksWUFBWSxFQUFFO1lBQ2hCLElBQU0sVUFBVSxHQUFHLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLGtCQUFrQjtnQkFDbkIsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzNGO2FBQU07WUFDTCxJQUFJLENBQUMsa0JBQWtCO2dCQUNuQixJQUFJLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNyRjtJQUNILENBQUM7SUFFRCw4QkFBSyxHQUFMLFVBQU0sTUFBYyxFQUFFLEdBQVcsRUFBRSxPQUE2QjtRQUE3Qix3QkFBQSxFQUFBLFlBQTZCO1FBQzlELElBQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixJQUFJLDRCQUE0QixDQUFDO1FBQ3hGLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLGFBQUcsbUJBQW1CLHFCQUFBLElBQUssT0FBTyxFQUFFLENBQUM7UUFFM0YsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUM3QixPQUFPLElBQUksZUFBZSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsT0FBTyxpQkFBaUIsQ0FDcEIsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7O0FBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxNQUFlO0lBQ3ZDLE1BQU0sR0FBRyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUV6QyxRQUFRLE1BQU0sRUFBRTtRQUNkLEtBQUssS0FBSztZQUNSLE9BQU8sSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNuQixLQUFLLEtBQUs7WUFDUixPQUFPLElBQUksR0FBRyxFQUFFLENBQUM7UUFDbkIsS0FBSyxRQUFRLENBQUM7UUFDZCxLQUFLLE1BQU07WUFDVCxPQUFPLElBQUksTUFBTSxFQUFFLENBQUM7UUFDdEIsS0FBSyxPQUFPLENBQUM7UUFDYixLQUFLLEtBQUssQ0FBQztRQUNYO1lBQ0UsT0FBTyxJQUFJLEtBQUssRUFBRSxDQUFDO0tBQ3RCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneX0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQge0h0bWxQYXJzZXJ9IGZyb20gJy4uL21sX3BhcnNlci9odG1sX3BhcnNlcic7XG5pbXBvcnQge0RFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUd9IGZyb20gJy4uL21sX3BhcnNlci9pbnRlcnBvbGF0aW9uX2NvbmZpZyc7XG5pbXBvcnQge1Rva2VuaXplT3B0aW9uc30gZnJvbSAnLi4vbWxfcGFyc2VyL2xleGVyJztcbmltcG9ydCB7UGFyc2VUcmVlUmVzdWx0fSBmcm9tICcuLi9tbF9wYXJzZXIvcGFyc2VyJztcbmltcG9ydCB7Q29uc29sZX0gZnJvbSAnLi4vdXRpbCc7XG5cbmltcG9ydCB7ZGlnZXN0fSBmcm9tICcuL2RpZ2VzdCc7XG5pbXBvcnQge21lcmdlVHJhbnNsYXRpb25zfSBmcm9tICcuL2V4dHJhY3Rvcl9tZXJnZXInO1xuaW1wb3J0IHtTZXJpYWxpemVyfSBmcm9tICcuL3NlcmlhbGl6ZXJzL3NlcmlhbGl6ZXInO1xuaW1wb3J0IHtYbGlmZn0gZnJvbSAnLi9zZXJpYWxpemVycy94bGlmZic7XG5pbXBvcnQge1hsaWZmMn0gZnJvbSAnLi9zZXJpYWxpemVycy94bGlmZjInO1xuaW1wb3J0IHtYbWJ9IGZyb20gJy4vc2VyaWFsaXplcnMveG1iJztcbmltcG9ydCB7WHRifSBmcm9tICcuL3NlcmlhbGl6ZXJzL3h0Yic7XG5pbXBvcnQge1RyYW5zbGF0aW9uQnVuZGxlfSBmcm9tICcuL3RyYW5zbGF0aW9uX2J1bmRsZSc7XG5cbmV4cG9ydCBjbGFzcyBJMThOSHRtbFBhcnNlciBpbXBsZW1lbnRzIEh0bWxQYXJzZXIge1xuICAvLyBAb3ZlcnJpZGVcbiAgZ2V0VGFnRGVmaW5pdGlvbjogYW55O1xuXG4gIHByaXZhdGUgX3RyYW5zbGF0aW9uQnVuZGxlOiBUcmFuc2xhdGlvbkJ1bmRsZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX2h0bWxQYXJzZXI6IEh0bWxQYXJzZXIsIHRyYW5zbGF0aW9ucz86IHN0cmluZywgdHJhbnNsYXRpb25zRm9ybWF0Pzogc3RyaW5nLFxuICAgICAgbWlzc2luZ1RyYW5zbGF0aW9uOiBNaXNzaW5nVHJhbnNsYXRpb25TdHJhdGVneSA9IE1pc3NpbmdUcmFuc2xhdGlvblN0cmF0ZWd5Lldhcm5pbmcsXG4gICAgICBjb25zb2xlPzogQ29uc29sZSkge1xuICAgIGlmICh0cmFuc2xhdGlvbnMpIHtcbiAgICAgIGNvbnN0IHNlcmlhbGl6ZXIgPSBjcmVhdGVTZXJpYWxpemVyKHRyYW5zbGF0aW9uc0Zvcm1hdCk7XG4gICAgICB0aGlzLl90cmFuc2xhdGlvbkJ1bmRsZSA9XG4gICAgICAgICAgVHJhbnNsYXRpb25CdW5kbGUubG9hZCh0cmFuc2xhdGlvbnMsICdpMThuJywgc2VyaWFsaXplciwgbWlzc2luZ1RyYW5zbGF0aW9uLCBjb25zb2xlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdHJhbnNsYXRpb25CdW5kbGUgPVxuICAgICAgICAgIG5ldyBUcmFuc2xhdGlvbkJ1bmRsZSh7fSwgbnVsbCwgZGlnZXN0LCB1bmRlZmluZWQsIG1pc3NpbmdUcmFuc2xhdGlvbiwgY29uc29sZSk7XG4gICAgfVxuICB9XG5cbiAgcGFyc2Uoc291cmNlOiBzdHJpbmcsIHVybDogc3RyaW5nLCBvcHRpb25zOiBUb2tlbml6ZU9wdGlvbnMgPSB7fSk6IFBhcnNlVHJlZVJlc3VsdCB7XG4gICAgY29uc3QgaW50ZXJwb2xhdGlvbkNvbmZpZyA9IG9wdGlvbnMuaW50ZXJwb2xhdGlvbkNvbmZpZyB8fCBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHO1xuICAgIGNvbnN0IHBhcnNlUmVzdWx0ID0gdGhpcy5faHRtbFBhcnNlci5wYXJzZShzb3VyY2UsIHVybCwge2ludGVycG9sYXRpb25Db25maWcsIC4uLm9wdGlvbnN9KTtcblxuICAgIGlmIChwYXJzZVJlc3VsdC5lcnJvcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbmV3IFBhcnNlVHJlZVJlc3VsdChwYXJzZVJlc3VsdC5yb290Tm9kZXMsIHBhcnNlUmVzdWx0LmVycm9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlVHJhbnNsYXRpb25zKFxuICAgICAgICBwYXJzZVJlc3VsdC5yb290Tm9kZXMsIHRoaXMuX3RyYW5zbGF0aW9uQnVuZGxlLCBpbnRlcnBvbGF0aW9uQ29uZmlnLCBbXSwge30pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlcmlhbGl6ZXIoZm9ybWF0Pzogc3RyaW5nKTogU2VyaWFsaXplciB7XG4gIGZvcm1hdCA9IChmb3JtYXQgfHwgJ3hsZicpLnRvTG93ZXJDYXNlKCk7XG5cbiAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICBjYXNlICd4bWInOlxuICAgICAgcmV0dXJuIG5ldyBYbWIoKTtcbiAgICBjYXNlICd4dGInOlxuICAgICAgcmV0dXJuIG5ldyBYdGIoKTtcbiAgICBjYXNlICd4bGlmZjInOlxuICAgIGNhc2UgJ3hsZjInOlxuICAgICAgcmV0dXJuIG5ldyBYbGlmZjIoKTtcbiAgICBjYXNlICd4bGlmZic6XG4gICAgY2FzZSAneGxmJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG5ldyBYbGlmZigpO1xuICB9XG59XG4iXX0=