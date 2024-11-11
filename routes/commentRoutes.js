const Commentaire = require('../models/Commentaire');

// Route pour ajouter un commentaire à une publication spécifique
app.post('/publications/:id/commentaires', async (req, res) => {
  const { id } = req.params;  // ID de la publication à laquelle ajouter un commentaire
  const { contenu } = req.body;  // Contenu du commentaire

  // Vérifier que le contenu est fourni
  if (!contenu) {
    return res.status(400).json({ message: 'Le contenu du commentaire est requis.' });
  }

  try {
    // Vérifier si la publication existe
    const publication = await Publication.findById(id);
    if (!publication) {
      return res.status(404).json({ message: 'Publication non trouvée.' });
    }

    // Créer un nouveau commentaire
    const nouveauCommentaire = new Commentaire({
      contenu,
      publication: id  // Associer ce commentaire à la publication par son ID
    });

    // Sauvegarder le commentaire dans la base de données
    await nouveauCommentaire.save();

    // Ajouter le commentaire à la publication (optionnel, si vous voulez garder une liste de commentaires dans la publication)
    publication.commentaires.push(nouveauCommentaire._id);
    await publication.save();

    // Répondre avec le commentaire créé
    res.status(201).json(nouveauCommentaire);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout du commentaire' });
  }
});


// Route pour mettre à jour un commentaire
app.put('/commentaires/:id', async (req, res) => {
  const { id } = req.params;  // ID du commentaire
  const { contenu } = req.body;  // Nouveau contenu du commentaire

  // Vérifier que le contenu est fourni
  if (!contenu) {
    return res.status(400).json({ message: 'Le contenu du commentaire est requis.' });
  }

  try {
    // Trouver le commentaire par ID et mettre à jour le contenu
    const commentaire = await Commentaire.findByIdAndUpdate(
      id,
      { contenu },  // Mise à jour du contenu
      { new: true }  // Retourner le document mis à jour
    );

    // Si le commentaire n'existe pas
    if (!commentaire) {
      return res.status(404).json({ message: 'Commentaire non trouvé.' });
    }

    // Répondre avec le commentaire mis à jour
    res.status(200).json(commentaire);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du commentaire' });
  }
});

// Route pour obtenir tous les commentaires
app.get('/commentaires', async (req, res) => {
  try {
    // Récupérer tous les commentaires de la base de données
    const commentaires = await Commentaire.find().populate('publication'); // On peut peupler la publication si nécessaire

    // Vérifier si des commentaires existent
    if (commentaires.length === 0) {
      return res.status(404).json({ message: 'Aucun commentaire trouvé.' });
    }

    // Répondre avec les commentaires
    res.status(200).json(commentaires);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des commentaires' });
  }
});