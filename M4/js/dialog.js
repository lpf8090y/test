window.jQuery = window.jQuery || window.Zepto, function(i) {
    "use strict";
    var o = function(o, t) {
        var n = this;
        n.settings = {id: "0",btn_num: 1,type: 0,btn_1_text: "确认",btn_2_text: "取消",dialog_content: "",dialog_has_input: !1,dialog_input_html: "",xbb_img_type: 4,fade: !1,exit_btn: !1,confirm_fn: function() {
                return n.dialogHide()
            },confirm_fn_wap: function() {
                return n.dialogHide()
            },cancel_fn: function() {
                return n.dialogHide()
            },cancel_fn_wap: function() {
                return n.dialogHide()
            },exit_fn: function() {
                return n.dialogHide()
            }}, n.o = i.extend({}, this.settings, t), n.o.type <= 2 && (n.o.type = n.o.btn_num)
    };
    o.prototype = {dialogSet: function() {
            var o = this;
            if (i("#" + o.o.id).length > 0)
                return i("#" + o.o.id);
            var t = '<div id="' + o.o.id + '" class="dialog"><div class="dialog_wrap"><div class="dialog_content"><p>' + o.o.dialog_content + "</p>";
            o.o.dialog_has_input && (t += '<div class="dialog_content_input">' + o.o.dialog_input_html + "</div>"), t += '</div><div class="dialog_btns_wrap">', t += 2 === o.o.btn_num ? '<a class="dialog_btns dialog_btn_1">' + o.o.btn_1_text + '</a><a class="dialog_btns dialog_btn_2">' + o.o.btn_2_text + "</a>" : '<a class="dialog_btn dialog_btn_1">' + o.o.btn_1_text + "</a>", t += '</div></div><div class="dialog_xbb" style="background-image:url(http://static-web.b5m.com/wap/img/common/dialog/dialog_xbb_' + o.o.xbb_img_type + '.png)" ></div>', o.o.exit_btn && (t += '<div class="dialog_exit" ></div>'), t += '</div><div class="dialog_bg" ></div>', i("body").append(t);
            var n = i("#" + o.o.id);
            return n.find(".dialog_btn_1").on("click", function() {
                o.o.type <= 2 ? o.o.confirm_fn() : o.o.confirm_fn_wap(), o.o.exit_fn()
            }), n.find(".dialog_btn_2").on("click", function() {
                o.o.type <= 2 ? o.o.cancel_fn() : o.o.cancel_fn_wap()
            }), n.find(".dialog_exit").on("click", o.o.exit_fn), i(".dialog_bg").on("click", o.o.exit_fn), n
        },dialogShow: function() {
            i(".dialog_bg").show(), this.o.fade ? this.dialogSet().fadeIn() : this.dialogSet().show()
        },dialogHide: function() {
            this.o.fade ? this.dialogSet().fadeOut() : this.dialogSet().remove(), i(".dialog_bg").remove()
        }}, i.fn.b5m_dialog = function(i) {
        var t = new o(this, i);
        return t.dialogShow()
    }
}(window.jQuery);
