// ==UserScript==
// @name          سكربت ابتسامات من اخوكم اسامه
// @namespace      قلعه الجحيم
// @description    3C1(* 'D'(*3'E'* EF '.HCE '3'EG
// @include        http://*.tribalwars.ae/game.php
// @include        http://www.tribalwars.ae/redir.php*
// @include        *
// @include        http://*.tribalwars.ae/forum.php*
// @exclude        http://forum.tribalwars.*/*
// ==/UserScript==

// {$ dsScript $}
// version = 1.8.1
// author = (c) C1B1SE
// clients = firefox , opera
// areas = .de
// worlds = all
// premium = works
// description[de] = Fügt ein Auswahlfeld im Internen Forum hinzu, damit man Smilies ausw?hlen kann, au?erdem die BB-Codes für Berichte.
// screenshot[0] = http://c1b1se.c1.funpic.de/newhp_userscripts_screens/ds.smilies_bb-codes_0.png
// {$ /dsScript $}

/*
DS Smilies-BB-Codes-List

(c) by C1B1SE
         info@c1b1.de
         http://c1b1.de

You may change string values if it's necessary for your language area.
Do not republish, use in other scripts, change or reproduce this code nor a part of this code without permission from C1B1SE.

This script may be forbidden in some language areas.
Please look in the respective forum for further information!
I won't take responsibility.
*/

