import os
import sqlite3
from aiogram import Bot, Dispatcher, types
from aiogram.filters import Command
from aiogram.types import WebAppInfo
import asyncio
from dotenv import load_dotenv

load_dotenv()

bot = Bot(token=os.getenv('7631868105:AAHV0tUBe1Yod7dluVAn8si_ohApRi-g2Ds'))
dp = Dispatcher()

# Инициализация БД
conn = sqlite3.connect('wallets.db')
cursor = conn.cursor()
cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY,
    wallet TEXT,
    balance REAL DEFAULT 0
)
''')
conn.commit()


@dp.message(Command("start"))
async def start_command(message: types.Message):
    webapp_url = f"https://{os.getenv('GITHUB_USERNAME')}.github.io/{os.getenv('REPO_NAME')}/webapp/?user_id={message.from_user.id}"

    await message.answer(
        "Добро пожаловать!",
        reply_markup=types.InlineKeyboardMarkup(
            inline_keyboard=[[
                types.InlineKeyboardButton(
                    text="🎮 Открыть кейсы",
                    web_app=WebAppInfo(url=webapp_url)
                )
            ]]
        )
    )


async def main():
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())