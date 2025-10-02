# Worktree flow

## Introdução

Este projeto nasceu com a necessidade que eu tinha de trabalhar em múltiplas tarefas em múltiplos repositórios ao mesmo
tempo.

Frequentemente eu precisava parar uma task q envolvia alguns repositórios e começar outra que envolvia parte dos
repositórios da task anterior e parte de novos repositórios. Em pouco tempo eu entrei num branching hell, quando voltava
para uma das tasks anteriores, eu já não lembrava em qual branch eu estava nem quais eram todos os repositórios
envolvidos.

Pensando nisso eu criei esse fluxo de trabalho baseado em git worktrees, que me permite trabalhar em múltiplas tasks
simultaneamente, sem a necessidade de criar branches extras e sem o risco de me perder entre as tasks.

```
// colocar aqui uma prévia da organização das pastas
```

## Pré-requisitos
- Git 2.5 ou superior
- node.js e npm
- Bash (ou outro shell compatível, como zsh (não testado))
- Make (opcional, mas recomendado para facilitar o uso dos comandos)

## Instalação
1. Clone este repositório em um diretório de sua escolha:

```bash
git clone
```
2. Navegue até o diretório do projeto:

```bash
cd worktree-flow
```
3. Instale as dependências do projeto:

```bash
npm install
```
4. Instale o CLI do worktree (wt) globalmente (opcional, mas recomendado):

```bash
npm install -g .
```

## Configuração
1. Crie um arquivo `.repos.txt` na pasta repos do projeto, listando os URLs dos repositórios que você
   deseja gerenciar, um por linha. Exemplo:

```
git@github.com:jampow/worktree-flow.git
git@github.com:jampow/dotfiles.git

```

2. Configure a cli da azure

Alguns scripts precisam da cli da azure. Siga as [instruções no site oficial](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) para instala-las no seu OS.

Após a instalação é necessário instalar o plugin do devops. Instruções de como fazer podem ser encontradas no [repo da extensão](https://github.com/Azure/azure-devops-cli-extension).

Por último precisamos adicionar configurações padrões ao plugin do devops

```
az devops configure --defaults project=NomeDoProjeto
az devops configure --defaults organization=https://dev.azure.com/SuaOrganizacao
```

## Uso
Alguns scripts são acionados pelo npm, outros pelo cli wt. A intenção é migrar tudo para o cli wt no futuro.

### Comandos npm
- `npm run clone`: Clona todos os repositórios listados no arquivo `.repos.txt` para a pasta `repos`.
  Se adicionado um repositório novo no arquivo `.repos.txt`, basta rodar esse comando novamente para cloná-lo. Repositórios já clonados serão ignorados.

- `npm run status`: Mostra o status de todos os repositórios por task

- `npm run checkout`: Cria uma nova worktree para uma task específica, ou troca para a worktree de uma task existente.

### Comandos wt
- `wt commit`: Commita as alterações já adicionando o padrão de números de task na mensagem do commit.
- `wt tag`: Cria uma tag em todos os repositórios com o número da versão presente no package.json
