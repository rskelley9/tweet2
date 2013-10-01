get '/' do  
  erb :index
end


post '/' do


  Twitter.update(params[:tweet])


end

post '/show_tweet' do

  @tweets = Twitter.user_timeline(params[:username]) 

  erb :tweets
end
