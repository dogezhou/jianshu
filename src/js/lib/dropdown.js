import $ from "jquery";

// es6 类
class Dropdown {
    constructor(selector) {
        this.elements = $(selector)
        this.init()
        this.bindEvents()
    }
    init() {
    }
    bindEvents() {
        this.elements.each((index, element) => {
            let $element = $(element)
            let menu_trigger = $element.data('menu-trigger')
            const $dropdown_button = $element.find('.dropdown-button')
            const $dropdown_menu = $element.find('.dropdown-menu')

            if (menu_trigger === 'hover') {
                $element.hover((e) => {
                    $dropdown_menu.addClass('active')
                }, (e) => {
                    $dropdown_menu.removeClass('active')
                })
            } else {
                // 点击文档任意处消失
                $(document).click((e) => {
                    $dropdown_menu.removeClass('active')
                })
                $dropdown_button.on('click', (e) => {
                    $dropdown_menu.toggleClass('active')
                    e.stopPropagation()
                })
            }
        })
    }    
}

// 用例
var dropdowns = new Dropdown(".dropdown")