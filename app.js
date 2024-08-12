const ul = document.querySelector("#jokes");

const addjoke = async () => {
  const textjokes = await getData();
  const newLi = document.createElement("li");
  newLi.append(textjokes);
  ul.append(newLi);
};

const getData = async () => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await axios.get("https://icanhazdadjoke.com", config);
    return res.data.joke;
  } catch (error) {
    return "No Jokes Available";
  }
};

document.querySelector("button").addEventListener("click", addjoke);
