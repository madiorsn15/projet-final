# 🛒 SunuMarché — Marketplace Sénégalaise

Plateforme web de type marketplace permettant à des vendeurs de publier leurs produits et à des clients de les contacter directement via **WhatsApp**. Paiement à la livraison.

---

## 🧱 Stack technique

| Couche | Technologie |
|--------|-------------|
| Frontend | React.js 18 |
| Backend | Node.js + Express.js |
| Base de données | MongoDB + Mongoose |
| Auth | JWT + bcryptjs |
| Upload | Multer |
| Architecture | MVC |

---

## 📁 Structure du projet

```
marketplace/
├── backend/
│   ├── middleware/
│   │   └── auth.js          # JWT + contrôle rôles
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── products.js
│   │   ├── orders.js
│   │   └── users.js
│   ├── uploads/             # Images produits (auto-créé)
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.js
    │   │   ├── Footer.js
    │   │   └── ProductCard.js
    │   ├── context/
    │   │   └── AuthContext.js
    │   ├── pages/
    │   │   ├── HomePage.js
    │   │   ├── ProductsPage.js
    │   │   ├── ProductDetailPage.js
    │   │   ├── LoginPage.js
    │   │   ├── RegisterPage.js
    │   │   ├── DashboardPage.js
    │   │   ├── ProfilePage.js
    │   │   └── AdminPage.js
    │   ├── utils/
    │   │   └── api.js
    │   ├── App.js
    │   ├── index.js
    │   └── index.css
    └── package.json
```

---

## 🚀 Installation et lancement

### Prérequis
- Node.js v18+
- MongoDB (local ou MongoDB Atlas)
- npm ou yarn

---

### 1. Backend

```bash
cd backend

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Éditez .env avec vos valeurs :
# MONGO_URI=mongodb://localhost:27017/marketplace
# JWT_SECRET=votre_secret_tres_securise
# CLIENT_URL=http://localhost:3000
# PORT=5000

# Lancer le serveur (développement)
npm run dev

# Lancer en production
npm start
```

Le backend tourne sur → **http://localhost:5000**

---

### 2. Frontend

```bash
cd frontend

# Installer les dépendances
npm install

# Créer le fichier .env (optionnel)
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env
echo "REACT_APP_SERVER_URL=http://localhost:5000" >> .env

# Lancer l'application
npm start
```

Le frontend tourne sur → **http://localhost:3000**

---

## 👥 Rôles utilisateurs

| Rôle | Accès |
|------|-------|
| **Client** | Consulte les produits, passe des commandes, voir son profil |
| **Vendeur** | Gère ses produits, voit ses commandes reçues |
| **Admin** | Gère tous les utilisateurs et tous les produits |

---

## 🔑 API Endpoints

### Auth
| Méthode | Route | Description |
|---------|-------|-------------|
| POST | `/api/auth/register` | Inscription |
| POST | `/api/auth/login` | Connexion |
| GET | `/api/auth/me` | Profil connecté |

### Produits
| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/api/products` | Liste (avec search, category, page) |
| GET | `/api/products/:id` | Détail produit |
| POST | `/api/products` | Créer (vendeur) |
| PUT | `/api/products/:id` | Modifier (vendeur) |
| DELETE | `/api/products/:id` | Supprimer (vendeur/admin) |
| GET | `/api/products/seller/me` | Mes produits |

### Commandes
| Méthode | Route | Description |
|---------|-------|-------------|
| POST | `/api/orders` | Créer une commande |
| GET | `/api/orders/me` | Mes commandes (client) |
| GET | `/api/orders/seller` | Commandes reçues (vendeur) |
| PATCH | `/api/orders/:id/status` | Mettre à jour le statut |

### Utilisateurs
| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/api/users/profile` | Mon profil |
| PUT | `/api/users/profile` | Modifier mon profil |
| GET | `/api/users` | Tous les users (admin) |
| PATCH | `/api/users/:id/toggle` | Activer/désactiver (admin) |

---

## 📱 Intégration WhatsApp

Le lien WhatsApp est généré dynamiquement :

```
https://wa.me/{numero}?text=Bonjour ! Je suis intéressé(e) par votre produit *{nom}* au prix de *{prix} FCFA*...
```

---

## 🔒 Sécurité (MVP)

- Mots de passe hashés avec **bcryptjs** (salt rounds: 12)
- Authentification par **JWT** (expiration 7 jours)
- Routes protégées par middleware
- Contrôle des rôles (client / vendeur / admin)
- Validation des données côté backend
- Upload d'images limité à 5MB, formats images uniquement

---

## 🔮 Évolutions futures

- [ ] Paiement Wave / Orange Money
- [ ] Système d'avis et notation
- [ ] Vérification des vendeurs
- [ ] Application mobile React Native
- [ ] Notifications en temps réel (Socket.io)
- [ ] Tableau de bord analytics
- [ ] Rate limiting et protection anti-brute force
- [ ] HTTPS + Helmet.js en production

---

## 📄 Livrables

- ✅ Application web fonctionnelle
- ✅ Code source complet
- ✅ Documentation technique (ce fichier)
- ✅ Cahier des charges

---

*Projet réalisé dans le cadre d'un MVP de marketplace locale au Sénégal.*
