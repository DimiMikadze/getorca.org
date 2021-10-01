"use strict";(self.webpackChunkorca_docs=self.webpackChunkorca_docs||[]).push([[199],{7189:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],s={sidebar_position:2,id:"configuration"},l="Configuration",d={unversionedId:"getting-started/configuration",id:"getting-started/configuration",isDocsHomePage:!1,title:"Configuration",description:"In this section, we'll create an admin user that has privileges for managing community channels, community branding, users, and more.",source:"@site/docs/getting-started/Configuration.md",sourceDirName:"getting-started",slug:"/getting-started/configuration",permalink:"/docs/getting-started/configuration",editUrl:"https://github.com/ElevenSymbols/getorca.org/edit/main/docs/getting-started/Configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"configuration"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/getting-started/installation"},next:{title:"Project Structure",permalink:"/docs/getting-started/project-structure"}},c=[{value:"Creating a Super Admin user",id:"creating-a-super-admin-user",children:[]},{value:"CDN Integration",id:"cdn-integration",children:[]},{value:"Email Service Integration",id:"email-service-integration",children:[]},{value:"Google Analytics",id:"google-analytics",children:[]}],m={toc:c};function p(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"In this section, we'll create an admin user that has privileges for managing community channels, community branding, users, and more."),(0,o.kt)("p",null,"Plus, integrating ",(0,o.kt)("a",{parentName:"p",href:"https://cloudinary.com"},"Cloudinary")," CDN for hosting images, ",(0,o.kt)("a",{parentName:"p",href:"https://www.mailgun.com"},"Mailgun")," for sending emails, and configuring ",(0,o.kt)("a",{parentName:"p",href:"https://analytics.google.com"},"Google Analytics")," for tracking key metrics."),(0,o.kt)("h2",{id:"creating-a-super-admin-user"},"Creating a Super Admin user"),(0,o.kt)("p",null,"You can create a super admin user by running the following command from the root of the project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn create-super-admin your@email.com\n")),(0,o.kt)("p",null,"Replace ",(0,o.kt)("a",{parentName:"p",href:"mailto:your@email.com"},"your@email.com")," with your real email address because, on that address, you'll receive notifications when someone follows you, sends you a message, etc."),(0,o.kt)("p",null,"By default, the newly created user's password is ",(0,o.kt)("inlineCode",{parentName:"p"},"orcaorca"),". So you can log in to the app by providing the email address you've used for creating an admin user and password ",(0,o.kt)("inlineCode",{parentName:"p"},"orcaorca"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"After login in, you can change the profile information and the password from the setting's account page."))),(0,o.kt)("h2",{id:"cdn-integration"},"CDN Integration"),(0,o.kt)("p",null,"All user-uploaded files: profile and cover pictures, post images, and community logo are uploaded to ",(0,o.kt)("a",{parentName:"p",href:"https://cloudinary.com"},"Cloudinary")," CDN for faster content delivery."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Cloudinary does not require credit card information and provides a reasonably good free plan."))),(0,o.kt)("p",null,"After creating an account on Cloudinary, grab the ",(0,o.kt)("strong",{parentName:"p"},"Cloud name"),", ",(0,o.kt)("strong",{parentName:"p"},"API Key"),", and ",(0,o.kt)("strong",{parentName:"p"},"API Secret")," from its dashboard and fill in the corresponding environment variables in the ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/orca-api/.env")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="packages/orca-api/.env"',title:'"packages/orca-api/.env"'},"CLOUDINARY_CLOUD_NAME=Your Cloud Name Here\nCLOUDINARY_API_KEY=Your API Key Here\nCLOUDINARY_SECRET=Your API Secret Here\n")),(0,o.kt)("p",null,"After saving the file, restart the server, and you'll be able to upload the files to the CDN."),(0,o.kt)("h2",{id:"email-service-integration"},"Email Service Integration"),(0,o.kt)("p",null,"For sending Account verification, Password recovery, and Notification emails, we use ",(0,o.kt)("a",{parentName:"p",href:"https://www.mailgun.com"},"Mailgun"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Mailgun also provides a reasonably good free plan. If you create an account with credit card information, you get 5,000 free emails per month for 3 months. However, if you create an account without a credit card, you'll be restricted to sending to only authorized recipients."))),(0,o.kt)("p",null,"After creating an account on Mailgun, you can use the default sandbox domain name or add your custom one. When done with domain configuration, grab the ",(0,o.kt)("strong",{parentName:"p"},"domain")," name from its dashboard and ",(0,o.kt)("strong",{parentName:"p"},"Private API key")," from the settings page and fill in the corresponding environment variables in the ",(0,o.kt)("inlineCode",{parentName:"p"},"packages/orca-api/.env")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="packages/orca-api/.env"',title:'"packages/orca-api/.env"'},"MAILGUN_API_KEY=Your Private API Key Here\nMAILGUN_DOMAIN=Your Domain Name Here\n")),(0,o.kt)("p",null,"Don't forget to restart the server after updating the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("h2",{id:"google-analytics"},"Google Analytics"),(0,o.kt)("p",null,"Google Analytics is already configured in Orca. You just need to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"GOOGLE_ANALYTICS_ID")," in the Frontend's config file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="packages/orca-frontend/utils/config.ts"',title:'"packages/orca-frontend/utils/config.ts"'},"GOOGLE_ANALYTICS_ID: 'YOUR TRACKING OR MEASUREMENT ID IN HERE',\n")))}p.isMDXComponent=!0}}]);