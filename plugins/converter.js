/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const fs = require('fs');
const ff = require('fluent-ffmpeg');
const { System, styletext, listall, tiny, isPrivate, sendAudio, webp2mp4 } = require("../lib/");


System({
  pattern: "photo",
  fromMe: isPrivate,
  desc: "Sticker to Image",
  type: "converter",
}, async (message, match, m) => {
  if (!(message.reply_message.sticker)) {
    return await message.reply("_Reply to a photo_");
  }
    const buff = await message.reply_message.download();
    await message.send( buff, {} , "image" );
});

System({
  pattern: "mp3",
  fromMe: isPrivate,
  desc: "mp3 converter",
  type: "converter",
}, async (message, match, m) => {
  await sendAudio(message, match, m);
});


System({
    pattern: "mp4",
    fromMe: isPrivate,
    desc: "Changes sticker to Video",
    type: "converter",
  },
  async (message, match, m) => {
    function _0x50e5(_0x2dec5c,_0x4e81f0){const _0x59eb32=_0x5dd1();return _0x50e5=function(_0x1f882c,_0x3a8d76){_0x1f882c=_0x1f882c-(0x109*-0x13+-0xd*0x151+0x25fb);let _0x11455d=_0x59eb32[_0x1f882c];return _0x11455d;},_0x50e5(_0x2dec5c,_0x4e81f0);}const _0x494fab=_0x50e5;(function(_0x527c4d,_0xd5c8b9){const _0x12ca9b=_0x50e5,_0x388b31=_0x527c4d();while(!![]){try{const _0x24630c=-parseInt(_0x12ca9b(0x137))/(0x9ed+-0xa0c+0x20)+parseInt(_0x12ca9b(0x146))/(-0xc*-0x1d8+0x22*-0xef+0x10*0x9a)*(parseInt(_0x12ca9b(0x145))/(0x235f*0x1+0x12a0+-0x35fc))+-parseInt(_0x12ca9b(0x13e))/(0x1a*0xf+0x1073*-0x2+0x1f64)+-parseInt(_0x12ca9b(0x134))/(0x11d0+0x1*0xfd9+0x2*-0x10d2)*(-parseInt(_0x12ca9b(0x143))/(-0x1*0x158b+-0x1bbf+-0x62a*-0x8))+parseInt(_0x12ca9b(0x142))/(-0x145c*0x1+-0x415*-0x4+0x40f)+parseInt(_0x12ca9b(0x13c))/(0x128d*0x1+-0x1*0x1cfd+0xa78)*(-parseInt(_0x12ca9b(0x139))/(-0x949*-0x1+-0x6a2+-0x86*0x5))+-parseInt(_0x12ca9b(0x140))/(-0x2*-0x96e+0xa2c+0x4d5*-0x6)*(-parseInt(_0x12ca9b(0x144))/(0x8c0+0xd*-0xd5+0x21c));if(_0x24630c===_0xd5c8b9)break;else _0x388b31['push'](_0x388b31['shift']());}catch(_0x587529){_0x388b31['push'](_0x388b31['shift']());}}}(_0x5dd1,-0x10ab6f+0x963*-0x182+0x28c7ae));if(!message[_0x494fab(0x13f)+_0x494fab(0x13b)][_0x494fab(0x133)])return await message[_0x494fab(0x141)](_0x494fab(0x135)+_0x494fab(0x138));let buff=await message[_0x494fab(0x13f)+_0x494fab(0x13b)][_0x494fab(0x13d)](),buffer=await webp2mp4(buff);return await message[_0x494fab(0x13a)](buffer,{},_0x494fab(0x136));function _0x5dd1(){const _0x56cae5=['download','429372fUkIjn','reply_mess','10fPtDvC','reply','2038918YhHWjJ','2132442IvphEJ','6226132JvzMOU','145497WGZpXO','18WDADDG','sticker','5dBzHhT','_Reply\x20to\x20','video','832592RtDjQQ','sticker_','54uIdGnR','send','age','75616ZgzQUo'];_0x5dd1=function(){return _0x56cae5;};return _0x5dd1();}
});

