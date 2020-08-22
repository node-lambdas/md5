import { lambda, Format } from '@node-lambdas/core';
import { createHash } from 'crypto';

const configuration = {
  version: 2,
  actions: {
    default: {
      input: Format.Buffer,
      handler: (input, output) => output.send(createHash('md5').update(input.body).digest('hex')),
    },
  },
};

lambda(configuration);
