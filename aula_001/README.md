# Git

## Configuração do usuario das alterações

### 1.1. setando o nome

```js
git config --global user.name "Fulano de tal"
```
### 1.2. setando o email
js
```
git config --global user.email "Fulanodetal@gmail.com"
```

## Subir alterações para o repositório remoto

### 1 - Verificar as alterações: 

```
git status 
```

### 2 - Adicionar as alterações que serão enviadas:

```
git add .
```

### 3 - Conferir as alterações enviadas
```
git status 
```

### 4 - Preparar as alterações para serem enviadas
```
git commit -m "comentario"
```

### 5 - conferir a preparação
```
git status 
```

### 6 - Enviar as alterações
```
git push 
```