new Vue({
    el: '#root',
    data: {
        available: true,
        customClass: 'button is-primary'
    },
    computed: {
        renderMyClass() {
            return  this.available ? 'button is-primary' : 'button is-danger';    
        }        
    },
    methods: {
        toggle() {
            return  this.available = !this.available;
        }
    }
})