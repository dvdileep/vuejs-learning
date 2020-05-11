<template>
    <div class="container">
        <div class="form-group">
            <label class="control-label" for="">Blog Title</label>
            <input type="text" name="title" v-model="blog.title">
        </div>
        <div class="form-group">
            <label class="control-label" for="">Blog Content</label>
            <textarea type="text" class="form-control" name="description" v-model="blog.content"></textarea>
        </div>
        <div class="form-group">
            <label for="">Blog Categories</label>
            Cat1 <input type="checkbox" value="cat1" v-model="blog.categories">
            Cat2 <input type="checkbox" value="cat2" v-model="blog.categories">
            Cat3 <input type="checkbox" value="cat3" v-model="blog.categories">
            Cat4 <input type="checkbox" value="cat4" v-model="blog.categories">
        </div>
        <hr>
        <div id="preview">    
            <h4 class="control-label" for="">Preivew </h4>
            <div class="form-group">         
                <span v-customTitleColor> Blog Title: </span> <span v-customTitleColor> {{ blog.title | toUpperCase }} </span>
            </div>
            <div class="form-group"> 
                Blog Description: <br> 
                {{blog.content}} 
                </div>
            <div class="form-group"> 
                Blog Categories: <br>
                <ul>
                    <li v-for="(category, index) in blog.categories" :key="index">{{ category }} </li>
                </ul>
            </div>
        </div>
        <hr>
        <div>
            <h3 class="h3"> Article </h3>
            <div class="form-group"> 
                <input class="form-control" placeholder="Search..." type="text" v-model="search" id="">
            </div>
            <ul class="list-group">
                <li class="list-group-item" v-for="(blog, index) in filteredBlogs" :key="index">
                    <h5> {{ blog.title | toUpperCase }} </h5>
                    {{ blog.body  | toLowerCase}}
                </li>
            </ul>
        </div>
    </div>
</template>



<script>
// Vue.config.devtools = true;
// Vue.config.debug = true;
import axios from 'axios';

    export default {
        data() {
            return {
                hello: '',
                blog: {
                    title: '',
                    content: '',
                    categories: []
                },
                blogs: [],
                search: ''
            }
        },
        computed: {
            filteredBlogs() {
                return this.blogs.filter((blog) => {
                    return blog.title.match(this.search);
                })
            }
        },
        created() {
            // getArticles: {
                // var test = fetch('https://jsonplaceholder.typicode.com/posts')
                //     .then((response) => response.json())
                //     .then(function(data) {
                //         // this.hello = 'test';
                //         // this.blogs = data.slice(0,10);
                //         // return data.slice(0,10);
                //     });

                //     console.log(test);
                    
            // }

            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    this.hello = 'test';
                    this.blogs = response.data.slice(0, 10);
                    // console.log(response);
                    
                });

        },
        filters: {
            toLowerCase(value) {
                return value.toLowerCase()
            }
        }
    }
</script>
