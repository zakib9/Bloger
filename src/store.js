import { reactive } from "vue";
import axios from "axios";

const state = reactive({
    blog: {
        blogs:[]
    },
    actions:{
          addBlog(title, Content) {
            const id = state.blog.blogs.length + 1
            var data = JSON.stringify({
                "blogs":[
                    {
                        "id":id,
                        "title":title,
                        "content":Content
                    }]
                });
            
            
            var config = {
              method: 'put',
            maxBodyLength: Infinity,
              url: 'https://getpantry.cloud/apiv1/pantry/255e208c-486c-46d3-b919-0bd5e862e28f/basket/blogs',
              headers: { 
                'Content-Type': 'application/json'
              },
              data : data
            };
            
            axios(config)
            .then(function (response) {
              fetchData()
            })
            .catch(function (error) {
              console.log(error);
            });
            
            
                
          }
    }

})


async function fetchData() {
    try {
       state.blog.blogs = []
        const data = await axios.get("https://getpantry.cloud/apiv1/pantry/255e208c-486c-46d3-b919-0bd5e862e28f/basket/blogs")
        
        dataTransaction(data.data.blogs)
        
    }catch (error) {
      console.error("Failed to fetch data:", error);
      
        }
  }
  function dataTransaction(data) {
    for (let index = 0; index < data.length; index++) {
        state.blog.blogs.push(data[index])     
    }
   
    
  }
  
  fetchData()


export default {
    state
  };