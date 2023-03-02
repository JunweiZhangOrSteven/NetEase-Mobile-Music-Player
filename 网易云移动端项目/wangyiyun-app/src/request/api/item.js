import service from "..";
//获取歌单详情页的数据
export function getMusicItemList(data) {
    return service({
        method: "GET",
        url: `/playlist/detail?id=${data}`
    })
}
//获取歌单的所有歌曲
export function getItemList(data) {
    return service({
        method: "GET",
        url: `/playlist/track/all?id=${data.id}&limit=${data.limit}&offset=${data.offset}`
    })
}
//获取歌曲的歌词
export function getMusicLyric(data) {
    return service({
        method: "GET",
        url: `/lyric?id=${data}`
    })
}

//获取新歌曲
export function getNewSong(data) {
    return service({
        method: "GET",
        url: `/personalized/newsong?limit=10`
    })
}
//获取歌手详情
export function getArtistDetail(data) {
    return service({
        method: "GET",
        url: `/artist/detail?id=${data}`
    })
}
//获取歌手单曲
export function getArtistSong(data) {
    return service({
        method: "GET",
        url: `/artists?id=${data}`
    })
}