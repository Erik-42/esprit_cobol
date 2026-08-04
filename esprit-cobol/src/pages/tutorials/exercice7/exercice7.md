<!-- Le Code -->

```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. LectureFichier.

ENVIRONMENT DIVISION.
INPUT-OUTPUT SECTION.
FILE-CONTROL.
    SELECT FICHIER-CLIENT ASSIGN TO 'clients.txt'
        ORGANIZATION IS LINE SEQUENTIAL.

DATA DIVISION.
FILE SECTION.
FD FICHIER-CLIENT.
01 ENREG-CLIENT.
   05 NOM-CLIENT PIC X(30).
   05 AGE-CLIENT PIC 99.

WORKING-STORAGE SECTION.
01 WS-EOF PIC X VALUE 'N'.

PROCEDURE DIVISION.
MAIN-LOGIC.
    OPEN INPUT FICHIER-CLIENT.
    PERFORM UNTIL WS-EOF = 'O'
       READ FICHIER-CLIENT
          AT END
             MOVE 'O' TO WS-EOF
          NOT AT END
             DISPLAY 'Client : ' NOM-CLIENT
                     ' Age : ' AGE-CLIENT
       END-READ
    END-PERFORM.
    CLOSE FICHIER-CLIENT.
    STOP RUN.
```

<!-- L'expliquation -->

# Fichier séquentiel : OPEN / READ / CLOSE

---

## **Objectif**

Lire un fichier texte ligne par ligne — usage historique et central du COBOL (batch, listing clients).

---

## **ENVIRONMENT DIVISION**

```cobol
SELECT FICHIER-CLIENT ASSIGN TO 'clients.txt'
    ORGANIZATION IS LINE SEQUENTIAL.
```

- Associe le nom logique `FICHIER-CLIENT` au fichier physique `clients.txt`.
- `LINE SEQUENTIAL` = une ligne = un enregistrement (pratique avec GnuCOBOL).

---

## **FILE SECTION**

```cobol
FD FICHIER-CLIENT.
01 ENREG-CLIENT.
   05 NOM-CLIENT PIC X(30).
   05 AGE-CLIENT PIC 99.
```

Décrit la structure de chaque enregistrement lu.

---

## **Boucle de lecture**

1. `OPEN INPUT` ouvre le fichier en lecture.
2. `READ ... AT END` détecte la fin de fichier.
3. `NOT AT END` traite chaque enregistrement.
4. `CLOSE` ferme le fichier.

Le flag `WS-EOF` évite une boucle infinie.

---

## **Fichier d’exemple `clients.txt`**

Chaque ligne doit respecter la longueur déclarée (simplifié pour l’apprentissage) :

```
Dupont                        42
Martin                        35
```

---

## **Points clés**

| Verbe | Rôle |
|-------|------|
| `OPEN INPUT` | Ouvrir en lecture |
| `READ` | Lire un enregistrement |
| `CLOSE` | Fermer le fichier |
| `AT END` | Fin de fichier atteinte |
