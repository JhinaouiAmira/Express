const day = new Date().getDay();
const hour = new Date().getHours();
function testMi(req, res, next) {
  if (day > 0 && day < 6 && hour > 8 && hour < 17) {
    next();
  } else {
    res.send("<h1>sorrryyyyyyyy we work from monday to friday, from 8 to 17</h1>");
  }
}
module.exports = testMi;
