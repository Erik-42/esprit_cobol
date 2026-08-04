<!-- Le Code -->

```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. RechercheIndexee.

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
01 WS-ID     PIC 9(4).

PROCEDURE DIVISION.
MAIN-LOGIC.
    OPEN INPUT FICHIER-CLIENT.
    DISPLAY 'Entrez ID client a rechercher :'.
    ACCEPT WS-ID.
    MOVE WS-ID TO ID-CLIENT.
    READ FICHIER-CLIENT
       KEY IS ID-CLIENT
       INVALID KEY
          DISPLAY 'Client introuvable (status=' WS-STATUS ')'
       NOT INVALID KEY
          DISPLAY 'Trouve : ' ID-CLIENT ' ' NOM-CLIENT ' ' AGE-CLIENT
    END-READ.
    CLOSE FICHIER-CLIENT.
    STOP RUN.
```

<!-- L'expliquation -->

# Fichier indexé — recherche par clé

---

## **Objectif**

Accéder directement à un enregistrement via une **clé** (`RECORD KEY`), sans parcourir tout le fichier.  
Usage typique : fiche client, compte bancaire, article stock.

---

## **FILE-CONTROL (INDEXED)**

```cobol
ORGANIZATION IS INDEXED
ACCESS MODE IS DYNAMIC
RECORD KEY IS ID-CLIENT
FILE STATUS IS WS-STATUS
```

| Clause | Rôle |
|--------|------|
| `INDEXED` | Fichier à index |
| `DYNAMIC` | Accès séquentiel **ou** aléatoire |
| `RECORD KEY` | Clé unique de recherche |
| `FILE STATUS` | Code retour (ex. `23` = not found) |

---

## **Lecture par clé**

```cobol
MOVE WS-ID TO ID-CLIENT.
READ FICHIER-CLIENT
   KEY IS ID-CLIENT
   INVALID KEY ...
   NOT INVALID KEY ...
END-READ.
```

- On place la clé dans le champ clé de l’enregistrement.
- `INVALID KEY` gère l’absence d’enregistrement.

---

## **Différence avec le tutoriel 7**

| Séquentiel | Indexé |
|------------|--------|
| Lecture ligne après ligne | Accès direct par clé |
| Simple à créer | Idéal pour recherche rapide |
| `AT END` | `INVALID KEY` |

---

## **Note GnuCOBOL**

La création initiale du fichier indexé se fait souvent en `OPEN OUTPUT` + `WRITE` des enregistrements, ou via des utilitaires. Ce tutoriel se concentre sur la **recherche**.
