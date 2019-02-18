class User < ApplicationRecord
  attr_reader :password

  def password=(string)
    self.password_digest = BCrypt::Password.create(string)
    @password = string
  end

  def is_password?(string)
    BCrypt::Password.new(string)
  end

  

end
