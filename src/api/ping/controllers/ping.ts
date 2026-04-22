export default {
  async index(ctx) {
    ctx.body = { status: 'awake', timestamp: new Date().toISOString() };
  },
};
