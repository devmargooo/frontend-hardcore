import { NextRequest } from 'next/server';

const list = [
  {
    id: 1,
    url: 'https://vkvideo.ru/playlist/-182420474_16/video-182420474_456239367',
    name: 'Подготовка к JavaScript собеседованию',
  },
  {
    id: 2,
    url: 'https://vkvideo.ru/playlist/-182420474_16/video-182420474_456239240',
    name: 'Решение задач на СОБЕСЕДОВАНИЕ',
  },
  {
    id: 3,
    url: 'https://vkvideo.ru/playlist/-182420474_16/video-182420474_456239344',
    name: '5 способов получить опыт работы',
  },
  {
    id: 4,
    url: 'https://vkvideo.ru/playlist/-182420474_16/video-182420474_456239342',
    name: '50 вопросов на React JS собеседование',
  },
  {
    id: 5,
    url: 'https://vkvideo.ru/playlist/-182420474_16/video-182420474_456239310',
    name: 'Зачем учиться проходить собеседования',
  },
  {
    id: 6,
    url: 'https://vkvideo.ru/playlist/-182420474_12/video-182420474_456239400',
    name: 'Redux Полный Курс 2020',
  },
  {
    id: 7,
    url: 'https://vkvideo.ru/playlist/-182420474_14/video-182420474_456239350',
    name: 'Продвинутый TypeScript. Декораторы, Компилятор, Generic Types, Namespaces',
  },
  {
    id: 8,
    url: 'https://vkvideo.ru/playlist/-182420474_14/video-182420474_456239349',
    name: 'TypeScript - Быстрый Курс за 70 минут [2020]',
  },
  {
    id: 9,
    url: 'https://vkvideo.ru/playlist/-182420474_14/video-182420474_456239302',
    name: 'React JS + TypeScript. Введение в Типизацию (+ React Router DOM)',
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get('limit')) || 5;
  const offset = Number(searchParams.get('offset')) || 0;
  const result = list.slice(limit * offset, limit * (offset + 1));

  return Response.json(result);
}
