Page({
  data: {
    message: "Welcome to WeChat Mini Program!"
  },
  onLoad: function() {
    console.log("Index page loaded");
  },
  onPullDownRefresh: function() {
    wx.showToast({
      title: 'Refreshed 123!',
      icon: 'success',
      duration: 2000
    });
    wx.stopPullDownRefresh();
  }
});