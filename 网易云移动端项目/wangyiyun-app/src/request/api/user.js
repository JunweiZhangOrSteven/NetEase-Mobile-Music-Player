import service from "..";
//获取用户详情
export function getUserDetail(data) {
    return service({
        method: "GET",
        url: `/user/detail?uid=${data}`
    })
}
//获取用户详情
export function getUserFavorite(data) {
    return service({
        method: "GET",
        url: `/user/playlist?uid=${data}`
    })
}