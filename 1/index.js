var app5 = new Vue({
    el: '#testme',
    data: {
      message: 'Hello Vue.js!',
      loginType: 'username',
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      },
      reverseMessages: function () {
        this.message = this.message.split('').reverse().join('')
      },
      toggleLoginType: function () {
        console.log(this.loginType);
        this.loginType = this.loginType == 'username' ? 'useremail' : 'username';
      }
    }
  })

  var app5 = new Vue({
    el: '#testme2',
    data: {
      numbers: [ 1, 2, 3, 4, 5 ]
    },
    computed: {
      evenNumbers: function () {
        return this.numbers.filter(function (number) {
          return number % 2 === 0
        })
      }
    },
    methods: {

    }
  })