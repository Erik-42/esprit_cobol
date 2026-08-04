<!-- Le Code -->

```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. RapportBatch.

ENVIRONMENT DIVISION.
INPUT-OUTPUT SECTION.
FILE-CONTROL.
    SELECT FICHIER-IN ASSIGN TO 'ventes.txt'
        ORGANIZATION IS LINE SEQUENTIAL.
    SELECT FICHIER-OUT ASSIGN TO 'rapport.txt'
        ORGANIZATION IS LINE SEQUENTIAL.

DATA DIVISION.
FILE SECTION.
FD FICHIER-IN.
01 ENREG-VENTE.
   05 CODE-ARTICLE PIC X(10).
   05 MONTANT      PIC 9(5)V99.

FD FICHIER-OUT.
01 LIGNE-RAPPORT PIC X(80).

WORKING-STORAGE SECTION.
01 WS-EOF        PIC X VALUE 'N'.
01 WS-NB-VENTES  PIC 9(5) VALUE 0.
01 WS-TOTAL      PIC 9(7)V99 VALUE 0.
01 WS-LIGNE      PIC X(80).

PROCEDURE DIVISION.
MAIN-LOGIC.
    OPEN INPUT FICHIER-IN.
    OPEN OUTPUT FICHIER-OUT.

    MOVE '=== RAPPORT DES VENTES ===' TO LIGNE-RAPPORT.
    WRITE LIGNE-RAPPORT.

    PERFORM UNTIL WS-EOF = 'O'
       READ FICHIER-IN
          AT END
             MOVE 'O' TO WS-EOF
          NOT AT END
             ADD 1 TO WS-NB-VENTES
             ADD MONTANT TO WS-TOTAL
             STRING CODE-ARTICLE ' | ' MONTANT
                DELIMITED BY SIZE INTO LIGNE-RAPPORT
             WRITE LIGNE-RAPPORT
       END-READ
    END-PERFORM.

    MOVE '---------------------------' TO LIGNE-RAPPORT.
    WRITE LIGNE-RAPPORT.
    STRING 'Nb ventes : ' WS-NB-VENTES
       DELIMITED BY SIZE INTO LIGNE-RAPPORT.
    WRITE LIGNE-RAPPORT.
    STRING 'Total     : ' WS-TOTAL
       DELIMITED BY SIZE INTO LIGNE-RAPPORT.
    WRITE LIGNE-RAPPORT.

    CLOSE FICHIER-IN.
    CLOSE FICHIER-OUT.
    DISPLAY 'Rapport genere : rapport.txt'.
    STOP RUN.
```

<!-- L'expliquation -->

# Rapport batch — lire, totaliser, écrire

---

## **Objectif**

Écrire un **traitement batch** classique :
1. lire un fichier d’entrée (`ventes.txt`) ;
2. accumuler des totaux ;
3. produire un fichier rapport (`rapport.txt`).

C’est le scénario le plus répandu en COBOL d’entreprise (nuit, clôture, facturation).

---

## **Deux fichiers**

| Fichier | Mode | Rôle |
|---------|------|------|
| `ventes.txt` | `INPUT` | Données brutes |
| `rapport.txt` | `OUTPUT` | Compte-rendu |

---

## **Accumulateurs**

```cobol
ADD 1 TO WS-NB-VENTES
ADD MONTANT TO WS-TOTAL
```

À chaque enregistrement valide, on met à jour compteur et total.

---

## **Écriture du rapport**

- En-tête une fois en début.
- Une ligne par vente.
- Pied de page avec totaux.

`STRING ... INTO` aide à composer une ligne lisible.

---

## **Schéma du flux**

```
ventes.txt ──READ──► calculs ──WRITE──► rapport.txt
                 │
                 └── DISPLAY confirmation console
```

---

## **Fichier d’entrée exemple**

```
ART001    00125.50
ART002    00040.00
ART001    00010.25
```

(à adapter selon le `PIC` exact de vos champs)

---

## **Compétences mobilisées**

Tutoriels 5 (calculs), 6 (`PERFORM`), 7 (fichiers) → réunis dans un vrai cas métier.
