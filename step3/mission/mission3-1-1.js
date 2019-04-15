//1. 아래의 데이터 중 숫자 타입으로만 구성된 요소를 뽑아 배열을 만드세요.

const data = {
  window: {
    title: "Sample Konfabulator Widget",
    name: "main_window",
    width: 500,
    height: 500
  },
  image: {
    src: "Images/Sun.png",
    name: "sun1",
    hOffset: 250,
    vOffset: 250,
    alignment: "center"
  },
  text: {
    data: "Click Here",
    size: 36,
    style: "bold",
    name: "text1",
    hOffset: 250,
    vOffset: 100,
    alignment: "center",
    onMouseUp: "sun1.opacity = (sun1.opacity / 100) * 90;"
  }
};

numberFilter = function() {
  let result = [];

  for (i in data) {
    for (j in data[i]) {
      if (typeof data[i][j] === "number") {
        result.push(j);
      }
    }
  }

  return result;
};

console.log(numberFilter(data));
