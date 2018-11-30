import { Shallow, shallowMount } from '@vue/test-utils';
import LoginComponent from '@/components/LoginComponent.vue';

describe('LoginComponent.vue', () => {
  function setup({
    email = '',
    password = '',
    login = false,
  } = {}) {
    const wrapper = shallowMount(LoginComponent, {
      data: {
        email,
        password,
        login,
      },
    });
    return {
      wrapper,
    };
  }

  test('Login', () => {
    const email = 'pepe@pepe.com';
    const password = '123456';
    const login = true;
    const expectedData = {
      email,
      password,
      login,
    };
    const {
      wrapper,
    } = setup ({
      email,
      password,
      login,
    });
    expect(wrapper.data()).toEqual(expectedData);
  });
});
