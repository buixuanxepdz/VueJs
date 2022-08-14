export default {
  namespaced: true,
  state: {
    titleProducts :'Bảng sản phẩm',
    products: 
    [{
        date: "2016-05-03",
        name: "Tom",
        description: "Đây là sản phẩm 1"
    }, {
        date: "2016-05-02",
        name: "Tom",
        description: "Đây là sản phẩm 2"
    }, {
        date: "2016-05-04",
        name: "Tom",
        description: "Đây là sản phẩm 3"
    }, {
        date: "2016-05-01",
        name: "Tom",
        description: "Đây là sản phẩm 4"
    }],
  },
  getters: {
    // Khai báo getters
  },
  mutations: {
    changeTitle(state){
      state.titleProducts = 'Đây là bảng sản phẩm'
    }
  },
}