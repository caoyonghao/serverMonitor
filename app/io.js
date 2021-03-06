var socketio = require('socket.io');
exports.init = function(server) {
    console.log('init');
    var io = socketio(server)
    io.on('connection', function(socket){
        console.log('a user connected');

        //监听新用户加入
        socket.on('login', function(obj){
            //将新加入用户的唯一标识当作socket的名称，后面退出的时候会用到
            socket.name = obj.userid;

            //检查在线列表，如果不在里面就加入
            if(!onlineUsers.hasOwnProperty(obj.userid)) {
                onlineUsers[obj.userid] = obj.username;
                //在线人数+1
                onlineCount++;
            }

            //向所有客户端广播用户加入
            io.emit('login', {onlineUsers:onlineUsers, onlineCount:onlineCount, user:obj});
            console.log(obj.username+'加入了聊天室');
        });

        //监听用户退出
        socket.on('disconnect', function(){
            //将退出的用户从在线列表中删除

        });

        //监听用户发布聊天内容
        socket.on('message', function(obj){
            //向所有客户端广播发布的消息
            io.emit('news', obj);
            console.log(obj.username+'说：'+obj.content);
        });

    });
}