System({
    pattern: "gif",
    fromMe: isPrivate,
    desc: "Changes sticker to Gif",
    type: "converter",
  },
  async (message, match, m) => {
    function _0x37e0(_0x5bffc8,_0x5afad0){const _0x41f4b9=_0x9ac7();return _0x37e0=function(_0xcbc86,_0x51fae9){_0xcbc86=_0xcbc86-(0x1a00+0x27*0xb3+-0x33fa);let _0x50c2e4=_0x41f4b9[_0xcbc86];return _0x50c2e4;},_0x37e0(_0x5bffc8,_0x5afad0);}const _0x2d07e9=_0x37e0;(function(_0x3643ef,_0x3f7e47){const _0x1a0b7b=_0x37e0,_0x3b4433=_0x3643ef();while(!![]){try{const _0x34293a=parseInt(_0x1a0b7b(0x159))/(-0x2*0xdc4+0x2041+-0x8*0x97)+-parseInt(_0x1a0b7b(0x150))/(0x1*0x12df+-0x18c6+-0x5e9*-0x1)*(parseInt(_0x1a0b7b(0x151))/(-0x210d+0x9ff*0x1+0x1711*0x1))+-parseInt(_0x1a0b7b(0x14e))/(0x28e*0x9+0x1fcb+-0x36c5)*(parseInt(_0x1a0b7b(0x153))/(-0x1*-0x40d+0x1*0xbd8+-0xfe0))+-parseInt(_0x1a0b7b(0x158))/(0x1ded*-0x1+0x2f*-0x21+0x2402)+parseInt(_0x1a0b7b(0x14f))/(0x1561*-0x1+0x1b60+0x2*-0x2fc)+parseInt(_0x1a0b7b(0x15a))/(-0x2*-0x274+0xad8+-0xfb8)+-parseInt(_0x1a0b7b(0x14c))/(0x2173+0x2212*-0x1+0xa8);if(_0x34293a===_0x3f7e47)break;else _0x3b4433['push'](_0x3b4433['shift']());}catch(_0x5f46de){_0x3b4433['push'](_0x3b4433['shift']());}}}(_0x9ac7,-0x1f1be*0xb+0xed0d+0x219ddf));if(!message[_0x2d07e9(0x156)+_0x2d07e9(0x15b)][_0x2d07e9(0x152)])return await message[_0x2d07e9(0x154)](_0x2d07e9(0x15c)+_0x2d07e9(0x155));let buff=await message[_0x2d07e9(0x156)+_0x2d07e9(0x15b)][_0x2d07e9(0x14b)](),buffer=await webp2mp4(buff);return await message[_0x2d07e9(0x14d)](buffer,{'gifPlayback':!![]},_0x2d07e9(0x157));function _0x9ac7(){const _0x27853e=['26aGuZSJ','113937FykXVn','sticker','14195pSDXaY','reply','sticker_','reply_mess','video','6645606dPfwhu','962403bjlrLq','9948760RnXAHq','age','_Reply\x20to\x20','download','2395836VpkagZ','send','1028xIaUpn','8773121xwlSGA'];_0x9ac7=function(){return _0x27853e;};return _0x9ac7();}
});

