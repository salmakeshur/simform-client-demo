import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
Vue.use(axios);
const baseurl = 'https://cors-anywhere.herokuapp.com/https://theme3.coredna.com/'
const TOKEN = 'Rf4Re-42b15-DDpT3-PwNck-oXIn6-1eSdo';   
export default new Vuex.Store({
  state: {
    blogs: []
  },

  actions: {
    loadBlogs({commit}) {
        var configs = {
            method: 'get',
            url: baseurl+'cdna-api/blogs/blogs?properties={\n blogs {\n name,\n slug,\n created \n  }\n}',
            headers: { 
                "Content-type": "application/json",
                'Authorization': 'Bearer '+TOKEN,
            },
        };

        axios(configs).then((res) => {
            commit('SAVE_BLOG', res.data.data.blogs);
        }).catch(function (error) {
            console.log(error);
        });
    }
  },

    mutations: {
        SAVE_BLOG(state, blogs) {
            state.blogs = blogs;
        }
    }
})