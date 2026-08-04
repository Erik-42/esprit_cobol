<!-- Le Code -->

```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. GestionClients.

ENVIRONMENT DIVISION.
INPUT-OUTPUT SECTION.
FILE-CONTROL.
    SELECT FICHIER-CLIENT ASSIGN TO 'clients.dat'
        ORGANIZATION IS LINE SEQUENTIAL.

DATA DIVISION.
FILE SECTION.
FD FICHIER-CLIENT.
01 ENREG-CLIENT.
   05 NOM-CLIENT PIC X(30).
   05 AGE-CLIENT PIC 99.

WORKING-STORAGE SECTION.
01 WS-CHOIX PIC 9 VALUE 0.
01 WS-EOF   PIC X VALUE 'N'.
01 WS-NOM   PIC X(30).
01 WS-AGE   PIC 99.

PROCEDURE DIVISION.
MAIN-LOGIC.
    PERFORM UNTIL WS-CHOIX = 3
       DISPLAY '1-Creer  2-Lister  3-Quitter'
       DISPLAY 'Votre choix :'
       ACCEPT WS-CHOIX
       EVALUATE WS-CHOIX
          WHEN 1
             PERFORM CREER-CLIENT
          WHEN 2
             PERFORM LISTER-CLIENTS
          WHEN 3
             DISPLAY 'Au revoir.'
          WHEN OTHER
             DISPLAY 'Choix invalide'
       END-EVALUATE
    END-PERFORM.
    STOP RUN.

CREER-CLIENT.
    DISPLAY 'Nom :'.
    ACCEPT WS-NOM.
    DISPLAY 'Age :'.
    ACCEPT WS-AGE.
    OPEN EXTEND FICHIER-CLIENT.
    MOVE WS-NOM TO NOM-CLIENT.
    MOVE WS-AGE TO AGE-CLIENT.
    WRITE ENREG-CLIENT.
    CLOSE FICHIER-CLIENT.
    DISPLAY 'Client ajoute.'.

LISTER-CLIENTS.
    MOVE 'N' TO WS-EOF.
    OPEN INPUT FICHIER-CLIENT.
    PERFORM UNTIL WS-EOF = 'O'
       READ FICHIER-CLIENT
          AT END
             MOVE 'O' TO WS-EOF
          NOT AT END
             DISPLAY NOM-CLIENT ' / ' AGE-CLIENT
       END-READ
    END-PERFORM.
    CLOSE FICHIER-CLIENT.
```

<!-- L'expliquation -->

# Mini-gestion de clients (CRUD simplifié)

---

## **Objectif**

Assembler saisie, `PERFORM`, `EVALUATE` et fichiers pour un **petit menu** :
- créer un client (`WRITE`) ;
- lister les clients (`READ`) ;
- quitter.

C’est une introduction concrète à une appli de gestion « façon COBOL ».

---

## **Menu avec EVALUATE**

```cobol
EVALUATE WS-CHOIX
   WHEN 1 PERFORM CREER-CLIENT
   WHEN 2 PERFORM LISTER-CLIENTS
   ...
END-EVALUATE.
```

Plus lisible qu’une série de `IF` pour un menu.

---

## **Créer — OPEN EXTEND + WRITE**

```cobol
OPEN EXTEND FICHIER-CLIENT.
WRITE ENREG-CLIENT.
CLOSE FICHIER-CLIENT.
```

- `EXTEND` ajoute à la fin du fichier (sans écraser).
- `MOVE` copie les valeurs saisies vers l’enregistrement fichier.

---

## **Lister — boucle READ**

Réutilise le schéma du tutoriel 7 : ouvrir, lire jusqu’à `AT END`, fermer.

---

## **Architecture**

```
MAIN-LOGIC          → menu
CREER-CLIENT        → écriture
LISTER-CLIENTS      → lecture
```

Chaque action = un paragraphe `PERFORM`.

---

## **Pour aller plus loin**

- Modifier un client (`REWRITE`)
- Supprimer (`DELETE` / réécriture filtrée)
- Fichier indexé pour recherche par clé

---

## **Sortie attendue (scénario)**

```
1-Creer  2-Lister  3-Quitter
Votre choix :
1
Nom :
Durand
Age :
28
Client ajoute.
```
