<!-- Le Code -->

```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. CalculTVA.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 PRIX-HT     PIC 9(5)V99.
01 TAUX-TVA    PIC 9V99 VALUE 0.20.
01 MONTANT-TVA PIC 9(5)V99.
01 PRIX-TTC    PIC 9(5)V99.

PROCEDURE DIVISION.
    DISPLAY 'Entrez le prix HT :'.
    ACCEPT PRIX-HT.

    MULTIPLY PRIX-HT BY TAUX-TVA GIVING MONTANT-TVA.
    ADD PRIX-HT TO MONTANT-TVA GIVING PRIX-TTC.

    IF PRIX-TTC > 1000
       DISPLAY 'Commande importante (TTC > 1000)'
    ELSE
       DISPLAY 'Commande standard'
    END-IF.

    DISPLAY 'TVA  : ' MONTANT-TVA.
    DISPLAY 'TTC  : ' PRIX-TTC.
    STOP RUN.
```

<!-- L'expliquation -->

# Calculs métier et conditions IF

---

## **Objectif**

Combiner les **verbes arithmétiques** (`MULTIPLY`, `ADD`) et une **condition `IF`** pour calculer une TVA et classer une commande.

---

## **Variables**

| Variable | PIC | Rôle |
|----------|-----|------|
| `PRIX-HT` | `9(5)V99` | Prix hors taxes saisi |
| `TAUX-TVA` | `9V99` | Taux (20 % = 0.20) |
| `MONTANT-TVA` | `9(5)V99` | TVA calculée |
| `PRIX-TTC` | `9(5)V99` | Total TTC |

---

## **Calculs**

```cobol
MULTIPLY PRIX-HT BY TAUX-TVA GIVING MONTANT-TVA.
ADD PRIX-HT TO MONTANT-TVA GIVING PRIX-TTC.
```

- `MULTIPLY ... GIVING` stocke le résultat dans une autre variable.
- `ADD ... GIVING` additionne HT + TVA → TTC.

Autres verbes utiles : `SUBTRACT`, `DIVIDE`.

---

## **Condition IF**

```cobol
IF PRIX-TTC > 1000
   DISPLAY 'Commande importante (TTC > 1000)'
ELSE
   DISPLAY 'Commande standard'
END-IF.
```

- Teste une condition métier.
- Toujours fermer avec **`END-IF`**.

---

## **Sortie attendue (exemple : HT = 900)**

```
Entrez le prix HT :
900
Commande standard
TVA  : 0180.00
TTC  : 1080.00
```
