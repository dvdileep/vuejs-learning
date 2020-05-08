Vue.component('tabs',{    
    template: `
        <div>
            <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive }">
                       <a :href="tab.href" @click="changeTab(tab)">{{ tab.name }}</a>
                    </li>
                </ul>
            </div>

            <div class="tab-deails">
                <slot></slot>
            </div>
        </div>
    `,

    data(){
        return {
            tabs: []
        }
    },

    methods: {
        changeTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = tab.name ? (tab.name == selectedTab.name) : false
            });
        }
    },

    created(){
        this.tabs = this.$children
    }
})

Vue.component('tab', {
    template: `<div v-show="isActive"><slot></slot></div>`,

    props: {
        name: {required : true},
        selected: {default: false}
    },

    data(){
        return {
            isActive: false
        }
    },

    computed: {
        href(){
            if(this.name){
                return '#' + this.name.toLowerCase().replace(/ /g,'-');
            }
            
            return '#'
        }
    },

    mounted(){
        this.isActive = this.selected;
    },
})


var app5 = new Vue({
    el: '#root',
})