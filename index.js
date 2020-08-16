import { lambda } from '@node-lambdas/core';
import { createHash } from 'crypto';

const configuration = {
  version: 1,
  readBody: true
};

lambda(configuration, (input, output) => output.send(createHash('md5').update(input.body).digest('hex')));
