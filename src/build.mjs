import { writeFile } from "fs";
import { promisify } from "util";
import colors from "./colors.mjs";
import theme from "./theme.mjs";

const promisifiedWriteFile = promisify(writeFile);
const EXPORT_PATH = './themes/borealis.json';

const buildTheme = async path => {
   const themeWithColors = theme(colors);

   try {
      await promisifiedWriteFile(path, JSON.stringify(themeWithColors));
      console.log('Theme built.');
   } catch (e) {
      console.log(e);
   }
};

buildTheme(EXPORT_PATH);
