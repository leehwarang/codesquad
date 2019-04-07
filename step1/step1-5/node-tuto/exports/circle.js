const { PI } = Math;

exports.text = "원의 둘레와 면적을 계산할거야!";

exports.area = function(r) {
  return PI * r * r;
};

exports.circumference = function(r) {
  return 2 * PI * r;
};
