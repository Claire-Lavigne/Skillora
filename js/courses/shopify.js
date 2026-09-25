export const shopifyCourse = {
  "id": "shopify",
  "title": "Shopify — Développement",
  "status": "available",
  "description": "Du niveau débutant au niveau expert : découverte de Shopify, gestion d’une boutique, thèmes, Liquid, applications, GraphQL, extensions, Functions, Git et projets complets.",
  "intro": "Ce parcours a pour objectif de t’amener progressivement de la découverte de Shopify jusqu’au développement avancé. Tu commenceras par créer et manipuler une boutique de test, puis tu apprendras à modifier un thème, utiliser Liquid, développer des sections et des fonctionnalités, créer une application Shopify, utiliser GraphQL, les extensions, les Functions, Git et enfin construire un projet complet.",
  "weeks": [
    [
      "Semaine 1 — Créer ta boutique de développement",
      [
        "Ouvre Shopify Partner : https://www.shopify.com/partners",
        "Ouvre le Dev Dashboard : https://dev.shopify.com/dashboard",
        "Connecte-toi avec le même compte.",
        "Dans le menu de gauche, ouvre « Stores ».",
        "Clique sur « Create store ».",
        "Dans « Store name », écris un nom d’au moins 4 caractères alphanumériques, par exemple « ClaireDev ».",
        "Dans « Shopify plan », ouvre « Select a plan ».",
        "Choisis « Basic ».",
        "Coche « Generate test data for store ».",
        "Laisse « Test a feature preview on this store » décoché pour l’instant.",
        "Clique sur « Create store ».",
        "Attends la création de la boutique.",
        "Ouvre la boutique créée."
      ]
    ],
    [
      "Semaine 2 — Créer deux produits et une collection",
      [
        {
          "group": "Produit 1 — T-shirt Claire Test",
          "steps": [
            "Dans l’admin Shopify, ouvre « Produits » puis clique sur « Ajouter un produit ».",
            "Titre : « T-shirt Claire Test ».",
            "Description : « T-shirt de test utilisé pour apprendre à développer sur Shopify. »",
            "Prix : « 29,90 € ».",
            "Si « Prix avant réduction » apparaît, laisse-le vide.",
            "Dans « Stock », laisse « Stock suivi » activé.",
            "Sur « My Custom Location », laisse « 0 ».",
            "Sur « Shop location », remplace « 0 » par « 20 ».",
            "Laisse « Vendre en cas de rupture de stock » désactivé.",
            "SKU : « CLAIRE-TSHIRT-001 ».",
            "Clique sur « Enregistrer »."
          ]
        },
        {
          "group": "Produit 2 — Sweat Claire Test",
          "steps": [
            "Clique sur « Ajouter un produit ».",
            "Titre : « Sweat Claire Test ».",
            "Description : « Sweat de test utilisé pour apprendre à développer sur Shopify. »",
            "Prix : « 49,90 € ».",
            "Dans « Stock », laisse « Stock suivi » activé.",
            "Sur « My Custom Location », laisse « 0 ».",
            "Sur « Shop location », remplace « 0 » par « 15 ».",
            "Laisse « Vendre en cas de rupture de stock » désactivé.",
            "SKU : « CLAIRE-SWEAT-001 ».",
            "Clique sur « Enregistrer »."
          ]
        },
        {
          "group": "Collection — Collection Claire Test",
          "steps": [
            "Ouvre « Produits » puis « Collections ».",
            "Clique sur « Créer une collection ».",
            "Titre : « Collection Claire Test ».",
            "Description : « Collection de test pour apprendre à organiser des produits dans Shopify. »",
            "Choisis une collection « Manuelle » si Shopify te demande le type.",
            "Ajoute « T-shirt Claire Test ».",
            "Ajoute « Sweat Claire Test ».",
            "Clique sur « Enregistrer ».",
            "Vérifie que les deux produits apparaissent dans la collection."
          ]
        },
        {
          "group": "Voir le résultat dans la boutique",
          "steps": [
            "Ouvre « Boutique en ligne » puis « Préférences ».",
            "Descends jusqu’à « Protection par mot de passe ».",
            "Copie le mot de passe prédéfini par Shopify.",
            "Ne modifie pas ce mot de passe pour l’instant.",
            "Retourne dans « Boutique en ligne ».",
            "Clique sur l’icône d’aperçu.",
            "Colle le mot de passe lorsqu’il est demandé.",
            "Ouvre « Collection Claire Test ».",
            "Vérifie que les deux produits apparaissent."
          ]
        }
      ]
    ],
    [
      "Semaine 3 — Modifier un produit",
      [
        "Ouvre ton produit de test.",
        "Change son titre.",
        "Ajoute une description.",
        "Ajoute une image.",
        "Enregistre et vérifie le résultat dans la boutique."
      ]
    ],
    [
      "Semaine 4 — Modifier un thème sans code",
      [
        "Ouvre « Boutique en ligne » puis « Thèmes ».",
        "Duplique le thème actif.",
        "Ouvre l’éditeur de thème.",
        "Modifie un texte et une image.",
        "Enregistre puis vérifie le résultat dans l’aperçu."
      ]
    ],
    [
      "Semaine 5 — Installer Node.js, Git et Shopify CLI",
      [
        "Installe Node.js en version LTS depuis : https://nodejs.org/fr/download",
        "Ferme puis rouvre PowerShell après l’installation de Node.js.",
        "Dans PowerShell, tape : node -v",
        "Vérifie qu’un numéro de version s’affiche.",
        "Dans PowerShell, tape : npm -v",
        "Vérifie qu’un numéro de version s’affiche.",
        "Installe Git avec l’une des deux méthodes suivantes.",
        "Méthode normale : télécharge Git depuis https://git-scm.com/install/windows puis installe-le avec les options par défaut.",
        "Ou, dans PowerShell, tape : winget install --id Git.Git -e --source winget",
        "Ferme puis rouvre PowerShell après l’installation de Git.",
        "Dans PowerShell, tape : git --version",
        "Vérifie qu’un numéro de version Git s’affiche.",
        "Quand Node.js et Git fonctionnent, installe Shopify CLI.",
        "Dans PowerShell, tape : npm install -g @shopify/cli@latest",
        "Attends la fin de l’installation.",
        "Dans PowerShell, tape : shopify version",
        "Vérifie qu’un numéro de version Shopify CLI s’affiche.",
        "Dans PowerShell, tape : shopify help",
        "Vérifie que l’aide Shopify CLI s’affiche.",
        "Si les commandes node -v, npm -v, git --version et shopify version affichent toutes une version, cette semaine est terminée."
      ]
    ],
    [
      "Semaine 6 — Télécharger et lancer un thème localement",
      [
        "Crée un dossier sur ton ordinateur nommé « Shopify-Claire ».",
        "Ouvre PowerShell.",
        "Place-toi dans ce dossier avec la commande cd.",
        "Dans PowerShell, tape : shopify theme init claire-theme",
        "Attends la création du dossier « claire-theme ».",
        "Dans PowerShell, tape : cd claire-theme",
        "Dans PowerShell, tape : shopify theme dev",
        "Si Shopify te demande de te connecter, suis le lien affiché et connecte-toi avec ton compte Shopify Partner.",
        "Si Shopify te demande de choisir une boutique, choisis ta dev store.",
        "Attends que Shopify affiche un lien local.",
        "Ouvre le lien local affiché dans le terminal.",
        "Vérifie que la boutique s’affiche dans ton navigateur.",
        "Laisse PowerShell ouvert pendant que tu travailles sur le thème.",
        "Pour arrêter l’aperçu plus tard, retourne dans PowerShell et appuie sur Ctrl + C."
      ]
    ],
    [
      "Semaine 7 — Modifier HTML et CSS",
      [
        "Installe Visual Studio Code depuis : https://code.visualstudio.com/",
        "Ouvre Visual Studio Code.",
        "Clique sur « Fichier » puis « Ouvrir un dossier ».",
        "Choisis le dossier « claire-theme » créé la semaine précédente.",
        "Dans la colonne de gauche, ouvre le dossier « sections ».",
        "Ouvre un fichier .liquid déjà présent.",
        "Repère un texte visible dans le fichier.",
        "Modifie seulement ce texte.",
        "Enregistre avec Ctrl + S.",
        "Regarde l’aperçu Shopify dans ton navigateur.",
        "Vérifie que la modification apparaît.",
        "Dans Visual Studio Code, ouvre le dossier « assets ».",
        "Ouvre un fichier .css.",
        "Modifie une valeur simple comme un espacement ou une taille de texte.",
        "Enregistre puis vérifie la modification dans l’aperçu."
      ]
    ],
    [
      "Semaine 8 — Utiliser Liquid",
      [
        "Dans Visual Studio Code, ouvre un fichier .liquid du thème.",
        "Ajoute une ligne contenant : {{ shop.name }}",
        "Enregistre le fichier.",
        "Vérifie dans l’aperçu que le nom de la boutique apparaît.",
        "Ajoute ensuite : {% if shop.name %}",
        "Sous cette ligne, écris un texte simple.",
        "Ajoute ensuite : {% endif %}",
        "Enregistre et vérifie le résultat.",
        "Repère ensuite une boucle {% for ... %} déjà présente dans le thème.",
        "Ne la modifie pas encore.",
        "Observe seulement où commence {% for %} et où finit {% endfor %}.",
        "Copie une petite boucle existante dans un fichier de test si nécessaire.",
        "Enregistre et vérifie le résultat.",
        "À la fin, supprime uniquement les essais que tu ne veux pas garder."
      ]
    ],
    [
      "Semaine 9 — Afficher des données produit",
      [
        "Ouvre la page produit de « T-shirt Claire Test » dans l’aperçu.",
        "Dans Visual Studio Code, cherche le fichier ou la section utilisé pour afficher les informations produit.",
        "Repère l’endroit où le titre du produit est affiché.",
        "Vérifie la présence de {{ product.title }}.",
        "Repère l’endroit où le prix est affiché.",
        "Vérifie la présence d’une valeur liée à product.price.",
        "Ajoute temporairement une ligne avec : {{ product.title }}",
        "Enregistre et vérifie que le titre apparaît.",
        "Ajoute temporairement une ligne avec le prix du produit.",
        "Enregistre et vérifie le résultat.",
        "Ajoute un lien vers le produit avec product.url dans un endroit de test.",
        "Vérifie que le lien ouvre bien le produit.",
        "Supprime les doublons temporaires si nécessaire."
      ]
    ],
    [
      "Semaine 10 — Créer une section",
      [
        "Dans Visual Studio Code, ouvre le dossier « sections ».",
        "Crée un nouveau fichier nommé « claire-banner.liquid ».",
        "Dans ce fichier, ajoute un titre HTML simple.",
        "Ajoute en bas du fichier une balise {% schema %}.",
        "Ajoute un schema JSON valide avec un nom de section.",
        "Ajoute un réglage de type « text » avec l’identifiant « titre ».",
        "Ferme le schema avec {% endschema %}.",
        "Au-dessus du schema, affiche la valeur du réglage avec section.settings.titre.",
        "Enregistre le fichier.",
        "Retourne dans l’éditeur de thème Shopify.",
        "Clique sur « Ajouter une section ».",
        "Choisis la section que tu viens de créer.",
        "Modifie le texte depuis l’éditeur Shopify.",
        "Enregistre dans Shopify.",
        "Vérifie que la modification apparaît sans toucher au code."
      ]
    ],
    [
      "Semaine 11 — Créer des blocs",
      [
        "Ouvre le fichier « claire-banner.liquid ».",
        "Dans le schema, ajoute une zone « blocks ».",
        "Ajoute un type de bloc nommé « texte ».",
        "Dans ce bloc, ajoute un réglage de type « text ».",
        "Dans la partie HTML/Liquid, ajoute une boucle sur section.blocks.",
        "Dans la boucle, affiche le texte de chaque bloc.",
        "Enregistre le fichier.",
        "Retourne dans l’éditeur de thème.",
        "Ajoute un premier bloc.",
        "Écris : « Livraison rapide ».",
        "Ajoute un deuxième bloc.",
        "Écris : « Paiement sécurisé ».",
        "Ajoute un troisième bloc.",
        "Écris : « Retours simples ».",
        "Enregistre et vérifie que les trois blocs apparaissent."
      ]
    ],
    [
      "Semaine 12 — Créer un snippet",
      [
        "Dans Visual Studio Code, ouvre le dossier « snippets ».",
        "Crée un fichier nommé « claire-badge.liquid ».",
        "Dans ce fichier, écris un petit élément HTML contenant le texte « Claire Test ».",
        "Enregistre.",
        "Ouvre « claire-banner.liquid ».",
        "À l’endroit où tu veux afficher le snippet, ajoute : {% render 'claire-badge' %}",
        "Enregistre.",
        "Vérifie dans l’aperçu que le badge apparaît.",
        "Ajoute le même render dans une deuxième section.",
        "Vérifie que le badge apparaît aussi à ce deuxième endroit.",
        "Retourne dans « claire-badge.liquid ».",
        "Modifie le texte du badge.",
        "Enregistre.",
        "Vérifie que les deux endroits sont mis à jour."
      ]
    ],
    [
      "Semaine 13 — Utiliser un template JSON",
      [
        "Dans Visual Studio Code, ouvre le dossier « templates ».",
        "Ouvre un fichier JSON existant.",
        "Repère la partie « sections ».",
        "Repère la partie « order ».",
        "Crée un nouveau template à partir d’un template existant.",
        "Nomme-le clairement, par exemple « product.claire.json » si ton thème utilise cette structure.",
        "Ajoute ou conserve une section simple dans ce template.",
        "Enregistre le fichier.",
        "Retourne dans l’admin Shopify.",
        "Ouvre « T-shirt Claire Test ».",
        "Dans la partie modèle de thème, sélectionne ton nouveau template si Shopify le propose.",
        "Enregistre le produit.",
        "Ouvre le produit dans l’aperçu.",
        "Vérifie qu’il utilise bien le nouveau template."
      ]
    ],
    [
      "Semaine 14 — Ajouter un metafield",
      [
        "Dans l’admin Shopify, ouvre « Paramètres ».",
        "Ouvre « Données personnalisées ».",
        "Choisis « Produits ».",
        "Clique sur « Ajouter une définition ».",
        "Nom : « Matière ».",
        "Choisis un champ texte simple.",
        "Enregistre la définition.",
        "Retourne dans « Produits ».",
        "Ouvre « T-shirt Claire Test ».",
        "Descends jusqu’aux metafields.",
        "Dans « Matière », écris : « 100 % coton ».",
        "Enregistre le produit.",
        "Ouvre ensuite « Sweat Claire Test ».",
        "Dans « Matière », écris : « 80 % coton, 20 % polyester ».",
        "Enregistre.",
        "Dans ton thème, affiche le metafield « Matière » sur la fiche produit.",
        "Vérifie que chaque produit affiche sa propre valeur."
      ]
    ],
    [
      "Semaine 15 — Construire une page produit complète",
      [
        "Ouvre « T-shirt Claire Test » dans l’aperçu.",
        "Vérifie que le titre apparaît.",
        "Vérifie que le prix apparaît.",
        "Vérifie que l’image du produit apparaît.",
        "Vérifie que le bouton d’ajout au panier apparaît.",
        "Ajoute le produit au panier.",
        "Ouvre le panier.",
        "Vérifie que le produit est présent.",
        "Retourne dans le code du thème.",
        "Ajoute l’affichage du metafield « Matière » à la fiche produit.",
        "Enregistre.",
        "Actualise l’aperçu.",
        "Vérifie que « 100 % coton » apparaît.",
        "Refais le test avec « Sweat Claire Test »."
      ]
    ],
    [
      "Semaine 16 — Construire une page collection",
      [
        "Ouvre la page « Collection Claire Test » dans l’aperçu.",
        "Vérifie que les deux produits apparaissent.",
        "Dans Visual Studio Code, cherche la section qui affiche la grille de collection.",
        "Repère le code qui parcourt les produits de la collection.",
        "Repère le titre d’un produit.",
        "Repère le prix.",
        "Repère l’image.",
        "Modifie un petit élément visuel de la carte produit.",
        "Enregistre.",
        "Vérifie le résultat dans l’aperçu.",
        "Réduis la largeur du navigateur.",
        "Vérifie que les cartes restent lisibles sur mobile.",
        "Corrige seulement un problème visible si nécessaire."
      ]
    ],
    [
      "Semaine 17 — Ajouter du JavaScript simple",
      [
        "Dans une section de test, ajoute un bouton HTML.",
        "Donne-lui un identifiant simple, par exemple « claire-bouton ».",
        "Ajoute un petit script JavaScript sous ce bouton.",
        "Récupère le bouton avec document.getElementById.",
        "Ajoute un événement « click ».",
        "Au clic, change le texte du bouton.",
        "Enregistre.",
        "Vérifie dans l’aperçu que le clic fonctionne.",
        "Ajoute ensuite un petit message caché dans la page.",
        "Au clic, rends ce message visible.",
        "Enregistre.",
        "Teste plusieurs fois.",
        "Recharge la page et vérifie que le comportement repart correctement."
      ]
    ],
    [
      "Semaine 18 — Modifier le panier avec JavaScript",
      [
        "Ouvre le panier dans ton thème.",
        "Ajoute « T-shirt Claire Test » au panier.",
        "Repère dans le code la partie qui gère la quantité.",
        "Fais une première modification seulement sur la quantité.",
        "Enregistre.",
        "Vérifie que le panier reste fonctionnel.",
        "Teste la quantité 1.",
        "Teste la quantité 2.",
        "Teste la quantité 3.",
        "Vérifie que le total change.",
        "Teste aussi le retrait du produit.",
        "Si une erreur apparaît, annule ta dernière modification et reteste.",
        "Ne passe à l’étape suivante que lorsque le panier fonctionne à nouveau."
      ]
    ],
    [
      "Semaine 19 — Créer une application Shopify",
      [
        "Crée un nouveau dossier de travail nommé « claire-shopify-app ».",
        "Ouvre PowerShell dans le dossier parent.",
        "Tape : shopify app init",
        "Quand Shopify demande un nom, utilise « claire-shopify-app ».",
        "Choisis le template React Router si Shopify te demande un template.",
        "Attends la création du projet.",
        "Entre dans le dossier du projet avec cd.",
        "Tape : shopify app dev",
        "Connecte-toi si Shopify te le demande.",
        "Choisis ton organisation Partner si nécessaire.",
        "Choisis ta dev store.",
        "Accepte l’installation de l’application sur la dev store.",
        "Attends que Shopify affiche le lien de prévisualisation.",
        "Ouvre l’application depuis l’admin Shopify.",
        "Vérifie qu’une page de l’application apparaît."
      ]
    ],
    [
      "Semaine 20 — Lire des produits avec GraphQL",
      [
        "Dans le projet de l’application, ouvre le fichier qui contient déjà un exemple de requête GraphQL.",
        "Ne supprime pas l’exemple avant d’avoir identifié où la requête commence.",
        "Remplace ou adapte la requête pour récupérer des produits.",
        "Demande d’abord seulement « id » et « title ».",
        "Enregistre.",
        "Recharge l’application.",
        "Vérifie que des produits sont retournés.",
        "Ajoute ensuite le champ « status ».",
        "Enregistre.",
        "Recharge.",
        "Vérifie que le statut apparaît.",
        "Teste avec une limite faible, par exemple quelques produits seulement.",
        "Ne demande pas d’autres champs cette semaine."
      ]
    ],
    [
      "Semaine 21 — Modifier un produit avec GraphQL",
      [
        "Choisis « T-shirt Claire Test » comme produit à modifier.",
        "Dans ton application, crée une mutation GraphQL simple.",
        "Utilise l’identifiant réel du produit de test.",
        "Modifie une information non critique du produit.",
        "Exécute la mutation.",
        "Retourne dans l’admin Shopify.",
        "Ouvre « T-shirt Claire Test ».",
        "Vérifie que la modification apparaît.",
        "Refais le même test avec « Sweat Claire Test ».",
        "Si la mutation renvoie des userErrors, lis seulement le premier message.",
        "Corrige ce premier problème.",
        "Relance la mutation.",
        "Arrête-toi lorsque les deux produits ont été modifiés correctement."
      ]
    ],
    [
      "Semaine 22 — Utiliser un webhook",
      [
        "Dans ton projet d’application, choisis un événement webhook simple à tester.",
        "Ajoute la configuration du webhook avec les outils Shopify du projet.",
        "Lance l’application avec shopify app dev.",
        "Vérifie qu’elle est connectée à ta dev store.",
        "Dans Shopify, réalise l’action qui déclenche ton webhook.",
        "Regarde le terminal de l’application.",
        "Vérifie qu’une requête liée au webhook apparaît.",
        "Ajoute un log simple côté application.",
        "Déclenche à nouveau l’événement.",
        "Vérifie que ton log apparaît.",
        "Répète le test une deuxième fois.",
        "Ne crée pas plusieurs webhooks tant que le premier ne fonctionne pas."
      ]
    ],
    [
      "Semaine 23 — Enregistrer des données dans ton application",
      [
        "Choisis une seule donnée à mémoriser dans l’application, par exemple « message boutique ».",
        "Ajoute un champ simple dans l’interface de l’application.",
        "Entre le texte : « Bonjour Claire ».",
        "Enregistre cette valeur dans le stockage utilisé par ton projet.",
        "Recharge la page.",
        "Vérifie que « Bonjour Claire » est toujours présent.",
        "Remplace par « Boutique Claire ».",
        "Enregistre.",
        "Recharge.",
        "Vérifie que la nouvelle valeur est conservée.",
        "Ferme puis relance l’application.",
        "Vérifie encore une fois la valeur."
      ]
    ],
    [
      "Semaine 24 — Créer une Theme App Extension",
      [
        "Dans le dossier de ton application, ouvre PowerShell.",
        "Lance la commande de génération d’extension proposée par Shopify CLI.",
        "Choisis une Theme App Extension.",
        "Donne-lui un nom simple, par exemple « claire-theme-extension ».",
        "Attends la création des fichiers.",
        "Repère le fichier principal du bloc.",
        "Modifie uniquement le texte visible.",
        "Lance ou garde « shopify app dev » actif.",
        "Ouvre l’éditeur de thème depuis Shopify.",
        "Ajoute le bloc de l’application.",
        "Vérifie qu’il apparaît dans le thème.",
        "Ajoute un réglage texte au bloc.",
        "Modifie ce réglage depuis l’éditeur Shopify.",
        "Vérifie le résultat dans l’aperçu."
      ]
    ],
    [
      "Semaine 25 — Créer une extension d’interface",
      [
        "Dans ton application, lance la génération d’une nouvelle extension.",
        "Choisis une extension d’interface disponible dans Shopify CLI.",
        "Donne-lui un nom simple.",
        "Laisse Shopify créer les fichiers.",
        "Ouvre le fichier principal de l’extension.",
        "Modifie seulement le texte affiché.",
        "Lance « shopify app dev ».",
        "Ouvre l’aperçu de l’extension proposé par Shopify.",
        "Vérifie que ton texte apparaît.",
        "Ajoute un bouton simple si le modèle d’extension le permet.",
        "Ajoute une action minimale au bouton.",
        "Teste l’action.",
        "Ne rajoute aucun autre composant tant que ce test n’est pas réussi."
      ]
    ],
    [
      "Semaine 26 — Créer une Shopify Function",
      [
        "Dans ton application, lance la génération d’une Shopify Function.",
        "Choisis un type de Function disponible dans Shopify CLI qui correspond à un cas simple.",
        "Donne un nom clair à la Function.",
        "Laisse Shopify créer les fichiers.",
        "Repère les fichiers générés.",
        "Lance les tests fournis avec le modèle si le projet en contient.",
        "Modifie une seule règle.",
        "Relance les tests.",
        "Lance « shopify app dev ».",
        "Teste la Function dans ta dev store.",
        "Vérifie un cas où la règle doit s’appliquer.",
        "Vérifie un cas où la règle ne doit pas s’appliquer.",
        "Corrige seulement si l’un des deux cas échoue."
      ]
    ],
    [
      "Semaine 27 — Tester ton thème",
      [
        "Dans le dossier du thème, ouvre PowerShell.",
        "Tape : shopify theme check",
        "Attends la fin de l’analyse.",
        "Lis seulement la première erreur ou le premier avertissement.",
        "Va dans le fichier indiqué.",
        "Corrige ce problème.",
        "Relance : shopify theme check",
        "Répète jusqu’à avoir corrigé au moins trois problèmes.",
        "Ouvre ensuite la page produit dans l’aperçu.",
        "Teste l’ajout au panier.",
        "Ouvre la collection.",
        "Teste un lien produit.",
        "Réduis la fenêtre pour simuler un mobile.",
        "Refais les mêmes actions sur mobile."
      ]
    ],
    [
      "Semaine 28 — Corriger des bugs",
      [
        "Choisis une modification qui a cassé quelque chose dans ton thème ou provoque volontairement une petite erreur simple.",
        "Observe exactement ce qui ne fonctionne plus.",
        "Note le fichier que tu viens de modifier.",
        "Annule uniquement la dernière modification.",
        "Enregistre.",
        "Vérifie si le problème disparaît.",
        "Refais la modification plus proprement.",
        "Enregistre.",
        "Teste à nouveau.",
        "Répète avec un deuxième petit bug.",
        "À chaque fois, change une seule chose avant de tester."
      ]
    ],
    [
      "Semaine 29 — Améliorer les performances",
      [
        "Ouvre une page de produit dans ton navigateur.",
        "Ouvre les outils de développement du navigateur avec F12.",
        "Ouvre l’onglet « Network » ou « Réseau ».",
        "Recharge la page.",
        "Repère une ressource particulièrement lourde ou lente.",
        "Choisis seulement une ressource à améliorer.",
        "Si c’est une image, réduis son poids ou utilise une taille mieux adaptée.",
        "Si c’est un script inutile, retire-le seulement si tu sais qu’il n’est pas utilisé.",
        "Recharge la page.",
        "Compare le résultat.",
        "Ne fais qu’une optimisation supplémentaire maximum cette semaine."
      ]
    ],
    [
      "Semaine 30 — Versionner ton projet avec Git",
      [
        "Dans le dossier de ton thème, ouvre PowerShell.",
        "Tape : git status",
        "Si Git n’est pas encore initialisé dans ce dossier, tape : git init",
        "Tape : git add .",
        "Tape : git commit -m \"Premier état du thème Claire\"",
        "Modifie ensuite un petit texte dans le thème.",
        "Enregistre.",
        "Tape : git status",
        "Vérifie que Git détecte le fichier modifié.",
        "Tape : git add .",
        "Tape : git commit -m \"Modification texte\"",
        "Tape : git log --oneline",
        "Vérifie que les deux commits apparaissent."
      ]
    ],
    [
      "Semaine 31 — Créer un storefront avec Hydrogen",
      [
        "Crée un nouveau dossier de travail pour Hydrogen.",
        "Ouvre PowerShell dans ce dossier.",
        "Tape : shopify hydrogen init",
        "Donne au projet le nom « claire-hydrogen ».",
        "Choisis les options par défaut lorsque tu n’es pas sûre.",
        "Attends l’installation.",
        "Entre dans le dossier créé.",
        "Lance la commande de développement indiquée par le projet.",
        "Ouvre l’adresse locale affichée.",
        "Vérifie que le storefront s’affiche.",
        "Repère une page de liste de produits.",
        "Repère une page produit.",
        "Modifie un texte visible.",
        "Enregistre.",
        "Vérifie la modification dans le navigateur."
      ]
    ],
    [
      "Semaine 32 — Projet final",
      [
        "Crée une boutique fictive appelée « Claire Studio ».",
        "Utilise ta dev store existante.",
        "Crée au moins trois produits de test.",
        "Crée une collection « Claire Studio ».",
        "Dans ton thème, crée ou adapte une section de page d’accueil.",
        "Ajoute une section avec des blocs configurables.",
        "Affiche au moins un metafield sur les fiches produit.",
        "Vérifie la page collection.",
        "Vérifie la page produit.",
        "Ajoute un produit au panier.",
        "Vérifie le panier.",
        "Dans ton application Shopify, affiche au moins une donnée produit via GraphQL.",
        "Teste une fonctionnalité d’application que tu as déjà créée.",
        "Lance shopify theme check.",
        "Corrige les erreurs importantes.",
        "Teste la boutique sur mobile.",
        "Fais un commit Git final.",
        "Considère le niveau terminé seulement lorsque le parcours collection → produit → panier fonctionne."
      ]
    ]
  ]
};
