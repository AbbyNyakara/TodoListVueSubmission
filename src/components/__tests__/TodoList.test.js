/* eslint-disable no-unused-vars */
import { mount } from '@vue/test-utils';
import {
  expect, test, describe, it,
} from 'vitest';
import Vue from 'vue';
import TodoList from '../TodoList.vue';

describe('My Todolist component', () => {
  it('Should render component', () => {
    const wrapper = mount(TodoList);
    expect(wrapper.html()).toMatchSnapshot();
  });

  // it ("Should delete a todo item from array", ()=> {
  //   function deleteTodo(index){
  //     array.splice(index, 1)
  //   }

  //   const array = [
  //     {
  //     id: 1,
  //     item: 'complete laundry',
  //     completed: false
  //     }
  //   ]
  //     // const wrapper = mount(TodoList);
  //      array.deleteTodo(1);
  //     expect(array.length).toBe(0);
  // })
});
