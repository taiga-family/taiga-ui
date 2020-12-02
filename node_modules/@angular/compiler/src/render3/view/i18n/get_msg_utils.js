(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler/src/render3/view/i18n/get_msg_utils", ["require", "exports", "@angular/compiler/src/output/map_util", "@angular/compiler/src/output/output_ast", "@angular/compiler/src/render3/view/i18n/icu_serializer", "@angular/compiler/src/render3/view/i18n/meta", "@angular/compiler/src/render3/view/i18n/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var map_util_1 = require("@angular/compiler/src/output/map_util");
    var o = require("@angular/compiler/src/output/output_ast");
    var icu_serializer_1 = require("@angular/compiler/src/render3/view/i18n/icu_serializer");
    var meta_1 = require("@angular/compiler/src/render3/view/i18n/meta");
    var util_1 = require("@angular/compiler/src/render3/view/i18n/util");
    /** Closure uses `goog.getMsg(message)` to lookup translations */
    var GOOG_GET_MSG = 'goog.getMsg';
    function createGoogleGetMsgStatements(variable, message, closureVar, params) {
        var messageString = serializeI18nMessageForGetMsg(message);
        var args = [o.literal(messageString)];
        if (Object.keys(params).length) {
            args.push(map_util_1.mapLiteral(params, true));
        }
        // /**
        //  * @desc description of message
        //  * @meaning meaning of message
        //  */
        // const MSG_... = goog.getMsg(..);
        // I18N_X = MSG_...;
        var statements = [];
        var jsdocComment = meta_1.i18nMetaToDocStmt(message);
        if (jsdocComment !== null) {
            statements.push(jsdocComment);
        }
        statements.push(closureVar.set(o.variable(GOOG_GET_MSG).callFn(args)).toConstDecl());
        statements.push(new o.ExpressionStatement(variable.set(closureVar)));
        return statements;
    }
    exports.createGoogleGetMsgStatements = createGoogleGetMsgStatements;
    /**
     * This visitor walks over i18n tree and generates its string representation, including ICUs and
     * placeholders in `{$placeholder}` (for plain messages) or `{PLACEHOLDER}` (inside ICUs) format.
     */
    var GetMsgSerializerVisitor = /** @class */ (function () {
        function GetMsgSerializerVisitor() {
        }
        GetMsgSerializerVisitor.prototype.formatPh = function (value) {
            return "{$" + util_1.formatI18nPlaceholderName(value) + "}";
        };
        GetMsgSerializerVisitor.prototype.visitText = function (text) {
            return text.value;
        };
        GetMsgSerializerVisitor.prototype.visitContainer = function (container) {
            var _this = this;
            return container.children.map(function (child) { return child.visit(_this); }).join('');
        };
        GetMsgSerializerVisitor.prototype.visitIcu = function (icu) {
            return icu_serializer_1.serializeIcuNode(icu);
        };
        GetMsgSerializerVisitor.prototype.visitTagPlaceholder = function (ph) {
            var _this = this;
            return ph.isVoid ?
                this.formatPh(ph.startName) :
                "" + this.formatPh(ph.startName) + ph.children.map(function (child) { return child.visit(_this); }).join('') + this.formatPh(ph.closeName);
        };
        GetMsgSerializerVisitor.prototype.visitPlaceholder = function (ph) {
            return this.formatPh(ph.name);
        };
        GetMsgSerializerVisitor.prototype.visitIcuPlaceholder = function (ph, context) {
            return this.formatPh(ph.name);
        };
        return GetMsgSerializerVisitor;
    }());
    var serializerVisitor = new GetMsgSerializerVisitor();
    function serializeI18nMessageForGetMsg(message) {
        return message.nodes.map(function (node) { return node.visit(serializerVisitor, null); }).join('');
    }
    exports.serializeI18nMessageForGetMsg = serializeI18nMessageForGetMsg;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0X21zZ191dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9yZW5kZXIzL3ZpZXcvaTE4bi9nZXRfbXNnX3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBUUEsa0VBQW9EO0lBQ3BELDJEQUFnRDtJQUVoRCx5RkFBa0Q7SUFDbEQscUVBQXlDO0lBQ3pDLHFFQUFpRDtJQUVqRCxpRUFBaUU7SUFDakUsSUFBTSxZQUFZLEdBQUcsYUFBYSxDQUFDO0lBRW5DLFNBQWdCLDRCQUE0QixDQUN4QyxRQUF1QixFQUFFLE9BQXFCLEVBQUUsVUFBeUIsRUFDekUsTUFBc0M7UUFDeEMsSUFBTSxhQUFhLEdBQUcsNkJBQTZCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0QsSUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBaUIsQ0FBQyxDQUFDO1FBQ3hELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3JDO1FBRUQsTUFBTTtRQUNOLGtDQUFrQztRQUNsQyxpQ0FBaUM7UUFDakMsTUFBTTtRQUNOLG1DQUFtQztRQUNuQyxvQkFBb0I7UUFDcEIsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQU0sWUFBWSxHQUFHLHdCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksWUFBWSxLQUFLLElBQUksRUFBRTtZQUN6QixVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNyRixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXJFLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUF4QkQsb0VBd0JDO0lBRUQ7OztPQUdHO0lBQ0g7UUFBQTtRQStCQSxDQUFDO1FBOUJTLDBDQUFRLEdBQWhCLFVBQWlCLEtBQWE7WUFDNUIsT0FBTyxPQUFLLGdDQUF5QixDQUFDLEtBQUssQ0FBQyxNQUFHLENBQUM7UUFDbEQsQ0FBQztRQUVELDJDQUFTLEdBQVQsVUFBVSxJQUFlO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDO1FBRUQsZ0RBQWMsR0FBZCxVQUFlLFNBQXlCO1lBQXhDLGlCQUVDO1lBREMsT0FBTyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckUsQ0FBQztRQUVELDBDQUFRLEdBQVIsVUFBUyxHQUFhO1lBQ3BCLE9BQU8saUNBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUVELHFEQUFtQixHQUFuQixVQUFvQixFQUF1QjtZQUEzQyxpQkFLQztZQUpDLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEtBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUNqRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUcsQ0FBQztRQUN4QyxDQUFDO1FBRUQsa0RBQWdCLEdBQWhCLFVBQWlCLEVBQW9CO1lBQ25DLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUVELHFEQUFtQixHQUFuQixVQUFvQixFQUF1QixFQUFFLE9BQWE7WUFDeEQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBQ0gsOEJBQUM7SUFBRCxDQUFDLEFBL0JELElBK0JDO0lBRUQsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7SUFFeEQsU0FBZ0IsNkJBQTZCLENBQUMsT0FBcUI7UUFDakUsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUZELHNFQUVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuaW1wb3J0ICogYXMgaTE4biBmcm9tICcuLi8uLi8uLi9pMThuL2kxOG5fYXN0JztcbmltcG9ydCB7bWFwTGl0ZXJhbH0gZnJvbSAnLi4vLi4vLi4vb3V0cHV0L21hcF91dGlsJztcbmltcG9ydCAqIGFzIG8gZnJvbSAnLi4vLi4vLi4vb3V0cHV0L291dHB1dF9hc3QnO1xuXG5pbXBvcnQge3NlcmlhbGl6ZUljdU5vZGV9IGZyb20gJy4vaWN1X3NlcmlhbGl6ZXInO1xuaW1wb3J0IHtpMThuTWV0YVRvRG9jU3RtdH0gZnJvbSAnLi9tZXRhJztcbmltcG9ydCB7Zm9ybWF0STE4blBsYWNlaG9sZGVyTmFtZX0gZnJvbSAnLi91dGlsJztcblxuLyoqIENsb3N1cmUgdXNlcyBgZ29vZy5nZXRNc2cobWVzc2FnZSlgIHRvIGxvb2t1cCB0cmFuc2xhdGlvbnMgKi9cbmNvbnN0IEdPT0dfR0VUX01TRyA9ICdnb29nLmdldE1zZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHb29nbGVHZXRNc2dTdGF0ZW1lbnRzKFxuICAgIHZhcmlhYmxlOiBvLlJlYWRWYXJFeHByLCBtZXNzYWdlOiBpMThuLk1lc3NhZ2UsIGNsb3N1cmVWYXI6IG8uUmVhZFZhckV4cHIsXG4gICAgcGFyYW1zOiB7W25hbWU6IHN0cmluZ106IG8uRXhwcmVzc2lvbn0pOiBvLlN0YXRlbWVudFtdIHtcbiAgY29uc3QgbWVzc2FnZVN0cmluZyA9IHNlcmlhbGl6ZUkxOG5NZXNzYWdlRm9yR2V0TXNnKG1lc3NhZ2UpO1xuICBjb25zdCBhcmdzID0gW28ubGl0ZXJhbChtZXNzYWdlU3RyaW5nKSBhcyBvLkV4cHJlc3Npb25dO1xuICBpZiAoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGgpIHtcbiAgICBhcmdzLnB1c2gobWFwTGl0ZXJhbChwYXJhbXMsIHRydWUpKTtcbiAgfVxuXG4gIC8vIC8qKlxuICAvLyAgKiBAZGVzYyBkZXNjcmlwdGlvbiBvZiBtZXNzYWdlXG4gIC8vICAqIEBtZWFuaW5nIG1lYW5pbmcgb2YgbWVzc2FnZVxuICAvLyAgKi9cbiAgLy8gY29uc3QgTVNHXy4uLiA9IGdvb2cuZ2V0TXNnKC4uKTtcbiAgLy8gSTE4Tl9YID0gTVNHXy4uLjtcbiAgY29uc3Qgc3RhdGVtZW50cyA9IFtdO1xuICBjb25zdCBqc2RvY0NvbW1lbnQgPSBpMThuTWV0YVRvRG9jU3RtdChtZXNzYWdlKTtcbiAgaWYgKGpzZG9jQ29tbWVudCAhPT0gbnVsbCkge1xuICAgIHN0YXRlbWVudHMucHVzaChqc2RvY0NvbW1lbnQpO1xuICB9XG4gIHN0YXRlbWVudHMucHVzaChjbG9zdXJlVmFyLnNldChvLnZhcmlhYmxlKEdPT0dfR0VUX01TRykuY2FsbEZuKGFyZ3MpKS50b0NvbnN0RGVjbCgpKTtcbiAgc3RhdGVtZW50cy5wdXNoKG5ldyBvLkV4cHJlc3Npb25TdGF0ZW1lbnQodmFyaWFibGUuc2V0KGNsb3N1cmVWYXIpKSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudHM7XG59XG5cbi8qKlxuICogVGhpcyB2aXNpdG9yIHdhbGtzIG92ZXIgaTE4biB0cmVlIGFuZCBnZW5lcmF0ZXMgaXRzIHN0cmluZyByZXByZXNlbnRhdGlvbiwgaW5jbHVkaW5nIElDVXMgYW5kXG4gKiBwbGFjZWhvbGRlcnMgaW4gYHskcGxhY2Vob2xkZXJ9YCAoZm9yIHBsYWluIG1lc3NhZ2VzKSBvciBge1BMQUNFSE9MREVSfWAgKGluc2lkZSBJQ1VzKSBmb3JtYXQuXG4gKi9cbmNsYXNzIEdldE1zZ1NlcmlhbGl6ZXJWaXNpdG9yIGltcGxlbWVudHMgaTE4bi5WaXNpdG9yIHtcbiAgcHJpdmF0ZSBmb3JtYXRQaCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYHskJHtmb3JtYXRJMThuUGxhY2Vob2xkZXJOYW1lKHZhbHVlKX19YDtcbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiBpMThuLlRleHQpOiBhbnkge1xuICAgIHJldHVybiB0ZXh0LnZhbHVlO1xuICB9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBpMThuLkNvbnRhaW5lcik6IGFueSB7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQudmlzaXQodGhpcykpLmpvaW4oJycpO1xuICB9XG5cbiAgdmlzaXRJY3UoaWN1OiBpMThuLkljdSk6IGFueSB7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZUljdU5vZGUoaWN1KTtcbiAgfVxuXG4gIHZpc2l0VGFnUGxhY2Vob2xkZXIocGg6IGkxOG4uVGFnUGxhY2Vob2xkZXIpOiBhbnkge1xuICAgIHJldHVybiBwaC5pc1ZvaWQgP1xuICAgICAgICB0aGlzLmZvcm1hdFBoKHBoLnN0YXJ0TmFtZSkgOlxuICAgICAgICBgJHt0aGlzLmZvcm1hdFBoKHBoLnN0YXJ0TmFtZSl9JHtwaC5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQudmlzaXQodGhpcykpLmpvaW4oJycpfSR7XG4gICAgICAgICAgICB0aGlzLmZvcm1hdFBoKHBoLmNsb3NlTmFtZSl9YDtcbiAgfVxuXG4gIHZpc2l0UGxhY2Vob2xkZXIocGg6IGkxOG4uUGxhY2Vob2xkZXIpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmZvcm1hdFBoKHBoLm5hbWUpO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0UGgocGgubmFtZSk7XG4gIH1cbn1cblxuY29uc3Qgc2VyaWFsaXplclZpc2l0b3IgPSBuZXcgR2V0TXNnU2VyaWFsaXplclZpc2l0b3IoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZUkxOG5NZXNzYWdlRm9yR2V0TXNnKG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IHN0cmluZyB7XG4gIHJldHVybiBtZXNzYWdlLm5vZGVzLm1hcChub2RlID0+IG5vZGUudmlzaXQoc2VyaWFsaXplclZpc2l0b3IsIG51bGwpKS5qb2luKCcnKTtcbn1cbiJdfQ==