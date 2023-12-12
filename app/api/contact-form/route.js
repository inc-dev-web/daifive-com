import { NextResponse } from 'next/server';
import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN)

/**
 * @param  {import('next/server').NextRequest} request
 * @returns {import('next/server').NextResponse}
 */
export async function POST(request) {
  const data = await request.json()

  const phoneNumber = data.phoneNumber

  await bot.telegram.sendMessage(process.env.CHAT_ID, `Новий запит: ${phoneNumber}`)

  return NextResponse()
}