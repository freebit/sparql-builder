import { expect } from "chai";
import { mount } from "@vue/test-utils";
import InputField from "@/components/InputField.vue";

describe("InputField.vue", () => {
  it("При параметре simple = true кнопки не должно быть", () => {
    const wrapper = mount(InputField, {
      propsData: {
        value: "",
        simple: true
      }
    });
    expect(wrapper.html()).to.not.include(`button`);
  });
});
