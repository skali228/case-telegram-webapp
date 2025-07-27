from aiogram import Bot, Dispatcher, types
from aiogram.types import WebAppInfo
import logging

# Настройка логов
logging.basicConfig(level=logging.INFO)
bot = Bot(token="7631868105:AAHV0tUBe1Yod7dluVAn8si_ohApRi-g2Ds")
dp = Dispatcher()


@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    user = message.from_user

    # Кнопка с WebApp
    keyboard = types.InlineKeyboardMarkup(
        inline_keyboard=[[
            types.InlineKeyboardButton(
                text="🎮 Открыть кейсы",
                web_app=WebAppInfo(url=f"https://skali228.github.io/case-telegram-webapp/?user_id={user.id}")
            )
        ]]
    )

    await message.answer(
        f"Привет, {user.first_name}!\n"
        "Открывай кейсы и забирай призы!",
        reply_markup=keyboard
    )


if __name__ == '__main__':
    from aiogram import executor

    executor.start_polling(dp)