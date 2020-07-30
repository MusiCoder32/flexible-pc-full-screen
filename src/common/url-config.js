module.exports = {
    form: {
        test: 'form/test'
    },
    test: {
        post: 'test/post',
        get: 'test/get'
    },
    host: {
        login: 'web/api/login',
        passwordModify: 'web/api/password/modify',
        usagerate: 'web/api/usagerate',
        macGet: 'web/api/mac/get',
        ipGet: 'web/api/ip/get',
        hostId: 'host/list',
        homekit: 'host/homekit/query',
    },
    floor: {
        multipleAdd: 'atom-host/api/space/floors/add',
        multipleAddRoom: 'atom-host/api/space/rooms/add',
        singleAdd: 'atom-host/api/space/floor/add',
        singleDeleteSpace: 'atom-host/space/del-by-post',//删除房间与删除空间均为同一窗口
        multipleDeleteSpace: 'atom-host/space/del/batch',//删除房间与删除空间均为同一窗口
        updateSpace: 'atom-host/space/upd',//更新空间信息
        updateSpaceDevice: 'atom-host/api/device/upd',// 绑定空间与设备
        get: 'atom-host/api/space/list'//'{'level': 1,'hostId': '87'}' level = 0 获取家庭;level=1 获取楼层;level=2获取房间
    },
    room: {
        devices: 'atom-host/api/space/mine/room/devices',
        singleAdd: 'atom-host/api/space/add',
        get: 'atom-host/api/space/list'//'{'level': 1,'hostId': '87'}' level = 0 获取家庭;level=1 获取楼层;level=2获取房间
    },
    device: {
        deviceList: 'atom-host/device/list',//查询所有设备
        deviceState: 'atom-host/api/device/state/query',//查询单个设备
        gatewayList: 'atom-host/device/gateway',//查询网关设备
        scanGateway: 'atom-host/api/device/get-gwlist',//扫描网关设备
        modifyGateway: 'atom-host/api/device/modify-gw',//修改网关设备
        terminalList: 'atom-host/device/terminal',//查询终端设备
        deviceUpdate: 'atom-host/device/udp',//修改设备（网关和终端设备）
        deviceAdd: 'atom-host/device/add',//添加设备（网关和终端）
        deviceDel: 'atom-host/device/del',//删除网关或终端设备
        deviceDelBatch: 'atom-host/device/del/batch',//批量删除终端设备
        deviceAutoAdd: 'atom-host/api/device/get-devlist',//批量删除终端设备
        deviceConfig: 'atom-host/api/device/config/enter',//配置模式添加设备
        getDeviceConfig: 'atom-host/api/device/config/get',//轮询通过配置模式添加的设备
        deviceControl: 'atom-host/dispatch/device/ctl'//轮询通过配置模式添加的设备

    },
    safe: {
        save: 'atom-host/api/defence/add', //添加防区
        safeTableList: 'atom-host/api/defence/list',  //查询防区
        updateSafe: 'atom-host/api/defence/upd', //修改防区
        deleteSafe: 'atom-host/api/defence/del', //删除防区
        updateStatus: 'atom-host/defence/upd/batch', //布防设防
        getSafeChildren: 'atom-host/api/defence/get' //获取防区子表关联设备
    },
    smart: {
        getTimerTableList: 'atom-host/trigger/timer/list', //获取计时器列表
        addTimer: 'atom-host/trigger/timer/add', //添加计时器
        deleteTimer: 'atom-host/trigger/timer/del-by-post', //删除计时器
        updateTimer: 'atom-host/trigger/timer/upd', //修改计时器
        getSafeChildren: 'atom-host/api/defence/get', //获取防区子表关联设备

        getSceneList:'atom-host/scene/list',
        updateScene:'atom-host/scene/upd',
        delScene:'atom-host/scene/del',
        addScene:'atom-host/scene/add',
        ctlScene:'atom-host/dispatch/scene/ctl',

    },
    switch: {
        getList:'atom-host/trigger/panel/list',//获取开关面板触发器列表
        get:'atom-host/trigger/panel/get',//获取开关面板触发器
        update:'atom-host/trigger/panel/upd',//更新开关面板触发器
        delete:'atom-host/trigger/panel/del',//删除开关面板触发器
        add:'atom-host/trigger/panel/add',//添加开关面板触发器
    }

};
