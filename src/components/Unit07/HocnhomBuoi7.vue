<template>
    <div class="container">
        <h1>hoc nhom</h1>
    </div>
</template>

<script>
import _ from "lodash"
    export default {
        name:'HocnhomBuoi7',
        data() {
            return {
                datas: [
                    'a','b','c'
                ],
            };
        },
        methods: {
            join() {
                //Chèn kí tự vào giữa các phần tử mảng
                let result = _.join(this.datas,'+')
                console.log(result)
            },
            chunk(){
                // chia mảng thành các mảng con với số phần tử chuyền vào
                let result = _.chunk(this.datas,'2')
                console.log(result)
            },
            last(){
                //Trả về phần tử cuối cùng trong mảng
                let result = _.last(this.datas)
                console.log(result)
            },
            fill(){
                // thay thế giá trị của mảng với phần tử bắt đầu và trc vị tí kết thúc
                let result = _.fill(this.datas,'hihi',1,2)
                console.log(result)
            },
            drop(){
                //Xóa bỏ phần từ trong mảng với số phần tử muốn xóa tính từ phần tử đầu tiên 
                let result = _.drop(this.datas,2)
                console.log(result)
            },
            sortBy(){
                //Sắp xếp các phần tử trong mảng với đk(tham số,hàm), ưu tiên tham số đầu
                var array = [
                    {name:'a',age:12},
                    {name:'e',age:34},
                    {name:'g',age:4},
                    {name:'d',age:3},
                ]
                let result = _.sortBy(array,['name','age'])
                console.log(result)
            },
            has(){
                //kiếm tra xem trong object có tồn tại phần tử cần tìm hay k
                var array = {name:'a',age:12}
                let result = _.has(array,'age')
                console.log(result)
            },
            pick(){
                //tạo ra 1 object mới với key truyền vào từ object cũ
                var array = {name:'a',age:12}
                let result = _.pick(array,'age')
                console.log(result)
            }

        },
        mounted(){
            // this.join()
            // this.chunk()
            // this.last()
            // this.fill()
            // this.drop()
            // this.sortBy()
            // this.has()
            this.pick()
        }
    }
</script>

<style lang="scss" scoped>

</style>