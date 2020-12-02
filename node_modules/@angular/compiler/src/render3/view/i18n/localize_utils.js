(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/render3/view/i18n/localize_utils", ["require", "exports", "tslib", "@angular/compiler/src/output/output_ast", "@angular/compiler/src/render3/view/i18n/icu_serializer", "@angular/compiler/src/render3/view/i18n/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var o = require("@angular/compiler/src/output/output_ast");
    var icu_serializer_1 = require("@angular/compiler/src/render3/view/i18n/icu_serializer");
    var util_1 = require("@angular/compiler/src/render3/view/i18n/util");
    function createLocalizeStatements(variable, message, params) {
        var statements = [];
        var _a = serializeI18nMessageForLocalize(message), messageParts = _a.messageParts, placeHolders = _a.placeHolders;
        statements.push(new o.ExpressionStatement(variable.set(o.localizedString(message, messageParts, placeHolders, placeHolders.map(function (ph) { return params[ph]; })))));
        return statements;
    }
    exports.createLocalizeStatements = createLocalizeStatements;
    var MessagePiece = /** @class */ (function () {
        function MessagePiece(text) {
            this.text = text;
        }
        return MessagePiece;
    }());
    var LiteralPiece = /** @class */ (function (_super) {
        tslib_1.__extends(LiteralPiece, _super);
        function LiteralPiece() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return LiteralPiece;
    }(MessagePiece));
    var PlaceholderPiece = /** @class */ (function (_super) {
        tslib_1.__extends(PlaceholderPiece, _super);
        function PlaceholderPiece(name) {
            return _super.call(this, util_1.formatI18nPlaceholderName(name, /* useCamelCase */ false)) || this;
        }
        return PlaceholderPiece;
    }(MessagePiece));
    /**
     * This visitor walks over an i18n tree, capturing literal strings and placeholders.
     *
     * The result can be used for generating the `$localize` tagged template literals.
     */
    var LocalizeSerializerVisitor = /** @class */ (function () {
        function LocalizeSerializerVisitor() {
        }
        LocalizeSerializerVisitor.prototype.visitText = function (text, context) {
            if (context[context.length - 1] instanceof LiteralPiece) {
                // Two literal pieces in a row means that there was some comment node in-between.
                context[context.length - 1].text += text.value;
            }
            else {
                context.push(new LiteralPiece(text.value));
            }
        };
        LocalizeSerializerVisitor.prototype.visitContainer = function (container, context) {
            var _this = this;
            container.children.forEach(function (child) { return child.visit(_this, context); });
        };
        LocalizeSerializerVisitor.prototype.visitIcu = function (icu, context) {
            context.push(new LiteralPiece(icu_serializer_1.serializeIcuNode(icu)));
        };
        LocalizeSerializerVisitor.prototype.visitTagPlaceholder = function (ph, context) {
            var _this = this;
            context.push(new PlaceholderPiece(ph.startName));
            if (!ph.isVoid) {
                ph.children.forEach(function (child) { return child.visit(_this, context); });
                context.push(new PlaceholderPiece(ph.closeName));
            }
        };
        LocalizeSerializerVisitor.prototype.visitPlaceholder = function (ph, context) {
            context.push(new PlaceholderPiece(ph.name));
        };
        LocalizeSerializerVisitor.prototype.visitIcuPlaceholder = function (ph, context) {
            context.push(new PlaceholderPiece(ph.name));
        };
        return LocalizeSerializerVisitor;
    }());
    var serializerVisitor = new LocalizeSerializerVisitor();
    /**
     * Serialize an i18n message into two arrays: messageParts and placeholders.
     *
     * These arrays will be used to generate `$localize` tagged template literals.
     *
     * @param message The message to be serialized.
     * @returns an object containing the messageParts and placeholders.
     */
    function serializeI18nMessageForLocalize(message) {
        var pieces = [];
        message.nodes.forEach(function (node) { return node.visit(serializerVisitor, pieces); });
        return processMessagePieces(pieces);
    }
    exports.serializeI18nMessageForLocalize = serializeI18nMessageForLocalize;
    /**
     * Convert the list of serialized MessagePieces into two arrays.
     *
     * One contains the literal string pieces and the other the placeholders that will be replaced by
     * expressions when rendering `$localize` tagged template literals.
     *
     * @param pieces The pieces to process.
     * @returns an object containing the messageParts and placeholders.
     */
    function processMessagePieces(pieces) {
        var messageParts = [];
        var placeHolders = [];
        if (pieces[0] instanceof PlaceholderPiece) {
            // The first piece was a placeholder so we need to add an initial empty message part.
            messageParts.push('');
        }
        for (var i = 0; i < pieces.length; i++) {
            var part = pieces[i];
            if (part instanceof LiteralPiece) {
                messageParts.push(part.text);
            }
            else {
                placeHolders.push(part.text);
                if (pieces[i - 1] instanceof PlaceholderPiece) {
                    // There were two placeholders in a row, so we need to add an empty message part.
                    messageParts.push('');
                }
            }
        }
        if (pieces[pieces.length - 1] instanceof PlaceholderPiece) {
            // The last piece was a placeholder so we need to add a final empty message part.
            messageParts.push('');
        }
        return { messageParts: messageParts, placeHolders: placeHolders };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxpemVfdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvcmVuZGVyMy92aWV3L2kxOG4vbG9jYWxpemVfdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBUUEsMkRBQWdEO0lBRWhELHlGQUFrRDtJQUNsRCxxRUFBaUQ7SUFFakQsU0FBZ0Isd0JBQXdCLENBQ3BDLFFBQXVCLEVBQUUsT0FBcUIsRUFDOUMsTUFBc0M7UUFDeEMsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCLElBQUEsNkNBQXVFLEVBQXRFLDhCQUFZLEVBQUUsOEJBQXdELENBQUM7UUFDOUUsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUNsRCxDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQVYsQ0FBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsRyxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBVkQsNERBVUM7SUFFRDtRQUNFLHNCQUFtQixJQUFZO1lBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFHLENBQUM7UUFDckMsbUJBQUM7SUFBRCxDQUFDLEFBRkQsSUFFQztJQUNEO1FBQTJCLHdDQUFZO1FBQXZDOztRQUF5QyxDQUFDO1FBQUQsbUJBQUM7SUFBRCxDQUFDLEFBQTFDLENBQTJCLFlBQVksR0FBRztJQUMxQztRQUErQiw0Q0FBWTtRQUN6QywwQkFBWSxJQUFZO21CQUN0QixrQkFBTSxnQ0FBeUIsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEUsQ0FB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cUY7WUFDckYsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN2QjtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLElBQUksWUFBWSxZQUFZLEVBQUU7Z0JBQ2hDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlCO2lCQUFNO2dCQUNMLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixJQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksZ0JBQWdCLEVBQUU7b0JBQzdDLGlGQUFpRjtvQkFDakYsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDdkI7YUFDRjtTQUNGO1FBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsWUFBWSxnQkFBZ0IsRUFBRTtZQUN6RCxpRkFBaUY7WUFDakYsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN2QjtRQUNELE9BQU8sRUFBQyxZQUFZLGNBQUEsRUFBRSxZQUFZLGNBQUEsRUFBQyxDQUFDO0lBQ3RDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgKiBhcyBpMThuIGZyb20gJy4uLy4uLy4uL2kxOG4vaTE4bl9hc3QnO1xuaW1wb3J0ICogYXMgbyBmcm9tICcuLi8uLi8uLi9vdXRwdXQvb3V0cHV0X2FzdCc7XG5cbmltcG9ydCB7c2VyaWFsaXplSWN1Tm9kZX0gZnJvbSAnLi9pY3Vfc2VyaWFsaXplcic7XG5pbXBvcnQge2Zvcm1hdEkxOG5QbGFjZWhvbGRlck5hbWV9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2NhbGl6ZVN0YXRlbWVudHMoXG4gICAgdmFyaWFibGU6IG8uUmVhZFZhckV4cHIsIG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSxcbiAgICBwYXJhbXM6IHtbbmFtZTogc3RyaW5nXTogby5FeHByZXNzaW9ufSk6IG8uU3RhdGVtZW50W10ge1xuICBjb25zdCBzdGF0ZW1lbnRzID0gW107XG5cbiAgY29uc3Qge21lc3NhZ2VQYXJ0cywgcGxhY2VIb2xkZXJzfSA9IHNlcmlhbGl6ZUkxOG5NZXNzYWdlRm9yTG9jYWxpemUobWVzc2FnZSk7XG4gIHN0YXRlbWVudHMucHVzaChuZXcgby5FeHByZXNzaW9uU3RhdGVtZW50KHZhcmlhYmxlLnNldChcbiAgICAgIG8ubG9jYWxpemVkU3RyaW5nKG1lc3NhZ2UsIG1lc3NhZ2VQYXJ0cywgcGxhY2VIb2xkZXJzLCBwbGFjZUhvbGRlcnMubWFwKHBoID0+IHBhcmFtc1twaF0pKSkpKTtcblxuICByZXR1cm4gc3RhdGVtZW50cztcbn1cblxuY2xhc3MgTWVzc2FnZVBpZWNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHRleHQ6IHN0cmluZykge31cbn1cbmNsYXNzIExpdGVyYWxQaWVjZSBleHRlbmRzIE1lc3NhZ2VQaWVjZSB7fVxuY2xhc3MgUGxhY2Vob2xkZXJQaWVjZSBleHRlbmRzIE1lc3NhZ2VQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKGZvcm1hdEkxOG5QbGFjZWhvbGRlck5hbWUobmFtZSwgLyogdXNlQ2FtZWxDYXNlICovIGZhbHNlKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIHZpc2l0b3Igd2Fsa3Mgb3ZlciBhbiBpMThuIHRyZWUsIGNhcHR1cmluZyBsaXRlcmFsIHN0cmluZ3MgYW5kIHBsYWNlaG9sZGVycy5cbiAqXG4gKiBUaGUgcmVzdWx0IGNhbiBiZSB1c2VkIGZvciBnZW5lcmF0aW5nIHRoZSBgJGxvY2FsaXplYCB0YWdnZWQgdGVtcGxhdGUgbGl0ZXJhbHMuXG4gKi9cbmNsYXNzIExvY2FsaXplU2VyaWFsaXplclZpc2l0b3IgaW1wbGVtZW50cyBpMThuLlZpc2l0b3Ige1xuICB2aXNpdFRleHQodGV4dDogaTE4bi5UZXh0LCBjb250ZXh0OiBNZXNzYWdlUGllY2VbXSk6IGFueSB7XG4gICAgaWYgKGNvbnRleHRbY29udGV4dC5sZW5ndGggLSAxXSBpbnN0YW5jZW9mIExpdGVyYWxQaWVjZSkge1xuICAgICAgLy8gVHdvIGxpdGVyYWwgcGllY2VzIGluIGEgcm93IG1lYW5zIHRoYXQgdGhlcmUgd2FzIHNvbWUgY29tbWVudCBub2RlIGluLWJldHdlZW4uXG4gICAgICBjb250ZXh0W2NvbnRleHQubGVuZ3RoIC0gMV0udGV4dCArPSB0ZXh0LnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LnB1c2gobmV3IExpdGVyYWxQaWVjZSh0ZXh0LnZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBpMThuLkNvbnRhaW5lciwgY29udGV4dDogTWVzc2FnZVBpZWNlW10pOiBhbnkge1xuICAgIGNvbnRhaW5lci5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnZpc2l0KHRoaXMsIGNvbnRleHQpKTtcbiAgfVxuXG4gIHZpc2l0SWN1KGljdTogaTE4bi5JY3UsIGNvbnRleHQ6IE1lc3NhZ2VQaWVjZVtdKTogYW55IHtcbiAgICBjb250ZXh0LnB1c2gobmV3IExpdGVyYWxQaWVjZShzZXJpYWxpemVJY3VOb2RlKGljdSkpKTtcbiAgfVxuXG4gIHZpc2l0VGFnUGxhY2Vob2xkZXIocGg6IGkxOG4uVGFnUGxhY2Vob2xkZXIsIGNvbnRleHQ6IE1lc3NhZ2VQaWVjZVtdKTogYW55IHtcbiAgICBjb250ZXh0LnB1c2gobmV3IFBsYWNlaG9sZGVyUGllY2UocGguc3RhcnROYW1lKSk7XG4gICAgaWYgKCFwaC5pc1ZvaWQpIHtcbiAgICAgIHBoLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQudmlzaXQodGhpcywgY29udGV4dCkpO1xuICAgICAgY29udGV4dC5wdXNoKG5ldyBQbGFjZWhvbGRlclBpZWNlKHBoLmNsb3NlTmFtZSkpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IGkxOG4uUGxhY2Vob2xkZXIsIGNvbnRleHQ6IE1lc3NhZ2VQaWVjZVtdKTogYW55IHtcbiAgICBjb250ZXh0LnB1c2gobmV3IFBsYWNlaG9sZGVyUGllY2UocGgubmFtZSkpO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgY29udGV4dC5wdXNoKG5ldyBQbGFjZWhvbGRlclBpZWNlKHBoLm5hbWUpKTtcbiAgfVxufVxuXG5jb25zdCBzZXJpYWxpemVyVmlzaXRvciA9IG5ldyBMb2NhbGl6ZVNlcmlhbGl6ZXJWaXNpdG9yKCk7XG5cbi8qKlxuICogU2VyaWFsaXplIGFuIGkxOG4gbWVzc2FnZSBpbnRvIHR3byBhcnJheXM6IG1lc3NhZ2VQYXJ0cyBhbmQgcGxhY2Vob2xkZXJzLlxuICpcbiAqIFRoZXNlIGFycmF5cyB3aWxsIGJlIHVzZWQgdG8gZ2VuZXJhdGUgYCRsb2NhbGl6ZWAgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxzLlxuICpcbiAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGJlIHNlcmlhbGl6ZWQuXG4gKiBAcmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgbWVzc2FnZVBhcnRzIGFuZCBwbGFjZWhvbGRlcnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVJMThuTWVzc2FnZUZvckxvY2FsaXplKG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6XG4gICAge21lc3NhZ2VQYXJ0czogc3RyaW5nW10sIHBsYWNlSG9sZGVyczogc3RyaW5nW119IHtcbiAgY29uc3QgcGllY2VzOiBNZXNzYWdlUGllY2VbXSA9IFtdO1xuICBtZXNzYWdlLm5vZGVzLmZvckVhY2gobm9kZSA9PiBub2RlLnZpc2l0KHNlcmlhbGl6ZXJWaXNpdG9yLCBwaWVjZXMpKTtcbiAgcmV0dXJuIHByb2Nlc3NNZXNzYWdlUGllY2VzKHBpZWNlcyk7XG59XG5cbi8qKlxuICogQ29udmVydCB0aGUgbGlzdCBvZiBzZXJpYWxpemVkIE1lc3NhZ2VQaWVjZXMgaW50byB0d28gYXJyYXlzLlxuICpcbiAqIE9uZSBjb250YWlucyB0aGUgbGl0ZXJhbCBzdHJpbmcgcGllY2VzIGFuZCB0aGUgb3RoZXIgdGhlIHBsYWNlaG9sZGVycyB0aGF0IHdpbGwgYmUgcmVwbGFjZWQgYnlcbiAqIGV4cHJlc3Npb25zIHdoZW4gcmVuZGVyaW5nIGAkbG9jYWxpemVgIHRhZ2dlZCB0ZW1wbGF0ZSBsaXRlcmFscy5cbiAqXG4gKiBAcGFyYW0gcGllY2VzIFRoZSBwaWVjZXMgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBtZXNzYWdlUGFydHMgYW5kIHBsYWNlaG9sZGVycy5cbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc01lc3NhZ2VQaWVjZXMocGllY2VzOiBNZXNzYWdlUGllY2VbXSk6XG4gICAge21lc3NhZ2VQYXJ0czogc3RyaW5nW10sIHBsYWNlSG9sZGVyczogc3RyaW5nW119IHtcbiAgY29uc3QgbWVzc2FnZVBhcnRzOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCBwbGFjZUhvbGRlcnM6IHN0cmluZ1tdID0gW107XG5cbiAgaWYgKHBpZWNlc1swXSBpbnN0YW5jZW9mIFBsYWNlaG9sZGVyUGllY2UpIHtcbiAgICAvLyBUaGUgZmlyc3QgcGllY2Ugd2FzIGEgcGxhY2Vob2xkZXIgc28gd2UgbmVlZCB0byBhZGQgYW4gaW5pdGlhbCBlbXB0eSBtZXNzYWdlIHBhcnQuXG4gICAgbWVzc2FnZVBhcnRzLnB1c2goJycpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwaWVjZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwYXJ0ID0gcGllY2VzW2ldO1xuICAgIGlmIChwYXJ0IGluc3RhbmNlb2YgTGl0ZXJhbFBpZWNlKSB7XG4gICAgICBtZXNzYWdlUGFydHMucHVzaChwYXJ0LnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGFjZUhvbGRlcnMucHVzaChwYXJ0LnRleHQpO1xuICAgICAgaWYgKHBpZWNlc1tpIC0gMV0gaW5zdGFuY2VvZiBQbGFjZWhvbGRlclBpZWNlKSB7XG4gICAgICAgIC8vIFRoZXJlIHdlcmUgdHdvIHBsYWNlaG9sZGVycyBpbiBhIHJvdywgc28gd2UgbmVlZCB0byBhZGQgYW4gZW1wdHkgbWVzc2FnZSBwYXJ0LlxuICAgICAgICBtZXNzYWdlUGFydHMucHVzaCgnJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChwaWVjZXNbcGllY2VzLmxlbmd0aCAtIDFdIGluc3RhbmNlb2YgUGxhY2Vob2xkZXJQaWVjZSkge1xuICAgIC8vIFRoZSBsYXN0IHBpZWNlIHdhcyBhIHBsYWNlaG9sZGVyIHNvIHdlIG5lZWQgdG8gYWRkIGEgZmluYWwgZW1wdHkgbWVzc2FnZSBwYXJ0LlxuICAgIG1lc3NhZ2VQYXJ0cy5wdXNoKCcnKTtcbiAgfVxuICByZXR1cm4ge21lc3NhZ2VQYXJ0cywgcGxhY2VIb2xkZXJzfTtcbn1cbiJdfQ==