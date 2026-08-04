<!-- Le Code -->

```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. SaisieClient.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 NOM-CLIENT PIC X(30).
01 AGE-CLIENT PIC 99.

PROCEDURE DIVISION.
    DISPLAY 'Entrez le nom du client :'.
    ACCEPT NOM-CLIENT.
    DISPLAY 'Entrez age du client (00-99) :'.
    ACCEPT AGE-CLIENT.
    DISPLAY '---------------------------'.
    DISPLAY 'Fiche client'.
    DISPLAY 'Nom : ' NOM-CLIENT.
    DISPLAY 'Age : ' AGE-CLIENT.
    STOP RUN.
```

<!-- L'expliquation -->

# Entrée utilisateur avec ACCEPT

---

## **Objectif du tutoriel**

Passer d’un programme qui affiche seulement des valeurs fixes à un programme **interactif** :  
l’utilisateur saisit un nom et un âge, puis le programme les réaffiche sous forme de fiche.

---

## **IDENTIFICATION DIVISION**

- **`PROGRAM-ID. SaisieClient.`**  
  Programme de saisie d’informations client.

---

## **DATA DIVISION — WORKING-STORAGE SECTION**

### `01 NOM-CLIENT PIC X(30).`

- Variable **alphanumérique** (tutoriel 2) pour stocker le nom saisi.
- Pas de `VALUE` : la valeur viendra de la saisie clavier.

### `01 AGE-CLIENT PIC 99.`

- Variable **numérique** sur 2 chiffres (00 à 99).
- Idéale pour un âge simple.

---

## **PROCEDURE DIVISION**

### Afficher une consigne

```cobol
DISPLAY 'Entrez le nom du client :'.
```

`DISPLAY` guide l’utilisateur avant la saisie.

### Lire au clavier

```cobol
ACCEPT NOM-CLIENT.
```

- **`ACCEPT`** attend une saisie et la place dans la variable.
- Même principe ensuite pour `AGE-CLIENT`.

### Afficher le résultat

Le programme reformate les données saisies :

```cobol
DISPLAY 'Nom : ' NOM-CLIENT.
DISPLAY 'Age : ' AGE-CLIENT.
```

### Terminer

```cobol
STOP RUN.
```

---

## **Points à retenir**

| Instruction | Rôle |
|-------------|------|
| `DISPLAY` | Afficher un message ou une valeur |
| `ACCEPT` | Lire une saisie utilisateur dans une variable |

1. Déclarez d’abord les variables (`PIC X` / `PIC 9`).
2. Affichez une consigne claire.
3. Utilisez `ACCEPT` pour remplir la variable.
4. Réaffichez pour vérifier la saisie.

---

## **Sortie attendue (exemple)**

```
Entrez le nom du client :
Martin
Entrez age du client (00-99) :
42
---------------------------
Fiche client
Nom : Martin
Age : 42
```
