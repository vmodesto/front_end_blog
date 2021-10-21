import { randomInt } from "crypto";
import { createServer, Model } from "miragejs";
import { FormValues } from "../components/Article/NewArticle";

export function makeServer({ environmnet = "dvelopment"} = {}) {
    let server = createServer({
    environment: environmnet,

    models: {
      article: Model,
    },

    seeds(server){
      server.create('article', {
        id: "1",
        name: "Testando o seeds",
        authorAvatar: "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg",
        authorName: "Silvia Almeida",
        postContent: "",
        postDescription: "Uma breve introdução no mundo dos bancos de dados",
        postTitle: "Testando o seeds",
        postImage: "http://ehgomes.com.br/disciplinas/bdd/imagens/2021db.jpg"
      })
    },

    routes() {
        this.namespace = "api";

        this.get("/articles", (schema: any) => { return schema.articles.all();
        });

        this.post('/articles', (schema: any, request) => {
          const request_converted: FormValues = JSON.parse(request.requestBody)
          console.log(schema.articles.all())
          return schema.articles.create({
            id: randomInt,
            name: request_converted.title,
            authorAvatar: "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_960_720.jpg",
            authorName: "Silvia Almeida",
            postDescription: request_converted.description,
            postTitle: request_converted.title,
            postImage: "http://ehgomes.com.br/disciplinas/bdd/imagens/2021db.jpg"
          },
          
          );
        })


        this.post('users/login', () => {
          return {
            token: "fsdfsdfdsfdsfdsfsdf"
          }
        })
    }
})
    return server;
}