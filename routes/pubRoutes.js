const Publication = require('../models/Publication');

// Route pour créer une publication
app.post('/publications', async (req, res) => {
  const { title, content } = req.body;

  // Vérification si les données nécessaires sont présentes
  if (!title || !content) {
    return res.status(400).json({ message: 'Le titre et le contenu sont requis.' });
  }

  // Création d'une nouvelle publication
  const publication = new Publication({ title, content });

  try {
    // Sauvegarde de la publication dans la base de données
    await publication.save();
    // Réponse avec la publication créée
    res.status(201).json(publication);
  } catch (error) {
    // Gestion des erreurs (par exemple, erreur de base de données)
    res.status(500).send('Erreur lors de la création de la publication');
  }
});



app.delete('/publications/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const publication = await Publication.findByIdAndDelete(id);

    if (!publication) {
      return res.status(404).json({ message: 'Publication non trouvée' });
    }

    res.status(200).json({ message: 'Publication supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de la publication' });
  }
});


// Route pour mettre à jour une publication par son ID
app.put('/publications/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  // Vérification si les données nécessaires sont présentes
  if (!title || !content) {
    return res.status(400).json({ message: 'Le titre et le contenu sont requis.' });
  }

  try {
    // Recherche et mise à jour de la publication par son ID
    const publication = await Publication.findByIdAndUpdate(
      id,
      { title, content },
      { new: true } // Retourner la publication mise à jour
    );

    // Si la publication n'est pas trouvée
    if (!publication) {
      return res.status(404).json({ message: 'Publication non trouvée' });
    }

    // Réponse avec la publication mise à jour
    res.status(200).json(publication);
  } catch (error) {
    // Gestion des erreurs
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la publication' });
  }
});

// Route pour récupérer toutes les publications
app.get('/publications', async (req, res) => {
  try {
    // Récupération de toutes les publications depuis la base de données
    const publications = await Publication.find();

    // Si aucune publication n'est trouvée
    if (publications.length === 0) {
      return res.status(404).json({ message: 'Aucune publication trouvée' });
    }

    // Réponse avec toutes les publications
    res.status(200).json(publications);
  } catch (error) {
    // Gestion des erreurs (par exemple, erreur de base de données)
    res.status(500).json({ message: 'Erreur lors de la récupération des publications' });
  }
});

// Route pour récupérer une publication par son ID
app.get('/publications/:id', async (req, res) => {
  const { id } = req.params;  // Récupère l'ID de la publication depuis les paramètres de l'URL

  try {
    // Recherche de la publication par son ID
    const publication = await Publication.findById(id);

    // Si la publication n'est pas trouvée
    if (!publication) {
      return res.status(404).json({ message: 'Publication non trouvée' });
    }

    // Réponse avec la publication trouvée
    res.status(200).json(publication);
  } catch (error) {
    // Gestion des erreurs (par exemple, erreur de format de l'ID ou de base de données)
    res.status(500).json({ message: 'Erreur lors de la récupération de la publication' });
  }
});
