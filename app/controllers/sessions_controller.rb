class SessionsController < ApplicationController
  # 회원가입
  def signup # 회원가입하는 화면이 보여짐
  end

  def user_signup # 실제로 회원가입하는 기능 구현
    user = User.new(
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )
    if user.save
      redirect_to '/signin', notice: "회원가입 완료!"
    else
      redirect_to '/signup', notice: "잘못된 비밀번호입니다."
    end
  end

  # 로그인
  def signin #로그인 화면이 보여짐
  end

  def user_signin #실제로 로그인하는 기능 구현
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password]) #authenticate라는 메소드는 bcrypt에 달려있는 메소드 / user가 있고 그 user의 email과 입력한 password가 일치하는지 확인
        session[:user_id] = user.id
        redirect_to '/', notice: "로그인에 성공했습니다."
    else
      redirect_to '/signin', notice: "이메일이 없거나, 비밀번호가 틀렸습니다."
    end
  end

  # 로그아웃
  def signout
    session.delete(:user_id) # session.clear와 똑같음
    redirect_to '/', notice: "로그아웃 성공!"
  end
end
