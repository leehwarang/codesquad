const { PI } = Math;

module.exports = function(r) {
  return {
    area() {
      return PI * r * r;
    },
    circumference() {
      return 2 * PI * r;
    }
  };
};
