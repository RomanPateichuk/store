const axios = require("axios");

let GetDataModel = async (url, mutation, commit) => {
  return axios(
    url,
    { data: {} },
    {
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    }
  )
    .then((response) => {
      commit(`${mutation}`, response.data);
      return response;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

module.exports = GetDataModel;
