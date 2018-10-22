import Vue               from 'vue'
import { shallowMount }  from '@vue/test-utils'
import VueProductSpinner from '@/components/VueProductSpinner.vue'

describe('VueProductSpinner.vue', () => {

  it('should receive props correctly without mutating them', () => {
  
    const imgs    = [
      'https://micheleriva.github.io/vue-product-spinner/imgs/1.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/2.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/3.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/4.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/5.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/6.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/7.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/8.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/9.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/10.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/11.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/12.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/13.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/14.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/15.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/16.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/17.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/18.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/19.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/20.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/21.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/22.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/23.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/24.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/25.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/26.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/27.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/28.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/29.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/30.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/31.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/32.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/33.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/34.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/35.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/36.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/37.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/38.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/39.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/40.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/41.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/42.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/43.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/44.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/45.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/46.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/47.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/48.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/49.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/50.png',
      'https://micheleriva.github.io/vue-product-spinner/imgs/51.png',
    ]
    const range   = {
      enable: true,
      class:  'custom-range'
    }
  
    const wrapper = shallowMount(VueProductSpinner, {
      propsData: { 
        imgs,
        range
       }
    })

    expect(wrapper.props().imgs.length).toBe(51)
    expect(wrapper.props().range.enable).toBe(true)
    expect(wrapper.props().range.class).toBe('custom-range')

  })

})
