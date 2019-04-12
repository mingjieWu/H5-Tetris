(function(document) {

    function DomObject(dom) {
        this.dom = dom;
    }
    DomObject.prototype.get = function() {
        return this.dom;
    }
    DomObject.prototype.on = function(eventName, eventHandler) {
        this.get().addEventListener(eventName, eventHandler);

    }
    DomObject.prototype.css = function(styleKey, styleValue) {
        this.get().style[styleKey] = styleValue;
    }

    function $(selector, context) {
        return new DomObject((context || document).querySelector(selector));

    }

    function _init() {
        $("#btn-start").on("click", function(ev) {
            $(".start-container").css("display", "none");
            $(".game-container").css("display", "block");
        })
        $("#btn-setting").on("click", function(ev) {
            alert("You clicked the setting button. ");

        })
    }
    document.addEventListener("DOMContentLoaded", function(ev) {
        _init();
    });
})(document);