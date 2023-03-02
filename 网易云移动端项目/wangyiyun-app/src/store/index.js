import { createStore } from 'vuex'
import { getPhoneLogin } from "@/request/api/home.js"
import {
    getMusicLyric
} from "@/request/api/item.js"
export default createStore({
    state: {
        playList: [{ //播放列表
            al: {
                id: 84029595,
                name: "想去海边",
                pic: 109951164966568500,
                picUrl: "https://p1.music.126.net/sLWN-iePq4ESOMPER0IWgQ==/109951164602081973.jpg",
                pic_str: "109951164602081973"
            },
            id: 1413863166,
            name: "想去海边",
            ar: [{ name: "夏日入侵企画" }]
        }],
        playListIndex: 0, //默认下标为0
        isbtnShow: true, //暂停按钮的显示
        detailShow: false, //歌曲详情页的显示s
        lyricList: {}, //歌词
        currentTime: 0, //当前时间
        duration: 0, //歌曲总时长
        isLogin: false, //判断是否登录
        isFooterMusic: true, //判断底部组件是否需要显示
        token: "",
        user: {}, //用户信息
        MvList: [],
        MvListIndex: 0,
        MvDetailShow: false,

    },

    getters: {},
    mutations: {
        updateIsbtnShow: function(state, value) {
            state.isbtnShow = value
        },
        updatePlayList: function(state, value) {
            state.playList = value
            console.log(state.playList);
        },
        updatePlayListIndex: function(state, value) {
            state.playListIndex = value
            console.log(state.playListIndex);
        },
        updateDetailShow: function(state) {
            state.detailShow = !state.detailShow
        },
        updateMvDetailShow: function(state, value) {
            state.MvDetailShow = !state.MvDetailShow
            state.MvListIndex = value;
            console.log(state.MvDetailShow)
            console.log(state.MvListIndex)
        },
        updateLyricList: function(state, value) {
            state.lyricList = value
        },
        updateCurrentTime: function(state, value) {
            // console.log(state.currentTime);
            state.currentTime = value
        },
        updateDuration: function(state, value) {
            state.duration = value
        },

        updateIsLogin: function(state, value) {
            state.isLogin = true
        },
        updateToken: function(state, value) {
            state.token = value
            localStorage.setItem('token', state.token)
        },
        updateUser: function(state, value) {
            state.user = value
        },
        pushPlayList: function(state, value) {
            state.playList.push(value)
        },
        showLogin: function(state) {
            console.log(state.isLogin)
            console.log(state.token)
            console.log(localStorage.getItem('token'))
        }
    },
    actions: {
        getLyric: async function(context, value) {
            let res = await getMusicLyric(value)
            console.log(res);
            context.commit("updateLyricList", res.data.lrc)
        },
        getLogin: async function(context, value) {
            let res = await getPhoneLogin(value);
            // console.log(res);
            return res
        }
    },
    modules: {}
})