// 필터 관련 함수가 존재하는 파일
const filters = {
  formatDate(value) {
    const date = new Date(value);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month > 9 ? month : `0${month}`;
    const day = date.getDate();
    let hours = date.getHours();
    hours = hours > 9 ? hours : `0${hours}`;
    let minutes = date.getMinutes();
    minutes = minutes > 9 ? minutes : `0${minutes}`;
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  },
};

export default filters;
