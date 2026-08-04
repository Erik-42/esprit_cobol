<!-- Le Code -->

```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. DebugDemo.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 WS-AGE    PIC 99.
01 WS-STATUT PIC X(10).

PROCEDURE DIVISION.
MAIN-LOGIC.
    DISPLAY 'Age :'.
    ACCEPT WS-AGE.

    IF WS-AGE < 18
       MOVE 'Mineur' TO WS-STATUT
    ELSE
       MOVE 'Adulte' TO WS-STATUT
    END-IF.

    DISPLAY 'Statut : ' WS-STATUT.
    STOP RUN.
```

<!-- L'expliquation -->

# Déboguer un programme COBOL

---

## **Objectif**

Reconnaître et corriger les **erreurs courantes** : `PIC`, `END-IF`, fichiers, messages du compilateur.

---

## **Le programme correct (ci-dessus)**

Comparez-le aux versions buggées ci-dessous.

---

## **Bug 1 — PIC trop petit**

```cobol
01 WS-STATUT PIC X(5).
MOVE 'Mineur' TO WS-STATUT
```

`Mineur` fait 6 caractères → troncature ou comportement inattendu.  
**Fix :** `PIC X(10)` (ou plus).

---

## **Bug 2 — END-IF oublié**

```cobol
IF WS-AGE < 18
   MOVE 'Mineur' TO WS-STATUT
ELSE
   MOVE 'Adulte' TO WS-STATUT
DISPLAY 'Statut : ' WS-STATUT
```

Sans `END-IF`, le `DISPLAY` peut être mal rattaché.  
**Fix :** toujours fermer avec `END-IF`.

---

## **Bug 3 — Fichier non ouvert**

```cobol
READ FICHIER-CLIENT
```

Sans `OPEN INPUT` préalable → erreur d’exécution / FILE STATUS.  
**Fix :** `OPEN` → traitements → `CLOSE`.

---

## **Bug 4 — Types incompatibles**

```cobol
MOVE 'ABC' TO WS-AGE
```

`WS-AGE` est `PIC 99` (numérique).  
**Fix :** déplacer du numérique vers du numérique, du texte vers `PIC X`.

---

## **Méthode de debug**

1. Lire le **message `cobc`** (ligne + cause).
2. Vérifier `PIC` / longueurs.
3. Vérifier les `END-IF`, `END-PERFORM`, `END-READ`.
4. Afficher des `DISPLAY` temporaires (trace).
5. Contrôler `FILE STATUS` sur les I/O.

---

## **Astuce GnuCOBOL**

```bash
cobc -x -debug DebugDemo.cob
```

Active des aides de diagnostic selon la version.