var smilies = new Array(
'[img]http://smiles.mmuz.com/data/17/fi_av_59.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_13.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av__3.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_56.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_10.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av__9.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av__2.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_61.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_15.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_5F25.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_20.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_28.gif[/img]',
'[img]http://smiles.mmuz.com/data/22/36_1_461.gif[/img]',
'[img]http://smiles.mmuz.com/data/22/36_1_261.gif[/img]',
'[img]http://smiles.mmuz.com/data/22/36_11_14.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_57.gif[/img]',
'[img]http://smiles.mmuz.com/data/22/36_1_381.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_29.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_14.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_11.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_49.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_27.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_46.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_65.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_41.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_48.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_53.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_34.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av__8.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_63.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_33.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_58.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_52.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_30.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_35.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_12.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_37.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_39.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_17.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_45.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_50.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_62.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_68.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_sm.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av__1.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_24.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_64.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_66.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av__6.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_60.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_67.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_55.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_26.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_19.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av__5.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_42.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_51.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_16.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_21.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av__4.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_18.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_44.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_47.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_31.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_32.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_5F40.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_36.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_23.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_22.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av__7.gif[/img]',
'[img]http://smiles.mmuz.com/data/17/fi_av_38.gif[/img]',
'[img]http://smiles.mmuz.com/data/23/011.gif[/img]',
'[img]http://smiles.mmuz.com/data/23/008.gif[/img]',
'[img]http://smiles.mmuz.com/data/23/002.gif[/img]',
'[img]http://smiles.mmuz.com/data/23/000.gif[/img]',
'[img]http://smiles.mmuz.com/data/23/007.gif[/img]',
'[img]http://smiles.mmuz.com/data/23/009.gif[/img]',
'[img]http://smiles.mmuz.com/data/23/005.gif[/img]',
'[img]http://smiles.mmuz.com/data/23/001.gif[/img]',
'[img]http://smiles.mmuz.com/data/23/004.gif[/img]',
'[img]http://smiles.mmuz.com/data/23/010.gif[/img]',
'[img]http://smiles.mmuz.com/data/27/cadeauro.gif[/img]',
'[img]http://smiles.mmuz.com/data/21/united_a.gif[/img]',
'[img]http://smiles.mmuz.com/data/21/syria.gif[/img]',
'[img]http://smiles.mmuz.com/data/21/tunisia.gif[/img]',
'[img]http://smiles.mmuz.com/data/21/sudan.gif[/img]',
'[img]http://smiles.mmuz.com/data/21/saudi_ar.gif[/img]',
'[img]http://smiles.mmuz.com/data/21/qatar.gif[/img]',
'[img]http://smiles.mmuz.com/data/21/palestin.gif[/img]',
'[img]http://smiles.mmuz.com/data/21/kuwait.gif[/img]',
'[img]http://smiles.mmuz.com/data/21/kuwait.gif[/img]',
'[img]http://smiles.mmuz.com/data/21/lebanon.gif[/img]',
'[img]http://smiles.mmuz.com/data/21/bahrain.gif[/img]',
'[img]http://smiles.mmuz.com/data/6/112.gif[/img]',
'ضع هنا رابط صورة الابتسامه',
'http://forum.die-staemme.de/images/phpbb_smilies/icon_biggrin.gif',
'http://forum.die-staemme.de/images/phpbb_smilies/icon_smile.gif',
'http://forum.die-staemme.de/images/phpbb_smilies/icon_wink.gif',
'http://forum.die-staemme.de/images/phpbb_smilies/icon_cool.gif',
'http://forum.die-staemme.de/images/phpbb_smilies/icon_razz.gif',
'http://forum.die-staemme.de/images/phpbb_smilies/icon_eek.gif',
'http://forum.die-staemme.de/images/phpbb_smilies/icon_surprised.gif',
'http://forum.die-staemme.de/images/phpbb_smilies/icon_twisted.gif',
'http://forum.die-staemme.de/images/phpbb_smilies/icon_evil.gif',
'http://forum.die-staemme.de/images/phpbb_smilies/icon_confused.gif',
'http://forum.die-staemme.de/images/phpbb_smilies/icon_neutral.gif',
'http://forum.die-staemme.de/images/phpbb_smilies/icon_sad.gif',
'http://forum.die-staemme.de/images/phpbb_smilies/icon_cry.gif',
'http://forum.die-staemme.de/images/phpbb_smilies/icon_mrgreen.gif',
'http://twbbcodes.pytalhost.com/images/smileys/em16.gif',
'http://twbbcodes.pytalhost.com/images/smileys/em17.gif',
'http://twbbcodes.pytalhost.com/images/smileys/em18.gif',
'http://twbbcodes.pytalhost.com/images/smileys/em19.gif',
'http://twbbcodes.pytalhost.com/images/smileys/em1500.gif',
'http://twbbcodes.pytalhost.com/images/smileys/em2100.gif',
'http://twbbcodes.pytalhost.com/images/smileys/em2200.gif',
'http://twbbcodes.pytalhost.com/images/smileys/em2300.gif',
'http://twbbcodes.pytalhost.com/images/smileys/em2400.gif',
'http://twbbcodes.pytalhost.com/images/smileys/em2700.gif',
'http://twbbcodes.pytalhost.com/images/smileys/em2700.gif',
'http://twbbcodes.pytalhost.com/images/smileys/em2900.gif',
'http://twbbcodes.pytalhost.com/images/smileys/em3000.gif',
'http://twbbcodes.pytalhost.com/images/smileys/em3300.gif',
'http://twbbcodes.pytalhost.com/images/smileys/em3400.gif',
'http://plapl.com/images/icons/icon1.gif',
'http://plapl.com/images/icons/s14.gif',
'http://plapl.com/images/icons/s18.gif',
'http://plapl.com/images/icons/s1.gif',
'http://plapl.com/images/icons/s7.gif',
'http://plapl.com/images/icons/s15.gif',
'http://plapl.com/images/icons/s19.gif',
'http://plapl.com/images/icons/s10.gif',
'http://plapl.com/images/icons/s16.gif',
'http://ae1.tribalwars.ae/graphic/unit/unit_spear.png',
'http://ae1.tribalwars.ae/graphic/unit/unit_sword.png',
'http://ae1.tribalwars.ae/graphic/unit/unit_axe.png',
'http://ae1.tribalwars.ae/graphic/unit/unit_archer.png',
'http://ae1.tribalwars.ae/graphic/unit/unit_spy.png',
'http://ae1.tribalwars.ae/graphic/unit/unit_light.png',
'http://ae1.tribalwars.ae/graphic/unit/unit_marcher.png',
'http://ae1.tribalwars.ae/graphic/unit/unit_heavy.png',
'http://ae1.tribalwars.ae/graphic/unit/unit_ram.png',
'http://ae1.tribalwars.ae/graphic/unit/unit_catapult.png',
'http://ae1.tribalwars.ae/graphic/unit/unit_knight.png',
'http://ae1.tribalwars.ae/graphic/unit/unit_snob.png',
'http://ae1.tribalwars.ae/graphic/buildings/barracks.png?1',
'http://ae1.tribalwars.ae/graphic/buildings/stable.png?1',
'http://ae1.tribalwars.ae/graphic/buildings/main.png?1',
'http://ae1.tribalwars.ae/graphic/buildings/farm.png?1',
'http://ae1.tribalwars.ae/graphic/buildings/garage.png?1',
'http://ae1.tribalwars.ae/graphic/buildings/snob.png?1',
'http://ae1.tribalwars.ae/graphic/buildings/smith.png?1',
'http://ae1.tribalwars.ae/graphic/buildings/place.png?1',
'http://ae1.tribalwars.ae/graphic/buildings/statue.png?1',
'http://ae1.tribalwars.ae/graphic/buildings/market.png?1',
'http://ae1.tribalwars.ae/graphic/buildings/wood.png?1',
'http://ae1.tribalwars.ae/graphic/buildings/stone.png?1',
'http://ae1.tribalwars.ae/graphic/buildings/iron.png?1',
'http://ae1.tribalwars.ae/graphic/buildings/storage.png?1',
'http://ae1.tribalwars.ae/graphic/buildings/wall.png?1',
'http://smilles.m7shsh.com/data/media/18/00db9337ef155724e7660a845faa4d96.gif',
'http://smilles.m7shsh.com/data/media/18/010.gif',
'http://smilles.m7shsh.com/data/media/18/85e442fc844ccce495d530dcae90afd6.gif',
'http://smilles.m7shsh.com/data/media/18/a69a75274604c24dc250db92cdeaa6b9.gif',
'http://smilles.m7shsh.com/data/media/18/e18e0b18f60eec83054c40305e5a1088.gif',
'http://smilles.m7shsh.com/data/media/18/6a26d86970d6bf5a0e8233f7544ef269.gif',
'http://smilles.m7shsh.com/data/media/8/A6rb.Com_75.gif',
'http://smilles.m7shsh.com/data/media/8/A6rb.Com_76.gif',
'http://smilles.m7shsh.com/data/media/8/A6rb.Com_74.gif',
'http://smilles.m7shsh.com/data/media/8/A6rb.Com_67.gif',
'http://smilles.m7shsh.com/data/media/8/A6rb.Com_65.gif',
'http://smilles.m7shsh.com/data/media/8/A6rb.Com_66.gif',
'http://smilles.m7shsh.com/data/media/8/A6rb.Com_46.gif',
'http://smilles.m7shsh.com/data/media/8/A6rb.Com_97.gif',
'http://smilles.m7shsh.com/data/media/8/A6rb.Com_94.gif',
'http://smilles.m7shsh.com/data/media/8/A6rb.Com_87.gif',
'http://smilles.m7shsh.com/data/media/8/A6rb.Com_86.gif';
'http://www.m5zn.com/uploads/2010/8/8/photo/gif/0808100108503im2b3q7s3y4m7.gif',
'http://www.m5zn.com/uploads/2010/8/8/photo/gif/0808100108509ly1jsaoh6y15zlxb.gif',


var icon_smilies = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAACXBIWXMAAAsTAAALEwEAmpwYAAACoFBM'+',
'VEUAAACvsrfb0bHNwJS5ur7Zz7DJvJSusrbe1LStsbbKvJG4sAuyqgrVzK7c0rKvpwrQxJ7IuI/TyKKU'+
'jQfDs411bwns4Rm0rArf0xK0rAu3rwvNwZvFvA66si7e1J706Rje1LDRyJ7VzBHKwA7c0RTYzqC7snmz'+
'qgv79Brb0q779yva0Jnb0RHw6l9sZwmwqA3CuRCYkBfb0bDe1bDs53Lt5nP26xf78xweHQW2rXTXzRGn'+
'oA0ZGASRigyxqBCooAiRiiLNxJzc07Lw6lz68xv16Rbu4hXUyRMKCgOlng3SyRGbkwze1KyEfgm4sAys'+
'sLXf1a6im1359TTWzJ3y6y6fmA/r4BTm2xSnnhAjIgWyqg7OxQ+jmw0gHgWVjgu2rgyelQbd0hWBew7V'+
'yovr3xTn3BPJvxCSiw26sV/LwA67sg7k3Jr49DP89BqwqAqlnQeBexjy5xbMwYLZzhKwpxCclA/WzBHS'+
'yBHOxA/KwQ7GvA7Btw28tAzj2pqupwv17DKFfwiBexDJvxbJvIgKCQKspA+FfwzQxhDMww7Jvw7FvA3B'+
'uA28swzp3RSxqAppYwmHgAeFfRyimiTMv5HOwZfKu5K3rTCKhAy9tA7Hvg3DuQ3Atw28sw2zqgqYjwh0'+
'bgqXkAaPhzbGvRmzqVa1rAqblAqPiQ2/tg6+tgy6sguzrAq1rBGjmguTjAmJgQ2roWrGuYaclCOIggl/'+
'eQuhmgqvpgqRiQlybAuOiAuJgjHFuIu4rHOUjB2mnQmakgt4cgl1cAp9dgtzbQp2cAmWjwiTjAiHfyK5'+
'rn+7r3mSii6Rig+YkQaXjweVjQiUjQaTjAeIgRKRijy8sIGMhDLGuo24rXeimVGTizeNhS6TiziimVW3'+
'rHrIu5CGgAqupwy1rQpMLoSeAAAAAXRSTlMAQObYZgAAAWlJREFUeF5VzFOzK1EQgNG9xzOxk2Pbtm3b'+
'tm1b17Zt27b9V85k8nLzvXTXqq4GACP/C0JIYgBAAY7ohQswAHGKK8nE0dqe23AaQISdZsPOo0qrCeM6'+
'cyFFIakcpnln+Jouqy0sbTfaeFAId+np5WBXXhHr5Obiynf3F+qwsanZJ8TvVEBgUDAvNCxci3hEZFR0'+
'THZcfELiVHKKSJaOsyjNzGrPyc3LLygsKi4pFZV9krIorlRWVatrao3qG/78/dfS2iYmATTs6Ozq7unt'+
'6x8YHDIYUYyNG0IAicmD0zOzc/MLi0s8zcrq2gaCRWbTVqNt23fs3LWbp9mzd9/+AwzJInro8JGjx46f'+
'MDipOq04c/YcQ2vx/AX+xUuXVfwrV69dl924qUP01u07d+/df/Dw0eMnT5+hDOQQff7i5avXb96+e//h'+
'I4pqfxKb2T5/+frt+4+fv36zO8GiXLJFL4kcAwCjSb1oDKwDMvtwyB3q78QAAAAASUVORK5CYII=';

var icon_report_direct = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYFBMVEUAAACvsrebjHDXy7f5+Pausra0po2nmYC+s5qL'+
'e125ur7QxJ6WDArKvJHRv6rDEBCtsbbTyKLNwZvRgHLJvJTZl4rn3Na2Z1rVzK7t6OLIuI/Ds43Zz7DKu5Lb0bGssLVAcwUHAAAAAXRSTlMAQObYZgAAAKVJ'+
'REFUeF5tzdcOwzAIQFGG98ruHv//l8WtFNVyzhtXIACC/oOIOgDgpRMAH50R8NV5H8V2k501htvoiJViI3F/tJFTSl3Z1kdTxfY8DCdJhuwkMcboyJ7UNgzF'+
'EJUYNeA8k1HiuqREZRYIuK6e5FC2UiprJTFncp6t9+6cllzpb/SWvMl5W35xrNGRJ5aBOe+xg0dRy/eOxPvt2bjdA0AYdWMM8AFB7hjReYdZRgAAAABJRU5E'+
'rkJggg==';

var icon_report_link = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAACXBIWXMAAAsTAAALEwEAmpwYAAABIFBMVEUAAACbjHCvsrfJvJT5+PbXy7e0po2+s5qLe12n'+
'mYDKvJG5ur6tsbausrbb0bHRv6qWDArZz7DQxJ7DEBDRgHLZl4rNwZvn3NbTyKLDs43IuI+2Z1rt6OLVzK7Ku5KssLV1wtydqZxgosGVqKVXsVBq0eyBqZVf'+
'mJ26t5ZcndFtgnQsoD+J7vjAvpaKnomnqYlsoGJFWnEob3E8nbJPw+RQxeZKqdpIf8hSf5hsvENKUnkkR38xcaU2iMI5ic09ecc4Wbo1W48+hUxobH4lNoQf'+
'ZVohgFAudIAxUaksQagrQZo/WoSimotUX4cnY1IUfRwXgCglcl80Xpc8YKN1gZGrpJFqeIc/hVcymURAlXFVi7CCnai2r5JhyuhVlc9biqeITlZjAAAAAXRS'+
'TlMAQObYZgAAAPNJREFUeF5lzeNyBEEUgNG+bYy1jG3btu33f4t0MqnJbO3389QFQsYthTF2DUK4oy2DcNiWg7BXxITinHleVwkFMEoZ97z/yRQEpbTJVIFM'+
'NeK4YolDjmEoQFVoGsc+B/DzR1Xg1NZMggD86k8WIwl20U4Fgd/XMxxFkYtwBkIyJaVoBEl37+BElmGECUgFkk/1p0kyMDI0SYhFLUAC06NjjI1/fH5Na+1a'+
'zJuZnZtfWFxaXtHaKXB1bX1jc2t7Z7eMe/sHh0fHJ6dnWuMCzy8ur65vbu/uf2+Svx4en55fXt/eCbFYq3e2VK8ZhIzjtuQY9A0LLSCs0XdPPQAAAABJRU5E'+
'rkJggg==';


if(document.getElementById('message'))
  {
  // Smilies' Box
  var table = document.createElement('table');
  table.setAttribute('id','bb_smilies');
  table.setAttribute('style','display:none; clear:both; position:absolute; z-index:100; border: 2px solid #804000; background:#efe6c9 no-repeat url(http://c1b1.de/images/gm_logo.png) bottom right; top: 24px; left: 200px; ');

  var tr = document.createElement('tr');

  var td = document.createElement('td');
  td.setAttribute('style','padding:2px;');

  for(var i = 0; i < smilies.length; i++)
    {
    var img = new Image();
    img.setAttribute('src',smilies[i]);
    img.setAttribute('style','vertical-align:middle; ');
    img.setAttribute('alt','[img]'+smilies[i]+'[/img]');

    var a = document.createElement('a');
    a.setAttribute('href','#');
    a.setAttribute('style','vertical-align:middle; ');
    a.addEventListener('click',function() {
      insert(this.title,'');
      toggle('bb_smilies');
      return false;
    },false);
    a.setAttribute('title','[img]'+smilies[i]+'[/img]');
    a.appendChild(img);

    td.appendChild(a);
    }

  tr.appendChild(td);
  table.appendChild(tr);
  document.getElementsByTagName('form')[0].getElementsByTagName('div')[0].appendChild(table);

  // Smilies
  var a = document.createElement('a');
  a.setAttribute('title','Smilies');
  a.setAttribute('href','#');
  a.addEventListener('click',function() {
    toggle('bb_smilies');
    return false;
  },false);

  var div = document.createElement('div');
  div.setAttribute('style','float:left; background:url('+icon_smilies+') no-repeat 0px 0px; padding-left:0px; padding-bottom:0px; margin-right:4px; width:20px; height:20px; ');

  a.appendChild(div);

  document.getElementsByTagName('form')[0].getElementsByTagName('div')[0].insertBefore(a,document.getElementById('bb_sizes'));

  // Report Direct
  var a = document.createElement('a');
  a.setAttribute('title','Bericht verlinken');
  a.setAttribute('href','#');
  a.addEventListener('click',function() {
    var url = prompt('اضهار التقرير على شكل ربط:','');
    if(url != '')
      {
      if(url.indexOf('=') != -1)
        {
        url = url.split('=').pop();
        insert('[report]'+url+'[/report]','');
        }
      else
        {
        url = url.split('/').pop();
        insert('[report]'+url+'[/report]','');
        }
      }
    else
      insert('[report]','[/report]');
    return false;
  },false);

  var div = document.createElement('div');
  div.setAttribute('style','float:left; background:url('+icon_report_link+') no-repeat 0px 0px; padding-left:0px; padding-bottom:0px; margin-right:4px; width:20px; height:20px; ');

  a.appendChild(div);

  document.getElementsByTagName('form')[0].getElementsByTagName('div')[0].insertBefore(a,document.getElementById('bb_sizes'));

  // Report link
  var a = document.createElement('a');
  a.setAttribute('title','Bericht direkt anzeigen');
  a.setAttribute('href','#');
  a.addEventListener('click',function() {
    var url = prompt('أاضهار التقرير على شكل صوره  :','');
    if(url != '')
      {
      if(url.indexOf('=') != -1)
        {
        url = url.split('=').pop();
        insert('[report_display]'+url+'[/report_display]','');
        }
      else
        {
        url = url.split('/').pop();
        insert('[report_display]'+url+'[/report_display]','');
        }
      }
    else
      insert('[report_display]','[/report_display]');
    return false;
  },false);

  var div = document.createElement('div');
  div.setAttribute('style','float:left; background:url('+icon_report_direct+') no-repeat 0px 0px; padding-left:0px; padding-bottom:0px; margin-right:4px; width:20px; height:20px; ');

  a.appendChild(div);

  document.getElementsByTagName('form')[0].getElementsByTagName('div')[0].insertBefore(a,document.getElementById('bb_sizes'));

  }

function toggle(id)
  {
  var e = document.getElementById(id);
  if(e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'block';
  }

// Stolen Code:
// http://aktuell.de.selfhtml.org/artikel/javascript/bbcode/
function insert(aTag, eTag)
  {
  var input = document.getElementById('message');
  input.focus();
  if(typeof input.selectionStart != undefined)
    {
    var start = input.selectionStart;
    var end = input.selectionEnd;
    var insText = input.value.substring(start, end);
    input.value = input.value.substr(0,start) + aTag + insText + eTag + input.value.substr(end);
    var pos;
    if(insText.length == 0)
      pos = start + aTag.length;
    else
      pos = start + aTag.length + insText.length + eTag.length;
    input.selectionStart = pos;
    input.selectionEnd = pos;
    }
  }