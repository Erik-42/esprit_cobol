<!-- Le Code -->

```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. LectureSQL.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 WS-ID    PIC 9(4).
01 WS-NOM   PIC X(30).
01 WS-SQLCODE PIC S9(9) COMP.

EXEC SQL
    INCLUDE SQLCA
END-EXEC.

PROCEDURE DIVISION.
MAIN-LOGIC.
    DISPLAY 'ID client a lire :'.
    ACCEPT WS-ID.

    EXEC SQL
       SELECT NOM
         INTO :WS-NOM
         FROM CLIENTS
        WHERE ID = :WS-ID
    END-EXEC.

    IF SQLCODE = 0
       DISPLAY 'Client : ' WS-NOM
    ELSE
       IF SQLCODE = 100
          DISPLAY 'Aucun client trouve'
       ELSE
          DISPLAY 'Erreur SQLCODE=' SQLCODE
       END-IF
    END-IF.

    STOP RUN.
```

<!-- L'expliquation -->

# COBOL + SQL (introduction)

---

## **Objectif**

Comprendre comment un programme COBOL lit une **table SQL** via des ordres embarqués (`EXEC SQL`).  
Fréquent en banque / assurance (DB2, Oracle, PostgreSQL selon l’environnement).

---

## **Principe**

```
COBOL  ──EXEC SQL──►  précompilateur  ──►  SQL engine
         variables hôtes (:WS-NOM)
```

Les variables COBOL utilisées dans SQL sont préfixées par **`:`** (variables hôtes).

---

## **Blocs EXEC SQL**

```cobol
EXEC SQL
   SELECT ...
END-EXEC.
```

Le précompilateur transforme ces blocs avant la compilation COBOL classique.

---

## **SQLCODE**

| SQLCODE | Signification |
|---------|----------------|
| `0` | OK |
| `100` | Aucune ligne (NOT FOUND) |
| autre | Erreur |

Toujours tester `SQLCODE` après un `SELECT` / `INSERT` / `UPDATE`.

---

## **Exemple métier**

Table `CLIENTS (ID, NOM)` → le programme demande un ID et affiche le nom.

---

## **Écosystème**

Selon la plateforme :
- **IBM** : DB2 + Enterprise COBOL
- **Micro Focus / OpenText** : SQL intégrés
- **GnuCOBOL** : possibles via ODBC / extensions (selon build)

Ce tutoriel reste **conceptuel** : la syntaxe exacte dépend du SGBD et du précompilateur.

---

## **Pour aller plus loin**

- `INSERT` / `UPDATE` / `DELETE`
- Curseurs (`DECLARE CURSOR`, `FETCH`)
- Transactions (`COMMIT` / `ROLLBACK`)
