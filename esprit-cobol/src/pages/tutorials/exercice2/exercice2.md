<!-- Le Code -->

```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. HelloWorld.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 MY-VARIABLE PIC 9(4) VALUE 100.

PROCEDURE DIVISION.
    DISPLAY 'Hello, COBOL World!'.
    DISPLAY 'Variable value: ' MY-VARIABLE.
    STOP RUN.
```

<!-- L'expliquation -->

# Explication détaillée du code COBOL 2

---

## **IDENTIFICATION DIVISION**

C'est la section où vous identifiez le programme. Elle contient des informations essentielles comme le nom du programme.

- **`PROGRAM-ID. HelloWorld.`**
  - Cette ligne spécifie le nom du programme. Ici, le programme s'appelle `HelloWorld`.

---

## **DATA DIVISION**

Cette division est utilisée pour déclarer les données et les variables nécessaires à l'exécution du programme.

- **`WORKING-STORAGE SECTION.`**

  - Cette section contient des variables temporaires utilisées par le programme.

- **`01 MY-VARIABLE PIC 9(4) VALUE 100.`**
  - **`01`** : Indique le niveau hiérarchique de la variable. Le niveau 01 correspond à une variable principale.
  - **`MY-VARIABLE`** : Nom de la variable. Vous pouvez utiliser ce nom pour référencer cette donnée.
  - **`PIC 9(4)`** : Le mot-clé `PIC` (Picture) définit le type et la structure de la variable.
    - **`9(4)`** : Spécifie un entier de 4 chiffres. Seules des valeurs numériques (0 à 9) peuvent être stockées.
  - **`VALUE 100`** : Attribue une valeur initiale de `100` à la variable `MY-VARIABLE`.

---

## **PROCEDURE DIVISION**

C'est ici que la logique du programme est écrite. C'est la section "exécutable" du code.

- **`DISPLAY 'Hello, COBOL World!'.`**

  - Cette commande affiche le texte `Hello, COBOL World!` sur la sortie standard (souvent la console ou l'écran).

- **`DISPLAY 'Variable value: ' MY-VARIABLE.`**

  - Cette commande affiche une combinaison de texte et la valeur de la variable `MY-VARIABLE`.
    - Le résultat sera :
      ```
      Variable value: 100
      ```

- **`STOP RUN.`**
  - Cette commande termine l'exécution du programme.

---

## **Résumé du fonctionnement**

1. Le programme est identifié avec le nom `HelloWorld`.
2. Une variable nommée `MY-VARIABLE` est déclarée avec une taille de 4 chiffres et une valeur initiale de `100`.
3. Lors de l'exécution :
   - Le texte **"Hello, COBOL World!"** est affiché.
   - Ensuite, **"Variable value: 100"** est affiché en combinant un texte statique et la valeur de la variable `MY-VARIABLE`.
4. Le programme se termine proprement avec **`STOP RUN.`**

---

## **Sortie attendue**

Lors de l'exécution, la sortie affichée sera :