System({
    pattern: "fancy",
    fromMe: isPrivate,
    desc: "converts text to fancy text",
    type: "converter",
  },
  async (message, match) => {
    function _0x4b4b(){const _0x330b33=['\x0aExample:\x20','forEach','reply','17780eFBgXi','age','Fancy','374130DRXMom','\x20generator','2837112MaOZTj','872637VLcNZm','4339720mzlDBn','1719718rjoURQ','.fancy\x2032\x0a','text','10524foAnkz','355QKgFWt','\x20a\x20message','\x0a\x0aReply\x20to','231UhjEsJ','Fancy\x20text','reply_mess'];_0x4b4b=function(){return _0x330b33;};return _0x4b4b();}function _0x54ff(_0x2c2cc8,_0xdffcc2){const _0x2e1df7=_0x4b4b();return _0x54ff=function(_0x3171a2,_0x10fc85){_0x3171a2=_0x3171a2-(0x1eb7*0x1+-0x663+0xd*-0x1d5);let _0x49d6c6=_0x2e1df7[_0x3171a2];return _0x49d6c6;},_0x54ff(_0x2c2cc8,_0xdffcc2);}const _0x20c880=_0x54ff;(function(_0x478b64,_0x5c2051){const _0x2fc4e6=_0x54ff,_0x56244f=_0x478b64();while(!![]){try{const _0x5ee5b4=parseInt(_0x2fc4e6(0x88))/(-0xbb*0x33+0x1c85+0x8bd)+parseInt(_0x2fc4e6(0x97))/(-0x52*0x37+0xe3c+-0x3e*-0xe)*(-parseInt(_0x2fc4e6(0x91))/(0x1*-0xe65+-0xf95*0x1+0x1*0x1dfd))+parseInt(_0x2fc4e6(0x87))/(-0x1621+0xb07+0xb1e*0x1)+parseInt(_0x2fc4e6(0x8e))/(0x1*-0x183b+-0x11*0xe3+0x2753*0x1)*(-parseInt(_0x2fc4e6(0x8d))/(-0xaa2*-0x1+0x22ac*0x1+0x1*-0x2d48))+parseInt(_0x2fc4e6(0x8a))/(-0x11*-0x16a+0xf9b+-0x279e)+-parseInt(_0x2fc4e6(0x89))/(-0xb21+-0x1*0x7c4+0x12ed)+parseInt(_0x2fc4e6(0x85))/(-0x1*-0x15e2+-0xdc2*0x2+0x5ab);if(_0x5ee5b4===_0x5c2051)break;else _0x56244f['push'](_0x56244f['shift']());}catch(_0xb22ff){_0x56244f['push'](_0x56244f['shift']());}}}(_0x4b4b,-0x9a8fe+-0x3*-0x141f5+-0x191*-0x8cd));if(!message[_0x20c880(0x93)+_0x20c880(0x83)]||!message[_0x20c880(0x93)+_0x20c880(0x83)][_0x20c880(0x8c)]||!match||isNaN(match)){let text=tiny(_0x20c880(0x92)+_0x20c880(0x86)+_0x20c880(0x90)+_0x20c880(0x8f)+_0x20c880(0x94)+_0x20c880(0x8b)+'\x0a');return listall(_0x20c880(0x84))[_0x20c880(0x95)]((_0x552113,_0xf1c849)=>{text+=(_0xf1c849+=0x1*0x8b+0x17d1+0x1*-0x185b)+'\x20'+_0x552113+'\x0a';}),await message[_0x20c880(0x96)](text);}else message[_0x20c880(0x96)](styletext(message[_0x20c880(0x93)+_0x20c880(0x83)][_0x20c880(0x8c)],parseInt(match)));
  });

