# 🚀 Laboratório DevOps - Projeto 1: Containerização com Docker e Deploy Manual na AWS

## 🎯 Visão Geral

### O que foi construido:
A containerizar um website estático (HTML, CSS e JavaScript) usando Docker e implantá-lo manualmente em uma instância EC2 na AWS, utilizando o Amazon ECR (Elastic Container Registry) para gerenciamento de imagens.

### Por que isso é importante?
- **Portabilidade**: Site funcionará da mesma forma em qualquer ambiente
- **Isolamento**: Elimina problemas de "funciona na minha máquina"
- **Escalabilidade**: Base para futuras implementações mais complexas
- **Padrão da Indústria**: Docker é amplamente utilizado no mercado

- ---

## 🔧 Pré-requisitos

### Ferramentas Necessárias

#### 1. **Docker Desktop**
- **Windows/Mac**: Baixe em [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
- **Linux**: Instale via terminal:
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

Para verificar a instalação:
```bash
docker --version
```

![Deploy Pipeline](./Reference/docker-version.png)

#### 2. **AWS CLI**
Instale seguindo a [documentação oficial](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

Para verificar:
```bash
aws --version
```

*[Espaço para print: Resultado do comando aws --version]*

#### 3. **Conta AWS**
- Crie uma conta gratuita em [aws.amazon.com](https://aws.amazon.com)
- ⚠️ **Importante**: Alguns recursos podem gerar custos. Use o Free Tier quando possível

#### 4. **Editor de Código**
- Recomendado: [Visual Studio Code](https://code.visualstudio.com/)
- Extensões úteis: Docker, AWS Toolkit

### Estrutura do Projeto
```
meu-projeto/
├── ProjetoTCC/
|   ├──Videos/
|   |    └──Videos2/
|   |    └──Videos3/
|   |    └──Videos4/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── assets/
│       └── (imagens, fontes, etc.)
└── Dockerfile
```

---
## 🏗️ Arquitetura do Projeto

![Deploy Pipeline](./Reference/deploy_pipeline_diagram.svg)

## 📦 Fase 1: Preparação do Ambiente Local

### Passo 1.1: Verificar estrutura do projeto

Navegue até o diretório do seu projeto:
```bash
cd caminho/para/seu/projeto
ls -la
```

Você deve ver a pasta `ProjetoTCC/` com seus arquivos:
```bash
ls -la ProjetoTCC/
```

*[Espaço para print: Estrutura de arquivos do projeto]*

### Passo 1.2: Testar o website localmente (opcional)

Você pode abrir o `index.html` diretamente no navegador para verificar se está funcionando:
```bash
# No Mac
open website/index.html

# No Linux
xdg-open website/index.html

# No Windows (PowerShell)
start website/index.html
```

![Deploy Pipeline](./Reference/my-app.png)

---

## 🐳 Fase 2: Containerização com Docker

### Passo 2.1: Criar o Dockerfile

Na raiz do projeto (mesmo nível da pasta `website/`), crie um arquivo chamado `Dockerfile`:

```bash
touch Dockerfile
```

### Passo 2.2: Escrever o Dockerfile

Abra o Dockerfile no seu editor e adicione:

```dockerfile
# Imagem base - Nginx Alpine (leve e eficiente)
FROM nginx:alpine

# Copia os arquivos do website para o diretório do Nginx
COPY website/ /usr/share/nginx/html/

# Expõe a porta 80 (documentação - não abre a porta realmente)
EXPOSE 80

# Comando padrão quando o container iniciar
CMD ["nginx", "-g", "daemon off;"]
```

#### 🎓 Entendendo cada linha:

- **FROM nginx:alpine**: Define a imagem base. Alpine é uma versão Linux super leve
- **COPY**: Copia arquivos do host para dentro da imagem
- **EXPOSE**: Documenta qual porta o container usa
- **CMD**: Define o comando padrão ao iniciar o container

*[Espaço para print: Dockerfile criado no editor]*

### Passo 2.3: Construir a imagem Docker

No terminal, na raiz do projeto, execute:

```bash
docker build -t meu-website:v1.0 .
