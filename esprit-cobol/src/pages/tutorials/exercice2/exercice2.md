<!-- Le Code -->

```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. AlphaDemo.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 NOM-CLIENT PIC X(30) VALUE 'Dupont'.
01 VILLE     PIC X(20) VALUE 'Paris'.

PROCEDURE DIVISION.
    DISPLAY 'Client : ' NOM-CLIENT.
    DISPLAY 'Ville  : ' VILLE.
    STOP RUN.
```

<!-- L'expliquation -->

# Variables alphanumériques — PIC X

---

## **Objectif du tutoriel**

Apprendre à stocker et afficher du **texte** en COBOL grâce à la clause `PIC X`.  
Contrairement à `PIC 9` (chiffres uniquement), `PIC X` accepte lettres, chiffres et symboles.

---

## **IDENTIFICATION DIVISION**

- **`PROGRAM-ID. AlphaDemo.`**  
  Nom du programme : `AlphaDemo` (démo alphanumérique).

---

## **DATA DIVISION — WORKING-STORAGE SECTION**

### `01 NOM-CLIENT PIC X(30) VALUE 'Dupont'.`

- **`01`** : niveau principal de la variable.
- **`NOM-CLIENT`** : nom lisible de la donnée.
- **`PIC X(30)`** :
  - `X` = caractère alphanumérique ;
  - `(30)` = longueur maximale de 30 caractères.
- **`VALUE 'Dupont'`** : valeur initiale (chaîne entre apostrophes).

### `01 VILLE PIC X(20) VALUE 'Paris'.`

Même principe : chaîne de 20 caractères maximum, initialisée à `Paris`.

> Si la valeur est plus courte que la taille déclarée, COBOL complète à droite avec des espaces.

---

## **PROCEDURE DIVISION**

- **`DISPLAY 'Client : ' NOM-CLIENT.`**  
  Affiche un libellé suivi du contenu de la variable texte.
- **`DISPLAY 'Ville  : ' VILLE.`**  
  Affiche la ville.
- **`STOP RUN.`**  
  Fin du programme.

---

## **Résumé**

1. `PIC X(n)` sert aux noms, adresses, codes alphanumériques, messages.
2. Les littéraux texte s’écrivent entre apostrophes : `'Dupont'`.
3. La longueur `(n)` fixe l’espace réservé en mémoire.

---

## **Sortie attendue**

```
Client : Dupont
Ville  : Paris
```

(les espaces de fin éventuels peuvent apparaître selon le compilateur)
