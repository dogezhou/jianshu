import $ from "jquery";

class Dialog {
    constructor(options) {
        this.options = options
        this.init()
    }
    get template() {
        let { title, content } = this.options
        return `
        <div class="weiDialog">
            <div class="weiDialog-wrapper">
                <header class="weiDialog-header">${title}</header>
                <main class="weiDialog-main">${content}</main>
                <footer class="weiDialog-footer"></footer>                
            </div>
        </div>
        `
    }
    get buttons() {
        let { buttons } = this.options
        var generatedButtons = buttons.map(function (buttonOption) {
            let $b = $('<button></button>')
            $b.text(buttonOption.text)
            $b.on('click', buttonOption.action)
            return $b
        })
        return generatedButtons
    }
    init() {
        var $dialog = $(this.template)
        $dialog.find('footer').append(this.buttons)
        $dialog.addClass(this.options.className)
        this.$dialog = $dialog
        this.setStatic()        
    }
    setStatic() {
        let self = this
        let { isStatic } = self.options
        if (!isStatic) {
            self.$dialog.on('click', function() {
                self.close()
            })
            self.$dialog.find('.weiDialog-wrapper').on('click', function(e) {
                e.stopPropagation()
            })
        }
    }
    animateFade(direction) {
        let $dialogContent = this.$dialog.find('.weiDialog-wrapper')
        let addClass = direction
        let removeClass = (direction === 'fade-in') ? "fade-out": "fade-in"
        $dialogContent.removeClass(removeClass)
        $dialogContent.addClass(addClass)
    }
    open() {
        this.animateFade('fade-in')
        this.$dialog.appendTo('body')
    }
    close() {
        this.animateFade('fade-out')
        setTimeout(() => {
            this.$dialog.detach()
        }, 100)
    }
}

export { Dialog }
