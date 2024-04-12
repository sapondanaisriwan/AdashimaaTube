// ==UserScript==
// @name           Revert the new ui changes
// @namespace      https://github.com/sapondanaisriwan/AdashimaaTube
// @match          https://www.youtube.com/*
// @grant          none
// @version        1.0.1
// @author         sapondanaisriwan
// @description    Revert the new ui changes.
// @license        MIT
// @icon           https://i.imgur.com/I9uDrsq.png
// @run-at         document-start
// @homepageURL    https://github.com/sapondanaisriwan/AdashimaaTube
// @updateURL      https://github.com/sapondanaisriwan/AdashimaaTube/raw/master/userscripts/revert-ui-changes.user.js
// @supportURL     https://github.com/sapondanaisriwan/AdashimaaTube/issues
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

// Define the flags to assign to the EXPERIMENT_FLAGS object
const flagsToAssign = {
    "kevlar_watch_grid": false,
    kevlar_watch_grid_hide_chips: false,

    // fix the old description data is missing
    kevlar_watch_metadata_refresh_no_old_secondary_data: false,

    enable_channel_page_header_profile_section: false,
    kevlar_modern_sd_v2: false,

    kevlar_watch_comments_panel_button: false,
    smartimation_background: false,

    web_animated_actions: false,
    web_modern_collections_v2: false,
    // https://i.imgur.com/DEl82Nt.png
    web_modern_tabs: false,
    web_enable_youtab: false,

    // fix the full screen icon overlapse: https://i.imgur.com/ZGZZVeW.png
    kevlar_set_internal_player_size: false,
};

const updateFlags = () => {
    // Check if the EXPERIMENT_FLAGS object exists in the window.yt.config_ property chain
    const expFlags = window?.yt?.config_?.EXPERIMENT_FLAGS;

    // If EXPERIMENT_FLAGS is not found, exit the function
    if (!expFlags) return;

    // Assign the defined flags to the EXPERIMENT_FLAGS object
    Object.assign(expFlags, flagsToAssign);
};

// Create a MutationObserver that calls the updateFlags function when changes occur in the document's subtree
const mutationObserver = new MutationObserver(updateFlags);
mutationObserver.observe(document, { subtree: true, childList: true });