<!-- Le Code -->

```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. ProgPrincipal.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 WS-NOM PIC X(30).
01 WS-AGE PIC 99.
01 WS-MSG PIC X(40).

PROCEDURE DIVISION.
MAIN-LOGIC.
    DISPLAY 'Nom :'.
    ACCEPT WS-NOM.
    DISPLAY 'Age :'.
    ACCEPT WS-AGE.

    CALL 'VALIDER-CLIENT' USING WS-NOM WS-AGE WS-MSG.

    DISPLAY WS-MSG.
    STOP RUN.
```

<!-- L'expliquation -->

# Sous-programmes avec CALL

---

## **Objectif**

Séparer la **saisie** (programme principal) de la **validation** (sous-programme).  
Principe : un module = une responsabilité.

---

## **Programme principal**

```cobol
CALL 'VALIDER-CLIENT' USING WS-NOM WS-AGE WS-MSG.
```

- Appelle le sous-programme `VALIDER-CLIENT`.
- `USING` passe des paramètres (par référence en COBOL classique).

---

## **Sous-programme VALIDER-CLIENT**

```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. VALIDER-CLIENT.

DATA DIVISION.
LINKAGE SECTION.
01 LK-NOM PIC X(30).
01 LK-AGE PIC 99.
01 LK-MSG PIC X(40).

PROCEDURE DIVISION USING LK-NOM LK-AGE LK-MSG.
    IF LK-NOM = SPACES
       MOVE 'Erreur : nom vide' TO LK-MSG
    ELSE
       IF LK-AGE < 18
          MOVE 'Client mineur - validation OK' TO LK-MSG
       ELSE
          MOVE 'Client adulte - validation OK' TO LK-MSG
       END-IF
    END-IF.
    GOBACK.
```

### LINKAGE SECTION

Les paramètres reçus se déclarent ici (pas en `WORKING-STORAGE`).

### PROCEDURE DIVISION USING ...

L’ordre des arguments doit correspondre au `CALL ... USING`.

### GOBACK

Retourne au programme appelant (préférable à `EXIT PROGRAM` dans beaucoup de contextes modernes).

---

## **Pourquoi c’est important**

| Sans CALL | Avec CALL |
|-----------|-----------|
| Tout dans un fichier | Modules réutilisables |
| Difficile à tester | Validation isolée |
| Duplication | Une seule règle métier |

---

## **Compilation GnuCOBOL (idée)**

```bash
cobc -m VALIDER-CLIENT.cob
cobc -x ProgPrincipal.cob
```

(les options exactes dépendent de votre environnement)
