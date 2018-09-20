Structure of DataBase

## usersテーブル

|Columname|Type|Options|
|---------|----|-------|
|name|varchar|null: false|
|Email|varchar|null: false, UNIQUE KEY|
|password|varchar|null: false|

### association
- has_many :images, messages
- has_many :members, through: :members

## groupsテーブル

|Columname|Type|Options|
|---------|----|-------|
|groups_name|text|null: false, index|

### association
- has_many :messages
- has_many :members, through: :members

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true, index|
|group_id|integer|null: false, foreign_key: true, index|

### association
- belongs_to :group
- belongs_to :user



## imagesテーブル
|Columname|Type|Options|
|---------|----|-------|
|content|varchar|null: false|
|message_id|integer|null: false|

### association
- belongs_to :message


## messagesテーブル

|Columname|Type|Options|
|---------|----|-------|
|body|text|null: false, index|
|image|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|created_at|timestamp|null: false|

### association
- belongs_to :group
- belongs_to :user
- has_many :images