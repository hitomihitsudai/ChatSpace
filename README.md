Structure of DataBase

## usersテーブル

|Columname|Type|Options|
|---------|----|-------|
|user_id|integer|null: false|
|Email|integer|null: false|
|group_id|integer|null: false|
|password|integer|null: false|

### association
- has_many :groups, images, messages


## groupsテーブル

|Columname|Type|Options|
|---------|----|-------|
|group_id|integer|null: false|
|groups_name|text|null: false|

### association
- has_many :messages, members, users

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### association
- belongs_to :group
- belongs_to :user



## imagesテーブル
|Columname|Type|Options|
|---------|----|-------|
|content|varchar|null: false|
|user_id|integer|null: false|

### association
- belongs_to :message
- belongs_to :user


## messagesテーブル

|Columname|Type|Options|
|---------|----|-------|
|body|text|null: false|
|image|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|created_at|timestamp|null: false|

### association
- belongs_to :group
- belongs_to :user