chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "requestDataUsage") {
      let totalData = 0;
      let resources = performance.getEntriesByType("resource");
      resources.forEach(function(resource) {
        totalData += resource.transferSize;
      });
      sendResponse({
        type: "dataUsage",
        data: totalData
      });
    }
  });
