const mongoose = require("mongoose");

// Récupère l'URL depuis la variable d'environnement Railway
const mongoURL = process.env.MONGO_URL;

if (!mongoURL) {
  console.error("⚠️ MONGO_URL n'est pas défini !");
  process.exit(1);
}

// Connexion MongoDB
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connecté ✅"))
  .catch(err => console.error("Erreur MongoDB ❌ :", err));
