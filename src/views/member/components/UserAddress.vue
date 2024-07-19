<!--
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-19 11:14:40
 * @LastEditors: Zhenjie
-->
<script setup>
import { useAddressStore } from '@/stores/addressStore'
import { onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'

import { getAddressAPI } from '@/apis/user'
const list = ref({})
const getList = async () => {
    const res = await getAddressAPI()
    list.value = res.result
}
onMounted(() => { getList() })


const addressStore = useAddressStore()
//默认关闭弹窗

const showDialog = ref(false)
const addDialog = ref(false)

const addressForm = ref({})

const confirm = (id) => {
    ElMessage.success("删除成功")
    addressStore.delAddress(id)
}

//关闭弹窗
const shutdown = () => {
    showDialog.value = false
    addDialog.value = false
}
//修改的地址
const altAddress = ref({
    receiver: '',
    contact: '',
    provinceCode: "",
    cityCode: "",
    countyCode: "",
    address: "",
    postalCode: "",
    addressTags: "",
    isDefault: '',
    fullLocation: '',
})
const change = (id) => {
    const res = addressStore.changeAddress(id)
    console.log(res);
}
//添加地址
// const newAddress = ref({
//     receiver: '',
//     contact: '',
//     provinceCode: "",
//     cityCode: "",
//     countyCode: "",
//     address: "",
//     postalCode: "",
//     addressTags: "",
//     isDefault: '',
//     fullLocation: '',
// })
const addAddress = () => {
    if (newAddress.value.receiver && newAddress.value.contact && newAddress.value.fullLocation && newAddress.value.address) {
        addressStore.addAddress({
            receiver: newAddress.value.receiver,
            contact: newAddress.value.contact,
            provinceCode: newAddress.value.provinceCode,
            cityCode: newAddress.value.cityCode,
            countyCode: newAddress.value.countyCode,
            address: newAddress.address,
            postalCode: newAddress.postalCode,
            addressTags: newAddress.addressTags,
            isDefault: newAddress.isDefault,
            fullLocation: newAddress.fullLocation
        })
        ElMessage.success("成功添加地址")
        newAddress.value = {}
        //关闭弹窗
        shutdown()
    } else {
        ElMessage.warning("请输入所有收货信息！")
    }
}
</script>

<template>
    <el-card class="address-card">
        <div class="title">收货地址（地址最多10条）</div>
        <div class="address-item" v-for="item in list" :key="item.id">
            <div class="name">{{ item.receiver }}</div>
            <div class="phone">{{ item.contact }}</div>
            <div class="fullLocation">{{ item.fullLocation }}</div>
            <div class="address">{{ item.address }}</div>
            <el-button type="text" size="small" @click="showDialog = true, change(item.id)">编辑</el-button>
            <el-popconfirm @confirm="confirm(item.id)" title="确认删除吗?" confirm-button-text="确认" cancel-button-text="取消">
                <template #reference>
                    <el-button type="text" size="small">删除</el-button>
                </template>
            </el-popconfirm>
        </div>
        <el-button type="primary" class="add-btn" @click="addDialog = true">新建地址</el-button>
    </el-card>
    <!-- 修改地址弹窗 -->
    <el-dialog v-model="showDialog" title="修改地址信息" width="30%" center>
        <!-- 在这里添加表单内容 -->
        <el-form ref="addressForm" :model="address">
            <el-form-item label="姓名">
                <el-input v-model="altAddress.receiver"></el-input>
            </el-form-item>
            <el-form-item label="电话">
                <el-input v-model="altAddress.contact"></el-input>
            </el-form-item>
            <el-form-item label="省份编码">
                <el-input v-model="altAddress.provinceCode"></el-input>
            </el-form-item>
            <el-form-item label="城市编码">
                <el-input v-model="altAddress.cityCode"></el-input>
            </el-form-item>
            <el-form-item label="地区编码">
                <el-input v-model="altAddress.countyCode"></el-input>
            </el-form-item>
            <el-form-item label="详细地址">
                <el-input v-model="altAddress.address"></el-input>
            </el-form-item>
            <el-form-item label="邮政编码">
                <el-input v-model="altAddress.postalCode"></el-input>
            </el-form-item>
            <el-form-item label="地址标签">
                <el-input v-model="altAddress.addressTags"></el-input>
            </el-form-item>
            <el-form-item label="是否默认">
                <el-input v-model="altAddress.isDefault"></el-input>
            </el-form-item>
            <el-form-item label="完整地址">
                <el-input v-model="altAddress.fullLocation"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="shutdown">取消</el-button>
                <el-button type="primary" @click="addressStore.updateAddress">确定</el-button>
            </span>
        </template>
    </el-dialog>
    <!-- 新增地址弹窗 -->
    <el-dialog v-model="addDialog" title="添加收货地址" width="30%" center>
        <div class="addressWrapper">
            <el-form class="form">
                <el-form-item label="姓名">
                    <el-input v-model="newAddress.receiver"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input v-model="newAddress.contact" pattern="[0-9]{11}"></el-input>
                </el-form-item>
                <el-form-item label="省份编码">
                    <el-input v-model="newAddress.provinceCode"></el-input>
                </el-form-item>
                <el-form-item label="城市编码">
                    <el-input v-model="newAddress.cityCode"></el-input>
                </el-form-item>
                <el-form-item label="地区编码">
                    <el-input v-model="newAddress.countyCode"></el-input>
                </el-form-item>
                <el-form-item label="详细地址">
                    <el-input v-model="newAddress.address"></el-input>
                </el-form-item>
                <el-form-item label="邮政编码">
                    <el-input v-model="newAddress.postalCode"></el-input>
                </el-form-item>
                <el-form-item label="地址标签">
                    <el-input v-model="newAddress.addressTags"></el-input>
                </el-form-item>
                <el-form-item label="是否默认">
                    <el-input v-model="newAddress.isDefault"></el-input>
                </el-form-item>
                <el-form-item label="完整地址">
                    <el-input v-model="newAddress.fullLocation"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="shutdown">取消</el-button>
                <el-button type="primary" @click="addAddress">确定</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<style scoped lang="scss">
.address-card {
    width: 100%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.title {
    padding: 15px;
    font-size: 16px;
    color: #333;
    border-bottom: 1px solid #ebeef5;
}

.address-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #ebeef5;
}

.name,
.phone,
.fullLocation,
.address {
    width: 25%;
    text-align: center;
}

.add-btn {
    margin: 15px auto;
}
</style>