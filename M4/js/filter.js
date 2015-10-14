window.Zepto = window.Zepto || window.jQuery, function(i) {
    "use strict";
    window.WapFilter = window.WapFilter || {init: function() {
            var e = this;
            e.swiperInit(), i(".shop_one_box,.brand_one_box,.category_one_box").on("click", function() {
                i(this).hasClass("checked") ? i(this).removeClass("checked") : i(this).addClass("checked")
            }), i("#submit-btn").on("click", function() {
                e.submit()
            }), i("#reset-btn").on("click", function() {
                e.reset()
            })
        },swiperInit: function() {
            new Swiper(".shop_wrap", {direction: "horizontal",pagination: ".shop_swiper_pagination",paginationClickable: !0}), new Swiper(".brand_wrap", {direction: "horizontal",pagination: ".brand_swiper_pagination",paginationClickable: !0}), new Swiper(".category_wrap", {direction: "horizontal",pagination: ".category_swiper_pagination",paginationClickable: !0})
        },submit: function() {
            var e = [], a = [], n = [], o = "", t = "", r = i(".shop_one_box").filter(".checked"), c = i(".brand_one_box").filter(".checked"), s = i(".category_one_box").filter(".checked");
            if (o = i("#from_price").val(), t = i("#to_price").val(), i.each(r, function() {
                var a = i(this).attr("data-source");
                a && e.push(a)
            }), i.each(c, function() {
                var e = i(this).attr("data-brand");
                e && a.push(e)
            }), i.each(s, function() {
                var e = i(this).attr("data-category");
                e && n.push(e)
            }), "" != o) {
                var p = /^[0-9]+.?[0-9]*$/;
                i("#priceFrom").val(p.test(o) ? o : "")
            }
            if ("" != t) {
                var p = /^[0-9]+.?[0-9]*$/;
                i("#priceTo").val(p.test(t) ? t : "")
            }
            "" == i("#frms #sourceValue").val() && i("#frms #sourceValue").val(e.join(",")), i("#frms #brandValue").val(a.join(",")), i("#frms #categoryValue").val(n.join(","))
        },reset: function() {
            i(".checked").removeClass("checked")
        }}
}(Zepto);
