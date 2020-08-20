import { lambda, Format } from '@node-lambdas/core';
import { createHash } from 'crypto';

const configuration = {
  version: 1,
  input: Format.Buffer,
};

lambda(configuration, (input, output) => output.send(createHash('md5').update(input.body).digest('hex')));
