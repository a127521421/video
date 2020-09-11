// 網頁伺服器
import express from 'express'
// 讓 express 可以讀取 Body 資料
import bodyParser from 'body-parser'
// 跨域套件
import cors from 'cors'
// 環境套件
import dotenv from 'dotenv'
// axios
import axios from 'axios'

axios.defaults.withCredentials = true

// 啟動環境
dotenv.config()

// 使用套件
const app = express()
// 讓 express 使用 body-parser，並把收到的資料轉 json
app.use(bodyParser.json())

// 設定跨域的請求
app.use(cors({
  // origin 來源網域
  // callback(錯誤, 是否允許)
  origin (origin, callback) {
    // 直接開網頁，不是 ajax 時，origin 是 undefined
    if (origin === undefined) {
      callback(null, true)
    } else {
      if (process.env.ALLOW_CORS === 'true') {
        // 開發環境，允許
        callback(null, true)
      } else if (origin.includes('github')) {
        // 非開發環境，但是從 github 過來，允許
        callback(null, true)
      } else {
        // 不是開發也不是從 github 過來，拒絕
        callback(new Error('Not allowed'), false)
      }
    }
  },
  // 是否允許認證資訊
  credentials: true
}))

app.get('/video', async (req, res) => {
  try {
    axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&chart=mostPopular&maxResults=50&key=AIzaSyA-Xdcsh6XhJ60kt_YDaQWZTepGVAvAcGw')
      .then(response => {
        res.status(200)
        res.send({ success: true, message: '', response: response.data })
      })
  } catch (error) {
    res.status(500)
    res.send({ success: false, message: '伺服器錯誤' })
  }
})

app.get('/video/:nextPageToken', async (req, res) => {
  try {
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&chart=mostPopular&maxResults=50&key=AIzaSyA-Xdcsh6XhJ60kt_YDaQWZTepGVAvAcGw&pageToken=${req.params.nextPageToken}`)
      .then(response => {
        res.status(200)
        res.send({ success: true, message: '', response: response.data })
      })
  } catch (error) {
    res.status(500)
    res.send({ success: false, message: '伺服器錯誤' })
  }
})

// 監聽
app.listen(process.env.PORT, () => {
  console.log('已啟動')
  console.log('http://localhost:3000')
})
