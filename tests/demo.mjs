import test from "ava";
import sum from "../src/sum";

test("Sum", t => {
  t.is(sum(1, 2), 3);
});
