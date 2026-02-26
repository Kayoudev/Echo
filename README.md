# WebApp Chat en Temps Réel

Cette application est une simple application de chat en temps réel utilisant **WebSocket**, **Node.js**, et **Express**. Les utilisateurs peuvent se connecter, saisir leur nom, et échanger des messages en temps réel.

---

## Fonctionnalités

- **Chat en temps réel** : Les messages envoyés par un utilisateur sont diffusés à tous les utilisateurs connectés.
- **Nom d'utilisateur personnalisé** : Chaque utilisateur peut saisir son nom lors de la connexion.
- **Interface moderne** : Une interface utilisateur simple et épurée.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

- **Node.js** (version 14 ou supérieure) : [Télécharger Node.js](https://nodejs.org)
- **Git** (pour cloner le repository) : [Télécharger Git](https://git-scm.com)

---

## Installation

1. Clonez le repository sur votre machine locale :
   ```bash
   git clone https://github.com/Kayoudev/Echo.git
   ```

2. Accédez au dossier du projet :
   ```bash
   cd Echo
   ```

3. Installez les dépendances nécessaires :
   ```bash
   npm install
   ```

---

## Utilisation

1. **Démarrez le serveur** :
   ```bash
   node serveur.js
   ```

   Vous devriez voir ce message dans le terminal :
   ```
   Serveur démarré sur http://localhost:3000
   ```

2. **Ouvrez l'application dans votre navigateur** :
   Accédez à [http://localhost:3000](http://localhost:3000).

3. **Commencez à discuter** :
   - Saisissez votre nom d'utilisateur lorsque vous êtes invité.
   - Envoyez des messages via la barre de saisie.

---

## Structure du projet

Voici un aperçu des principaux fichiers et dossiers :

```
.
├── public/
│   ├── index.html       # Page principale de l'application
│   ├── app.js           # Logique côté client
│   ├── style.css        # Styles de l'application
├── serveur.js           # Serveur WebSocket et Express
├── package.json         # Dépendances et scripts du projet
└── README.md            # Documentation du projet
```

---

## Technologies utilisées

- **Node.js** : Pour le backend.
- **Express** : Pour servir les fichiers statiques.
- **WebSocket** : Pour la communication en temps réel.
- **HTML/CSS/JavaScript** : Pour l'interface utilisateur.

---
