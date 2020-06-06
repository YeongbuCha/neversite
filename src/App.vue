<template>
  <div id="app">
    <h1>I WILL NEVER VISIT "HERE" TODAY</h1>
    <NeverInput @neverInputSubmit="onNeverInputSubmit" />
    <NeverList 
      @imgClick="changeVisited"
      @imgCtrlClick="deleteSite"
      :neverSites="neverSites" />
    <h1>THINGS TO DO</h1>
    <div class="todo-wrapper">
      <TodoInput @todoInputSubmit="onTodoInputSubmit" />
      <TodoList 
        @todoClick="changeCompleted"
        @todoCtrlClick="deleteTodo"
        :todos="todos" />
    </div>

    <MyFooter />
  </div>
</template>

<script>
import NeverInput from './components/NeverInput.vue'
import NeverList from './components/NeverList.vue'

import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput.vue'

import MyFooter from './components/MyFooter.vue'

export default {
  name: 'App',
  components: {
    NeverInput,
    NeverList,

    TodoInput,
    TodoList,

    MyFooter
  },
  data() {
    return {
      neverSites: this.getNeverSites(),
      todos: this.getTodos()
    }
  },
  methods: {
    changeVisited(neverSite) {
      neverSite.isVisited = !neverSite.isVisited
      localStorage.setItem('neverSites', JSON.stringify(this.neverSites))
    },
    changeCompleted(todo) {
      todo.isCompleted = !todo.isCompleted
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },

    deleteSite(neverSite) {
      const siteIdx = this.neverSites.indexOf(neverSite)
      this.neverSites.splice(siteIdx, 1)
      localStorage.setItem('neverSites', JSON.stringify(this.neverSites))
    },
    deleteTodo(todo) {
      const todoIdx = this.todos.indexOf(todo)
      this.todos.splice(todoIdx, 1)
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },

    onNeverInputSubmit(neverSite) {
      if (this.neverSites === []) {
        this.neverSites.push(neverSite)
      } else if (this.neverSites.length < 8) {
        this.neverSites.push(neverSite)
      } else {
        this.neverSites.pop()
        this.neverSites.push(neverSite)
      }
      localStorage.setItem('neverSites', JSON.stringify(this.neverSites))
    },
    onTodoInputSubmit(todo) {
      if (this.todos === []) {
        this.todos.push(todo)
      } else if (this.todos.length < 8) {
        this.todos.push(todo)
      } else {
        this.todos.pop()
        this.todos.push(todo)
      }
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },

    getNeverSites() {
      const loadedNeverSites = localStorage.getItem('neverSites')
      if (loadedNeverSites !== null) {
        return JSON.parse(loadedNeverSites)
      } else {
        return []
      }
    },
    getTodos() {
      const loadedTodos = localStorage.getItem('todos')
      if (loadedTodos !== null) {
        return JSON.parse(loadedTodos)
      } else {
        return []
      }
    },
  },
}
</script>

<style>
/* reset css */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

#app {
  width: 100%;
  height: 100%;
  padding: 100px;
  padding-top: 0;
  font-family: 'Architects Daughter', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  font-size: 3rem;
  margin-top: 20px;
}

.todo-wrapper {
  display: grid;
  grid-template-columns: 1fr 5fr;
}

</style>
