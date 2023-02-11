chrome.runtime.sendMessage("requestDataUsage", (response) => {
  // 3. Got an asynchronous response with the data from the service worker
  if (response.type === "dataUsage")
  {
    let totalData = response.data;
    document.getElementById("data").innerHTML = totalData;
  }
});

// const getNetworkData = () =>
// {
//   let totalData = 0;
//   let resources = performance.getEntriesByType("resource");
//   resources.forEach(function(resource) {
//     totalData += resource.duration;
//   });
//   return (totalData / 1024);
// }

// document.addEventListener("DOMContentLoaded", async () => {
//   let a = getNetworkData();
//   const divcontainer = document.getElementById("data");
//   const textcontainer = document.getElementById("data2");
//   divcontainer.innerHTML = a + " kB";
//   textcontainer.innerHTML = (a / 1048576) * 11;

// });