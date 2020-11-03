import discord
import asyncio
import configparser
import mysql.connector
from mysql.connector import Error
config = configparser.ConfigParser()

""" Database Connection """

config.read("config.ini")

def connect():
    """ Connect to MySQL database """
    try:
        conn = mysql.connector.connect(host=config["db"]["host"],
                                       database=config["db"]["database"],
                                       user=config["db"]["user"],
                                       password=config["db"]["password"])
        if conn.is_connected():
            print('Connected to MySQL database')

    except Error as e:
        print(e)

    finally:
        conn.close()

if __name__ == '__main__':
    connect()

""" Bot code """
#from discord.ext import tasks, commands

#with open('config.json') as json_file:
#bot = commands.Bot(command_prefix=commands.when_mentioned_or('!'))
#bot.remove_command('help')

#bot.run(config["TOKEN"])