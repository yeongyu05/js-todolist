const $ = (query, element) => element ?? document.querySelector(query);
const $all = (query, element) => [...element ?? document.querySelectorAll(query)];

const todos = JSON.parse(localStorage.getItem('todos')) || {
  todos: [
    {index: 0, checked: false, content: ''},
    {index: 0, checked: false, content: ''},
  ],
  preview: [],
  input: '',
  status: 'all',
  count: 0,
}

const render = () => {};

const setTodos = () => {
  
}

const onBtnClick = (_) => {};

const evt = (_) => {};

const init = () => {
  evt();
  render();
};

window.onload = init;
