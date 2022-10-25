import axios from "axios";

const URL = `http://localhost:5000/api/posts`;

const body = {
  nickname: "DOLANG 2022",
  real_name: "Сам Склепал",
  origin_description: "asdasaddsasasadsasa",
  superpowers: "2sasaassadsdasadsad",
  catch_phrase: "3asdadsasadsdsda",
  picture: "../../../backend/static/1e988005-cbec-4887-9fe3-b6fc7073613a.jpg",
};

function addNew() {
  console.log(JSON.stringify(body));
  return axios
    .post(URL, JSON.stringify(body))
    .then((res) => console.log(res))

    .catch((err) => console.log(err));
}

export default addNew;
