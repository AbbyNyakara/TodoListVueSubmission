import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Footer from '../../components/Footer.vue';

describe("My Footer component", () => {
  it("Renders footer component", ()=> {
    const wrapper = mount(Footer);
    expect(wrapper.html()).toMatchSnapshot()
  })
})