/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/common/locales/mgo", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        if (n === 1)
            return 1;
        return 5;
    }
    exports.default = [
        'mgo',
        [['AM', 'PM'], u, u],
        u,
        [
            ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7'],
            ['Aneg 1', 'Aneg 2', 'Aneg 3', 'Aneg 4', 'Aneg 5', 'Aneg 6', 'Aneg 7'], u,
            ['1', '2', '3', '4', '5', '6', '7']
        ],
        u,
        [
            ['M1', 'A2', 'M3', 'N4', 'F5', 'I6', 'A7', 'I8', 'K9', '10', '11', '12'],
            [
                'mbegtug', 'imeg àbùbì', 'imeg mbəŋchubi', 'iməg ngwə̀t', 'iməg fog',
                'iməg ichiibɔd', 'iməg àdùmbə̀ŋ', 'iməg ichika', 'iməg kud', 'iməg tèsiʼe',
                'iməg zò', 'iməg krizmed'
            ],
            [
                'iməg mbegtug', 'imeg àbùbì', 'imeg mbəŋchubi', 'iməg ngwə̀t', 'iməg fog',
                'iməg ichiibɔd', 'iməg àdùmbə̀ŋ', 'iməg ichika', 'iməg kud', 'iməg tèsiʼe',
                'iməg zò', 'iməg krizmed'
            ]
        ],
        u,
        [['BCE', 'CE'], u, u],
        1,
        [6, 0],
        ['y-MM-dd', 'y MMM d', 'y MMMM d', 'EEEE, y MMMM dd'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1} {0}', u, u, u],
        ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '¤ #,##0.00', '#E0'],
        'XAF',
        'FCFA',
        'shirè',
        { 'JPY': ['JP¥', '¥'], 'USD': ['US$', '$'] },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWdvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL2xvY2FsZXMvbWdvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgseUNBQXlDO0lBQ3pDLCtDQUErQztJQUUvQyxJQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7SUFFcEIsU0FBUyxNQUFNLENBQUMsQ0FBUztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsa0JBQWU7UUFDYixLQUFLO1FBQ0wsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7UUFDRDtZQUNFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQzFDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUN6RSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztTQUNwQztRQUNELENBQUM7UUFDRDtZQUNFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7WUFDeEU7Z0JBQ0UsU0FBUyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsVUFBVTtnQkFDcEUsZUFBZSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLGFBQWE7Z0JBQzFFLFNBQVMsRUFBRSxjQUFjO2FBQzFCO1lBQ0Q7Z0JBQ0UsY0FBYyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsVUFBVTtnQkFDekUsZUFBZSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLGFBQWE7Z0JBQzFFLFNBQVMsRUFBRSxjQUFjO2FBQzFCO1NBQ0Y7UUFDRCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDTixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixDQUFDO1FBQ3JELENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO1FBQ3BELENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7UUFDOUQsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7UUFDNUMsS0FBSztRQUNMLE1BQU07UUFDTixPQUFPO1FBQ1AsRUFBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFDO1FBQzFDLEtBQUs7UUFDTCxNQUFNO0tBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAobiA9PT0gMSkgcmV0dXJuIDE7XG4gIHJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gICdtZ28nLFxuICBbWydBTScsICdQTSddLCB1LCB1XSxcbiAgdSxcbiAgW1xuICAgIFsnQTEnLCAnQTInLCAnQTMnLCAnQTQnLCAnQTUnLCAnQTYnLCAnQTcnXSxcbiAgICBbJ0FuZWcgMScsICdBbmVnIDInLCAnQW5lZyAzJywgJ0FuZWcgNCcsICdBbmVnIDUnLCAnQW5lZyA2JywgJ0FuZWcgNyddLCB1LFxuICAgIFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNyddXG4gIF0sXG4gIHUsXG4gIFtcbiAgICBbJ00xJywgJ0EyJywgJ00zJywgJ040JywgJ0Y1JywgJ0k2JywgJ0E3JywgJ0k4JywgJ0s5JywgJzEwJywgJzExJywgJzEyJ10sXG4gICAgW1xuICAgICAgJ21iZWd0dWcnLCAnaW1lZyDDoGLDuWLDrCcsICdpbWVnIG1iyZnFi2NodWJpJywgJ2ltyZlnIG5nd8mZzIB0JywgJ2ltyZlnIGZvZycsXG4gICAgICAnaW3JmWcgaWNoaWliyZRkJywgJ2ltyZlnIMOgZMO5bWLJmcyAxYsnLCAnaW3JmWcgaWNoaWthJywgJ2ltyZlnIGt1ZCcsICdpbcmZZyB0w6hzacq8ZScsXG4gICAgICAnaW3JmWcgesOyJywgJ2ltyZlnIGtyaXptZWQnXG4gICAgXSxcbiAgICBbXG4gICAgICAnaW3JmWcgbWJlZ3R1ZycsICdpbWVnIMOgYsO5YsOsJywgJ2ltZWcgbWLJmcWLY2h1YmknLCAnaW3JmWcgbmd3yZnMgHQnLCAnaW3JmWcgZm9nJyxcbiAgICAgICdpbcmZZyBpY2hpaWLJlGQnLCAnaW3JmWcgw6Bkw7ltYsmZzIDFiycsICdpbcmZZyBpY2hpa2EnLCAnaW3JmWcga3VkJywgJ2ltyZlnIHTDqHNpyrxlJyxcbiAgICAgICdpbcmZZyB6w7InLCAnaW3JmWcga3Jpem1lZCdcbiAgICBdXG4gIF0sXG4gIHUsXG4gIFtbJ0JDRScsICdDRSddLCB1LCB1XSxcbiAgMSxcbiAgWzYsIDBdLFxuICBbJ3ktTU0tZGQnLCAneSBNTU0gZCcsICd5IE1NTU0gZCcsICdFRUVFLCB5IE1NTU0gZGQnXSxcbiAgWydISDptbScsICdISDptbTpzcycsICdISDptbTpzcyB6JywgJ0hIOm1tOnNzIHp6enonXSxcbiAgWyd7MX0gezB9JywgdSwgdSwgdV0sXG4gIFsnLicsICcsJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfDlycsICfigLAnLCAn4oieJywgJ05hTicsICc6J10sXG4gIFsnIywjIzAuIyMjJywgJyMsIyMwJScsICfCpMKgIywjIzAuMDAnLCAnI0UwJ10sXG4gICdYQUYnLFxuICAnRkNGQScsXG4gICdzaGlyw6gnLFxuICB7J0pQWSc6IFsnSlDCpScsICfCpSddLCAnVVNEJzogWydVUyQnLCAnJCddfSxcbiAgJ2x0cicsXG4gIHBsdXJhbFxuXTtcbiJdfQ==