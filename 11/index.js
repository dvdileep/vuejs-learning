new Vue({
    el: '#root',
    data: {
        readingRef: ''
    },
    methods: {
        reading(){
            console.log(this.$refs);
            
            this.readingRef = this.$refs.input.value;
        }
    }
})