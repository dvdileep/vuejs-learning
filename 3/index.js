Vue.component('coupon',{
    template: '<input placeholder="enter the coupon code" @blur="onCouponApplied"/>',

    methods: {
        onCouponApplied(){
            this.$emit('applied');
        }
    }
})

new Vue({
    el: '#root',
    me: 'me',
    data: {        
        tryNo: '3',
        couponApplied: false
    },


    methods: {
        onCouponApplied(){
            this.couponApplied = true
        }
    }
})