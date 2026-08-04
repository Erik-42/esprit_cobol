<!-- Le Code -->

```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. CrudClients.

ENVIRONMENT DIVISION.
INPUT-OUTPUT SECTION.
FILE-CONTROL.
    SELECT FICHIER-CLIENT ASSIGN TO 'clients.idx'
        ORGANIZATION IS INDEXED
        ACCESS MODE IS DYNAMIC
        RECORD KEY IS ID-CLIENT
        FILE STATUS IS WS-STATUS.

DATA DIVISION.
FILE SECTION.
FD FICHIER-CLIENT.
01 ENREG-CLIENT.
   05 ID-CLIENT  PIC 9(4).
   05 NOM-CLIENT PIC X(30).
   05 AGE-CLIENT PIC 99.

WORKING-STORAGE SECTION.
01 WS-STATUS PIC XX.
01 WS-CHOIX  PIC 9 VALUE 0.
01 WS-ID     PIC 9(4).
01 WS-NOM    PIC X(30).
01 WS-AGE    PIC 99.

PROCEDURE DIVISION.
MAIN-LOGIC.
    OPEN I-O FICHIER-CLIENT.
    PERFORM UNTIL WS-CHOIX = 5
       DISPLAY '1-Creer 2-Lire 3-Modifier 4-Supprimer 5-Quitter'
       ACCEPT WS-CHOIX
       EVALUATE WS-CHOIX
          WHEN 1 PERFORM CREER
          WHEN 2 PERFORM LIRE
          WHEN 3 PERFORM MODIFIER
          WHEN 4 PERFORM SUPPRIMER
          WHEN 5 DISPLAY 'Fin.'
          WHEN OTHER DISPLAY 'Choix invalide'
       END-EVALUATE
    END-PERFORM.
    CLOSE FICHIER-CLIENT.
    STOP RUN.

CREER.
    DISPLAY 'ID :' ACCEPT WS-ID
    DISPLAY 'Nom :' ACCEPT WS-NOM
    DISPLAY 'Age :' ACCEPT WS-AGE
    MOVE WS-ID TO ID-CLIENT
    MOVE WS-NOM TO NOM-CLIENT
    MOVE WS-AGE TO AGE-CLIENT
    WRITE ENREG-CLIENT
       INVALID KEY DISPLAY 'ID deja existant'
       NOT INVALID KEY DISPLAY 'Cree'
    END-WRITE.

LIRE.
    DISPLAY 'ID :' ACCEPT WS-ID
    MOVE WS-ID TO ID-CLIENT
    READ FICHIER-CLIENT KEY IS ID-CLIENT
       INVALID KEY DISPLAY 'Introuvable'
       NOT INVALID KEY
          DISPLAY ID-CLIENT ' ' NOM-CLIENT ' ' AGE-CLIENT
    END-READ.

MODIFIER.
    DISPLAY 'ID :' ACCEPT WS-ID
    MOVE WS-ID TO ID-CLIENT
    READ FICHIER-CLIENT KEY IS ID-CLIENT
       INVALID KEY DISPLAY 'Introuvable'
       NOT INVALID KEY
          DISPLAY 'Nouveau nom :' ACCEPT WS-NOM
          DISPLAY 'Nouvel age :' ACCEPT WS-AGE
          MOVE WS-NOM TO NOM-CLIENT
          MOVE WS-AGE TO AGE-CLIENT
          REWRITE ENREG-CLIENT
             INVALID KEY DISPLAY 'Erreur rewrite'
             NOT INVALID KEY DISPLAY 'Modifie'
          END-REWRITE
    END-READ.

SUPPRIMER.
    DISPLAY 'ID :' ACCEPT WS-ID
    MOVE WS-ID TO ID-CLIENT
    DELETE FICHIER-CLIENT RECORD
       INVALID KEY DISPLAY 'Introuvable'
       NOT INVALID KEY DISPLAY 'Supprime'
    END-DELETE.
```

<!-- L'expliquation -->

# CRUD complet sur fichier indexé

---

## **Objectif**

Compléter le menu du tutoriel 8 avec les opérations manquantes :
**Create / Read / Update / Delete** sur un fichier **indexé**.

---

## **OPEN I-O**

```cobol
OPEN I-O FICHIER-CLIENT.
```

Mode lecture **et** écriture : indispensable pour `REWRITE` et `DELETE`.

---

## **Les 4 opérations**

| Action | Verbe COBOL |
|--------|-------------|
| Créer | `WRITE` |
| Lire | `READ ... KEY` |
| Modifier | `READ` puis `REWRITE` |
| Supprimer | `DELETE ... RECORD` |

Toujours gérer **`INVALID KEY`**.

---

## **REWRITE — modifier**

1. Lire l’enregistrement par clé.
2. Modifier les champs en mémoire.
3. `REWRITE` pour réécrire au même emplacement.

---

## **DELETE — supprimer**

```cobol
DELETE FICHIER-CLIENT RECORD
   INVALID KEY ...
END-DELETE.
```

La clé doit être positionnée (via `MOVE` dans `ID-CLIENT`, parfois après un `READ`).

---

## **Progression pédagogique**

```
Tuto 7 : lecture séquentielle
Tuto 8 : créer + lister (séquentiel)
Tuto 9 : recherche indexée
Tuto 10 : CRUD indexé complet  ← vous êtes ici
```
