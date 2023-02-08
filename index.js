const ZB = require("zeebe-node");

(async () => {
  const zbc = new ZB.ZBClient({
    hostname: "localhost",
    port: 26500,
  });
  const result = await zbc.createProcessInstance("sample-worker", {
    testData: "something",
  });
  console.log(result);
})();
