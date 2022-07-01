<template>
  <div class="admin-hkx-container">
    <div class="loginModal">
      <p>管理后台</p>
      <el-form label-position="left" ref="ruleFormRef" :model="loginForm" :rules="rules" label-width="80px" style="width: 100%">
        <el-form-item prop="usernameEmail" label="账号">
          <el-input placeholder="请输入账号" v-model="loginForm.usernameEmail" @keyup.enter="submitForm(ruleFormRef)"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input placeholder="请输入密码" v-model="loginForm.password" @keyup.enter="submitForm(ruleFormRef)"></el-input>
        </el-form-item>
        <el-form-item prop="usertype" label="用户类型">
          <el-select v-model="loginForm.usertype" placeholder="请选择用户类型">
            <el-option v-for="item in userTypeList" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item prop="vCode" label="验证码" size="large">
          <el-row :gutter="10">
            <el-col :span="14"
              ><el-input placeholder="请输入验证码" v-model="loginForm.vCode" @keyup.enter="submitForm(ruleFormRef)"></el-input
            ></el-col>
            <el-col :span="8">
              <el-image style="cursor: pointer; border: 1px solid #ccc" :src="vImage" fit="fill" @click="initImage">
                <template #error>
                  <div class="image-slot">
                    <!-- <el-icon><icon-picture /></el-icon> -->
                  </div>
                </template>
              </el-image>
            </el-col>
          </el-row>
        </el-form-item>
        <div class="sumbitGroup">
          <el-button @click="submitForm(ruleFormRef)" size="large" type="primary">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DataProps } from './types'
import { reactive, toRefs, onMounted, ref } from 'vue'
import { ElForm, ElSelect, ElOption, ElInput, ElFormItem, ElButton, ElRow, ElCol, ElImage } from 'element-plus'
import type { FormInstance } from 'element-plus'
const ruleFormRef = ref<FormInstance>()
let state = reactive<DataProps>({
  vImage: '',
  rules: {
    usernameEmail: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    vCode: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
  },
  userTypeList: [
    {
      value: 1,
      label: 'BIM'
    },
    {
      value: 0,
      label: '华科信'
    }
  ],
  loginForm: {
    vCodeId: '',
    usernameEmail: 'admin',
    password: 'aa123456uvaa',
    usertype: 1,
    vCode: ''
  }
})
let initImage = () => {
  console.log(1)
}
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

onMounted(() => {
  initImage()
})
let { vImage, loginForm, userTypeList, rules } = toRefs(state)
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
