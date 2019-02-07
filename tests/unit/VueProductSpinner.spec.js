import { shallowMount } from "@vue/test-utils";
import VueProductSpinner from "@/components/VueProductSpinner.vue";

describe("Mounting VueProductSpinner", () => {
  it("should mount the component", () => {
    const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];
    const wrapper = shallowMount(VueProductSpinner, {
      propsData: { images }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
    /**
     * Testing initial props
     */
    expect(wrapper.vm.spinner.size).toBe(3);
    expect(wrapper.vm.spinner.current).toBe(0);
    expect(wrapper.vm.spinner.currentPath).toBe(images[0]);
  });
});

describe("Testing methods", () => {
  it("should handle methods correctly", () => {
    const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];
    const wrapper = shallowMount(VueProductSpinner, {
      propsData: { images }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();

    /**
     * Testing methods
     */

    /**
     * Handle Wheel Method
     */

    wrapper.vm.handleWheel({ deltaY: 1, preventDefault() {} });
    expect(wrapper.vm.spinner.current).toBe(1);
    expect(wrapper.vm.spinner.currentPath).toBe(images[0]);

    wrapper.vm.handleWheel({ deltaY: 3, preventDefault() {} });
    expect(wrapper.vm.spinner.current).toBe(2);
    expect(wrapper.vm.spinner.currentPath).toBe(images[1]);

    wrapper.vm.handleWheel({ deltaY: 9182378, preventDefault() {} });
    expect(wrapper.vm.spinner.current).toBe(3);
    expect(wrapper.vm.spinner.currentPath).toBe(images[2]);

    wrapper.vm.handleWheel({ deltaY: -412, preventDefault() {} });
    expect(wrapper.vm.spinner.current).toBe(2);
    expect(wrapper.vm.spinner.currentPath).toBe(images[1]);

    wrapper.vm.handleWheel({ deltaY: -2, preventDefault() {} });
    expect(wrapper.vm.spinner.current).toBe(1);
    expect(wrapper.vm.spinner.currentPath).toBe(images[0]);
  });
});
