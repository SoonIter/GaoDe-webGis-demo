import axios from "./index.js"

export async function handleMessage(mapMessage) {
  console.log(mapMessage)
  const res = await axios.request({
    url: "/handle_message",
    method: "post",
    data: {
      mapMessage: JSON.stringify(mapMessage)
    }
  }).catch(err => {
    console.log("网络错误")
  })
  console.log("保存打卡信息", res.data)
  return res.data
}

