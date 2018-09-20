Structure of DataBase

## usersテーブル

|Columname|Type|Options|
|---------|----|-------|
|name|varchar|null: false|
|Email|varchar|null: false, unique_key|
|password|string|null: false|

### association
- has_many :messages, groups, through: :members
- has_many :members

## groupsテーブル

|Columname|Type|Options|
|---------|----|-------|
|name|text|null: false, index|

### association
- has_many :messages, users, through: :members
- has_many :members

## memberテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true, index|
|group_id|integer|null: false, foreign_key: true, index|

### association
- belongs_to :group
- belongs_to :user


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