import axios from "./index.js"


export function test() {
  // setInterval(() => {
    axios.request({
      url:"http://1.116.26.151:8024/api/msg/save",
      pwd: "？",
      content: "love you",
      avatar: 3,
      md5_id: "6325fc5e-acfe-47ba-8ae6-780fd126626b",
      openid: "bluedao"
    })
  // }, 100)
}


fetch("http://1.116.26.151:8024/api/msg/save", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    "proxy-connection": "keep-alive",
    "Referer": "http://blue.h5.qxey.xyz/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "pwd=%EF%BC%9F&content=123123&avatar=0&md5_id=6325fc5e-acfe-47ba-8ae6-780fd126626b&openid=bluedao",
  "method": "POST"
});