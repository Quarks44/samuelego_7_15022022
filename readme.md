
Créer et insérer dans un fichier .env (groupomania/backend/.env):

DB_USER=root
DB_PASS=

Ouvrir MySql command Line client :

CREATE DATABASE groupomania;
USE groupomania;
Importer le fichier groupomania.sql (qui ce trouve a la racine du projet) :
source (chemin vers le fichier groupomania.sql);

BACK END
Ouvrir un terminal dans le dossier backend :
npm install
node server

FRONT END
Ouvrir un autre terminal dans le dossier frontend :
npm install
npm run serve


Adresse http://localhost:8080/

