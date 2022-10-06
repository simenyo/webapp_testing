import someObj from "../src/questions.json";

let questionArray = someObj.questions;

// Spørsmål 1
it("should return: Hvilken farge hadde Napoleons hvite hest?", () => {
  expect(questionArray).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        title: "Hvilken farge hadde Napoleons hvite hest?",
      }),
    ])
  );
});

it("should return correct: true", () => {
  expect(questionArray[0].answers[3].correct).toBe(true);
});

// Spørsmål 2
it("should return Halden", () => {
  expect(questionArray[1].answers[1].answer).toBe("Halden");
});

it("should return correct: true", () => {
  expect(questionArray[1].answers[3].answer).toBe("Oslo");
});

it("should return correct: true", () => {
  expect(questionArray[1].helper.text).toBe("Det er ikke Trondheim");
});

// Spørsmål 3
it("should return title: Hvilken av disse er Oddvar Brå small talk?", () => {
  expect(questionArray[2].title).toBe(
    "Hvilken av disse er Oddvar Brå small talk?"
  );
});

it("should return answer 3 as correct: false", () => {
  expect(questionArray[2].answers[0].correct).toBe(false);
});

it("should return help text: Se ut i vår hage", () => {
  expect(questionArray[2].helper.text).toBe("Se ut i vår hage");
});

// Spørsmål 4
it("should return correct answer: 4", () => {
  expect(questionArray[3].answers[3].answer).toBe("4");
});
