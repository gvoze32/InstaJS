const { chalk, inquirer, print } = require("./src/index.js");
var moment = require("moment");
var colors = require("colors");
var userHome = require("user-home");
var open = require('open');
var os = require("os");

// List
const questionTools = [
    "- Information",
    "- Like all post on your Feed",
    "- Like all post from target Account",
    "- Delete all post from your Account",
    
    "- View all story from feeds [NEW]",
    "- Follow Account by Target Followers [NEW]",
    "- Follow Account by Target Followings [NEW]",
    "- Follow all user from Hashtag [NEW]",
    "- Like all post from Hashtag [NEW]",
    "- Comment all post from hashtag [NEW]",
    "- Follow & Like post by Target Followers",
    "- Like & Comment post by Target Followers Target",

    "- Follow, Like & Comment post by Target Followers",
    "- Follow, Like & Comment post by Target Followers [Multiple Target]",

    "- Follow, Like & Comment post by Target Followers v2",

    "- Follow, Like & DM by Target Followers",
    "- Follow, Like & DM by Target Followers [BETA]",

    "- Follow, Like & Comment post from Hashtag [RECOMMENDED]",
    "- Follow, Like & Comment post from Location",

    "- Unfollow All Following",
    "- Unfollow User Not Following You Back",
    "\n",
];

// SELECTOR
const menuQuestion = {
    type: "list",
    name: "choice",
    message: "> Select tools :",
    choices: questionTools,
};

// Tools List
const main = async () => {
    try {
        const { choice } = await inquirer.prompt(menuQuestion);
        choice == questionTools[0] && require("./src/info.js");
        choice == questionTools[1] && require("./src/liketimeline.js");
        choice == questionTools[2] && require("./src/liketarget.js");
        choice == questionTools[3] && require("./src/delallmedia.js");
        choice == questionTools[4] && require("./src/story_views.js");
        choice == questionTools[5] && require("./src/followers_only.js");
        choice == questionTools[6] && require("./src/following_only.js");
        choice == questionTools[7] && require("./src/follow_from_hashtag.js");
        choice == questionTools[8] && require("./src/like_from_hashtag.js");
        choice == questionTools[9] && require("./src/comment_from_hashtag.js");
        choice == questionTools[10] && require("./src/flonly.js");
        choice == questionTools[11] && require("./src/lconly.js");
        choice == questionTools[12] && require("./src/fftauto.js");
        choice == questionTools[13] && require("./src/fftbetaauto.js");
        choice == questionTools[14] && require("./src/fftautov2.js");
        choice == questionTools[15] && require("./src/fftdmauto.js");
        choice == questionTools[16] && require("./src/fftdmbetaauto.js");
        choice == questionTools[17] && require("./src/fhtauto.js");
        choice == questionTools[18] && require("./src/fltauto.js");
        choice == questionTools[19] && require("./src/unfollowall.js");
        choice == questionTools[20] && require("./src/unfollnotfollback.js");
        choice == questionTools[21] && process.exit();
    } catch (err) {
        print(err, "err");
    }
};

// Open @hanzvibes Instagram Profile
const link = 'https://www.instagram.com/hanzvibes';
open(link);

console.log(chalk`{bold.green 

  ██╗███╗░░██╗░██████╗████████╗░█████╗░░░░░░██╗░██████╗
  ██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗░░░░░██║██╔════╝
  ██║██╔██╗██║╚█████╗░░░░██║░░░███████║░░░░░██║╚█████╗░
  ██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██╗░░██║░╚═══██╗
  ██║██║░╚███║██████╔╝░░░██║░░░██║░░██║╚█████╔╝██████╔╝
  ╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝░╚════╝░╚═════╝░ 

  - https://instagram.com/hanzvibes

  Last update : 8 January 2023
  Version : 3.0
  Buy me a Surya 12 : 089666205133 ( GOPAY, OVO, DANA, Shopeepay )                                 }\n`);
console.log(chalk`{bold   Komplain Elit, Donate Sulit}\n`)
console.log(chalk`{bold.yellow   An automation tools to help increase your}`);
console.log(chalk`{bold.yellow   Instagram engagement & impressions}`);
console.log("  —————————————————————————————————————————————\n".bold);
   
// API Limit Description
console.log(chalk`{bold.blue   What's new ?\n }`);
console.log("  - Auto Views Story");
console.log("  - Follow all user from hashtag");
console.log("  - Comment all post from hashtag");
console.log("  - Like all post from hashtag" , '\n');

// Alert
console.log("  —————————————————————————————".bold.red);
console.log("  use this bot responsibly, I am not responsible if".bold.red);
console.log("  your account is blocked by Instagram.".bold.red);
console.log("  ——————————————————————————————————————————\n".bold.red);
main();
