# Social-Media-Server ![GitHub repo size](https://img.shields.io/github/repo-size/dhyanpatel110/Social-Media-Server)

## Endpoints

- AUTH API

  |      HTTP Method      | Endpoint |       Usage        |       Body/ Params        |
  | :-------------------: | :------: | :----------------: | :---------------: |
  | /api/auth/register |  POST  | signup new account | "username ", "password" |
  | /api/auth/login |  POST  | signin account | "username ", "password" |

  
- USER API

  |      HTTP Method      | Endpoint |       Usage        |       Body/ Params        |
  | :-------------------: | :------: | :----------------: | :---------------: |
  | /api/user/:id   |   GET    |   get user by id   | "id" |
  | /api/user/ |   GET    |  get all user   |
  | /api/user/:id    |   PUT   | update user by id | "_id", "currentUserAdmin", "password   |
  | /api/user/:id/follow |   PUT    | update user follow by id | "_id" |
  | /api/user/:id/unfollow |   PUT    | update user unfollow by id | "_id", |
  | /api/user |  DELETE  | delete user by id | "id", "currentUserId", "currentUserAdmin" |


- POSTS API

  |      HTTP Method      | Endpoint |       Usage        |       Body/ Params        |
  | :-------------------: | :------: | :----------------: | :---------------: |
  | /api/posts/ |  POST  | create new post | "userId", "desc" |
  | /api/posts/:id |  GET  | get post by id | "id" |
  | /api/posts/:id |  PUT  |  update post by id | "id", "userId", "desc" |
  | /api/posts/:id |  DELETE  |  delete post by id | "userId" |
  | /api/posts/:id/like |  PUT  | update post like by id | "userId" |
  | /api/posts/:id/timeline |  GET  | get timeline by id | "userId" |
  

- MESSAGE API

  |      HTTP Method      | Endpoint |       Usage        |       Body/ Params        |
  | :-------------------: | :------: | :----------------: | :---------------: |
  | /api/message/ |  POST  | create message | "chatId", "senderId", "text" |
  | /api/message/:chatId |  GET  | get message by id | "chatId" |


- CHAT API

  |      HTTP Method      | Endpoint |       Usage        |       Body/ Params        |
  | :-------------------: | :------: | :----------------: | :---------------: |
  | /api/chat/ |  POST  | create chat | "senderId", "receiverId" |
  | /api/chat/:userId |  GET  | get user chat by id | "userId" |
  | /api/chat/find/:firstId/:secondId |  GET  | get chat by id | "firstId", "secondId" |
    

- UPLOAD API

  |      HTTP Method      | Endpoint |       Usage        |       Body/ Params        |
  | :-------------------: | :------: | :----------------: | :---------------: |
  | /api/upload/ |  POST  | create upload image | "name" |
