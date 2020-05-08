var one = new Vue({
    el: '#root-one',
    data: {
        title: 'Title 1',
        
    },
    computed: {
        greeted(){
            return 'Hello one'
        }
    }
});

var two = new Vue({
    el: '#root-two',
    data: {
        title: 'Title 2',

    },
    computed: {
        greeted(){
            return 'Hello two'
        }
    },
    methods: {
        changeOneTitle(){
            one.title = 'Title changed from two'
        }
    }
})

two.title = 'Changed from outside'