
const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();

const date = function () {
console.log(day,month,year)
}

const getInfo = {
  name: "Lithium",
  week: "W3D5",
  topic: "Todays Node js Topic -- How to create Module and Export it.",
};

function getBatchInfo() {
  return `${getInfo.name} , ${getInfo.week} , ${getInfo.topic} `
}

getBatchInfo();






module.exports.date = date
module.exports.abc=getBatchInfo
