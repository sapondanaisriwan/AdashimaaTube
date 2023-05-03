// ==UserScript==
// @name        Fix live steam view count
// @version     1.0.0
// @author      sapondanaisriwan
// @namespace   https://github.com/sapondanaisriwan/AdashimaaTube
// @description Fix view count for AdashimaaTube
// @match       https://www.youtube.com/watch?v=*
// @grant       none
// @icon        https://user-images.githubusercontent.com/64634605/235854015-81c5986d-b858-4f64-b14c-93bba56ba265.png
// ==/UserScript==

// Enable strict mode to catch common coding mistakes
"use strict";

document.addEventListener("yt-navigate-finish", main);

async function main() {
  const viewEle = await waitUntilExists("#info-container.ytd-watch-metadata");
  const observer = new MutationObserver(updateViewCount);
  observer.observe(viewEle, { childList: true, subtree: true });
}

function updateViewCount() {
  document.querySelector("span.ytd-video-view-count-renderer").textContent =
    document.querySelector(
      "#info-container.ytd-watch-metadata span"
    ).textContent;
  console.log("Update: View Count");
}

function waitUntilExists(selector) {
  return new Promise((resolve) => {
    const element = document.querySelector(selector);
    if (element) {
      resolve(element);
      return;
    }

    const observer = new MutationObserver((mutations) => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  });
}
