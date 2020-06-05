<template>
  <div id="app">
    <NeverInput @inputSubmit="onInputSubmit" />
    <NeverList 
      @imgClick="changeVisited"
      @imgCtrlClick="deleteSite"
      :neverSites="neverSites" />
  </div>
</template>

<script>
import NeverInput from './components/NeverInput.vue'
import NeverList from './components/NeverList.vue'

export default {
  name: 'App',
  components: {
    NeverInput,
    NeverList
  },
  data() {
    return {
      neverSites: [
        { id: 1, content: 'YOUTUBE', isVisited: true},
        { id: 2, content: 'NETFLIX', isVisited: false},
        { id: 3, content: 'HIPHOPLE', isVisited: false},
      ]
    }
  },
  methods: {
    changeVisited(neverSite) {
      neverSite.isVisited = !neverSite.isVisited
    },
    deleteSite(neverSite) {
      const idx = this.neverSites.indexOf(neverSite)
      this.neverSites.splice(idx, 1)
    },
    onInputSubmit(neverSite) {
      if (this.neverSites.length < 16) {
        this.neverSites.push(neverSite)
      } else {
        this.neverSites.pop()
        this.neverSites.push(neverSite)
      }
    }
  }
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