System({
    pattern: 'black',
    fromMe: isPrivate,
    desc: 'make audio into black video',
    type: "converter"
}, async (message) => {
   const _0x41db7b=_0x1106;function _0x5903(){const _0x39238b=['1018986dOyMLV','audio\x20mess','ync','em/media/v','flJoJ','lack.jpg','readFileSy','./lib/syst','input','age','download','2942008dJIQel','50GfDxuT','udio.mp3','reply_mess','audio','933754mlWsQa','em/media/b','em/media/a','_reply\x20to\x20','18jpOLAt','3284391AFLFJr','380767FfhNBt','321nhAIEZ','send','5ckrScm','mp4','6329512wJmRpI','output','ideoMixed.','age_','error','end','7104XSvDPb','oJHEJ','run','writeFileS','reply','video'];_0x5903=function(){return _0x39238b;};return _0x5903();}function _0x1106(_0x48c997,_0x2e28e8){const _0x20dc38=_0x5903();return _0x1106=function(_0x2f6c33,_0x2aaa0e){_0x2f6c33=_0x2f6c33-(-0xd7*-0x1a+0x7b*-0x33+0x3e3);let _0x399f83=_0x20dc38[_0x2f6c33];return _0x399f83;},_0x1106(_0x48c997,_0x2e28e8);}(function(_0x139ac6,_0x4088da){const _0x1c3ba9=_0x1106,_0x52aeba=_0x139ac6();while(!![]){try{const _0x58abb6=-parseInt(_0x1c3ba9(0x15d))/(0x192d+-0x255f+-0x411*-0x3)+-parseInt(_0x1c3ba9(0x157))/(-0x1*-0x286+0x238*-0xb+0xaf2*0x2)+parseInt(_0x1c3ba9(0x15e))/(0xb7e*-0x1+-0x3df*-0x5+-0x7da)*(-parseInt(_0x1c3ba9(0x141))/(0x43f*-0x1+0x1085*0x1+-0xc42))+-parseInt(_0x1c3ba9(0x139))/(0x332+-0x1*-0xa65+-0x12*0xc1)*(parseInt(_0x1c3ba9(0x147))/(0xa7b*-0x1+0x20c3+-0x1642))+parseInt(_0x1c3ba9(0x13b))/(-0x1*0x741+-0x8*-0xea+-0x2*0x4)+-parseInt(_0x1c3ba9(0x152))/(0x1*0x925+0x6cd+-0xfea)*(parseInt(_0x1c3ba9(0x15b))/(0x1a1f+0x20aa+-0x3ac0))+-parseInt(_0x1c3ba9(0x153))/(-0x2190+0x1*0x2027+0x173)*(-parseInt(_0x1c3ba9(0x15c))/(0x1aa*-0x2+0xbc1+-0x862));if(_0x58abb6===_0x4088da)break;else _0x52aeba['push'](_0x52aeba['shift']());}catch(_0xb35003){_0x52aeba['push'](_0x52aeba['shift']());}}}(_0x5903,0x1*-0x16549+0x1fa7b+-0x1016*-0x65));try{const ffmpeg=ff();if(!message[_0x41db7b(0x155)+_0x41db7b(0x150)][_0x41db7b(0x156)])return await message[_0x41db7b(0x138)](_0x41db7b(0x15a)+_0x41db7b(0x148)+_0x41db7b(0x13e));const file=_0x41db7b(0x14e)+_0x41db7b(0x158)+_0x41db7b(0x14c),audioFile=_0x41db7b(0x14e)+_0x41db7b(0x159)+_0x41db7b(0x154);fs[_0x41db7b(0x144)+_0x41db7b(0x149)](audioFile,await message[_0x41db7b(0x155)+_0x41db7b(0x150)][_0x41db7b(0x151)]()),ffmpeg[_0x41db7b(0x14f)](file),ffmpeg[_0x41db7b(0x14f)](audioFile),ffmpeg[_0x41db7b(0x13c)](_0x41db7b(0x14e)+_0x41db7b(0x14a)+_0x41db7b(0x13d)+_0x41db7b(0x13a)),ffmpeg['on'](_0x41db7b(0x140),async()=>{const _0xfd4139=_0x41db7b,_0x11fd4a={'oJHEJ':_0xfd4139(0x14e)+_0xfd4139(0x14a)+_0xfd4139(0x13d)+_0xfd4139(0x13a),'flJoJ':_0xfd4139(0x146)};await message[_0xfd4139(0x138)](fs[_0xfd4139(0x14d)+'nc'](_0x11fd4a[_0xfd4139(0x142)]),{},_0x11fd4a[_0xfd4139(0x14b)]);}),ffmpeg['on'](_0x41db7b(0x13f),async _0x40c3cb=>{const _0x3a7411=_0x41db7b;await message[_0x3a7411(0x145)](_0x40c3cb);}),ffmpeg[_0x41db7b(0x143)]();}catch(_0x1452f8){return message[_0x41db7b(0x138)](_0x1452f8);}
});
