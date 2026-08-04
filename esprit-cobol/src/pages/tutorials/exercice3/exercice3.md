<!-- Le Code -->

```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. MontantDemo.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 MONTANT PIC 9(5)V99 VALUE 1250.50.
01 SOLDE   PIC S9(5)V99 VALUE -320.75.

PROCEDURE DIVISION.
    DISPLAY 'Montant : ' MONTANT.
    DISPLAY 'Solde   : ' SOLDE.
    STOP RUN.
```

<!-- L'expliquation -->

# Variables numériques décimales — PIC 9V99 et S9

---

## **Objectif du tutoriel**

Manipuler des **montants** et des **soldes** : décimales implicites avec `V`, et valeurs négatives avec `S`.  
C’est le cœur des applications COBOL métier (banque, facturation, stocks).

---

## **IDENTIFICATION DIVISION**

- **`PROGRAM-ID. MontantDemo.`**  
  Programme dédié aux montants numériques.

---

## **DATA DIVISION — WORKING-STORAGE SECTION**

### `01 MONTANT PIC 9(5)V99 VALUE 1250.50.`

- **`PIC 9(5)V99`** :
  - `9(5)` = jusqu’à 5 chiffres avant la virgule ;
  - `V` = **virgule décimale implicite** (non stockée comme caractère) ;
  - `99` = 2 chiffres après la virgule.
- **`VALUE 1250.50`** : initialisation du montant.

### `01 SOLDE PIC S9(5)V99 VALUE -320.75.`

- **`S`** devant `9` = nombre **signé** (positif ou négatif).
- Idéal pour un solde de compte qui peut être débiteur.
- **`VALUE -320.75`** : solde négatif.

> Différence clé avec le tutoriel 2 : ici on ne stocke pas du texte (`PIC X`), mais des quantités calculables (`PIC 9` / `S9`).

---

## **PROCEDURE DIVISION**

- Affichage du montant (toujours positif dans cet exemple).
- Affichage du solde (peut être négatif grâce à `S`).
- **`STOP RUN.`** termine l’exécution.

---

## **Points à retenir**

| Clause | Rôle |
|--------|------|
| `PIC 9(n)` | Entier de `n` chiffres |
| `V` | Décimale implicite |
| `PIC 9(n)V99` | Montant avec 2 décimales |
| `S` | Autorise le signe − / + |

---

## **Sortie attendue**

```
Montant : 1250.50
Solde   : -320.75
```

(le format exact d’affichage peut varier selon le compilateur)
