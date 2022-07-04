<template>
    <div>
        
    </div>
</template>

<script>
    export default {
        name:'HocnhomB1',
        data() {
            return {
                arr_1:[1,2,3,4],
                arr_2:[5,6,7,8],
                arr_3:[9,10,11,12],
                texts:['abc','xyz','okok'],
                word:['abcxyz']
            }
        },
        methods: {
            // handleConcat(){  //hàm nối chuỗi
            //     let result = this.arr_1.concat(this.arr_2);
            //     console.log(result);
            //     let result_1 = this.arr_1.concat(this.arr_2,this.arr_3)
            //     console.log(result_1)
            // },
            handleFilter(){ //hàm lọc 
                let result = this.arr_1.filter(text => text > 2)
                console.log(result)
            },
            handleFind(){ //hàm lọc trả về 1 phần tử đầu tiên
                let result = this.arr_1.find(el=>el > 2 )
                console.log(result)
            },
            // handleInclude(){  //hàm trả về đúng sai với tham số truyền vào
            //     let result = this.arr_1.includes(4);
            //     console.log(result)
            // },
            // handleJoin(){ //hàm chuyển mảng thành 1 chuỗi
            //     let result = this.arr_1.join(" ");
            //     console.log(result)
            // },
            // handlePop(){ //xóa phần tử cuối cùng trong mảng
            //     this.arr_1.pop()
            //     console.log(this.arr_1);
            // },
            // handleShift(){  //xóa phần tử đầu tiên trong mảng
            //     this.texts.shift()
            //     console.log(this.texts);
            // },
            // handlePush(){  //thêm phần tử vào cuối mảng
            //     this.texts.push('Bui Xuan Xep')
            //     console.log(this.texts)
            // },
            // handleUnshift(){ //thêm phần tử vào đầu mảng
            //     this.texts.unshift('xep')
            //     console.log(this.texts)
            // },
            // handleReverse(){ //đảo ngược mảng
            //     this.arr_1.reverse()
            //     console.log(this.arr_1)
            // },
            // handleCharAt(){  //hàm lấy ra giá trị theo chỉ mục 
            //     let abc = this.word.join();
            //     let index = abc.charAt(2)
            //     console.log(index)
            // },
            // handleIndexOf(){ // hàm trả về index của chuỗi truyền vào, trả về vị trí đầu tiên, từ trái->phải
            //     let text = 'abc xyz ok xyz ok ok'
            //     let result = text.indexOf('xyz')
            //     console.log(result)
            // },
            // handleLastIndexOf(){ //hàm trả về index của chuỗi truyền vào, trả về vị trí đầu tiên, từ phải->trái
            //     let text = 'abc xyz ok xyz ok ok'
            //     let result = text.lastIndexOf('xyz')
            //     console.log(result)
            // },
            // handleReplace(){ //hàm thay thế từ đầu tiên phù hợp trong chuỗi
            //     let text = 'abc xyz ok xyz ok ok'
            //     let result = text.replace('xyz','BXX')
            //     console.log(result)
            // },
            // handleReplaceAll(){ //hàm thay thế tất cả các từ phù hợp trong chuỗi
            //     let text = 'abc xyz ok xyz ok ok'
            //     let result = text.replaceAll('xyz','BXX')
            //     console.log(result)
            // },
            // handleSlice(){ //cắt chuỗi
            //     let text = 'abc xyz ok xyz ok ok'
            //     let result = text.slice(0,-1)  //tham số đầu là start,tham số 2 là end, đối với số âm thì đi từ phải->trái
            //     console.log(result)
            // },
            // handleSplit(){ //cắt chuỗi thành mảng dựa theo điều kiện
            //     let text = 'abc xyz ok xyz ok ok'
            //     let result = text.split()  
            //     let result1 = text.split('')  
            //     let result2 = text.split('',4)  //tham số thứ 2 là index cần cắt
            //     console.log(result)
            //     console.log(result1)
            //     console.log(result2)
            // },
            // handleToUpperCase(){
            //     let text = 'bUi XuAN xEp'
            //     let check = text.toUpperCase()
            //     console.log(check)
            // },
            // handleToLowerCase(){
            //     let text = 'bUi XuAN xEp'
            //     let check = text.toLowerCase()
            //     console.log(check)
            // },
            // handleTrim(){
            //     let text = '    bUi XuAN xEp    '
            //     let check = text.trim()
            //     console.log(check)
            // },
            // handleTrimStart(){
            //     let text = '    bUi XuAN xEp    '
            //     let check = text.trimStart()
            //     console.log(check)
            // },
            // handleTrimEnd(){
            //     let text = '    bUi XuAN xEp    '
            //     let check = text.trimEnd()
            //     console.log(check)
            // },
        },
        mounted() {
            // this.handleConcat()
            this.handleFilter()
            this.handleFind()
            // this.handleInclude()
            // this.handleJoin()
            // this.handlePop()
            // this.handleShift()
            // this.handlePush()
            // this.handleUnshift()
            // this.handleReverse()
            // this.handleCharAt()
            // this.handleIndexOf()
            // this.handleLastIndexOf()
            // this.handleReplace()
            // this.handleReplaceAll()
            // this.handleSlice()
            // this.handleSplit()
            // this.handleToUpperCase()
            // this.handleToLowerCase()
            // this.handleTrim()
            // this.handleTrimStart()
            // this.handleTrimEnd()
        },
    }
</script>

<style lang="scss" scoped>

</style>