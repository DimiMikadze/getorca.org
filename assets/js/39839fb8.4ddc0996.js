"use strict";(self.webpackChunkorca_docs=self.webpackChunkorca_docs||[]).push([[657],{9841:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:2,id:"deployment"},l="Deployment",p={unversionedId:"deployment/deployment",id:"deployment/deployment",isDocsHomePage:!1,title:"Deployment",description:"Orca gives you many possible deployment options for your project. It can be deployed on hosting servers such as AWS, Google Cloud, Digital Ocean, and others.",source:"@site/docs/deployment/deployment.md",sourceDirName:"deployment",slug:"/deployment/deployment",permalink:"/docs/deployment/deployment",editUrl:"https://github.com/elevensymbols/getorca.org/edit/main/docs/deployment/deployment.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"deployment"},sidebar:"tutorialSidebar",previous:{title:"Production Mode",permalink:"/docs/deployment/production-mode"},next:{title:"Contributing",permalink:"/docs/contributing"}},d=[{value:"Configuration",id:"configuration",children:[{value:"API Configuration",id:"api-configuration",children:[]},{value:"Frontend Configuration",id:"frontend-configuration",children:[]}]},{value:"Deployment using PaaS",id:"deployment-using-paas",children:[]},{value:"Deployment using IaaS",id:"deployment-using-iaas",children:[]}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deployment"},"Deployment"),(0,i.kt)("p",null,"Orca gives you many possible deployment options for your project. It can be deployed on hosting servers such as AWS, Google Cloud, Digital Ocean, and others."),(0,i.kt)("p",null,"When thinking about deployment, you need to keep in mind that the Orca app consists of three core services:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MongoDB Database."),(0,i.kt)("li",{parentName:"ul"},"API, Express server."),(0,i.kt)("li",{parentName:"ul"},"Frontend, Next.js application.")),(0,i.kt)("p",null,"API and Frontend services can be deployed to any hosting provider that supports Node.js."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Since services can run on different servers, domains, or ports after the deployment, you need to edit the configuration files so they can point to each other."),(0,i.kt)("h3",{id:"api-configuration"},"API Configuration"),(0,i.kt)("p",null,"For the API service, you need to edit the following environment variables in its ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="packages/orca-api/.env"',title:'"packages/orca-api/.env"'},"API_PORT=4000\nAPI_URL=https://api.getorca.org\nNODE_ENV=production\n\nFRONTEND_URL=http://localhost:3000\n\nMONGO_URL=mongodb://username:password@localhost:27017/orca?authSource=admin\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"API_PORT")," A Port that is used by the API server. The ",(0,i.kt)("inlineCode",{parentName:"li"},"PORT")," env variable can override it since some hosting providers set the ",(0,i.kt)("inlineCode",{parentName:"li"},"PORT")," env variable by default."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"API_URL")," URL of the API. For example, the ",(0,i.kt)("a",{parentName:"li",href:"https://community.getorca.org/"},"demo")," app's API service runs on the ",(0,i.kt)("inlineCode",{parentName:"li"},"https://api.getorca.org")," URL."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NODE_ENV")," Tell the app that it runs on the production environment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FRONTEND_URL")," URL of the frontend app. For example, the ",(0,i.kt)("a",{parentName:"li",href:"https://community.getorca.org/"},"demo")," app's frontend runs on the ",(0,i.kt)("inlineCode",{parentName:"li"},"https://community.getorca.org")," URL."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MONGO_URL")," MongoDB Connection String URI format. Containing username, password, port, and the name of the database.")),(0,i.kt)("h3",{id:"frontend-configuration"},"Frontend Configuration"),(0,i.kt)("p",null,"For the Frontend service, you just need to edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"API_PRODUCTION_URL")," variable in the ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/frontend/utils/config.ts")," before building the app."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="packages/frontend/utils/config.ts"',title:'"packages/frontend/utils/config.ts"'},"const API_PRODUCTION_URL = 'https://api.getorca.org';\nconst API_DEV_URL = 'http://localhost:4000';\n")),(0,i.kt)("h2",{id:"deployment-using-paas"},"Deployment using PaaS"),(0,i.kt)("p",null,"Probably, the easiest way to deploy an Orca app is to use PaaS (Platform as a service) provider since it does not require DevOps skills, and the webserver is already configured for you."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For the API service, you can use ",(0,i.kt)("a",{parentName:"li",href:"https://www.heroku.com/"},"Heroku"),", ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/appengine"},"Google App Engine"),", ",(0,i.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/products/app-platform/"},"Digital Ocean App Platform"),", or any other provider that supports Node.js."),(0,i.kt)("li",{parentName:"ul"},"For the Frontend service, you can use ",(0,i.kt)("a",{parentName:"li",href:"https://vercel.com/"},"Vercel")," as it is a Next.js application."),(0,i.kt)("li",{parentName:"ul"},"For MongoDB, you can use ",(0,i.kt)("a",{parentName:"li",href:"https://www.mongodb.com/cloud/atlas"},"MongoDB Atlass")," database as a service.")),(0,i.kt)("p",null,"Most of the providers offer free plans. That is OK for testing purposes and MVPs. Although, for more serious business-focused apps, the performance and limitations of free plans won't be enough for you."),(0,i.kt)("p",null,"PaaS providers cost more than IaaS (Infrastructure as a service) providers, as it adds more value by removing the server configuration and management. Still, it might be cost-effective for you if you don't have DevOps skills and/or you simply want to focus only on app development."),(0,i.kt)("h2",{id:"deployment-using-iaas"},"Deployment using IaaS"),(0,i.kt)("p",null,"You can deploy an Orca app on any Iaas Provider: AWS, Google Cloud, Microsoft Azure, Digital Ocean, and many more. However, you'll need basic DevOps skills to configure and manage the server."),(0,i.kt)("p",null,"For instance, The ",(0,i.kt)("a",{parentName:"p",href:"https://community.getorca.org/"},"demo")," app is deployed on a single Digital Ocean droplet. The droplet contains and runs all the services: MongoDB database, API, and frontend."))}c.isMDXComponent=!0}}]);