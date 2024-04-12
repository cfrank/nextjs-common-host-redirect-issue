'use strict'

import view from '@fastify/view';
import ejs from 'ejs';

export default async function (fastify, opts) {
  fastify.register(view, {
    engine: {
      ejs,
    }
  });

  fastify.get('/hello', async function (request, reply) {
    const name = request.query.name;

    return reply.view('./templates/hello.ejs', {
      name,
    });
  });
}
