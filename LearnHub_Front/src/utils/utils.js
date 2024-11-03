import QuizAppModule from "../../src/assets/icons/Quiz_Logo.png";
import CodePracticeModule from "../../src/assets/icons/code-practice-module.png";
import AskToTeacherModule from "../../src/assets/icons/ask-to-teacher-module.png";
import TypingModule from "../assets/icons/code-practice-module.png";

export const ModulesData = [
  {
    imgUrl: QuizAppModule,
    heading: "Quick Quiz Challenge",
    description:
      "The quiz feature on Learnhub allows you to test your knowledge across various topics. Each quiz is designed to challenge your understanding and help you improve. You can choose from different difficulty levels, track your progress, and engage with fun, interactive questions to expand your learning and boost your skills.",
  },
  {
    imgUrl: CodePracticeModule,
    heading: "Speed Up Your Coding Skills",
    description: `The code typing practice on Learnhub is designed to enhance your coding speed and precision. Through hands-on exercises, you'll improve your ability to type code efficiently and accurately. Whether you're a beginner or an experienced coder, this feature helps sharpen your skills while tracking your progress in real-time.`,
  },
  {
    imgUrl: AskToTeacherModule,
    heading: `Ask the Expert: Teacher's Help`,
    description: `The "Ask to Teacher" feature on Learnhub provides a platform for students to seek help with their questions. Whether you’re struggling with a concept or need clarification on assignments, this interactive tool connects you directly with teachers. Get timely responses, gain valuable insights, and enhance your learning experience effortlessly.`,
  },

  {
    imgUrl: TypingModule,
    heading: `Speed Up Your Typing`,
    description: `The typing practice feature on Learnhub helps you improve both speed and accuracy. Whether you're a beginner or looking to fine-tune your typing skills, the interactive exercises offer a fun, engaging way to track your progress. Challenge yourself to type faster and more accurately with each session.`,
  },
];

export const LEVEL_COLOR = {
  Novice:
    "linear-gradient(91deg, #0070CB 0.42%, #008BFF 48.92%, #0070CB 98.51%)",
  Explorer:
    "linear-gradient(91deg, #3BB035 0.42%, #0DFF00 48.92%, #3BB035 98.51%)",
  Ace: "linear-gradient(91deg, #DAA000 0.42%, #FFCA35 48.92%, #DAA000 98.51%)",
  Master:
    "linear-gradient(91deg, #C10000 0.42%, #FF0100 48.92%, #C50C03 98.51%)",
  "Grand Master":
    "linear-gradient(91deg, #4100B9 0.42%, #5900FF 48.92%, #4706B5 98.51%)",
};

export const LEVEL_COLOR_HEX = {
  Novice: "#0172CF",
  Explorer: "#3BB035",
  Ace: "#3BAD35",
  Master: "#C10000",
  "Grand Master": "#4301BE",
};

export const getUserRank = (leaderboardData, userId) => {
  for (let i = 0; i < leaderboardData.length; i++) {
    const item = leaderboardData[i];
    if (item._id === userId) {
      return i + 1;
    }
  }
};

export const coinsToGo = (currentCoins) => {
  if (currentCoins >= 0 && currentCoins < 100) {
    return {
      nextLevel: "Explorer",
      coinsToGo: 100 - currentCoins,
      nextLevelCoins: 100,
    };
  } else if (currentCoins >= 100 && currentCoins < 250) {
    return {
      nextLevel: "Ace",
      coinsToGo: 250 - currentCoins,
      nextLevelCoins: 250,
    };
  } else if (currentCoins >= 250 && currentCoins < 500) {
    return {
      nextLevel: "Master",
      coinsToGo: 500 - currentCoins,
      nextLevelCoins: 500,
    };
  } else if (currentCoins >= 500 && currentCoins < 1000) {
    return {
      nextLevel: "Grand Master",
      coinsToGo: 1000 - currentCoins,
      nextLevelCoins: 1000,
    };
  }
};

export const getDays = (date) => {
  const inputDate = new Date(date);
  const today = new Date();
  const differenceInTime = today - inputDate;
  return Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
};
