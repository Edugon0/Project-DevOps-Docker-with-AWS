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

*[Espaço para print: Resultado do comando docker --version]*

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
