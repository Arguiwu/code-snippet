/*
    教程地址 http://www.zcfy.cc/article/how-to-write-a-unit-test-for-vue-js-8213-scotch-3602.html
*/
import List from '@/components/unittest/List'
import Vue from 'vue'

describe('List.vue', () => {
    const Constructor = Vue.extend(List)
    const ListComponent = new Constructor().$mount()
    it('displays items from the list', () => {
        expect(ListComponent.$el.textContent).to.contain('play games')
    })
    it('adds a new item to list on click', () => {
        ListComponent.newItem = 'my enter'
        const button = ListComponent.$el.querySelector('button')
        const clickEvent = new window.Event('click')
        button.dispatchEvent(clickEvent)
        ListComponent._watcher.run()
        expect(ListComponent.$el.textContent).to.contain('my enter')
        expect(ListComponent.listItems).to.contain('my enter')
    })
})
