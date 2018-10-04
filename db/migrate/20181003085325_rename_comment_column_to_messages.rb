class RenameCommentColumnToMessages < ActiveRecord::Migration[5.0]
  def change
  	rename_column :messages, :comment, :content
  end
end
