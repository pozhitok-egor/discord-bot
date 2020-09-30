![](https://img.shields.io/badge/progress-developing-green)
![](https://img.shields.io/badge/version-0.0-green)

![](https://img.shields.io/badge/Python-v3.7-blue)
![](https://img.shields.io/badge/lib-Discord.py-blue)

## Project description
This bot is designed to cheer you up, entertain and to moderate your discord server.

## Bot commands
- !choose - helps to choose from several options
- !dice - dice game
- !avatar | !avatar __@User__ - shows your avatar, or avatar of specified __@User__
- !rps - Rock-paper-scissors game
- !mute [__seconds__] [reason] - mute channel member
- !ban [__reason__] - ban channel member
- !meme - shows random meme
- !search [__text__] - searchs image of specified __text__ in web

## Use cases
- [ ] Administrator / moderator can ban with reason.
- [X] Administrator / moderator can mute users for some time with reason.
- [ ] Administrator / moderator can add 
- [X] Channel members can get roles from message.
- [ ] Channel members can search images.
- [ ] Channel members can get random memes.
- [X] Channel members can play Rock-papes-scissors with bot.
- [X] Channel members can play Rock-papes-scissors with each other.
- [ ] ~~Users can play music with bot from Url or search.~~

## Requirements
 - Should be used embed posts
 - Mute and ban should be automatically removed after timeout
 - Bot should show "playing" or "listening" help command

## Used libraries
- [discord](https://pypi.org/project/discord.py/)
- [emojis](https://pypi.org/project/emojis/)
- math
- random
- json
- re
- asyncio

## Some API links
- [Random meme heroku project](https://meme-api.herokuapp.com/gimme)
- [Get random meme](https://some-random-api.ml/meme)
- [discord.py](https://discordpy.readthedocs.io/en/latest/)
