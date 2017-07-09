// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {brand: 'Top', datas: ['Armani','Anastashia Bevely Hills']},
      {brand: 'A', datas: ['Armani','Anastashia Bevely Hills']},
      {brand: 'B', datas: ['BH Cosmetics','Bobbi Browm','Bourjois']},
      {brand: 'C', datas: ['Chanel','Clinique','ColorPop']},
      {brand: 'D', datas: ['Dior']},
      {brand: 'E', datas: ['e.l.f','Estee Lauder','Etude House']},
      {brand: 'F', datas: ['fsome','fentries','are here']},
      {brand: 'G', datas: ['gsome','gentries','gare here']},
      {brand: 'H', datas: ['hsome','hentries','hare here']},
      {brand: 'I', datas: ['isome','ientries','iare here']},
      {brand: 'J', datas: ['jsome','jentries','jare here']},
      {brand: 'K', datas: ['ksome','kentries','kare here']},
      {brand: 'L', datas: ['lsome','lentries','lare here']},
      {brand: 'M', datas: ['msome','mentries','mare here']},
      {brand: 'N', datas: ['nsome','nentries','nare here']},
      {brand: 'O', datas: ['osome','oentries','oare here']},
      {brand: 'P', datas: ['psome','pentries','pare here']},
      {brand: 'Q', datas: ['qsome','qentries','qare here']},
      {brand: 'R', datas: ['rsome','rentries','rare here']},
      {brand: 'S', datas: ['some','sentries','sare here']},
      {brand: 'T', datas: ['tsome','tentries','tare here']},
      {brand: 'U', datas: ['usome','uentries','uare here']},
      {brand: 'V', datas: ['vsome','ventries','vare here']},
      {brand: 'W', datas: ['wsome','wentries','ware here']},
      {brand: 'X', datas: ['xsome','xentries','xare here']},
      {brand: 'Y', datas: ['ysome','yentries','yare here']},
      {brand: 'Z', datas: ['zsome','zentries','zare here']},
    ],
    alpha: '',
    windowHeight: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // imageLoad: function() {
  //   this.setData({
  //     imageWidth: wx.getSystemInfoSync().windowWidth
  //   })
  // },
  onLoad(options){
     try {
       var res = wx.getSystemInfoSync()
       this.pixelRatio = res.pixelRatio;
       // this.apHeight = 32 / this.pixelRatio;
       // this.offsetTop = 160 / this.pixelRatio;
       this.apHeight = 16;
       this.offsetTop = 80;
       this.setData({windowHeight: res.windowHeight + 'px'})
     } catch (e) {

     }
   },
   handlerBrandTap(e) {
     let {ap} = e.target.dataset;
     this.setData({alpha: ap});
   },
   handlerMove(e) {
     let {list} = this.data;
     let moveY = e.touches[0].clientY;
     let rY = moveY - this.offsetTop;
     if(rY >= 0) {
       let index = Math.ceil((rY - this.apHeight)/ this.apHeight);
       if(0 <= index < list.length) {
         let nonwAp = list[index];
         nonwAp && this.setData({alpha: nonwAp.brand});
       }
     }
   },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
