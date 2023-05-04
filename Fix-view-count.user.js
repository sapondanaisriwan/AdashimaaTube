// ==UserScript==
// @name           Fix live stream view count
// @namespace      https://github.com/sapondanaisriwan/AdashimaaTube
// @match          https://www.youtube.com/watch?v=*
// @grant          none
// @version        1.0.0
// @author         sapondanaisriwan
// @description    Auto update life stream view count
// @license        MIT
// @icon           https://i.imgur.com/I9uDrsq.png
// @homepageURL   https://github.com/sapondanaisriwan/AdashimaaTube
// @updateURL     https://github.com/sapondanaisriwan/AdashimaaTube/raw/main/Fix-view-count.user.js
// @supportURL    https://github.com/sapondanaisriwan/AdashimaaTube/issues
// ==/UserScript==

/*
If you want to submit a bug or request a feature please report via github issue. Since I receive so many emails, I can't reply to them all.
Contact: sapondanaisriwan@gmail.com
Support me: https://ko-fi.com/sapondanaisriwan
Support me: https://ko-fi.com/sapondanaisriwan
Support me: https://ko-fi.com/sapondanaisriwan
Support me: https://ko-fi.com/sapondanaisriwan
Support me: https://ko-fi.com/sapondanaisriwan
*/

// Enable strict mode to catch common coding mistakes
"use strict";

const messages = {
  updatedViewCount: "Update: View Count",
};

const selectors = {
  infoContainer: "#info-container.ytd-watch-metadata",
  newViewCount: "#info-container.ytd-watch-metadata span",
  oldViewCount: "span.ytd-video-view-count-renderer",
  ytFinish: "yt-navigate-finish",
};

const cLogStyles = "color: green; font-size: 16px";
const config = { childList: true, subtree: true };

const select = (selector) => document.querySelector(selector);
const cLog = (msg) => console.log(`%c${msg}`, cLogStyles);

const waitForElement = (selector) => {
  return new Promise((resolve) => {
    const element = select(selector);
    if (element) {
      resolve(element);
      return;
    }

    const observer = new MutationObserver(() => {
      const element = select(selector);
      if (element) {
        resolve(element);
        observer.disconnect();
      }
    });

    observer.observe(document.body, config);
  });
};

const updateViewCount = () => {
  const newViewCount = select(selectors.newViewCount);
  const oldViewCount = select(selectors.oldViewCount);
  oldViewCount.textContent = newViewCount.textContent;
  cLog(messages.updatedViewCount);
};

const run = async () => {
  const infoContainer = await waitForElement(selectors.infoContainer);
  const observer = new MutationObserver(updateViewCount);
  observer.observe(infoContainer, config);
};

document.addEventListener(selectors.ytFinish, run);