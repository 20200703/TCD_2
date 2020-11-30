<template>
  <div id="index">
    <Layout id="all">
            <Sider hide-trigger id="sider">
                <div id="sider_div">
                    <img src="../assets/index.img/logo.png" class="img_logo">
                    <Menu active-name="车辆监控" theme="dark" width="auto" accordion>
                        <Submenu :name="item.resName" v-for="item in items" :key="item.resId">
                            <template slot="title">
                                {{item.resName}}
                            </template>
                            <MenuItem :name="second.resName" v-for="second in item.list" :key='second.resId'>
                                {{second.resName}}
                            </MenuItem>
                        </Submenu>
                    </Menu>
                </div>
            </Sider>
        <Layout id='content'>
            <Header>车辆管理系统</Header>
            <Content :style="{margin: '10px'}"><router-view /></Content>
        </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
    data(){
        return{
            items:[]
        }
    },
    mounted() {
        this.axios.get('http://monitor.cqxiaozu.net/sv-user/menu/userMenuList',
        {
            headers:{
                'x-access-token': 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb20uc3IubG9naW4iLCJpYXQiOjE2MDY1MzI1ODgsInN1YiI6IntcInVzZXJJZFwiOlwiMVwiLFwidXNlck5hbWVcIjpcImFkbWluXCIsXCJvcmdJZFwiOm51bGwsXCJ6b25lXCI6bnVsbCxcInBlcm1zXCI6WzQwOTYsNDA5Nyw0MDk5LDQxMDAsNDEwMSw0MTAyLDQxMDMsNDEwNCw0MTA1LDQxMDYsNDEwNyw0MTA4LDQxMTEsMTAwMDAsNDExMiwxMDAwMSw0MTEzLDEwMDAyLDQxMTQsMTAwMDMsNDExNSw0MTE2LDQxMTcsNDExOCw0MTE5LDQxMjksNDEzMCw0MTMxLDQxMzIsNDEzMyw0MTM0LDQxMzUsNDEzNiw5MDAwLDkwMDEsNDEzNyw5MDAyLDQxMzgsOTAwMyw5MDA0LDQxNDAsOTAwNSw0MTQxLDkwMDYsNDE0Miw5MDA3LDQxNDMsOTAwOCw5MDA5LDkwMTAsODAxMSw4MDEyLDgwMTMsODAxNCw4MDE1LDgwMTYsODAxNyw4MDE4LDgwMTksODAyMCw4MDIyLDgwMjMsODAyNCw4MDI1LDgwMjYsODAyNyw4MDI4LDgwMjksODAzMCw4MDMxLDgwMzIsNDQ0OCw0NDQ5LDgwMzcsODAzOCw4MDM5LDgwNDAsODA0Miw4MDQzLDUwMjAsNDAwMCw0MDAxLDQwMDIsNDAwMyw0MDA0LDQwMDUsNDAwNiw0MDA3LDQwMDgsNDAwOSw0MDEwLDQwMTEsNDAxMiw0MDEzLDQwMTQsNDAxNSw0MDE2LDQwMTcsNDAxOCw0MDIwLDQwMjEsNDAyMiw0MDIzLDQwMjQsNDAyNSw0MDI2LDQwMjcsNDAyOCw0MDI5LDQwMzAsNDAzMSw0MDMyLDQwMzUsNDAzNiw0MDM3LDQwMzgsNDAzOSw0MDQwLDQwNDEsNDA0Miw0MDQzLDQwNDQsNDA0NSw0MDQ2LDQwNDgsNDA0OSw0MDUwLDQwNTEsNDA1Miw0MDUzLDQwNTQsNDA1NSw0MDU2LDQwNTcsNDA1OCw0MDU5LDQwNjAsNDA2MSw0MDYyLDQwNjMsNDA2NCw0MDY1LDQwNjYsNDA2Nyw0MDY4LDQwNjksNDA3MCw0MDcxLDQwNzIsNDA3Myw0MDc0LDQwNzUsNDA3Niw0MDc3LDQwNzgsNDA3OSw0MDgwLDQwODEsNDA4Miw0MDgzLDQwODQsNDA4NSw0MDg2LDQwODcsNDA4OCw0MDg5LDQwOTAsNDA5MSw0MDkyLDQwOTMsNDA5NCw0MDk1XSxcImNsYXNzVHlwZVwiOjR9In0.e99QizQBNJoUPXu7dD7v8lh3FKVhRhxi1rA95IQ9FMg'
            }
        }
        ).then(res=>{
            console.log(res);
            this.items = res.data
        })
    },
}
</script>
<style scpoed>
#index {
    width: 100%;
    height: 100%;
}
#all {
    width: 100%;
    height: 100%;
}
#sider{ 
    overflow: hidden;
}
#sider_div{
    width: 220px;
    height: 100%;
    overflow-y: scroll;
    overflow-x:hidden;
}
.ivu-layout-header {
    background: #006cb7!important;
    color: white;
    font-size: 18px;
}
.img_logo{
    margin: 20px 0;
}
.ivu-menu-light{
    background: #434856;
}
.ivu-menu-submenu-title{
    text-align: left!important;
    padding-left: 50px!important;
}

</style>