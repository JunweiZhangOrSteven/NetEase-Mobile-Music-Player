import service from "..";
//获取歌单详情页的数据
export function getMvVideoUrl(data) {
    return service({
        method: "GET",
        url: `/mv/url?id=${data}`
    })
}
