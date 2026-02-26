try {
  const mongoose = require("mongoose");
  console.log("Mongoose est bien installé ✅");
} catch (err) {
  console.error("Mongoose NON installé ❌");
  console.error(err);
}

console.log("Test démarrage serveur");
