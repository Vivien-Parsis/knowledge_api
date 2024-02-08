# Simple Knowledge API
API en express.js pour recuperer des faits, citations et question/réponse aléatoire

## Fonctionnalité principales
- Recuperer des citations de personnes aléatoire, possibilités de choisir une catégorie
- Recuperer des question/réponse aléatoire, possibilités de choisir une catégorie
- Recuperer des faits aléatoire, possibilités de choisir le nombre de faits entre 1 et 30

## Configuration requise
- node.js v21
- npm
- npx

## Instruction d'installation
- cloner le dépot : `git clone https://github.com/Vivien-Parsis/knowledge_api`
- dans le repertoire, pour installer les dependances : `npm i`
- Creer un fichier .env, puis mettre dedans `API_KEY=` plus votre clé api. [recupérer votre clé api ici](https://api-ninjas.com/api)
- pour le lancer le serveur : `npm start`

## Adresse

`http://localhost:3000`

## Exemple d'utilisation

### Récuperer une citation dans la catégorie films

`http://localhost:3000/quotes/get/movies`

### Récuperer 5 faits

`http://localhost:3000/fact/get/5`

### Récuperer une Question/Réponse dans la catégorie géographie

`http://localhost:3000/trivia/get/geography`

## lien vers les apis utilisées

- [Citation - API ninjas](https://api-ninjas.com/api/quotes)
- [Faits - API ninjas](https://api-ninjas.com/api/facts)
- [Question/Réponse - API ninjas](https://api-ninjas.com/api/trivia)