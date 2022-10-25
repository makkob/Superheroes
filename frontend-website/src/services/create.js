import axios from "axios";

const URL = `http://localhost:5000/api/posts`;

// const body = {
//   nickname: "DOLANG 2022",
//   real_name: "Сам Склепал",
//   origin_description: "asdasaddsasasadsasa",
//   superpowers: "2sasaassadsdasadsad",
//   catch_phrase: "3asdadsasadsdsda",
//   picture: "../../../backend/static/1e988005-cbec-4887-9fe3-b6fc7073613a.jpg",
// };

const body = {
  nickname: "Wolverine",
  real_name: "James Howlett",
  origin_description:
    "James Howlett was born to wealthy John and Elizabeth Howlett in Alberta, Canada, during the last years of the 19th century. As a child, he was frail and unhealthy due to his overactive mutant immune system and was neglected by his mother, who had been institutionalized following the death of her first son, John Jr., in 1897. James’s mutant abilities were triggered when his father was shot by the Howlett groundskeeper Thomas Logan, whom he did not know was his real father. James killed Logan, slashed the face of Logan’s son and his friend Dog, and left Alberta with a childhood friend, Rose O’Hara.",
  superpowers:
    "Wolverine’s rapid regeneration powers allow him to bounce back from almost every type of bodily wound on the condition that his head remains firmly attached to his shoulders. \nThe most iconic of his natural weapons are six retractable, slightly curved, foot-long bone claws, three in each arm, beneath the skin and muscle of his forearms. He can, at will, release these claws through the skin beneath his knuckles. The claws are naturally sharp and tougher than normal human bone, allowing them to penetrate most types of flesh and natural materials.",
  catch_phrase: "“I'm the best there is at what I do isn't very nice.”",
  picture: "61aab0b3-d854-4ec0-92fa-ba5d9a7aefb9.jpg",
};

// const addNew = body => {
//   return async dispatch => {
//     try {
//       const add = await axios.post(URL, body);
//       dispatch(addCampus(campus.data));
//     } catch (err) {
//       console.log(`ERROR creating campus.`, err);
//     }
//   };
// };
// }

const test = new FormData({
  test: 2,
});
console.log(test);
async function addNew() {
  return await axios
    .post(URL, body, {
      headers: {
        "content-type": "text/json",
      },
    })
    .then((res) => console.log(JSON.stringify(res)))

    .catch((err) => console.log(err));
}

export default addNew;
