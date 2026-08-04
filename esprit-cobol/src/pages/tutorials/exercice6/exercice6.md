<!-- Le Code -->

```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. StructurePerform.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 NOM-CLIENT PIC X(30).
01 AGE-CLIENT PIC 99.

PROCEDURE DIVISION.
MAIN-LOGIC.
    PERFORM SAISIE-CLIENT.
    PERFORM AFFICHER-FICHE.
    STOP RUN.

SAISIE-CLIENT.
    DISPLAY 'Nom du client :'.
    ACCEPT NOM-CLIENT.
    DISPLAY 'Age du client :'.
    ACCEPT AGE-CLIENT.

AFFICHER-FICHE.
    DISPLAY '===== FICHE ====='.
    DISPLAY 'Nom : ' NOM-CLIENT.
    DISPLAY 'Age : ' AGE-CLIENT.
```

<!-- L'expliquation -->

# Structurer le code avec PERFORM

---

## **Objectif**

Découper un programme en **paragraphes** réutilisables et les appeler avec `PERFORM`.  
C’est la base d’un COBOL lisible et maintenable.

---

## **Organisation**

```
PROCEDURE DIVISION.
MAIN-LOGIC.        ← point d’entrée
    PERFORM ...
SAISIE-CLIENT.     ← paragraphe métier
AFFICHER-FICHE.    ← paragraphe affichage
```

---

## **PERFORM**

```cobol
PERFORM SAISIE-CLIENT.
PERFORM AFFICHER-FICHE.
```

- Exécute le paragraphe nommé, puis revient à l’instruction suivante.
- Évite de tout écrire en ligne dans `MAIN-LOGIC`.

---

## **Bonnes pratiques**

1. Un paragraphe = une responsabilité claire.
2. Le flux principal (`MAIN-LOGIC`) reste court et lisible.
3. Terminer le programme avec `STOP RUN` dans le flux principal.

---

## **Variantes utiles (plus tard)**

- `PERFORM paragraph UNTIL condition`
- `PERFORM paragraph VARYING i FROM 1 BY 1 UNTIL i > 10`

---

## **Sortie attendue**

```
Nom du client :
Alice
Age du client :
30
===== FICHE =====
Nom : Alice
Age : 30
```
