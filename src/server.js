import Fastify from 'fastify';

const fastify = Fastify({
    logger: false
});

fastify.get('/health', (request, reply) => {
    return { status: 'ok' };
});

fastify.get('/users', (request, reply) => {
    return [
        { id: 1, name: 'Ada' }, 
        { id: 2, name: 'Linus' }
    ];
});

await fastify.listen({ port: 3000, host: '0.0.0.0' });
