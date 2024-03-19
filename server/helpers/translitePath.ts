import CyrillicToTranslit from "cyrillic-to-translit-js";
const translit = new (CyrillicToTranslit as any)();

const translitePath = (name: string, spiltter = "_") => {
  return translit.transform(name, spiltter).toLowerCase();
};

export default translitePath;
