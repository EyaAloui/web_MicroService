const mongoose = require('mongoose');

// Remplacez `mongodb://localhost:27017/nom_de_la_base` par l'URL de votre base de données
mongoose.connect('mongodb://localhost:27017/forum', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connexion à MongoDB réussie"))
.catch((err) => console.error("Erreur de connexion à MongoDB :", err));
