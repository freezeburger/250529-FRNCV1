

# React Native

## Socle Outils:

* (Opptional) NVM - Node Version Manager
    * https://github.com/nvm-sh/nvm
    * Commandes utiles  `nvm install` et `nvm use`

* NodeJS - Runtime machine JavaScript. Socle des outils de dveloppement.
    * NPM
    * Expo
    * TypeScript

* NPM - Node Package Manager
    * Installer des scripts NodeJS (dans *node_modules*)
    * Provenance des scripts annuaire "https://registry.npmjs.com/"
    * Commande Utiles
        * `npm run COMMAND_ALIAS` lance un alias de commande de la section **scripts** du fichier **package.json**.
        * `npx` Install et/ou execute un package nodejs.
        * *Installation locale (au dossier dans lequel la commande est lancée)* `npm install PACKACKAGE_NAME@VERSION` ou `npm i PACKACKAGE_NAME@VERSION`
        * *Installation globale* `npm install --global PACKACKAGE_NAME@VERSION` ou `npm i -g PACKACKAGE_NAME@VERSION`
        * `npm init` Initisalisation dans un nouveau projet d'un **package.json**.

# Socle de connaissance JavaScript

## Module JavaScript

> Est un fichier .js (.ts) chargé en tant que module.
* Possède un scope au niveau du fichier.
* Un module est chargé une seule fois en mémoire.
* Utilise une méacanique d'exposition via `import/export`
* une application JavaScript *moderne* est un arbre de module.
* Il est recommandé des préserver de petits fichier compréhensible.

## Import

* Un `import` est le fait d'accéder au code d'un autre fichiers.
* Un `import` est statique ( résolu avant l'exécution des instructions du fichiers)
* Résolution d'import
    * Generique résolu sur le dossier `node_modules` eg. `import "react-native"`;
    * Alias résolu sur un dossier pré configuré eg. `import "@/custom"`;
    * Local résolu dans l'arborescence `./` ou `../` eg. `import "./custom"`;

> TIPS : utiliser la completion avec `ctrl+space`

```js
import { Text } from "react-native";

const AppHeader = (props: { text?: string }) => {
  return (
    <Text>Hello React Native {props.text}</Text>
  );
}

export default AppHeader;
```

## TypeScript

> Superset JavaScript 
* JavaScript enrichi de types statiques (pendant le développement uniquement)
* Un langage et un outils `tsc`  

# ReactJS

> Librarie de création de composants.
> Prend en charge la définition, le rendu et la mise mise à jour de la vue.

**Mise à jour**
> Se produit lorsque:
* La valeur d'une *props* change.
* Un signal de changement d'état est envoyé à React.

**React propose des mécaniques fonctionnelles permettant de RACCROCHER à ses principes**
> On appelle aussi ce mécanique des HOOKs fonctionnels
> On reconnaiot ses HOOks par la convention de nommage `use`

* `useRef`   - Créer une référence vers une valeur non existante.
* `useEffect`- Permet de déclencher un tratitemnt (effet) à une étape de rendu
* `useState` - Permet de se rappeller d'une valeur entre deux rendu (d'un composant) 

```tsx


function MyComp(){

    let countA = 0;

    // countB est initialisé par React via le hook useState
    const [countB /* getter */,setCounB /* mutator */] = React.useState(0)

    /* 
        const mecanics =  React.useState(0)
        const countC = mecanics[0]
        const setCountC = mecanics[1]
    */

    const handlePressA = () => countA += 1;
    const handlePressB = () => setCounB( countB + 1) // L'usage du mutateur déclenche un signal de rendu
    return (
        <>
            {/* 
            countA sera toujours affiché avec la valeur 0 
            1. La valeur est nien modifée en mémoire lors du touch
            2. Il n'ya pas de signal de rendu envoyé a React (pas de misa a jour de l'affichage)
            3. Si un signal de rendu etauit envoyé la fonction de Composant serait ré exécuté et donc countA réinitialisé à 0
            */}
            <Pressable onPress={handlePressA}> Count A : {countA}</Pressable>

            {/* La valeur de countB sera mémorisé entre deux rendu */}
            <Pressable onPress={handlePressB}> Count B : {countB}</Pressable>
        </>
    )
}

```

# React Native

### Component React Native

> React Native utilise **ReactJS** et donc *JSX* comme modele de développement.

*JSX* est une sous forme (subset) de JavaScript autorisant l'utilisation de la syntaxe XML.

* La création de composants personnalisés se fait en JavaScript sous la forme de :
     * `function`
     * `class`
     * Dans tout les cas un composant doit recevoir `PascalCase`

### Component & JSX

* Les accolades permmettent l'évaluation de JavaScript standard.


### Component & Props

> Les `props` ou objet de données transmise d'un composant parent vers un composant enfant.
* Sous la forme d'attributs XML.
```jsx
    <MyComponent text="Hello" active={true} />
    /* 
        Le composant recevra : 
        props = {
            text:"Hello",
            active:true
        }
    */
```

### Component React Native de Base

> Les composant de base seront transformés dans leur représentation native (`android`,`ios`)

* `View`             - Disposition dans l'écran
* `Text`             - Affichage string l'écran 
* `TouchableOpacity` - Capture d'interaction
* `ImageBackground`  - Permet l'affichage d'une image de fond

### Component React Native et Mise en forme (Style)

> La mise en forme se produit par l'utilisation d'une fonction (factory) `StyleSheet.create`

## React Native Layout et mise en forme.

> React NAtive utilise la notion de flexbox.

https://reactnative.dev/docs/flexbox

> La propriété flex represente un ratio de dimension apar rapport au conteneur parant 


```jsx


function MyComp(){
    return (
        <>
            <View style={style.percent10}></View>
            <View style={style.percent90}></View>
        </>
    )
}

const style = StyleSheet.create({
    percent10:{flex:1},
    percent90:{flex:9}
})
```


## React Native Animated

> https://reactnative.dev/docs/animated
> Permet d'appliquer une animation sur les valeur de style des composants.

# React Native & Expo

> Framework
* Couche applicative (Routing basé sur les fichiers)
* Workflow (NPM)
* Application mobile de prévisualitation (Expo Go)