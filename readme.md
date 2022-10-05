######## Iniciando o Typescript #######


criar uma pasta Projetos

1º abrir o terminal do VSCODE e digitar: 'npm init' e dar ENTER para iniciar as opções de anotações para Concluir de ENTER ou Y.

2º instalar o Typesscript: npm install -g typescript

3º Em seguida  instale o pacote:  npx tsc --init e  de ENTER depois instalar: npm install -D ts-node e der ENTER novamente. 

-------------------------------- EXPLICAÇÃO -----------------------------------------

Após seguir os passos acima, irá criar 2 arquivos (package-lock.json e tsconfig.json)

** O node_modules é onde fica todas as bibliotecas que vai ser usada
** tsconfig.json é a configuração do typescript

------------------------------------------------------------------------------------

4- Vá no arquivo tsconfig.json e apague o //  dos arquivos:

"moduleResolution"
"rootDir" (Depois nas aspas de rootDir coloque: "./src" )
"outDir" (Depois nas aspas de outDir coloque  "./dist" )

5- volte no terminal e digite: npm install --save-dev @types/node e de ENTER

6- Cria uma pasta na RAIZ da pasra PROJETOS com o nome: src

7- dentro da pasta src crie um arquivo chamado: index.ts

8- dentro de index.ts, coloque algum código EX:

let nome: String = 'USE104'
let idade: number = 25

console.log("Meu nome é "+nome+" e eu tenho "+idade+" anos")

9- para rodar o código terá que instalar o NODEMON, para isso digite: npm install -g nodemon 

-------------------------------- EXPLICAÇÃO -----------------------------------------

O NODEMON serve para rodarmos o projeto automaticamente Ex:(Para informação adicionado no campo ele irá executar)

--------------------------------------------------------------------------------------


10- No terminal com a execucão do CMD, digite: nodemon src/index.ts

11- package.json na guia de "script" ( abaixo da linha 7) digite:   "start": "nomemon src/index.ts"

12 no terminal digite: npm run USE104

