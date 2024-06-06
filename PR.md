# ENGWEB2024-Recurso

# Tratamento do Dataset

Após uma análise do dataset, foi possível perceber que nem sempre existiam consistências em vários atributos. Para resolver o problema fez-se essa correção no mesmo programa 'tratardataset.py'. Além disso, todas as ocorrências de `bookId` foram substituídas por `_id`.

O resultado desta conversão e correção foi o ficheiro 'livros.json'.

# Importação para a base de dados

Primeiro, criou-se um container para a base de dados:
```bash
docker run -d -p 27017:27017 --name livros mongo
```

De seguida, importou-se o dataset para a base de dados:
```bash
docker cp livros_final.json livros:/livros_final.json
docker exec -it livros mongoimport -d livros -c livros --type json --file livros_final.json --jsonArray
```

# Queries

As queries pedidas podem ser encontradas no ficheiro `ex1/queries.txt`.

# Ex1

Para colocar a API do primeiro exercício a correr, basta executar os seguintes comandos, tendo em conta que a base de dados já se deve encontrar a correr:
```bash
npm install
npm start
```

# Ex2

Para colocar o frontend do segundo exercício a correr, basta executar os seguintes comando:
```bash
npm install
npm start
```
