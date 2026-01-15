const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config({ path: '.env.local' });

async function main() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const models = await genAI.listModels();
  console.log("Danh sách model khả dụng:");
  models.forEach(m => console.log(m.name));
}
main();