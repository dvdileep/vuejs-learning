new Vue({
    el: '#root',
    data: {
        a: 0,
        b: 0,
        age: 20
    },
    computed: {
        addToA() {
            console.log('addToA');
            
            return this.a + this.age;
        },
        addToB() {
            console.log('addToB');

            return this.b + this.age;
        }
    },
    methods: {
        // addToA() {
        //     console.log('addToA');
            
        //     return this.a + this.age;
        // },
        // addToB() {
        //     console.log('addToB');

        //     return this.b + this.age;
        // }
    },

})