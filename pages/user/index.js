//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    brand: ['全部品牌', 'A品牌', 'B品牌', 'C品牌', 'D品牌'],
    brandIndex: 0,
    model: ['型号', 'A型号', 'B型号', 'C型号', 'D型号'],
    modelIndex: 0
  },
  //事件处理函数
  bindBrandSelect: function(e) {
    this.setData({
      brandIndex: e.detail.value
    })
  },
  bindModelSelect: function (e) {
    this.setData({
      modelIndex: e.detail.value
    })
  },
  onLoad: function () {

  }
})
