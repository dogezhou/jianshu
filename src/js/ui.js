import '../css/ui.scss'

// js
import './lib/tabs.js'
import './lib/dropdown.js'
import { Dialog } from './lib/dialog.js'

myModal.onclick = function () {
    var dialog = new Dialog({
        title: '加入黑名单',
        content: '<p>确认将该用户加入黑名单吗？在你黑名单中的用户无法在你文章下评论，无法在其它评论中提到你，无法给你发送简信，自动从你的粉丝列表移除且无法再关注你。</p>',
        className: 'userDialog', // 用户可以用来自定义样式, 比如：z-index
        static: false, // 点击弹出框外围消失
        buttons: [
            {
                text: '确定',
                action: function () {
                    setTimeout(function () {
                        console.log('点击确定！')
                        dialog.close()
                    })
                }
            },
            {
                text: '取消',
                action: function () {
                    console.log('点击取消！')
                    dialog.close()
                }
            }
        ]
    })
    dialog.open()                
}