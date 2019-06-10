import { shallowMount, Wrapper } from '@vue/test-utils'

import Widget from './Widget.vue'

let wrapper: Wrapper<Widget>

describe('Widget', () => {
  beforeEach(() => {
    wrapper = shallowMount(Widget, {
      propsData: {
        name: 'World'
      }
    })
  })

  test('renders', () => {
    const widgetWrapper = wrapper.find('.component-widget')
    expect(widgetWrapper.is('div')).toBe(true)
    expect(wrapper.text()).toBe('Widget Hello World')
  })
})
