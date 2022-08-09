import { rest } from 'msw';
import { Dataset, Workflow } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const handlers = [
  rest.get(`${API_URL}/api/v1/workflows`, (_req, res, ctx) => {
    return res(
      ctx.json<Workflow[]>([
        {
          id: 'x5ZjHj_vaHu9IHaopuZze',
          title: 'Reviews of Top Mixer Grinders In Amazon India',
          description: 'Find out what kind of grinder Indians like most!',
          created_at: '2022-07-25T14:18:51.100310+00:00',
          modified_at: '2022-07-25T14:18:51.101415+00:00',
          last_opened: '2022-07-25T14:18:51.101415+00:00',
          status: 'success',
        },
      ])
    );
  }),
  rest.get(`${API_URL}/api/v1/datasets`, (_req, res, ctx) => {
    return res(
      ctx.json<Dataset[]>([
        {
          id: 1,
          name: 'Financial Tweets',
          created_at: '2022-08-01T14:04:52.938801+00:00',
          modified_at: '2022-08-01T14:04:52.939439+00:00',
        },
        {
          id: 3,
          name: 'Dataset Zoom 1',
          created_at: '2022-08-01T14:12:53.662781+00:00',
          modified_at: '2022-08-01T14:12:53.662810+00:00',
        },
        {
          id: 6,
          name: 'New dataset',
          created_at: '2022-08-03T01:54:04.753722+00:00',
          modified_at: '2022-08-03T01:54:04.753744+00:00',
        },
        {
          id: 7,
          name: 'Netflix',
          created_at: '2022-08-05T14:05:56.067993+00:00',
          modified_at: '2022-08-05T14:05:56.068028+00:00',
        },
      ])
    );
  }),
];
