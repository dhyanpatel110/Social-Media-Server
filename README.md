# Social-Media-Server ![GitHub repo size](https://img.shields.io/github/repo-size/dhyanpatel110/Social-Media-Server)

## Endpoints

- USER API

  |      HTTP Method      | Endpoint |       Usage        |       Body/ Params        |
  | :-------------------: | :------: | :----------------: | :---------------: |
  | /api/user/:id   |   GET    |   get user by id   | "id" |
  | /api/user/ |   GET    |  get all user   |
  | /api/user/:id    |   PUT   | update user by id | "_id", "currentUserAdmin", "password   |
  | /api/user/:id/follow |   PUT    | update user follow by id | "_id" |
  | /api/user/:id/unfollow |   PUT    | update user unfollow by id | "_id", |
  | /api/user |  DELETE  | delete user by id | "id", "currentUserId", "currentUserAdmin" |


    | /api/auth |  DELETE  | delete album by id |
    | /api/posts |  DELETE  | delete album by id |
    | /api/upload |  DELETE  | delete album by id |
    | /api/chat |  DELETE  | delete album by id |
    | /api/message |  DELETE  | delete album by id |
