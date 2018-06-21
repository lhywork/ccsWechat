//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    carts: [{
      'pic':'../../images/shop.png',
      'title':'耐磨室内地砖 A2',
      'price':'389',
      'num': 1
    }, {
      'pic': '../../images/shop.png',
      'title': '耐磨室内地砖 A2',
      'price': '389',
      'num': 1
    }],
    totalPrice: 0,           // 总价，初始为0
  },
  //事件处理函数 
  // 增加数量
  bindPlus: function (e){
    var index = e.currentTarget.dataset.index;
    var carts = this.data.carts;
    var num = carts[index].num;
        num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice(); 
  },
  // 减少数量
  bindMinus(e) {
    var index = e.currentTarget.dataset.index;
    var carts = this.data.carts;
    var num = carts[index].num;
    if(num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  //计算总价
  getTotalPrice() {
    var carts = this.data.carts;                  // 获取购物车列表
    var total = 0;
    for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
        total += carts[i].num * carts[i].price;     // 所有价格加起来
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2)
    });
  },
  onLoad: function () {
    this.getTotalPrice();
  }
})
