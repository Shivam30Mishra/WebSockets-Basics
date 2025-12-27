import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({port : 8080})

// event handler like node js had in express
wss.on("connection",function(socket){
  socket.send("hello");
  console.log("user connected")

  socket.on("message",(e)=>{
    console.log(e.toString())
  })
})

// checking the above code is corrected via using postman