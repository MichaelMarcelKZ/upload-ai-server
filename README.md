<h1 align="center">upload.ai - Back-End</h1>
<p align="center">A simple application that retrieves audio from a video, transcribes this audio into text using Whisper AI, and generates textual content from this transcription using pre-designed and customizable prompts with OpenAI's ChatGPT.</p>
<hr />
<p align="center">
Uma aplicação simples que recupera áudio de um vídeo, transcreve esse áudio em texto usando o Whisper AI e gera conteúdo textual a partir dessa transcrição usando prompts predefinidos e personalizáveis com o ChatGPT da OpenAI.
<p align="center">
</p>
<p align="center">
  <a href="https://www.linkedin.com/in/michaelmarcel67/"><strong>LinkedIn</strong></a> | <a href="https://github.com/kzs3c"><strong>GitHub</strong></a>
</p>

<p align="center">
    <a href="https://github.com/kzs3c/upload-ai-server/issues">Reportar Bug</a>
    ·
    <a href="https://github.com/kzs3c/upload-ai-server/issues">Implementar Feature</a>
  </p>

## Front-End

Para acessar o front-end do projeto, [**clique aqui!**](https://github.com/kzs3c/upload-ai-web/)

## Tecnologias e Pacotes

O projeto foi construído usando as seguintes tecnologias e pacotes:
* [**Fastify**](https://fastify.dev/)
* [**NodeJS**](https://nodejs.org/en)
* [**TypeScript**](https://www.typescriptlang.org/)
* [**OpenAI Node API Lib**](https://www.npmjs.com/package/openai)
* [**Prisma**](https://www.prisma.io/)
* [**Zod**](https://zod.dev/)

<!-- ABOUT THE PROJECT -->
## Sobre o projeto

<img src="https://raw.githubusercontent.com/kzs3c/upload-ai-web/main/about-project.png" alt="upload.ai - Exemplo de Uso">

<!-- GETTING STARTED -->
## Como usar

upload.ai é uma aplicação web que permite você fazer o upload de um vídeo para que o ChatGPT gere textos com base na transcrição do vídeo em texto, que é feita através da Whisper AI, e então gerar os textos com base no prompt informado na primeira caixa de texto.

Você também pode informar palavras-chave contidas no vídeo para facilitar o entendimento das palavras no processo de transcrição do vídeo.

Existem dois prompts pré-construídos que podem ser selecionados, mas você também pode edita-los da forma que quiser.

### Pré-requisitos

```Git, Yarn```

### Instalação

```
# Clone este repositório (Back-End)
$ git clone https://github.com/kzs3c/upload-ai-server.git

# Clone o repositório do servidor (Front-End)
$ git clone https://github.com/kzs3c/upload-ai-web.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd upload-ai-server

# Instalar as dependências
$ yarn
# ou
$ yarn install

# Iniciar o projeto
$ yarn dev

# Abra localhost:5173 no navegador e veja o projeto rodar.
```

<!-- CONTRIBUTING -->
## Contribuindo

As contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Quaisquer contribuições que você fizer são **muito apreciadas**.

1. Faça um fork do projeto
2. Crie seu Feature Branch (`git checkout -b feature / AmazingFeature`)
3. Faça commit de suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. Envie para o Branch (`git push origin feature / AmazingFeature`)
5. Abra um pull request

<!-- LICENSE -->
## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para obter mais informações.