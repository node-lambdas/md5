import { lambda } from "node-lambdas";
import { createHash } from "crypto";

lambda({ readBody: true }, (input, output) => output.send(createHash("md5").update(input.body).digest("hex")));
