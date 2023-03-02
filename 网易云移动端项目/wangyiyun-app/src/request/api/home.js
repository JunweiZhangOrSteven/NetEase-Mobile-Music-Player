import service from "..";
// 获取首页轮播图的数据
export function getBanner() {
    return service({
        method: "GET",
        url: "/banner?type=2",
    })
}
//获取发现好歌单
export function getMusicList() {
    return service({
        method: "GET",
        url: "/personalized?limit=11"
    })
}

//获取推荐新音乐
export function getNewSongList() {
    return service({
        method: "GET",
        url: "/personalized/newsong?limit=12"
    })
}
//搜索
export function getSearchMusic(data) {
    return service({
        method: "GET",
        url: `/search?keywords=${data}`
    })
}
//搜索歌手
export function getArtist(data) {
    return service({
        method: "GET",
        url: `/artist/detail?id=${data}`
    })
}
//登录
export function getPhoneLogin(data) {
    return service({
        method: "GET",
        url: `/login/cellphone?phone=${data.phone}&password=${data.password}`
    })
}
//获取用户详情
export function getLoginUser(data) {
    return service({
        method: "GET",
        url: `/user/detail?uid=${data}`
    })
}
//获取热门歌曲
export function getHotSongs() {
    return service({
        method: "GET",
        url: `/personalized/newsong?limit=30`
    })
}
//获取热门歌手
export function getHotArtist() {
    return service({
        method: "GET",
        url: `/toplist/artist`
    })
}
//获取热门歌手
export function getHotMV() {
    return service({
        method: "GET",
        url: `/mv/first?limit=10`
    })
}

//获取热门排行榜
export function getTopList() {
    return service({
        method: "GET",
        url: `/toplist/detail`
    })
}
//获取登录状态
export function getUserStatus() {
    return service({
        method: "GET",
        url: `/login/status`
    })
}

//获取每日推荐歌曲
export function getRecommendSong() {
    return service({
        method: "GET",
        url: `/recommend/songs`
    })
}

//获取歌手
export function getTopArtist() {
    return service({
        method: "GET",
        url: `/top/artists?offset=0&limit=20`
    })
}