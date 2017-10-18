<template>
    <div>
        <router-link to="/">首页</router-link>
        <p>keeplive测试</p>
        <ul>
            <li v-for="(item, index) in list" :key="index">{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data () {
            return {
               list: []
            }
        },
        methods: {
            getInfo () {
                fetch('http://cnodejs.org/api/v1/topics')
                .then(res => {
                    return res.json()
                })
                .then(res => {
                    this.list = res.data
                })
            }
        },
        activated () {
            this.getInfo()
        }
    }
</script>