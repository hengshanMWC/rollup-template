import { RollupTemplate } from "../src/index";
test("test", () => {
  const name = "test";
  const rollupTemplate = new RollupTemplate(name);
  expect(rollupTemplate.name).toBe(name);
});
