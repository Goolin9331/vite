import request from "@/util/request";
/**
 * 搜索歌曲
 * @param musicName 歌曲名
 * @returns 搜索结果
 */
export function searchSongs(musicName: string) {
  return request({
    url: `/search?keywords=${musicName}`,
    method: "GET",
  });
}

export function getImage() {
  return request({
    url: `/media2/uploads-images/default/other/2022-04-13/4b367b0ffd856918a8dc337c7d5b8e86.bnc?ext=.jpg&_v=20220617`,
    method: "GET",
    headers: { responseType: "arraybuffer" },
  });
}
