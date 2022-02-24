import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";


const client = new ApolloClient({
    uri: "http://localhost:8000/graphql"
  });
  
  const apolloProvider = new VueApollo({
    defaultClient: client
  });

createApp(App).use(router).mount('#app').use(VueApollo).use(apolloProvider)
