import { mount } from "@vue/test-utils";
import { expect, test, describe, it } from 'vitest';
import TodoItem from '../../components/TodoItem.vue';
import { nextTick } from 'vue';

describe("My TodoItem component", ()=> {
  // it('Should render component', ()=> {
  //   const wrapper = mount(TodoItem);
  //   expect(wrapper.html()).toMatchSnapshot();
  // })


  // Testing deleteTodo function
  // it ("Should delete a todo item from array", async()=> {
  //   const data = [
  //     {
  //     id: 1,
  //     item: 'complete laundry',
  //     completed: false
  //     }
  //   ]
  //     const wrapper = mount(TodoItem);
  //     data.deleteTodo();
  //     await nextTick();
  //     expect(data.length).toBe(0);
  // })
})