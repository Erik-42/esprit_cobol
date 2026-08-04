<!-- Le Code -->

```cobol
IDENTIFICATION DIVISION.
PROGRAM-ID. HelloCompile.

PROCEDURE DIVISION.
    DISPLAY 'Compilation reussie avec GnuCOBOL !'.
    STOP RUN.
```

<!-- L'expliquation -->

# Installer GnuCOBOL et compiler

---

## **Objectif**

Passer du code à l’**exécutable** : installer GnuCOBOL, créer un fichier `.cob`, compiler et lancer le programme.

---

## **Installation (aperçu)**

### Linux (Debian / Ubuntu)

```bash
sudo apt update
sudo apt install gnucobol
cobc --version
```

### Autres options

- **Windows** : builds GnuCOBOL / MSYS2
- **macOS** : `brew install gnu-cobol`
- IDE : OpenCobolIDE (voir la page Logiciels du site)

---

## **Créer le fichier source**

Enregistrez le code dans `HelloCompile.cob`.

---

## **Compiler**

```bash
cobc -x HelloCompile.cob -o HelloCompile
```

| Option | Rôle |
|--------|------|
| `-x` | Produire un exécutable |
| `-o` | Nom du binaire de sortie |
| `-free` | Format source free-form (si besoin) |

---

## **Exécuter**

```bash
./HelloCompile
```

Sortie attendue :

```
Compilation reussie avec GnuCOBOL !
```

---

## **Erreurs fréquentes à ce stade**

- `cobc: command not found` → GnuCOBOL non installé / PATH
- Extension oubliée (`.cob` / `.cbl`)
- Droits d’exécution manquants : `chmod +x HelloCompile`

---

## **Enchaînement**

Une fois la compilation maîtrisée, tous les tutoriels précédents deviennent exécutables sur votre machine.
