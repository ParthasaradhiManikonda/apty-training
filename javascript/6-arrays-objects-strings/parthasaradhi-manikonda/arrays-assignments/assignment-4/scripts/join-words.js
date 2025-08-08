const input = document.getElementById("wordInput");
const button = document.getElementById("convertBtn");
const result = document.getElementById("result");

function joinWordsToSentence(wordsArray) {
  if (!Array.isArray(wordsArray) || wordsArray.length === 0) {
    return "Invalid input or empty array.";
  }

  const sentence = wordsArray.join(" ").trim();
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

button.addEventListener("click", () => {
  const rawInput = input.value.trim();

  if (rawInput === "") {
    result.textContent = "Please enter some words.";
    return;
  }

  const wordsArray = rawInput
    .split(",")
    .map(word => word.trim())
    .filter(word => word !== "");

  if (wordsArray.length === 0) {
    result.textContent = "Invalid input.";
    return;
  }

  const sentence = joinWordsToSentence(wordsArray);
  result.textContent = "Sentence: " + sentence;
});
