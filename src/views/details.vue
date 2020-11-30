<template>
    <Tabs type="card" closable @on-tab-remove="handleTabRemove">
        <TabPane label="标签一" v-if="tab0">
            <router-view></router-view>
        </TabPane>
    </Tabs>
</template>
<script>
    export default {
        data () {
            return {
                tab0: true,
                tab1: true,
                tab2: true
            }
        },
        methods: {
            handleTabRemove (name) {
                this['tab' + name] = false;
            }
        }
    }
</script>
