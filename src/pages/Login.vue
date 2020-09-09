<template>
    <div class="login-wrap">
        <img src="../assets/img/login/title.png"/>
        <div class="ms-login">
            <h1 class="ms-title font-size-x2 font-weight-medium">欢迎登录！</h1>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="UserName">
                    <el-input v-model="param.UserName" placeholder="用户名">
                    </el-input>
                </el-form-item>
                <el-form-item prop="Password" :error="errorMsg">
                    <el-input
                            type="password"
                            placeholder="密码"
                            v-model="param.Password"
                            @keyup.enter.native="submitForm()"
                    >
                    </el-input>
                </el-form-item>
                <div class="hBox vh_content_start vh_items_center login-checkbox">
                    <el-checkbox v-model="rememberPassword">记住密码</el-checkbox>
                    <!--<el-checkbox v-model="autoLogin">自动登录</el-checkbox>-->
                </div>
                <div class="login-btn">
                    <el-button type="primary" :disabled="loginDisabled" @click="submitForm()">登录</el-button>
                </div>
                <!--<div style="width: 100%;color:#6b97d2;text-align: center" class="font-weight-medium font-size-large">-->
                    <!--账号注册-->
                <!--</div>-->
            </el-form>
        </div>
        <div class="beian">蜀ICP备19017581号-1 \ 公安备案编号：51010402000507 \ Powered by &#169 2010-2020 DEM.CN</div>
    </div>
</template>

<script>

export default {
    data: function () {
        return {
            rememberPassword: false,
            autoLogin: false,
            errorMsg: '',
            loginLoading: void 0,
            param: {
                UserName: '510000',
                Password: '123456'
            },
            loginDisabled: false,
            rules: {
                UserName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                Password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        };
    },
    mounted () {
        if (localStorage.getItem('autoLogin') === 'true') {
            this.$router.push({ path: 'first' });
        }
        else {
            if (localStorage.getItem('rememberPassword') === 'true') {
                this.rememberPassword = true;
                this.param.UserName = localStorage.getItem('UserName');
                this.param.Password = localStorage.getItem('Password');
            }
        }
    },
    methods: {
        submitForm () {
            let me = this;
            this.errorMsg = '';
            this.$refs.login.validate(valid => {
                if (valid) {
                    //判断是否需要保存密码
                    me._setLogin();

                    //调试代码
                    // if (this.param.UserName == 'admin' && this.param.Password == '123456') {
                    //     localStorage.setItem('isLogin', true);
                    //   return  this.$router.push('/');
                    // } else {
                    //     return me.$message({type:'error',message:'密码错误'})
                    // }
                    //调试代码

                    var reqData = {
                        account: this.param.UserName,
                        password: this.param.Password,
                        "remember": true
                    };
                    this.loginLoading = this.$loading({
                        lock: true,
                        text: '登陆中',
                        spinner: 'el-icon-loading',
                        background: 'rgba(0, 0, 0, 0.7)'
                    });


                    this.loginDisabled = true;
                    this.$req.post(this.$url.login, reqData).then((res) => {
                        if (res.code === 200) {
                            sessionStorage.setItem('isLogin', true);
                            localStorage.setItem('role', this.param.UserName);
                            localStorage.setItem('Authorization', res.data);
                            this.$router.push('/');
                        }
                        else {
                            this.errorMsg = '密码错误';


                        }
                    }).catch(err => {
                        console.log(err);
                    }).finally(() => {
                        this.loginLoading.close();
                    });
                    this.loginDisabled = false;

                }
                else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        _setLogin () {
            if (this.rememberPassword) {
                localStorage.setItem('rememberPassword', 'true');
                localStorage.setItem('UserName', this.param.UserName);
                localStorage.setItem('Password', this.param.Password);
            }
            if (this.autoLogin) {
                localStorage.setItem('autoLogin', 'true');
            }
        }
    }
};
</script>

<style lang="scss">

    .login-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        background: url(../assets/img/login/login-bg.png) center no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        >img {
            width: 395px;
            height: 82px;
            position: absolute;
            top: 100px;
            margin: 0 auto;
        }
        .beian {
            position: absolute;
            bottom: 164px;
            width: 100%;
            height: 16px;
            font-size: 16px;
            font-weight: 400;
            text-align: center;
            color: #1e407f;
            line-height: 16px;
        }
    }

    .ms-title {
        letter-spacing: -1px;
        width: 100%;
        line-height: 50px;
        color: rgba(30, 44, 65, 1);
        text-align: left;
    }

    .ms-login {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 660px;
        height: 550px;
        transform: translate(-50%, -50%);
        border-radius: 20px;
        background: rgb(255, 255, 255);
        padding: 80px 100px 0px;
        overflow: hidden;
    }

    .ms-content {
        margin-top: 30px;
        .el-input__inner {
            height: 60px;
            font-size: 18px;
            font-weight: 400;
            color: rgba(107, 151, 210, 1);
            background: #f2f7fc;
            border: 1px solid #bbcfea;
        }
        .el-form-item {
            margin-bottom: 24px;
        }
        .login-checkbox {
            position: relative;
            top: -8px;
            margin-bottom: 35px;
        }
        .el-checkbox__label {
            font-size: 16px;
            font-weight: 400;
            color: rgba(107, 151, 210, 1);
        }
        .el-checkbox__inner {
            width: 20px;
            height: 20px;
            background: #ffffff;
            border: 1px solid #e8e8e8;
            border-radius: 5px;
            box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1) inset;
        }
        .el-checkbox__inner::after {
            top: 20%;
            left: 40%;
        }
        .el-button {
            height: 60px;
            font-size: 18px;
            background: #007bff;
            font-weight: 400;
        }
    }

    .login-btn {
        text-align: center;
    }

    .login-btn button {
        width: 100%;
        height: 36px;
        margin-bottom: 40px;
    }

    .login-tips {
        font-size: 12px;
        line-height: 30px;
        color: #fff;
    }
</style>