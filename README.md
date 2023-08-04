# npms-plugins-stylus

## Description

stylusをcli化。globで複数ファイルを指定して書き出しできるようにしたもの。  
引数を渡すことでstylusを実行することができる。  

## Requirement

* Node.js -> check cmd `node -v`

## Install

```sh
npm i -D https://github.com/ysknk/npms-plugins-stylus.git
```

## Usage

### add script in package.json

```json
{
  "scripts": {
    "stylus": "stylus"
  },
}
```

```sh
# check arguments help
npm run stylus -- --help
```

### ex) set options

project root `.stylusrc.js`  
or  
cli `npm run stylus -- -cwd \"./test/before\" -src \"**/[!_]*.styl\" -dest \"./test/after/\" 
`
