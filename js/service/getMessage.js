import axios from "./index.js"

export async function getMessage() {
  const res = await axios.get("/get_message").catch(err => {
    console.log("网络错误")
  })
  console.log("获取打卡历史信息", res.data)
  return res.data.data
}

