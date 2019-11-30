# Générateur de damier

Écrire une application en ligne de commande qui génère un damier selon les arguments que l'on lui passe.

## Contraintes

- L'application doit être écrite en NodeJS, idéalement en Typescript.
- Des tests doivent être fournis, testant indépendamnent la logique métier et l'affichage
- Le format des arguments est libre : `--param=value`, `--param value`, `-param=value`, etc.

## Arguments optionnels

- `width` : la largeur du damier, valeur par défaut `6`
- `height` : la hauteur du damier, valeur par défaut `6`
- `black` : le signe à afficher pour les cases noires, valeur par défaut `x`
- `white` : le signe à afficher pour les cases blanches, valeur par défaut `o`

## Exemples

```
> node checkerboard-generator
[x][o][x][o][x][o]
[o][x][o][x][o][x]
[x][o][x][o][x][o]
[o][x][o][x][o][x]
[x][o][x][o][x][o]
[o][x][o][x][o][x]

> node checkerboard-generator --height=4 --white=-
[x][-][x][-][x][-]
[-][x][-][x][-][x]
[x][-][x][-][x][-]
[-][x][-][x][-][x]
```

## Rendu

Le code doit être poussé sur un repo https://gitlab.com/ avec l'historique des commits.
