import Vue from 'vue'
import App from './App.vue'

// TailwindCSS
import VueTailwind from 'vue-tailwind'
import '@/assets/style/main.css'

// Markdown
import marked from 'marked'

// Global Prototypes
Vue.prototype.$marked = (text) => {
  const renderer = new marked.Renderer();

  // INSERTS target="_blank" INTO HREF TAGS
  renderer.link = (href, title, text) => {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
  }

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    smartLists: true,
    smartypants: false
  });

  return marked(text);
}

// Injection
Vue.use(VueTailwind)

// Config
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
