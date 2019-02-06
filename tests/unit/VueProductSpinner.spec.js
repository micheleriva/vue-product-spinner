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
    wrapper.vm.handleWheel({ deltaY: 1 });
    expect(wrapper.vm.spinner.current).toBe(1);
  });
});
