<template>
  <div id="app">
    <h1>I WILL NEVER VISIT HERE TODAY</h1>
    <NeverInput @inputSubmit="onInputSubmit" />
    <NeverList 
      @imgClick="changeVisited"
      @imgCtrlClick="deleteSite"
      :neverSites="neverSites" />
    <div class="my-helpers">
      <p class="my-helper">Click : Change Status</p>
      <p class="my-helper">Ctrl + Click : Delete</p>
    </div>
    <MyFooter />
  </div>
</template>

<script>
import NeverInput from './components/NeverInput.vue'
import NeverList from './components/NeverList.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'App',
  components: {
    NeverInput,
    NeverList,
    MyFooter
  },
  data() {
    return {
      neverSites: this.getNeverSites()
    }
  },
  methods: {
    changeVisited(neverSite) {
      neverSite.isVisited = !neverSite.isVisited
      localStorage.setItem('neverSites', JSON.stringify(this.neverSites))
    },
    deleteSite(neverSite) {
      const idx = this.neverSites.indexOf(neverSite)
      this.neverSites.splice(idx, 1)
      localStorage.setItem('neverSites', JSON.stringify(this.neverSites))
    },
    onInputSubmit(neverSite) {
      if (this.neverSites === []) {
        this.neverSites.push(neverSite)
        localStorage.setItem('neverSites', JSON.stringify(this.neverSites))
      } 
      else if (this.neverSites.length < 12) {
        this.neverSites.push(neverSite)
        localStorage.setItem('neverSites', JSON.stringify(this.neverSites))
      } else {
        this.neverSites.pop()
        this.neverSites.push(neverSite)
        localStorage.setItem('neverSites', JSON.stringify(this.neverSites))
      }
    },
    getNeverSites() {
      const loadedNeverSites = localStorage.getItem('neverSites')
      if (loadedNeverSites !== null) {
        return JSON.parse(loadedNeverSites)
      } else {
        return []
      }
    }
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

.my-helpers {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
}

.my-helper {
  margin-top: 5px;
  margin-bottom: 5px;
}

</style>
