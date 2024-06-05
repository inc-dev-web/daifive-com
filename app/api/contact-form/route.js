import { NextResponse } from 'next/server';
import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN);

export async function POST(request) {
	const data = await request.json();
	const { name, phoneNumber, message } = data;

	const textMessage = `Запись на консультацію:
Ім'я: ${name}
Номер телефону: ${phoneNumber}
Повідомлення: ${message}`;

	await bot.telegram.sendMessage(process.env.CHAT_ID, textMessage);

	return NextResponse();
}
