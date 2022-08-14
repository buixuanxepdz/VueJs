<template>
    <div>
        <h2>Danh sách sản phẩm</h2>
        <div class="content">
          <el-button class="add" type="primary" @click="centerDialogVisible = true">Tạo mới</el-button>
          <div style="display:flex;float:right;align-items: center;">
            <el-input
              v-model="search"
              type="text"
              placeholder="Tìm kiếm sản phẩm" style="width: 200px;" />
               <el-button type="primary" @click="getList(current_page =1),current_page =1" icon="el-icon-search" style="margin-left:10px;"></el-button>
          </div>
                  <el-table
                    :data="products"
                    border
                    style="width: 100%" >
                        <el-table-column
                        prop="id"
                        label="#"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="name"
                        label="Name"
                        width="200">
                        </el-table-column>
                        <el-table-column
                        prop="description"
                        label="Mô tả">
                        </el-table-column>
                        <el-table-column
                        prop="price"
                        label="Giá">
                        </el-table-column>
                        <el-table-column
                          align="right">
                          <template slot-scope="scope">
                            <el-button
                              size="mini"
                              @click="handleEdit(scope.row),updateDialog = true">Sửa</el-button>
                            <el-button
                              size="mini"
                              type="danger"
                              @click="handleDelete(scope.row.id)">Xóa</el-button>
                          </template>   
                        </el-table-column>
                  </el-table>
                <el-pagination
                  background
                  @current-change="HandleChange"
                  layout="total,prev, pager, next"
                  :total="parseInt(total)"
                  :current-page="parseInt(current_page)"
                  :page-size="parseInt(perPage)"
                  style="margin-top: 20px;float: right;"
                  >
                </el-pagination>         
        </div>
        <el-dialog
          title="Tạo mới sản phẩm"
          :visible.sync="centerDialogVisible"
          width="30%"
          center>
          <el-form :model="createProduct" ref="createProduct" label-width="200px" class="ruleForm">
             <el-form-item
              label="Tên sản phẩm"
              prop="name"
              :rules="[
                { required: true, message: 'Tên sản phẩm không được để trống',trigger:'click'},
              ]"
            >
              <el-input type="text" v-model="createProduct.name" autocomplete="off"></el-input>
              <!-- <span>{{ error.name[0] }}</span> -->
            </el-form-item>
             <el-form-item
              label="Mô tả"
              prop="description"
              :rules="[
                { required: true, message: 'Mô tả sản phẩm không được để trống',trigger:'click'},
              ]"
            >
              <el-input type="text" v-model="createProduct.description" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item
              label="Giá"
              prop="price"
              :rules="[
                { required: true, message: 'Giá sản phẩm không được để trống',trigger:'click'},
                { type: 'number', message: 'Giá sản phẩm phải là số',trigger:'click'}
              ]"
            >
              <el-input type="number" v-model.number="createProduct.price" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('createProduct')">Tạo mới</el-button>
              <el-button @click="resetForm('createProduct')">Hủy</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
          <!-- edit -->
          <el-dialog
          title="Cập nhật sản phẩm"
          :visible.sync="updateDialog"
          width="30%"
          center>
          <el-form :model="formEdit" ref="formEdit" label-width="200px" class="ruleForm">
             <el-form-item
              label="Tên sản phẩm"
              prop="name"
              :rules="[
                { required: true, message: 'Tên sản phẩm không được để trống',trigger:'click'},
              ]"
            >
              <el-input type="text" v-model="formEdit.name" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item
              label="Mô tả"
              prop="description"
              :rules="[
                { required: true, message: 'Mô tả sản phẩm không được để trống',trigger:'click'},
              ]"
            >
              <el-input type="text" v-model="formEdit.description" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item
              label="Giá"
              prop="price"
              :rules="[
                { required: true, message: 'Giá sản phẩm không được để trống',trigger:'click'},
                { type: 'number', message: 'Giá sản phẩm phải là số'}
              ]"
            >
              <el-input type="number" v-model.number="formEdit.price" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="updateForm('formEdit')">Cập nhật</el-button>
              <el-button @click="resetForm('formEdit')">Hủy</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
        
    </div>
  
</template>

<script>
 import api from '../api/index'
  export default {
    data() {
      return {
        search:'',
        products:[],
        centerDialogVisible: false,
        updateDialog: false,
        createProduct: {
          name:'',
          description:'',
          price:'',
        } ,
        formEdit:{
          id:'',
          name:'',
          description:'',
          price:'',
        },
        error:{},
        current_page:1,
        perPage:'',
        total:'',
      }
    },
    methods: {
      getList(){
        let data = {
          search: this.search,
          page: this.current_page
        }
        api.getListProduct(data).then(res => {
            this.products = res.data.data.data
            this.total = res.data.data.total
            this.perPage = res.data.data.per_page
            // console.log(res)
        }).catch(err => {
            console.log(err)
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
             api.saveProduct(this.createProduct).then(res => {
                if(res.status == 200){
                    this.$message({
                      message: 'Thêm mới thành công',
                      type: 'success'
                    });
                    this.centerDialogVisible = false
                    this.createProduct = {
                      name:'',
                      description:'',
                      price:''
                    }  
                    this.getList()
                    this.current_page = 1
                }
              }).catch(err => {
                  console.log(err)
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleDelete(id) {
          this.$confirm('Bạn muốn xóa sản phẩm này ?', 'Xóa sản phẩm', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning',
            center: true
          }).then(() => {
            api.deleteProduct(id).then(res => {
              if(res.status == 200){
                 this.getList()
              }
            }).catch(err => {
                console.log(err)
            })
            this.$message({
              type: 'success',
              message: 'Xóa sản phẩm thành công'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: 'Đã hủy xóa sản phẩm'
            });
          });

      },
      handleEdit(data){
        this.checkBTN = false
        this.formEdit = {
            id:data.id,
            name:data.name,
            description:data.description,
            price:data.price,
        }
        this.updateDialog = true
      },
      updateForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
             api.updateProduct(this.formEdit).then(res => {
                if(res.status == 200){
                    this.$message({
                      message: 'Cập nhật thành công',
                      type: 'success'
                    });
                    this.updateDialog = false
                    this.getList()
                }
              }).catch(err => {
                  console.log(err)
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      HandleChange(val){
        this.current_page = val
        this.getList()
      },
    },
    mounted(){
        // axios({
        //     method:'get',
        //     url:'http://vuecourse.zent.edu.vn/api/products'
        // })
        // axios.get('http://vuecourse.zent.edu.vn/api/products').then(res => {
        //     this.products = res.data.data.data
        // }).catch(err => {
        //     console.log(err)
        // })
       this.getList()
        // let data = {
        //     name:'tà tưa 2',
        //     price:4500000,
        //     description:'ngon vãi chưởng 2'
        // }
        // api.saveProduct(data).then(res => {
        //    if(res.status == 200){
        //         alert('thêm mới thành công')
        //    }
        // }).catch(err => {
        //     console.log(err)
        // })
    }
  }
</script>

<style lang="scss" scoped>
  .content{
    width: 80%;
    margin: 0 auto ;
    .add{
      float: left;
      margin-bottom: 10px;
    }
    .ruleForm{
        
    }
  }
</style>