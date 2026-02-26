const mongoose = require("mongoose");

// 🔹 Connexion MongoDB
const mongoURL = process.env.MONGO_URL;
if (!mongoURL) {
  console.error("⚠️ MONGO_URL n'est pas défini !");
  process.exit(1);
}

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connecté ✅"))
  .catch(err => console.log("Erreur MongoDB ❌ :", err));
