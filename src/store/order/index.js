export default {
  namespaced: true,
  state: {
     titleOrders :'Bảng hóa đơn',
    receipt:[{
        date: "2016-05-03",
        name: "Bim bim",
        description: "Hóa đơn 1"
    }, {
        date: "2016-05-02",
        name: "Trà sữa",
        description: "Hóa đơn 2"
    }, {
        date: "2016-05-04",
        name: "Bánh kẹo",
        description: "Hóa đơn 3"
    }, {
        date: "2016-05-01",
        name: "Bia",
        description: "Hóa đơn 4"
    }]
  },
  getters: {
    // Khai báo getters
  },
  mutations: {
    changeTitle(state){
      state.titleOrders = 'Đây là bảng hóa đơn'
    }
  },
}