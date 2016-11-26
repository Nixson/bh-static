var iframeContent='<style type="text/css">body,html{margin:0; font-family:"Arial"; font-size: 12px;} #cMil_action *, #cMil_stat *, #cMil_Offline_Rel *, #cMil_Online_Rel *, #cMil_Line * {margin: 0;padding: 0;border: 0;outline: 0;vertical-align: baseline;background: transparent;font-size: 100%;font-family: "Arial";font-weight: inherit;font-style: inherit; } #cMil_Online_Rel input, #cMil_Online_Rel textarea, #cMil_Offline_Rel input, #cMil_Offline_Rel textarea {outline: none;}#cMil_action, #cMil_stat {height: 132px;width: 264px;margin: 0;padding: 0;}#cMil_action p, #cMil_stat p {text-indent: 0;}#cMil_action_Rel, #cMil_stat_Rel {position: relative;height: 132px;width: 264px;overflow: hidden;margin: 0;padding: 0;}#cMil_action_tbg, #cMil_stat_tbg {position: absolute;z-index: 10002;width: 264px;height: 7px;top: 0px;left: 0px;}#cMil_action_bbg, #cMil_stat_bbg {position: absolute;z-index: 10002;width: 264px;height: 7px;top: 125px;left: 0px;}#cMil_action_rlbg, #cMil_stat_rlbg {position: absolute;z-index: 10002;width: 264px;height: 118px;top: 7px;left: 0px;}#cMil_action_cbg, #cMil_stat_cbg {position: absolute;width: 256px;height: 124px;margin: 0;padding: 0;top: 4px;left: 4px;cursor: pointer;z-index: 10000;}#cMil_action_Header, #cMil_stat_Header{display: block;width: 230px;height: 20px;position: absolute;z-index: 10001;top: 9px;left: 16px;background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAKdJREFUeNpi/P//PwM1ARMDlQELlCbJme4WbqpA6gUQf6GWC92BWIKaXlYBYh6cXoZ6wR2qkBhwB5t3kcMQFB47gfjozhO7zhMRhp6EDPwCtZVYoIxLPW3CEEuSIBSeBMMQDoBheJvkNISULqmVU+DpkloGwsOU3DDEGaaM0NKGoiIHmi4vgMKRWl5WhnmZNmFIZrhhDUOMvEymgV+gZpCdl3ECgAADANloMi8x01kqAAAAAElFTkSuQmCC") no-repeat center right;font-family: "Arial";font-size: 14px;line-height: 14px;color: #ffffff;text-decoration: none;text-shadow: 2px 2px 2px #161616;}#cMil_action_Content p {display: block;position: absolute;width: 190px;height: 60px;margin: 0;padding: 0;z-index: 10001;left: 65px;top: 30px;text-indent: 0;}#cMil_stat_Content p {display: block;position: absolute;width: 242px;height: 60px;margin: 0;padding: 0;z-index: 10001;left: 6px;top: 30px;text-indent: 0;}#cMil_action_Content p span {display: block;position: relative;margin: 7px 5px 5px 18px;padding: 0;overflow: hidden;width: 170px;height: 46px;font-family: "Arial";font-size: 12px;color: #161616;text-decoration: none;text-shadow: 2px 2px 2px #ffffff;line-height: 12px;}#cMil_stat_Content p span {display: block;position: relative;margin: 10px 5px 5px 19px;padding: 0;overflow: hidden;width: 218px;height: 50px;font-family: "Arial";font-size: 12px;color: #161616;text-decoration: none;text-shadow: 2px 2px 2px #ffffff;line-height: 13px;}#cMil_action_Content img, #cMil_stat_Content img {position: absolute;margin: 0;padding: 0;left: 10px;top: 34px;z-index: 10001;}#cMil_stat .cMil_Button, #cMil_action .cMil_Button {display: block;margin: 0;padding: 0;list-style: none;height: 29px;cursor: pointer;}#cMil_stat .cMil_Button li, #cMil_action .cMil_Button li {display: block;float: left;margin: 0;padding: 0 21px;list-style: none;height: 29px;font-family: "Arial";font-size: 12px;color: #161616;text-decoration: none;text-shadow: 2px 2px 2px #ffffff;line-height: 30px;background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAdCAYAAABrAQZpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAERJREFUeNpiYIACNiYgwQ0iBBl+//59nwlIPGT6////bxDBAJJgQGchCDQx/ErALEZGRlYmZmZmThBPiRlEgoh/AAEGAF9uLgpZg9fBAAAAAElFTkSuQmCC") repeat-x;} #cMil_stat .cMil_Button li.cMil_Button_left, #cMil_action .cMil_Button li.cMil_Button_left {width: 10px;padding: 0;background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAdCAYAAACT4f2eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASZJREFUeNrUlDFPhDAYhtsCd41xwCCbAz/BOOsfZGLyL7jwAxh1dLnERePkyHosYApS3w/ppdfjzjra5EmT8vb9vjYvZcxz8CNrB/AFgQABCOd5Wg8dIX2IwBqsZgK7Mp8dzsBlnue3dV0/dF331vf9B2GEYna5KIriDoJXpdQ75ue2bZ/Ao7EkewnO4VQkSXIzDEOttR6wptlczu5vFcfxNUTbcRx3IlPSPnGAIeH0aYtcRwPTP2PvcsUvl3/guCcmN9cxXNrtJTSiUz2yv/T4H0prH+FOZM9uj9riZI9G9IWIUXI4HPlSzCYRUE3TvHDOIyDsoNhCCqoqy/KecimEWIOIoI2B20tVVds0TTdZll1JKVMK8lTBOdjR39X7AfB+Ur4FGABZ1Z7BrmAfiAAAAABJRU5ErkJggg==") no-repeat;}#cMil_stat .cMil_Button li.cMil_Button_right, #cMil_action .cMil_Button li.cMil_Button_right {width: 10px;padding: 0;background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAdCAYAAACT4f2eAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QITCQ0tpbgX9wAAAThJREFUOMvVlDFOwzAUhr8Xp1CYgsTCyA04AJyjd2DuKTp1YmZj6dAjwMjIQmHqmLFUSHEbO3ksbuS0qZoVS1ak5Mv3fst+hp5DgDNAj8xmpMBl9KECfHjW8Q8GuAGGwWyAJEjaZufc0jm3tNYu8jx/mUwm98B1qJSGeFAUxWtRFG/W2veyLL+ttZ/T6fQBuALOdxUSVXWqWtZ1/eu9z40xZjQaPYYojTFVbRanquq99z9Zlt1FmYUoeAxvjDHDCDowEq2WCOo0dm0Ix4wH0CmQk2DXu6Tv6fm3pfd2qBsUkTij9snYOuH7RgHEe78JfdOASbuqJCIyWK/XH0AZwaQiMhCRHZgCZjabPQXQN6Ax5kJEqKqqXK1Wi/l8/jwej7+AbWwU4Dbq6TLMLeCi/kaArM8F0PtK+QNCtb7Ams4bJQAAAABJRU5ErkJggg==") no-repeat;}#cMil_AbuttonOk, #cMil_SbuttonOk {position: absolute;left: 12px;top: 95px;z-index: 10003;}#cMil_AbuttonNo, #cMil_SbuttonNo {position: absolute;left: 120px;top: 95px;z-index: 10003;}#cMil_Offline_Rel, #cMil_Online_Rel {position: relative;height: 351px;width: 264px;overflow: hidden;margin: 0;padding: 0;display:none;}#cMil_action, #cMil_stat{display:none;} #cMil_Offline_tbg, #cMil_Online_tbg {position: absolute;z-index: 10002;width: 264px;height: 7px;top: 0px;left: 0px;}#cMil_action_tbg, #cMil_stat_tbg, #cMil_Offline_tbg, #cMil_Online_tbg {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAAHCAYAAAD019OeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARlJREFUeNrsl79qhEAQh13/FXIgiIWlpDIEfIS7h7CSgPgMYh+SB7BKSG8buMb6irO9yupsfAghSSFJNpmwCZPAvcDe74Mfw+52C/MxI4y/iBMVAKAv8kQ17H9yoJgsEAUA5yGGD5bfNy4AEoKlpGGpmJADANpLgqTwrvKmKt1Jm00OJASnqqrLJEluXdddCyFW+D8ANDeElM/LsvTjON40TXPkE4SpDlTtuq6v0jTdBUFwiOP4oigKkwkEQRDNQj1OvU49T71PDlBbxLcbLLZaOGVZ3vu+/5Rl2V3f9y/DMECvAGgM9fg8z695nu+naXI8z7vuum77s2LwCcKitSIMw8e2bSW+DoDz2jSiKHr4csCGDQ7GpwADAIBSTdlkqcxJAAAAAElFTkSuQmCC") no-repeat;}#cMil_Offline_bbg, #cMil_Online_bbg {position: absolute;z-index: 10002;width: 264px;height: 7px;top: 344px;left: 0px;}#cMil_action_bbg, #cMil_stat_bbg, #cMil_Offline_bbg, #cMil_Online_bbg {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAAHCAYAAAD019OeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASZJREFUeNrsmDFqhEAUhue5GzdFCiGkkRSSRnOJXMEbiJAqpBNSh1zANq1XyYJ2FhZhLLSQNIZYWAgJZpPJCCMMC7mA/h/8PJhn9WA+3kiMMUPGlDlNkuTNcZyrpmk+GABgNQRBwNI0Pa+qqgnD8FIefcmMhur/yvyM47jvuu5OfkwYGQCrgtq2vZcOeJlcoJzANnNz2iRc1+WWZT3Xdb2zbfvV9/3PoigwOgCWuzlQ3/cXeZ4/DMMQcc5vsyx7l63DJAlScpiylTmJouja87wn0zRviOgMIwRg2Qghhun1UJblYxzHXB59K0EI0jcItVFsVd2oMzw3AFiwH+ZfDCoH7Ykh9MtPmiiMIzlAEgAsUw66JOaIuXd88emfCgBYhyj0yv4EGAA5LGVEj7O0eQAAAABJRU5ErkJggg==") no-repeat;}#cMil_Offline_rlbg, #cMil_Online_rlbg {position: absolute;z-index: 10002;width: 264px;height: 337px;top: 7px;left: 0px;}#cMil_action_rlbg, #cMil_stat_rlbg, #cMil_Offline_rlbg, #cMil_Online_rlbg {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAABCAYAAAAijjCDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADZJREFUeNpiYWBgYAZidiDmXLhw4RsgzcgwCkbBKBhRIC4uDkwvWrTof3x8vAiQ+R2IfwIEGAAsMAoIfuCeAQAAAABJRU5ErkJggg==") repeat-y;}#cMil_Offline_cbg, #cMil_Online_cbg {position: absolute;width: 256px;/*height: 343px;*/height: 89px;margin: 0;padding: 0;top: 4px;left: 4px;cursor: pointer;z-index: 10000;/*border: 1px solid #ffffff;*/}#cMil_Offline_cbbg {position: absolute;width: 256px;/*height: 343px;*/height: 210px;margin: 0;padding: 0;top: 93px;left: 4px;background: #ffffff;border-top: 1px solid #b2b2b2;border-bottom: 1px solid #d4d4d4;z-index: 10000;}#cMil_Online_cbbg {position: absolute;width: 256px;height: 212px;margin: 0;padding: 0;top: 93px;left: 4px;background: #ffffff;border-top: 1px solid #b2b2b2;border-bottom: 1px solid #d4d4d4;z-index: 10010;}#cMil_Offline_gbbg {position: absolute;width: 256px;height: 41px;margin: 0;padding: 0;top: 305px;left: 4px;border-top: 1px solid #ffffff;background: #f7f7f7;z-index: 10000;}#cMil_Online_gbbg {position: absolute;width: 256px;height: 141px;margin: 0;padding: 0;top: 205px;left: 4px;border-top: 1px solid #ffffff;background: #f7f7f7;z-index: 10000;/height: 142px;}#cMil_Offline_header, #cMil_Online_header, #cMil_FrameCover_header {position: absolute;z-index: 10004;width: 256px;height: 89px;left: 4px;top: 4px;cursor: move;}#cMil_Offline_header strong, #cMil_Online_header strong{display: block;position: absolute;top: 8px;left: 12px;width: 230px;height: 20px;font-family: "Arial";font-size: 14px;font-weight: 400;line-height: 16px;color: #ffffff;text-decoration: none;text-shadow: 0 1px 2px rgba(74,53,69,0.7);margin: 0;padding: 0;z-index: 10005;}#cMil_Offline_header img, #cMil_Online_header img#cMil_Online_headerClose {display: block;position: absolute;top: 6px;left: 226px;width: 20px;height: 20px;z-index: 10016;cursor: pointer;}#cMil_Online_header img#cMil_Online_headerSound {display: block;position: absolute;top: 6px;left: 206px;width: 20px;height: 20px;z-index: 10016;cursor: pointer;}#cMil_Online_header img#cMil_Online_headerManager {display: block;position: absolute;top: 30px;left: 4px;width: 54px;height: 54px;z-index: 10006;cursor: auto;}#cMil_Online_header p {display: block;position: absolute;margin: 0;padding: 0;top: 28px;left: 58px;width: 190px;height: 58px;z-index: 10005;text-indent: 0;}';
iframeContent+='#cMil_action_Content p, #cMil_Online_header p {background: url(data:image/png;base64,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) no-repeat;}#cMil_Online_header p span {display: block;position: absolute;margin: 0;padding: 0;top: 13px;left: 20px;width: 160px;height: 35px;overflow: hidden;z-index: 10005;font-family: "Arial";font-size: 11px;font-weight: 400;line-height: 11px;color: #000000;text-decoration: none;text-shadow: 1px 1px 1px #ffffff;}#cMil_Offline_header p {display: block;position: absolute;margin: 0;padding: 0;top: 28px;left: 6px;width: 242px;height: 58px;z-index: 10005;text-indent: 0;}#cMil_stat_Content p, #cMil_Offline_header p {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPIAAAA6CAYAAACK0wR9AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYNDR8WLgigsAAABkdJREFUeNrt3U9oFFcABvDvvZndnd1sIrJpYtgqCkrXllg8FEoFq9FLDoFgvfRQybHgQbCHVujFIuKl0oPQ2+acQiSnYvFgCwpBUytS29pYicGkjdY0ZrN/Z3deD/PGzK6xbvZfFvv9YFhX2d2DfPu9mX3vDUBERERERA0gmvB+lUczPofoVaV8j5VH04MsAEgAhu/RWCPQRFR9iEv6cHyPqhlB9kJqDg4OWhcuXNgfi8X2W5b1hmma3YZhdPH/hqh6xWIxZdv236lU6t7s7Oy1kZGRa3fu3MkCsAEU9fFcQ4s6QywBmDMzMwPxePwT0zRfA7CijzyAgv4mIaLqSAAmgCCAjnw+n52cnEweOHDgewA5naliZTuLOj8wsLCwMNLT03McwDKABR1gp2KoQETVF6SXLwkgACB669atb/fu3fsNgIwOtO3LGYw6Pixw9+7d/Vu3bv0cwBMAc5VvTkR1nS8rnadib29vIpFIPBkfH/9Lj3KVP2uy1jbet29faMeOHZ/pYbT/zYmocWEuAbCFELmhoaEPuru7uwBYevgt62lkAcC8cuXKoVgsNgRgVjcxETVRMBjs3LJly9LExIQ3+vWuZNfUyAKA3Lx587tYvajFJiZqbjM7AOz+/v6EbuSAzq+ArudagmxEIpG3lFJphpiodcPseDz+Otwr2gGsztWovZFN0+yBe/WMQSZqTZBVZ2dnly/Esu4gG4YRhfubFoNM1KLhdTAYDGF15mRdQ+tnYVZKcbIHUQsJ8ayAy6Y+19rIRLRxzfzcgqRaf0dmmInaoKC9P5g1fy0oBaV4eky00SGup5GJqI0wyESvALOeF3NoTcRGJqKNbmRe7CJiIxMRg0xEDRlae8NrImodPUWTjUzERmYrE7VdG68VZP+G8tL3d34B/TqlmGKitmtk/90iTJSvdxQVrwmDm+0RtWeQ5+bm3uzt7R3TAS6+IKgKQEkpVVRKcetbohZ60SC4bGgdj8d/n56e/nTbtm3HAdiO4xTWaF5vSO2wkYnar5EBQO3ateuHixcvrhw+fPjjQCAQVErZeicQti9RmzayrBgyKwClI0eO/HzixIlzi4uLC1LKsBCibMc+Imovlb8jl/S5cX50dHR+9+7dX968eXNSCBGWUoYYZqL2JNZ4LrB6N7gwgI7z58+/fezYsQ87Ojosx3HySqk1b+1IRE0MqxBBKWU0HA5/AeAxgH8ApAEUKhvZC2cR7h0k0gCenjx58sehoaFz9+/fvyeljAghgvBtxUlE7dXIlf/m3dbRa+foxMTEoYGBgUEppa2U4t0XiVrcyJFI5KWNXNnODtxN6HNeOw8PD393+vTpr6WUlhCCc7WJ2ryR/fw3XQ4D6CoUCuOFQmFatzIRbWAjV7towvGdPwsAASFEUCklON2aaOPJdTSzN9QugfdDJtroUbRaK8jV1qryHbzIRdRiFSPgZ09qWY+sACjbttNwb+QmwN+TiVpwiixkNpstoHwOh/I38rrDXCwWH+kvAv6WTNSaIbVIp9PLKL9mhVqDrAA4y8vLv+ppmwwyUWsa2Xjw4MGfcK9TlXyBrnlo7Tx8+HAqFou9B2BZr0vm8JqoicNqAIHr16//Afdic1mQa2lTCSC4ffv2Tbdv3x4VQmRLpVJevzERNZ5hGEYok8k4O3fu/CqVSj0GsAhgBe6ELafmofXMzEzuxo0bo1LKqJSSyxyJmnNebEgpA0IIK5lMXk6lUmm4My3tehsZOrQhAB1TU1MfJRKJQ0qpnOM4th5mO77QE9H6wgsAUgghvRBfunTp2tGjRy8DWNJHGu7CplI9QRZwp2uGAETHxsbeP3jw4HA4HO7QSxxLvu2AiGgdp67C3ffWEEKYmUwml0wmL586deonACkAT/WQOq9bua5G9s6VAwAsAJG+vr5NZ8+efWfPnj39PT09fZZlRS3LCrGZiapv4lwul89ms+n5+flHV69e/e3MmTO/LC0tregGXgGQqRhao94ge8scvU0ILLgLKiz93Dtv5rploupVToX2Vh9m9WMB7n4BZb8UiQZ8i3g7ipg6vN5h+kLM5Y5ELw+w9+iFuaiPgg619/y53Xka1ZT+ze29RwPld64govWF2T/xo4T/2IK60QETaxxgkIlqDrMC98cj+n/4F3lvQyw6cGQZAAAAAElFTkSuQmCC) no-repeat;}#cMil_Offline_header p span {display: block;position: absolute;margin: 0;padding: 0;top: 9px;left: 22px;width: 206px;height: 50px;overflow: hidden;z-index: 10005;font-family: "Arial";font-size: 12px;font-weight: 400;line-height: 13px;color: #242424;text-decoration: none;text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.5);}#cMil_Offline_form {display: block;position: absolute;margin: 0;padding: 0;top: 97px;left: 16px;z-index: 10006;}#cMil_Offline_form form {display: block;position: relative;}#cMil_Offline_form form p, #cMil_Offline_form form div#cMil_Offline_Ok {display: block;margin: 0;padding: 0 16px 0 0;text-align: center;line-height: 12px;font-family: "Arial";font-size: 12px;color: #b1b1b1;height: 20px;}#cMil_Offline_form form p a {color: #b1b1b1;text-decoration: none;} #cMil_Offline_form input.cMil_inputtext {display: block;float: left;border: none;height: 16px;line-height: 16px;font-family: "Arial";font-size: 14px;width: 212px;background: #f4f4f4;color: #7d7f82;}#cMil_Online_cbbg p {display: block;margin: 0;padding: 0;text-align: center;line-height: 12px;font-family: "Arial";font-size: 12px;color: #b1b1b1;height: 15px;}#cMil_Online_cbbg p a {color: #919191;text-decoration: none;}#cMil_Offline_Rel .cMil_InputUl {display: block;margin: 2px 0;padding: 1px 0;list-style: none;width: 231px;}#cMil_Offline_Rel .cMil_InputUl li {display: block;margin: 0;padding: 0;list-style: none;font-size: 1px;width: 231px;zoom:1;line-height: 1;}#cMil_Offline_Rel .cMil_InputUl li * {display: block;float: left;border: none;margin: 0;padding: 0;}#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiCenter {}#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiCenter i {width: 10px;height: 16px;}#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiCenter i,#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiCenter label, #cMil_FormOn_TextArea dt {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAABCAYAAADn9T9+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QYNDhgkq9jZrgAAAB9JREFUCNdj/P//PwMDA4PM3r17HxsaGjKws7MzYAMA6D0G3Xdn/b4AAAAASUVORK5CYII=) repeat-y;}';
iframeContent+='#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiCenter b,#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiCenter dd, #cMil_FormOn_TextArea label {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAABCAYAAAASC7TOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB9JREFUeNpi+PLly38Yfvv27f89e/b8BwIZIGYACDAAenYYoQYiO5kAAAAASUVORK5CYII=) repeat-y right;}#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiCenter b {width: 7px;height: 16px;}#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiCenter label {width: 10px;height: 80px;}#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiCenter dd {width: 7px;height: 80px;}#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiCenter textarea {resize: none;width: 212px;height: 80px;background: #f4f4f4;color: #7d7f82;font-family: "Arial";font-size: 14px;}#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiTop,#cMil_Offline_Rel  .cMil_InputUl li.cMil_InputUl_LiBottom {height: 7px;/*    width: 231px;*/}#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiTop i {height: 7px;width: 7px;}#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiTop i, #cMil_FormOn_TextArea i {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHdJREFUeNpi/P//PwMuwILGZwZiNiBmB2FkSVYg5rlw4YLvly9fkn79+mXKgqSD59ixY91//vxJFhYWZuDm5oYbywbU4QeSUFBQYODg4GBgZmaGS7IDjUoUFRVl4OLiYmBjY2NgYmJCSILsEBQUBEuAdIEAQIABAEECIMdqHpYuAAAAAElFTkSuQmCC) no-repeat;}#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiBottom i {height: 13px;width: 7px;}#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiBottom i, #cMil_FormOn_TextArea q, #cMil_FormOn_TextArea rb {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpi+P//PwMQi+/du/frq1ev/n/58gWOmRgg4CcbG9vpz58/gxQywABckoeHZ/6zZ88Yfv/+jSH5y8DAYBMTE9Pcq1evMrx584bhz58/DIxIxrACMc+FCxf8gPYl/vr1ywxZEgSYgZgNiNlBGF0SBQAEGAALzET0NpM9SgAAAABJRU5ErkJggg==) no-repeat top;}#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiTop strong {height: 7px;width: 215px;}#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiTop strong, #cMil_FormOn_TextArea dl {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAHCAYAAADJTCeUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACtJREFUeNpi+P//PwMTAwODDMOePXv+Mzx69Og/Ezc3NwMTOzs7WIIBIMAA75gKME/Y9+gAAAAASUVORK5CYII=) repeat-x;}#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiBottom strong {height: 13px;width: 215px;}#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiBottom strong, #cMil_FormOn_TextArea dd {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAHCAYAAADJTCeUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACFJREFUeNpi+PLly38mBiBAIk6cOMHA8P//fxkQwQAQYAC+EwxSR2SCygAAAABJRU5ErkJggg==) repeat-x top;}#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiTop b {height: 7px;width: 7px;}#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiTop b, #cMil_FormOn_TextArea b {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJZJREFUeNp0izEKwyAARb9RjAQyOIRmzC0CDh6hdyg9Q4/TO3kD6ZClEIeiQ8XWakjGfnjLf/+TnDP+hRVOhfdOLHwOSbXWz2VZtHMujuP42OW3SmKtzSEErOsKxthdKXUr/auOmr7vMQwDpmlCSulqjDkXweuzadsWQgh0XbeNvPeX0otNEkJAKQXnHFJKxBjn4/kTYADyGC2vHRmSJQAAAABJRU5ErkJggg==) no-repeat;}#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiBottom b {height: 13px;width: 7px;}#cMil_Offline_Rel .cMil_InputUl li.cMil_InputUl_LiBottom b, #cMil_FormOn_TextArea sub {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHxJREFUeNp0jUEKwyAQRX8kuHLfa3jh0Dtk7wFa8BSCGzciQtpomc6AZpeBz/D/48+g1kpTKSVyzh1E9GBBYYyYUgq01i+2p2QXbK0hxghjzJPtR7K1946cM0IIUEpt1tp9Nlfv/cGn3tIYoLJ+Ahd5zvs7dE4wIe7mL8AAjApFG3MyDG0AAAAASUVORK5CYII=) no-repeat top;}#cMil_Offline_Rel .cMil_Submit {display: block;position: absolute;top: 215px;left: 55px;width: 128px;height: 28px;z-index: 10018;}#cMil_Offline_Rel .cMil_Submit * {display: block;margin: 0;padding: 0;}#cMil_Offline_Rel .cMil_Submit div {position: relative;}#cMil_Offline_Rel .cMil_Submit div span {position: absolute;z-index: 10010;width: 20px;height: 20px;left: 85px;top: 4px;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAKBJREFUeNpi/P//PwM1ARMDlcGogRhAAIgVoDTFBoIMcejs6rkPNRRZ3ACKBYg1EGbYeiQ+DCgAxc+DMJpFYMBChGEMUNdgY2O4kBFLwjaA2k4QlJeVGAKpC1SJZaBhgUDqATEuxPAyUHMhmks+QA37QEykgBQdgLoABkCGHUDCF7AZhs/L6IZ+IDYoGAmUNgJQ/IFYQxlHi6/BZyBAgAEA45E7s6SPL4IAAAAASUVORK5CYII=) no-repeat scroll 0 1px transparent;}#cMil_Offline_Rel .cMil_Submit div i{position: absolute;width: 7px;height: 28px;left: -7px;top: 0;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAcCAYAAACtQ6WLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAORJREFUeNq80k0KgkAUB/CpDDItaWNHCfIMReewe7hv0zmKijZuiugGpdYV0so0KmfeSwiF6cOFix4MvOHHf3gDj5C8VXi7F6ezeUdRlH6tJrc5WCxXA9vZ4el8RsoYpjIaT3pby8H744GXyxW9o49Cgkq9rjdVlYThjSC+QsUEq5LUFoRyChzGJTEAfrqkAWBcikcGH/9MkcXJ38gyEFjeZDYC/H8gyHw2YyBKo5BS+h2DIFi77uE7+r4/tK0NiaIoxVLSmKa51zSt4XluqyKKRIzPx2oahtGVZVmPUcu98OQpwAAIwnnhRLs3aAAAAABJRU5ErkJggg==) no-repeat;z-index: 10010;}#cMil_Offline_Rel .cMil_Submit div b{position: absolute;width: 7px;height: 28px;left: 114px;top: 0;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAcCAYAAACtQ6WLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPNJREFUeNq80kGKwkAQBdBS4kIF3ellvMCgC8/hBQK5hQzjMUSTEyjqWgWNeoARxqDTSZs4SVeXiZDAYMwiC/+qqdfVFE0B5E1huVpzx+ELxthXp/1hhDWZqECkX8Zotz/QZDrrh6VigueLTY7j0p/v09bc02hsdGMrEhH4QQDX6w2ajQbUa7VegvEhuqQoJahUq60njILyMUs5FaNuKRFSMYpE+RoxqxMx89m8ndko5fsHyvV9iAKECLxUtCwLOOezJwzCbdiZG7BtexDXFCEEnE4/YG43cDx+f6qqaiSoj4eu53nz8LmBpmn6v9XMnbsAAwAwHZd2VykJ0wAAAABJRU5ErkJggg==) no-repeat;z-index: 10010;}#cMil_Offline_Rel .cMil_Submit div input {position: absolute;box-sizing: border-box;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAcCAYAAACgXdXMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACdJREFUeNpiYICDS5ev/mf4DwRM795/YmACCdGa2LB+DcJ+BoAAAwAU/wx8O8WbZAAAAABJRU5ErkJggg==) repeat-x;z-index: 10009;width: 114px;height: 28px;border: none;border-radius: 0;top: 0;left: 0;}#cMil_Offline_Rel .cMil_Submit div label {position: absolute;color: #7d7f82;font-family: "Arial";line-height: 12px;text-decoration: none;text-shadow: 1px 1px 1px #ffffff;font-size: 12px;z-index: 10010;top: 8px;left: 21px;}#cMil_activInfo {display: none;clear: both;width: 270px;line-height: 40px;font-weight: 700;margin: 0 15px;}#cMil_Online_Rel .cMil_p, .cMil_u {display: block;position: relative;padding: 0;z-index: 10008;}#cMil_Online_Rel .cMil_p {float: right;margin: 0 4px 0 20px;}#cMil_Online_Rel .cMil_u {float: left;margin: 0 20px 0 4px;}#cMil_Online_Rel .cMil_p dd {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAGCAYAAAACEPQxAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QIUCDgYzS9D7AAAACBJREFUCNdjYICDNQfKGhh+/P7wgOnbr5e3mf7///sHAH9rDdWpMHbuAAAAAElFTkSuQmCC) repeat-x top;display: block;padding-top: 6px;}#cMil_Online_Rel .cMil_u dd {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAGCAYAAAACEPQxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAChJREFUeNpiYACBq0viGxj+fXv9gOnfx/u3mBj+/fnL9P//378AAQYAxB4QtZf3QwsAAAAASUVORK5CYII=) repeat-x top;display: block;padding-top: 6px;}#cMil_Online_Rel .cMil_p dd dl {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAGCAYAAAACEPQxAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QIUCDghkirL5AAAACZJREFUCNdjePvl2nYmRkZmFiYmRhZWZhNXDgUGBgYGBQYGBgYGAGnABEyzOvTdAAAAAElFTkSuQmCC) repeat-x bottom;display: block;padding-bottom: 6px;}#cMil_Online_Rel .cMil_u dd dl {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAGCAYAAAACEPQxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACNJREFUeNpi+PP02HYmBiYWZiDBysYcbvBDgQEIwAQDQIABAHRFBTt9nzG5AAAAAElFTkSuQmCC) repeat-x bottom;display: block;padding-bottom: 6px;}#cMil_Online_Rel .cMil_p dd dl dt{background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAABCAYAAAAIN1RAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACpJREFUeNpiZICCNQfKGlzM0u3//f/z+///v38Z/v/7+5/h/38GJAAQYACXxxFnpI30SgAAAABJRU5ErkJggg==) repeat-y left;display: block;padding-left: 11px;}#cMil_Online_Rel .cMil_u dd dl dt{background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAABCAYAAAAxUOUbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC1JREFUeNpi/PftDQOx4Pq64gZ113x7hr+/fzP8//P3//9/fxn+//+Prg4gwACpzBNVnGSGCQAAAABJRU5ErkJggg==) repeat-y left;display: block;padding-left: 21px;}#cMil_Online_Rel .cMil_p dd dl dt dc,#cMil_Online_Rel .cMil_p dd dl dt small{display: block;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAABCAYAAAAxUOUbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADtJREFUeNpifPP58mYGNMDIwMj4n4GRiYmRmZmRiZl176nZh0IcutqBUr9+/v74H1ktOys/unYGgAADANKwDgLArJ4FAAAAAElFTkSuQmCC) repeat-y right;padding-right: 21px;}#cMil_Online_Rel .cMil_u dd dl dt dc,#cMil_Online_Rel .cMil_u dd dl dt small{display: block;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAABCAYAAAAIN1RAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACdJREFUeNpi/P340GYGdMAIAszMDEwsLAxMrKw3d084oB2zsAEgwACmdggCeJO1TQAAAABJRU5ErkJggg==) repeat-y right;padding-right: 11px;}#cMil_Online_Rel .cMil_p dd span{display: block;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpiePP58maAAAMACOcDZkUGxFEAAAAASUVORK5CYII=) repeat;padding: 3px 1px 3px 1px;font-size: 14px;font-family: "Arial";color: #2c323a;text-shadow: 1px 1px 1px #ffffff;word-wrap: break-word;max-width: 190px;}#cMil_Online_Rel .cMil_u dd span{display: block;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi+P3k8BaAAAMACNcDV+jcTdYAAAAASUVORK5CYII=) repeat;padding: 3px 1px 3px 1px;font-size: 14px;font-family: "Arial";color: #2c323a;text-shadow: 1px 1px 1px #ffffff;word-wrap: break-word;max-width: 190px;}';
iframeContent+='#cMil_Online_Rel .cMil_p i {display: block;position: absolute;z-index: 10041;width: 11px;height: 22px;top: 1px;left:0;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAWCAYAAAAW5GZjAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QIUCSQO3k7B1wAAAN1JREFUKM/t0cFugkAUheF/EFEhlSaNLrpy6fu/iukTtCwaakgQygg4pwuQlmpMu+uidze539y5mWMkiR+Wf6t5rAuyIqGo3mhai7k22dYFWf5MafcsozXRPMb355c4L19J0h0P9xviaIVTjVOLkxuvYeuCJN3xuNoSTAOa0wFJYLr+aHKSPhFMZ4SLO5waQIDovPDO8N3mVMeMKIxRDyWB+gvwibPDC8tojVPdIYTp0bkGXFZ7FrOQ/k0k+P5NA25PFm8yGYDhMqsBY75Ouh6qNz7eTt7jF/WP/yD+AD1RdozxFGKvAAAAAElFTkSuQmCC) no-repeat;}#cMil_Online_Rel .cMil_u i {display: block;position: absolute;z-index: 10040;width: 21px;height: 22px;top: 0;left:0;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAYAAAAvg9c4AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QIUCg0QYkHdBgAAAb1JREFUOMutlEtz0lAYhp+TQ0gkpEXQoUrd6MLpjP7//9BFN+q4cEbaYluBcglI7snnokFQLDS078yZs3vmfb+bEhHhiVV5LCANZ4TjC+J5nyz2EclQ+zpNwxnB7XeSeR/78Aiz3kJXLJSh94NG3jWzy1OcF++wD9uQRUgag2SAlI+fhjNml6ccvP6IWTWRcAIiwMpbaade7wzTNLGfuUgWgeR3QOEP2CgDjP0p2WKIXWusgJJvOC0FDUZd7IM2kkYboHWVczofYFp1YD3yI6GSBihDrTl8AqcgKJGt0feAUkTfylzN6a+bL4TjLnmW7HS7lbicU390Qer1cNrvMXTlfogIuT/cGV+JiMRxzOj8jGo6wmkeY9r1ArI2g//+W2QAaK2ptU+Y5i3mgy7+9IbNRdsN21hTESGKIoaDn/j9r7x0FfXWG7Su3jVHpPh5WE3/Ohhpiud5jH98pmFMcRpHWE6zAOYPiv/fg5LnOUEQMLzuEozOedW0qbc6KGWs9r0sdFmOJEmYTCZ4V59oWQHO8w6mVSsalpeHLpVlGYvFgturb7hJj+bxyc4y7NworTWu69J5+wFBAFW8+/UbaN8gOD4QZU0AAAAASUVORK5CYII=) no-repeat;}#cMil_Online_Rel .cMil_p b {display: block;position: absolute;z-index: 10041;width: 21px;height: 22px;top: 1px;right: 0;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAYAAAAvg9c4AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QIUCSQpe0R0vAAAAeVJREFUOMutlG1v0mAUhq/TlkIpb92EEdmYTo0xJsb/v79h9lWcjmQbjLXjpYXS44dSBiYoHZ6PbXo9133OeSqqqvznsq56l4gY2JaD6xzjVToU7cpBUAkXvqJKHIdMQp9gcke5dMRR7YySXX0ZNJj9VBAMEQwpYIhNML1n8PiD18efqVfa+eNDAgiJQpIsEYmoODVs6yP9+28U7QqlnO0wUAVNUFUQRVHiZI5lFXjVOOfBv85taiiQjl9BNYWjqC5wyw2m0QPTMMhpulEKCBlUSXROzW0xevr1cmgG1pQOqjjFMpPZ8DAoa9v0AMM0iZfh4dBnZ1A0tT4UmrVAeR5jzj39y80Asl/DVe9yt5lh4VVPOfE+pN/5057uBCKICLZV/+Pddj+SZMnd6DtVp4VX6+w2zdZLFeaxv3qQHpJiU3AYTRj6N5haxfWa/46/dYRs26kq/vgWfzyEqMFJ+x2maeaBZuZpxXHE4PEGfxjR9N7TOm9TLBZXKfaGpnFFhPF0xCi4ZTF1eNP5Sr1ex7Ks/aa/OSgQNEkY+H0Gd0941VO63S6O42AYRs6VkhQfRhMegj6zwKTb/oLneRQKhXXcvaGaRQbuR9cYiyYXZxe4rrseSK7ll817tLJ52/2Ebds77TbrN7snxJE0vGhjAAAAAElFTkSuQmCC) no-repeat;}#cMil_Online_Rel .cMil_u b {display: block;position: absolute;z-index: 10040;width: 11px;height: 22px;top: 0;right: 0;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAWCAYAAAAW5GZjAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QIUCg0FD5w57QAAAPZJREFUKM/dkMFOwkAURc/MlLZAacQQ2ZAYXbvzw/0RV67cEDcuTLVGFCilnXkuWguiwXbrTWbmZXLuzc1TIiK0lJfc3aCUwfgD/NGU8PQcL4x/hZXLUhFnseWGYvnKZvGEF50xmFzg9U++w2V6L6BAG5TxwQTki4Tly5zR7JpwPNvVQFw1WYvYAtSaYBijgyveH2/x+nFTSyOO6ghQzVJm9IxhOLlk9TxvkvWukVSG2iw2J4zG2FXCdv12CO+rMkqRE8ZTsvThCCxfl6MXRGw/kj+S61dpjZTZMXhvt7jGrOmgI7B0gal33xbulPzvYaXawurHzycr2mOsuyUCAAAAAABJRU5ErkJggg==) no-repeat;}#cMil_Online_Rel .cMil_p q,#cMil_Online_Rel .cMil_p rb {display: block;position: absolute;z-index: 10040;width: 11px;height: 11px;font-size: 0;bottom: 0;left:0;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QIUCTkvbUu9lQAAANhJREFUGNN1kElOw0AQRV+1aVsBDCSwSBZwAO6/4x5sGYQYoiSWBXbTKuJi4UFYOH9Tv6RXo5iZAdw/3HGzusUwwMAajLHcYCTlZ69Il9vgJmCf5HzHCkTA2iCH4Hy25LPeYSaICCAYMioY4PP8Eg0JVSjatnRFvR+t4T3zs2uK8o0YAyLSIv0kcX8OdI6rxZJMVqx3j3xVBUiCONf1FaR/Xa8YI6/vz2zLJy4WKSfHc2bZKUdJ+h8GUFXKsuRj/UKtG3y2x2cyDQM0TYOqUtc1IQRU9TA8pV8JzWDAJKGxOwAAAABJRU5ErkJggg==) no-repeat;}#cMil_Online_Rel .cMil_p sub {display: block;position: absolute;z-index: 10040;width: 21px;height: 11px;bottom: 0;right: 0;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAALCAYAAACQy8Z9AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QIaCQYIcEBV8QAAAPNJREFUKM+tkjFPwlAURs+9vlYfQRqRoWiUOLj4O/z/mwmj0QGmVtQW2kKvQy2JhsFHPNOXN5x878uVVfls/EIARLtk8Lqc83D3yF/RQ4/WaRFgt9uiGhOCHmopAlgXNnVBpMPjpbJvKYgIZsJHmXHu0zCp9BsiIJ2sz8U6p1mfMBqOA5uKgGgnM0G+W1ZVSb5acDG6IY7DNnX9ArLvrXyWGfn7klOZMhmnqGqYVESx1mh2FZu6oChz3rKay+SWq3RGFEWE4l4WT7St0dQt28oxiCbMptckSXKUEMANuEed4s4c3nu898RxHPzlH1dkZsY/8wXhg0cy4+LpLAAAAABJRU5ErkJggg==) no-repeat;}#cMil_Online_Rel .cMil_u q,#cMil_Online_Rel .cMil_u rb {display: block;position: absolute;z-index: 10040;width: 21px;height: 11px;bottom: 0;left:0;font-size: 0;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAALCAYAAACQy8Z9AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QIUCgw0R1kIlgAAAN1JREFUKM+t0k1PAjEUheG3nXQQiGIQWBBWuvTP+1tcm2hcoJkQdMJ8lQtzXVAjJpJY4CRn0S6e3rQ1qqr8M9njAzeze6AFDf0jloioTdluBTBhx5yO0hmyaYqAmUNmHOoGM5piGYY055m0PxhTbFJ8+QHG7vX3AXGTOkd3dEf5OUea6gclwGEdhVpruR5NWfduWS2e8cUSTLLXHWpivtR3vPdk8xfK7InJlaHTH+K6lyRJunu/Y1AAESHPcxbvr2j5Ri9Zc+HCLRyLArRti4hQVRV1XSMiqOpp6KF8ARMiXtN09VQIAAAAAElFTkSuQmCC) no-repeat;}#cMil_Online_Rel .cMil_u sub {display: block;position: absolute;z-index: 10040;width: 11px;height: 11px;bottom: 0;right: 0;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QIUCg0b9ZMEjgAAAN9JREFUGNN9kd1Kw0AQRs+sm5Gt0BWMFf8urOCl4JP48gUfQBFRUoskMambrBdJoy3Rgdlh2DMz3+xKeFtExkxM5wjZ0wOz23sM4+QQmyYQ9/YB/oBlcwihykEP/4ERkK57lS9J/MUu3AMbrWKoi3fyoEymaQ8Pl9LV9nmoS4rVMy69RlUBsN3GPxoRoc4zytULa3fFLD3DGPMLjpEmrPmqcupiyetHy+T4hpPzOUmSDEJt9rigbaEK8NkocnDK0fwS7/0WCGDL6R3GGNRavHM451DVYfTWG8UYx39wxL4BpkRAe1DFQLUAAAAASUVORK5CYII=) no-repeat;}#cMil_FormOn {display: block;position: absolute;z-index: 10041;top: 270px;left:4px;width: 255px;}#cMil_FormOn *{margin: 0;padding: 0;line-height: 0;}#cMil_FormOn form {display: block;position: relative;}#cMil_FormOn_TextArea {display: block;position: absolute;top: 43px;left: 11px;font-size: 1pt;width: 234px;z-index: 10042;background: #ffffff;}#cMil_FormOn_SubTextArea {display: block;position: absolute;top: 45px;left: 11px;width: 234px;z-index: -100;}#cMil_FormOn_TextArea i, #cMil_FormOn_TextArea b, #cMil_FormOn_TextArea rb, #cMil_FormOn_TextArea q, #cMil_FormOn_TextArea sub, #cMil_FormOn_TextArea dl, #cMil_FormOn_TextArea dd{display: block;position: absolute;z-index: 10044;width: 7px;height: 7px;}#cMil_FormOn_TextArea i {top: 0px;left: 0px;}#cMil_FormOn_TextArea b {top: 0px;right: 0px;}#cMil_FormOn_TextArea q {bottom: 0px;left: 0px;font-size: 0;}#cMil_FormOn_TextArea rb {bottom: 0px;left: 0px;}#cMil_FormOn_TextArea sub {bottom: 0px;right: 0px;}#cMil_FormOn_TextArea dl {top: 0px;left: 7px;width: 220px;}#cMil_FormOn_TextArea dd {bottom: 0px;left: 7px;width: 220px;}#cMil_FormOn_TextArea dt {display: block;position: relative;margin: 7px 0;width: 234px;}#cMil_FormOn_TextArea label{clear: both;display: block;position: relative;width: 234px;}#cMil_FormOn_TextArea textarea {resize: none;height: 16px;width: 177px;border: none;margin-left: 22px;background: none;font-size: 14px;font-family: "Arial";line-height: 14px;color: #7d7f82;overflow: hidden;} #cMil_FormOn_SubTextArea textarea {resize: none;height: 3px;width: 177px;border: none;margin-left: 22px;background: none;font-size: 14px;font-family: "Arial";line-height: 14px;overflow: hidden;}#cMil_FormOn span {display: block;position: absolute;z-index: 10044;top: 49px;left: 14px;width: 20px;height: 20px;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgFJREFUeNrkVLtLQlEY/65eH4OmYImvEPGFOkkO/gNCQ7QUEkXkZq2t/RFNkUs41RgINlfiCwIJGhodHFR8K4pv+74DgUmaglsHLvee75z7u7/H+S43mUxgnUMAax5rB+RnC+PxGLrdLohEIhiNRkCWCAQCdpdIJHyr1brI5XKcSqUqqtXqWKfTyctksvmA84ZUKhWWy+X7eDzuz+fzgIDg8XguEfR6ZclisRhqtVo4kUj4OY4Dt9sN/X4fCoWCbJrdUoDIDKrVajiZTJ4Oh0PQ6/XMDqVSCcjuEC3aWhqQwIhZOp0OkK8Wi4V5WSqVwGaz0TyLdX5hKN+DWFQqlVAqlQoQM5PJBIPBAOr1Ons2m80PCH5CwS1kSB5Rqo1G4xZlBnu9HpMpFApJOmi1WrDb7Y84PyMw2v8nIB6Pm1gsdk4yXS4XA0O2YDQawel0PuG2I2Q3/E0ZN9t66FkQayFKMZPJgFwuZ4nqdDpwOBwEtk/Hld4jhvTR6aRnGW5ks9mrSCTCNnm9XsbMYDAQ2AsCHyPIeOnWw8277XZ7m2RHo1HGzOfzgdVqfcbnPVxvrtR6xWJxB9uKMSLfSI5Go3nFs3aAEtsr9zKGoacuQL/eFArFO5Y+EewOr+ayLfojFJRl5nl+E4/NB9Y7VKN1+mFQAHSnNiT280Lh/t8P9kuAAQDaUBHXV30R1QAAAABJRU5ErkJggg==) no-repeat;/top: 47px;}#cMil_FormOn .cMil_FormOn_submit {display: block;position: absolute;z-index: 10045;top: 47px;left: 207px;margin: 0;padding: 0;list-style: none;cursor: pointer;/top: 44px;}#cMil_FormOn .cMil_FormOn_submit li {display: block;margin: 0;padding: 0;list-style: none;width: 36px;font-size: 1px;zoom: 1;}#cMil_FormOn .cMil_FormOn_submit li.cMil_FormOn_submitLeft {height: 5px;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAHCAYAAABgOO8AAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QMaCxkTCZtvXQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAA2klEQVQoz+2RQYoCMRBFf8f0CEY7u3YtQh9CvMCgMnoN5zQuPMcoKq4V8QwaEK9gcALaSbpm5SCOuMtu3qqqKKhHfeCf10QPPZsvlj0p5WetVm0xVhIhjhaFN+fz91ZrPe523mcAimd7bLXejHZ7RSetyXlPoXDe00lr2u0VrdabEQD250OT6ayfZdlXs9lAfnWwzoGIwsQSRYg5x1uZ43A4Qik16H/0Jrg3k0kyrKcpjLkgtzaYDAAQEXJrYcwF9TSFTJLhb0y3oiJEi/M4qMgzMc5jVIRo32Y/2KuzGwOW040AAAAASUVORK5CYII=) no-repeat bottom;}#cMil_FormOn .cMil_FormOn_submit li.cMil_FormOn_submitRight {height: 18px;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAASCAYAAAAzI3woAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QMaDQA3qhVeJgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABkklEQVRIx9WVP07DMBjFX9wMBHXhHBUzQ4AjcI1WVrduPUAPAFWUczB3gsICTChqJWYqKqUMkSGDP9sM0JCk/5JUtOJJkRwn8fvlfV9iCz+6uR2aRuMYZWRZgG3b8DwPrVYLSulknjEGANBaw5j16wTBM87PTi0AYPNJpVRlmO9zK7nGGIPv+/B9PwFbp7S3PR/oEkB5GACo1WpLx2nQVdLLgMokxBjLwABAv99feq/ZVK+cd+WSFRHnHFrraiVTBR5MItYanPNMSu12O7OwMQZEhAIBZbwrJWQMQETgnGfekuj3UEoXgllZMl2yZHkoU9R9Q1Nv1UNzqGazWahXSvZQtaY2Zrt08t6pkmnsS2nvBIhIfhDRzmGUIhDJeAFICHE/m4U7BwrDEEKI4QJQFEXeeBRASrkzGCklxqMAURQlP7Rk0xkMBi+u6x69v89ODhwHjuMU2hiriIgwnb7h6fEBk8nrVafTuQRgACC/87Fer3dRr9e54zguY+zwT5pY6884ju+EEF63270GsL8v6t/pC/i18o61HsI0AAAAAElFTkSuQmCC) no-repeat;}#cMil_FormOn .cMil_FormOn_submit li.cMil_FOsubmit {height: 1px;}#cMil_FOsubmit {border: none;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAABCAYAAAC2YQwdAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QMaCxoHOGzo4wAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAIklEQVQI12NkgILjJ07+V1PTYBgIcOvWDQZLC3NGBgYGBgAeIAcCYyNEwgAAAABJRU5ErkJggg==) repeat-y;font-size: 16px;text-decoration: none;width: 36px;height: 1px;text-align: center;cursor: pointer;}#cMil_scroll {height: 190px;overflow-y: auto;}.cMil_cSeparate {display: block; width: 100%; float: none; overflow: hidden; clear: both;}#cMil_FOtext {width: 250px;line-height: 24px;height: 27px;font-size: 14px;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAAbCAYAAABV9JIaAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QEfCi0FCrngngAAAKZJREFUeNrt3EENgwAURMEtqQQMkCICMwQBpB5InRAQgwsMIKInDPTWnxkJm7zrJgDA/3u85/mVZE8ymANK6p9J9rZth3Ga0nWdSaCQz7Lkuq69SSJyKGqcpiQZmiQih6LuthtTQH1CB6EDQgeEDggdEDogdEDogNBB6IDQAaEDQgeEDggd+DX08zwtAQXdbTdJjm1dxQ4FbeuaJIcXWKivNwEAVPAFr5kde/ZwltUAAAAASUVORK5CYII=) no-repeat;color: #a0a0a0;border: none;}#cMil_ping {margin: 0 10px;}#cMil_ping span{float: right;}#cMil_ping strong {cursor: pointer;font-size: 11px;line-height: 14px;}#cMil_Sound {display: block;float: left;background: #ffffff;font-size: 1px;width: 1px;height: 1px;}';
iframeContent+='#cMil_Offline_form form div#cMil_Offline_Ok {display: none; position: relative; padding: 2px 16px 14px 0;} #cMil_Offline_cbg, #cMil_Online_cbg, #cMil_action_cbg, #cMil_stat_cbg {background: url(data:image/jpeg;base64,{%BG%}) no-repeat center center;}input.error-input::-webkit-input-placeholder {color:#c0392b;}input.error-input::-moz-placeholder {color:#c0392b;}input.error-input:-moz-placeholder {color:#c0392b;}input.error-input:-ms-input-placeholder {color:#c0392b;}textarea.error-input::-webkit-input-placeholder {color:#c0392b;}textarea.error-input::-moz-placeholder {color:#c0392b;}textarea.error-input:-moz-placeholder {color:#c0392b;}textarea.error-input:-ms-input-placeholder {color:#c0392b;}#cMil_Offline_Hide {display: block;}</style>';
iframeContent+='<div id="cMil_Online_Rel"><div id="cMil_Online_header"><img id="cMil_Online_headerClose" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWRJREFUeNpi/P//PwM1ARMDlcGogYPQQBZ0gT+//7SysLJUfXj3flm4V3gpUOgtEP9EVrP1yLaZLCwsaWdOnI6qLqjeCRT6CMR/d57YhenCa5evrgbRAkKCUZPmTV4MZCoCMTu6YRfPXVwLNAykXwKImXF6uTSr9NbmdZtzQGx1LXWnCXMmzoAZCjPs/Jnzm8uySi+AXAXEX6A0GDCi5xR3CzdGICWSmJmUHBEf0Q4Se/LoyWU+Pt4PfAL8tkCXbQUadgIofB+ITwLxIyD+BVIH8jILlnAF2fBu/vR5C0A+ABraKiMnowuSOHXs5OHaotozQOYDEBfZMEKxDPLCa6Ch886ePDMfJLB/176bQMMuApn3oC57iG4YoWQDNrShrLH+8oXLmzrqOtYA+aBwO4HNZfjCEF0NKxDLAbEUEL+AGvYTm2G4whAd/AbFCxC/ghr0i6SEjQP8xOUqgl4e/oUDQIABALYOkW4rWHG0AAAAAElFTkSuQmCC" /><img id="cMil_Online_headerSound" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAddJREFUeNpi/P//PwM1ARMDlQHVDWQBEe4WbkPYy5sPbbHfcWznHSBTHIi5iPIyNrDzxC7GP7//lLGwsrRA1VkD8bmN+zfxsrCwVIR6hOR++/rtK1DsJ04Dtxza6v7r50+1379/M//88dOdnYPdA0naAIjvAA3hExQWDClvKH9YX1o/Dyj2AIj/YDWQlY11MxCzYnMxIxMjb2N3k0ekT8TMBWsXblbVUA0DCh8G4ndQjDUMWXEFgZe/t5KppWkjByeH/KMHj84ICAnKAoUlgViArFgWFRcR+vfvH+OfP3+0///7xwrMYX+BwhxAzIkzDIGK/jAyMmKNqAO79j8FuuoVMKJYFFWULD99+HSHYCyfPn4q5eWLV36fP36WNDQxkNXU1ZKByT249/D9hLb+vaX1ZeJiEmLua5etmQYU/g7E33AaWFtUuxlI3QZiicWzmXiKaorDnD2cPZmAACj2C4gfa2hrCD559HTT7MmzrwD5T4H4Pb50+BGILwLxdWB4sfY0dZ97/ODxuYCwgByo3PfksKRlIM8AsTAQ3wPiLyipAVR84cnLrNAcogPNJeeA+AkQcwMxMxDjT9hYwG8gfg51BTsQf4Ym4o8kZz0kAEoeH4ZPAQsQYAAIRaiza9UbXgAAAABJRU5ErkJggg==" /><img id="cMil_Online_headerManager" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABmJLR0QA/wD/AP+gvaeTAAAADUlEQVQI12NgYGBgAAAABQABXvMqOgAAAABJRU5ErkJggg==" /><strong>{%LANG.ON.TITLE%}</strong><p><span></span></p></div><div id="cMil_Online_cbbg"><p><a href="http://bhelp.com/?{%DID%}">{%LANG.BHELP%}</a> <a href="http://bhelp.com" target="_blank">bhelp.com</a><i id="cMil_Sound"></i></p><div id="cMil_scroll"><div id="cMil_content"></div></div></div><div id="cMil_FormOn"><form onchange="return false;" onsubmit="bHelp.add(); return false;"><span></span><div id="cMil_FormOn_TextArea"><i></i><b></b><q></q><rb></rb><sub></sub><dl></dl><dd></dd><dt><label><textarea placeholder=""></textarea></label></dt></div><div id="cMil_FormOn_SubTextArea"><textarea></textarea><div id="cBh_Sound"></div></div><ul class="cMil_FormOn_submit"><li class="cMil_FormOn_submitLeft"></li><li class="cMil_FOsubmit"><input type="submit" id="cMil_FOsubmit" value=" "/></li><li class="cMil_FormOn_submitRight"></li></form></div><div id="cMil_Online_cbg"></div><div id="cMil_Online_gbbg"></div><div id="cMil_Online_tbg"></div><div id="cMil_Online_bbg"></div><div id="cMil_Online_rlbg"></div></div><div id="cMil_Offline_Rel"><div id="cMil_Offline_header"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWRJREFUeNpi/P//PwM1ARMDlcGogYPQQBZ0gT+//7SysLJUfXj3flm4V3gpUOgtEP9EVrP1yLaZLCwsaWdOnI6qLqjeCRT6CMR/d57YhenCa5evrgbRAkKCUZPmTV4MZCoCMTu6YRfPXVwLNAykXwKImXF6uTSr9NbmdZtzQGx1LXWnCXMmzoAZCjPs/Jnzm8uySi+AXAXEX6A0GDCi5xR3CzdGICWSmJmUHBEf0Q4Se/LoyWU+Pt4PfAL8tkCXbQUadgIofB+ITwLxIyD+BVIH8jILlnAF2fBu/vR5C0A+ABraKiMnowuSOHXs5OHaotozQOYDEBfZMEKxDPLCa6Ch886ePDMfJLB/176bQMMuApn3oC57iG4YoWQDNrShrLH+8oXLmzrqOtYA+aBwO4HNZfjCEF0NKxDLAbEUEL+AGvYTm2G4whAd/AbFCxC/ghr0i6SEjQP8xOUqgl4e/oUDQIABALYOkW4rWHG0AAAAAElFTkSuQmCC" /><strong>{%LANG.OFF.TITLE%}</strong><p><span>{%OFF_INFO%}</span></p></div><div id="cMil_Offline_form"><form onchange="return false;" onsubmit="bHelp.off(); return false;"><p>{%LANG.BHELP%} <a href="http://bhelp.com" target="_blank">bhelp.com</a></p><div id="cMil_Offline_Ok">{%LANG.OFF.OK%}</div><div id="cMil_Offline_Hide"><ul class="cMil_InputUl"><li class="cMil_InputUl_LiTop"><i></i><strong></strong><b></b></li><li class="cMil_InputUl_LiCenter"><i></i><input  type="text" class="cMil_inputtext" id="cMil_FNname" value="" placeholder="{%LANG.OFF.PH.NAME%}" autocomplete="off"/><b></b></li><li class="cMil_InputUl_LiBottom"><i></i><strong></strong><b></b></li></ul></div><ul class="cMil_InputUl"><li class="cMil_InputUl_LiTop"><i></i><strong></strong><b></b></li><li class="cMil_InputUl_LiCenter"><i></i><input  type="text" class="cMil_inputtext" id="cMil_FNphone" value="" placeholder="{%LANG.OFF.PH.PHONE%}" autocomplete="off"/><b></b></li><li class="cMil_InputUl_LiBottom"><i></i><strong></strong><b></b></li></ul><ul class="cMil_InputUl"><li class="cMil_InputUl_LiTop"><i></i><strong></strong><b></b></li><li class="cMil_InputUl_LiCenter"><label></label><textarea id="cMil_FNtext" placeholder="{%LANG.OFF.PH.MESSAGE%}..."></textarea><dd></dd></li><li class="cMil_InputUl_LiBottom"><i></i><strong></strong><b></b></li></ul><div class="cMil_Submit" id="cMil_FNsubmit"><div><i></i><input type="submit" value=" " onclick="bh.off(); return false;"/><label>{%LANG.OFF.PH.BUTTON%}</label><b></b><span></span></div></div></form></div><div id="cMil_Offline_cbg"></div><div id="cMil_Offline_cbbg"></div><div id="cMil_Offline_gbbg"></div><div id="cMil_Offline_tbg"></div><div id="cMil_Offline_bbg"></div><div id="cMil_Offline_rlbg"></div></div><div id="cMil_action"><div id="cMil_action_Rel"><div id="cMil_action_Header">{%LANG.ON.ATITLE%}</div><div id="cMil_action_Content"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABmJLR0QA/wD/AP+gvaeTAAAADUlEQVQI12NgYGBgAAAABQABXvMqOgAAAABJRU5ErkJggg=="/> <p><span>{%ACTIVINFO%}</span></p></div> <ul id="cMil_AbuttonOk" class="cMil_Button"><li class="cMil_Button_left"></li><li>{%LANG.ON.YES%}</li><li class="cMil_Button_right"></li></ul> <ul id="cMil_AbuttonNo" class="cMil_Button"><li class="cMil_Button_left"></li><li>{%LANG.ON.NO%}</li><li class="cMil_Button_right"></li></ul><div id="cMil_action_cbg"></div><div id="cMil_action_tbg"></div><div id="cMil_action_bbg"></div><div id="cMil_action_rlbg"></div></div></div><div id="cMil_stat"><div id="cMil_stat_Rel"><div id="cMil_stat_Header">{%LANG.OFF.ATITLE%}</div><div id="cMil_stat_Content"> <p><span>{%ACTIVEOFF%}</span></p></div> <ul id="cMil_SbuttonOk" class="cMil_Button"><li class="cMil_Button_left"></li><li>{%LANG.OFF.YES%}</li><li class="cMil_Button_right"></li></ul> <ul id="cMil_SbuttonNo" class="cMil_Button"><li class="cMil_Button_left"></li><li>{%LANG.OFF.NO%}</li><li class="cMil_Button_right"></li></ul><div id="cMil_stat_cbg"></div><div id="cMil_stat_tbg"></div><div id="cMil_stat_bbg"></div><div id="cMil_stat_rlbg"></div></div></div>';
var mainStyle='#cMil_body {display: block;position: fixed;top: 10px;left: 10px;margin: 0;padding: 0;width: 1px;height: 1px;z-index: -1;text-indent: 0;/*position: absolute;top: expression((document.getElementsByTagName( "body" )[0].scrollTop + 10) + "px");*/}#cBh_frame {margin: 0;padding: 0;border: 0;outline: 0;vertical-align: baseline;background: transparent;font-size: 100%;font-family: inherit;font-weight: inherit;font-style: inherit; }#cMil_FrameCover, #cBh_frame, #cBh_Header {zoom: 1;display: none;position: fixed;z-index: 999999999;width: 264px;height: 351px;margin: 0;padding: 0;left: 0;top: 0;text-indent: 0;}#cMil_FrameCover, #cBh_Header {background: rgba(255,255,255,0.01);height: 95px;cursor: move;}#cMil_FrameClose {display: block;position: absolute;z-index: 999999999;top: 10px;right: 14px;width: 20px;height: 20px;background: rgba(255,255,255,0.001);cursor: pointer;}#cMil_FrameSound {display: block;position: absolute;z-index: 999999999;top: 10px;right: 35px;width: 20px;height: 20px;background: rgba(255,255,255,0.001);cursor: pointer;}#cBh_frame {z-index: 999999998; transition: none;}#cBh_frame p {text-indent: 0;}';
function bhelpLoad(url,name,version,callback){if(window["localStorage"] === null) return subLoad(url,name,callback); else{var gc = localStorage.getItem(name);if(gc==null) return subLoad(url,name,callback);else {var gcVersion = localStorage.getItem(name+"_v"); if(gcVersion==null || gcVersion!=version){ localStorage.setItem(name+"_v",version); return subLoad(url,name,callback);}else callback(gc);}}
function subLoad(url,name,callback){if (window.XMLHttpRequest) xmlhttp=new XMLHttpRequest();else xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); xmlhttp.onreadystatechange=function(){if (xmlhttp.readyState==4 && xmlhttp.status==200){if(window["localStorage"] != null) {localStorage.setItem(name,xmlhttp.responseText);} callback(xmlhttp.responseText);}}; xmlhttp.open("GET", url, true ); xmlhttp.send();}}

var animate = function (doc, win) {
	var self = {bhId:"bhStyle"};
	if(doc.getElementById(self.bhId) == null) {
		var style = doc.createElement('style');
		style.type = 'text/css';
		style.id = self.bhId;
		doc.body.appendChild(style);
	}
	for(var el = 0; el < doc.styleSheets.length; el++){
		var elNode = doc.styleSheets[el].ownerNode ? doc.styleSheets[el].ownerNode : doc.styleSheets[el].owningElement;
		if(elNode.id && elNode.id == self.bhId) {
			self.styleLinkRules = doc.styleSheets[el].cssRules ? doc.styleSheets[el].cssRules : doc.styleSheets[el].rules;
			self.styleLink = doc.styleSheets[el];
		}
	}
	self.rules = {};
	self.length = 0;
	self.addRule = function(hash,callback){
		var content = 'transition: all 1s;';
		self.styleLink.insertRule(hash+" {"+content+"}",self.styleLinkRules.length);
		setTimeout(function(){
			if(typeof callback == 'function')
				callback();
		},10);
	};
	self.rmRule = function(hash){
		for( var num = 0; num < self.styleLinkRules.length; num++){
			if(self.styleLinkRules[num].selectorText == hash) {
				self.styleLink.deleteRule(num);
				break;
			}
		}
	}
	self.history = {};
	self.id = function(uid){
		if(uid.substr(0,1)=='#')
			return doc.getElementById(uid.substring(1));
		else
			return doc.querySelector(uid);
	};
	self.style = function(uid,styleName,style,sub){
		var id = self.id(uid); if(id !== null) id.style[styleName] = style + ((sub) ? sub : "");
	};
	self.styles = function(uid,styles){
		var id = self.id(uid);
		console.log("styles",id,id.style);
		if(id !== null) {
			for(var name in styles) {
				id.style[name] = styles[name];
				console.log("styles",id.style[name],name,styles[name]);
			}
		}
	};
	self.width = function(uid,width){
		self.style(uid,"width",width,"px");
	};
	self.height = function(uid,height){
		self.style(uid,"height",height,"px");
	};
	self.opacity = function(uid,opacity){
		self.style(uid,"opacity",opacity);
	}
	self.re = function(uid,style,callback){
		self.rmRule(uid);
		var id = self.id(uid);
		if(id == null)
			return;
		self.addRule(uid, function(){
			self.styles(uid,styles);
		});
		setTimeout(function(){
			self.rmRule(uid);
			if(typeof callback == 'function')
				callback();
		},1100);
	};
	self.hide = function(uid,style,callback){
		self.rmRule(uid);
		var id = self.id(uid);
		if(id == null)
			return;
		var top = 0;
		var left = 0;
		id.style.position = 'fixed';
		id.style.top = id.offsetTop+"px";
		id.style.left = id.offsetLeft+"px";
		if(style && style.hidden) {
			id.style.opacity = 0;
		} else {
			id.style.opacity = 1;
		}
		id.style.display = 'block';
		self.history[uid] = {top:id.offsetTop, left: id.offsetLeft};
		var windowSize = {width: win.innerWidth, height: win.innerHeight};
		if(style)
			switch(style.direction){
				case 'downLeft': top = windowSize.height+20; left = 20; break;
				case 'downRight': top = windowSize.height+20; left = windowSize.width - id.clientWidth-20; break;
				case 'left': top = (windowSize.height - id.clientHeight)/2; left =  0 - id.clientWidth - 20; break;
				case 'right': top = (windowSize.height - id.clientHeight)/2; left = windowSize.width + 20; break;
				case 'upLeft': top = 0 - 20 - id.clientHeight; left = 10; break;
				case 'upRight': top = 0 - 20 - id.clientHeight; left = windowSize.width - id.clientWidth-20; break;
				default: top = style.top; left = style.left; break;
			}
		self.addRule(uid, function(){
			id.style.top = top+"px";
			id.style.left = left+"px";
			id.style.opacity = 0;
		});
		setTimeout(function(){
			self.rmRule(uid);
			if(style && style.hidden) {
				id.style.opacity = 0;
			}
			else {
				id.style.opacity = 1;
			}
			if(typeof callback == 'function')
				callback();
		},1100);
	};
	self.show = function(uid,position,callback){
		var id = self.id(uid);
		if(id == null)
			return;
		self.rmRule(uid);
		id.style.opacity = 1;
		id.style.display = 'block';
		if(self.history[uid]==undefined){
			self.history[uid] = {top:id.offsetTop, left: id.offsetLeft};
		}
		var ignore = false;
		if(position!= undefined && position!= null){
			if(typeof position.top != 'undefined')
				self.history[uid].top = position.top;
			if(typeof position.left != 'undefined')
				self.history[uid].left = position.left;
			if(typeof position.ignore != 'undefined')
				ignore = position.ignore;
		}
		self.history[uid].top = parseInt(self.history[uid].top);
		self.history[uid].left = parseInt(self.history[uid].left);
		var windowSize = {width: win.innerWidth, height: win.innerHeight};
		if(!ignore){
			if(windowSize.width < self.history[uid].left+id.clientWidth)
				self.history[uid].left = windowSize.width - id.clientWidth - 20;
			if(windowSize.height < self.history[uid].top+id.clientHeight)
				self.history[uid].top = windowSize.height - id.clientHeight - 20;
		}
		console.log("show",self.history[uid].top,self.history[uid].left);
		self.addRule(uid, function(){
			id.style.top = self.history[uid].top+"px";
			id.style.left = self.history[uid].left+"px";
			id.style.opacity = 1;
		});
		setTimeout(function(){
			self.rmRule(uid);
			if(typeof callback == 'function')
				callback();
		},1100);


	};
	return self;
};


var bHelp = function(animate,win,doc){
	var self = this;
	self.debug = true;
	self.FrameHeight = 351;
	self.animate = animate(document,window);
	self.animateParent = animate(doc,win);
	self.doc = doc;
	self.win = win;
	var blank = function(){
		return {
			offText:"",
			offContact:"",
			offName:"",
			onText:"",
			get: function(type, insertObj){
				switch(type){
					case "client":
								return '<dl class="cMil_p" id="cBh' + insertObj.uid + '"><i></i><b></b><q></q><rb></rb><sub></sub><dd><dl><dt><small><span>' + insertObj.text + '</span></small></dt></dl></dd></dl><span class="cMil_cSeparate"></span>';
								break;
					case "manager":
								return '<dl class="cMil_u" id="cBh' + insertObj.uid + '"><i></i><b></b><q></q><rb></rb><sub></sub><dd><dl><dt><small><span>' + insertObj.text + '</span></small></dt></dl></dd></dl><span class="cMil_cSeparate"></span>';
								break;
				}
				return '';
			}
		}
	};
	self.blank = blank;
	self.get = {};
	self.Storage = {
		get: function(element,def){ var el = localStorage.getItem(element); if(el==null) return def; return el;},
		set: function(element,value){localStorage.setItem(element,value);}
	};
	self.id = function(uid){
		if(typeof uid == 'object')
			return uid;
		var el = null;
		if(uid.substr(0,1)=='#' && uid.indexOf(' ')==-1) {
			el = document.getElementById(uid.substring(1));
			if(el == null)
				el = self.doc.getElementById(uid.substring(1));
		}
		if(el == null)
			el = document.querySelector(uid);
		if(el == null)
			el = self.doc.querySelector(uid);
		return el;
	};
	self.val = {
		get: function(element){ return self.id(element).value;},
		set: function(element,value){ self.id(element).value = value}
	};
	self.onIE = function(element,actions,callback){
		if(typeof el.attachEvent=='undefined') return;
		if(actions.indexOf(' ') >= 0) {
			var actionsSpl = actions.split(' ');
			for(var aNumber in actionsSpl){
				el.attachEvent("on"+actionsSpl[aNumber],callback);
			}
		} else
			el.attachEvent("on"+actions,callback);

	};
	self.on = function(element, actionName, callback){
		var el = null;
		if(typeof element == 'string') {
			el = self.id(element);
			if(el == null)
				return;
		}
		else
			el = element;
		if(typeof el.addEventListener == 'undefined'){
			self.onIE(el,actionName, callback);
			return;
		}
		if(actionName.indexOf(' ') >= 0) {
			var actionsSpl = actionName.split(' ');
			for(var aNumber in actionsSpl){
				el.addEventListener(actionsSpl[aNumber],function(event){callback(event);});
			}
		} else {
			el.addEventListener(actionName,function(event){
				callback(event);
			});
		}
	};

	self.getUnique = function(element){
		var u = {}, a = [];
		for(var i = 0, l = element.length; i < l; ++i){
			if(u.hasOwnProperty(element[i])) continue;
			a.push(element[i]);
			u[element[i]] = true;
		}
		return a;
	};
	self.last = {client: 0, manager: 0};
	self.init = function(){
		self.sid = win.parent["bhelpSrvId"];
		self.online = win.parent["bhelpOnline"];
		self.signalAddr = win.parent["bhelpSignalAddress"];
		switch(self.get.ps){
			case 1: self.direction = {direction: "downRight"}; break;
			case 2: self.direction = {direction: "downLeft"}; break;
			case 3: self.direction = {direction: "left"}; break;
			case 4: self.direction = {direction: "upLeft"}; break;
			case 5: self.direction = {direction: "upRight"}; break;
			case 6: self.direction = {direction: "right"}; break;
		}
		var msgList = self.Storage.get('bhelp_msgList','{}');
		self.msgList = JSON.parse(msgList);
		for(var el in self.msgList){
			if(self.msgList[el].uid == undefined)
				self.msgList[el].uid = el;
			var lastMsg = parseInt(el.substr(1));
			if(el.substr(0,1)=='c') {
				if(self.last.client < lastMsg)
					self.last.client = lastMsg;
			}
			if(el.substr(0,1)=='m') {
				if(self.last.manager < lastMsg)
					self.last.manager = lastMsg;
			}
		}
		self.toUrl = function(data){return Object.keys(data).map(function(k) {return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])}).join('&')};
		self.post = function(uri,data,callback){
			self.log("post",uri);
			var xhr = ("onload" in new XMLHttpRequest()) ? new XMLHttpRequest : new XDomainRequest;
			xhr.open("POST", uri, true);
			xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
			xhr.onreadystatechange = function(){
				if (xhr.readyState != 4) return;
				if(typeof callback == 'function')
					callback(xhr.responseText);
			};
			xhr.send(self.toUrl(data));
		};
		self.uri = function(uri,callback){
			var xhr = ("onload" in new XMLHttpRequest()) ? new XMLHttpRequest : new XDomainRequest;
			xhr.open("GET", uri, true);
			xhr.onreadystatechange = function(){
				if (xhr.readyState != 4) return;
				if(typeof callback == 'function')
					callback(xhr.responseText);
			};
			xhr.send();
			return xhr;
		};
		self.reCheckFirst = true;
		/*
			Загрузка данных о сессии (клиент, менеджер  и т.п.)
		*/
		self.reCheck = function(){
			self.log("reCheck");
			var manList = [];
			for(var el in self.managerList)
				manList.push({img:self.managerList[el].img.version,block:self.managerList[el].block.version});
			self.post(bhelpInfoAddress+"/"+self.get.cid+"i"+self.sid+"/"+self.client+"/"+self.doc.location.hostname,{
				agent:navigator.userAgent,
				url:self.doc.location.pathname,
				title:self.doc.title,
				os:navigator.platform,
				ref:self.doc.referrer,
				locale:navigator.language,
				protocol:self.doc.location.protocol,
				mid:self.mid,
				time:self.firstTime,
				managers:JSON.stringify(manList),
				triggers: JSON.stringify(self.tr),
				position: self.position,
				activator: (self.activator) ? 1 : 0,
				lastC: self.last.client,
				lastM: self.last.manager
			},function(resp){
				var rsp = JSON.parse(resp);
				self.log("reCheck response");
				self.log(rsp);
				self.client = rsp.uid;
				self.Storage.set('cBh_client',self.client);
				self.loadUrl = bhelpInfoAddress+"/"+self.get.cid+"i"+self.sid+"/"+self.client+"/"+self.doc.location.hostname;
				self.online = rsp.online;
				if(rsp.manager!=undefined){
					self.mid = rsp.manager.id;
					self.Storage.set('bhelp_mid',self.mid);
					var img = {};
					if(typeof self.managerList[self.mid]!='undefined' && rsp.manager.version_img==self.managerList[self.mid].img.version){
						img = self.managerList[self.mid].img;
					}else {
						img = {
							version: rsp.manager.version_img,
							content: rsp.manager.img
						};
					}
					self.position = rsp.position;
					self.Storage.set('bhelp_position',self.position);
					var block = {};
					if(typeof self.managerList[self.mid]!='undefined' && typeof rsp.manager.block_img=='undefined' ){
						block = self.managerList[self.mid].block;
					}else {
						block = {
							version: rsp.manager.version_block,
							content: rsp.manager.block_img
						};
					}
					self.managerInfo({id:rsp.manager.id,img:img,block:block,text:rsp.manager.text});
				}
				self.reLine();
				self.activeOnline();
				self.activeOffline();
				if(self.reCheckFirst){
					self.reCheckFirst = false;
					self.listen();
				}
			});
		},
		self.showLine = function(){
			self.log("showLine");
			var direction = {};
			var windowSize = {width: self.width(), height: self.height()};
			var id = self.id('#cMil_Line');
			var height = parseInt(id.clientHeight);
			var width = parseInt(id.clientWidth);
			if(height == 0)
				height = 264;
			if(width == 0)
				width = 43;
			switch(self.get.ps){
				case 1: direction = {direction: "downRight"}; break;
				case 2: direction = {direction: "downLeft"}; break;
				case 3: direction = {top: (windowSize.height - height)/2, left:  0, ignore: true};
						self.animateParent.styles('#cMil_Line',{top: direction.top, left: direction.left});
						break;
				case 4: direction = {direction: "upLeft"}; break;
				case 5: direction = {direction: "upRight"}; break;
				case 6: 
						direction = {top: (windowSize.height - height)/2, left:  (windowSize.width - width), ignore: true };
						self.animateParent.styles('#cMil_Line',{top: direction.top, left: direction.left});
					 	break;
			}
			console.log("showLine",direction,windowSize.height,height);
			self.animateParent.show('#cMil_Line',direction);
			self.LineLock = true;
		};
		self.client = self.Storage.get('cBh_client',0);
		self.uid = self.client;
		self.position = self.Storage.get('bhelp_position',0);
		self.mid = self.Storage.get('bhelp_mid',0);
		self.firstTime = self.Storage.get('bhelp_firstTimes',0);
		self.managerList = JSON.parse(self.Storage.get('bhelp_managerList','{}'));
		self.activator = (self.Storage.get('cBh_Active',0) == 1) ? true : false;
		self.sound = (self.Storage.get('cBh_sound',1) == 1) ? true : false;
		self.animate.style('#cMil_Online_headerSound','opacity',0.3);
		self.initLine();
		self.tr = JSON.parse(self.Storage.get('cBh_triggers','[]'));
		if(self.tr.length > 0)
			self.tr = self.getUnique(self.tr);
		self.blank = {	offText: self.val.get('#cMil_FNtext'),
						offContact: self.val.get('#cMil_FNphone'),
						offName: self.val.get('#cMil_FNname'),
						onText: self.val.get('#cMil_FormOn_TextArea textarea')
					};
		// Востанавливаем данные о пользователе
		self.val.set('#cMil_FNname',self.Storage.get('cBh_offName',''));
		self.val.set('#cMil_FNphone',self.Storage.get('cBh_offContact',''));
		self.on('#cMil_FormOn_TextArea textarea','keyup keydown change',function(event){self.updateSize(event);});
		bhelpLoad(bhelpSrvAddress+"/pscreen.js","bhelp_pscreen",1,function(resp){eval(resp);});
		self.on('.cMil_FormOn_submit','click',function(){self.add();});
		if(self.client > 0) self.loadUrl = bhelpInfoAddress+"/"+self.get.cid+"i"+self.sid+"/"+self.client+"/"+self.doc.location.hostname;
		self.reCheck();
		/*
		Событие активатора: нажатие Ok
		*/
		self.on('#cMil_SbuttonOk','click',function(){
			self.activator = true;
			self.Storage.set('cBh_Active','1');
			self.Storage.set('cBh_noAction', '1');
			self.animate.hide('#cMil_stat',self.direction,function(){ self.fadeIn();});
			self.signal({activator:1});
		});
		/*
		Событие активатора: нажатие нет
		*/
		self.on('#cMil_SbuttonNo','click',function(){
			self.activator = false;
			self.Storage.set('cBh_Active','0');
			self.Storage.set('cBh_noAction', '1');
			self.animate.hide('#cMil_stat',self.direction,function(){ self.showLine();});
			self.signal({activator:1});
		});

		self.LineLock = false;

		self.hideLine = function(callback){
			self.animateParent.hide('#cMil_Line',self.direction,callback);
			self.LineLock = false;
		}
		/*
		Событие: нажатие отправки offline сообщения
		*/
		self.on('#cMil_FNsubmit','click',function(){
			self.off();
		});
		/*
			Включение/отключение звука
		*/
		self.on('#cMil_Online_headerSound','click',function(){
			self.soundCheck();
		});
		/*
		Событие: выход из окна
		*/
		self.on(self.win,'focusin focus mouseenter',function(){self.onFocus();});
		self.on(self.win,'focusout blur mouseleave',function(){self.onBlur();});
	};
	self.insertLine = function(code) {var style = document.createElement('style'); style.type = 'text/css'; if(style.styleSheet) {style.styleSheet.cssText = code;} else style.innerHTML = code; self.doc.getElementsByTagName('head')[0].appendChild( style );};
	self.initLine = function(){
		self.log("initLine");
		self.insertLine(self.get.lineStyle+mainStyle);
		var cBhBlock = document.createElement('img'); cBhBlock.id = 'cMil_Line';
		if(!self.online || Object.keys(self.managerList).length > 0){
			cBhBlock.setAttribute('src','data:image/png;base64,'+self.get.lineImg);
			self.lineStatus = false;
		} else{
			var lineImg;
			for(var el in self.managerList) {
				lineImg = self.managerList[el].block.content;
				break;
			}
			cBhBlock.setAttribute('src','data:image/png;base64,'+lineImg);
			self.lineStatus = true;
		}
		self.doc.body.appendChild(cBhBlock);
		var cBh_Header = document.createElement('div'); cBh_Header.id = 'cBh_Header';
		cBh_Header.innerHTML = '<div id="cMil_FrameClose" onclick="bhelp.lineShow();"></div><div id="cMil_FrameSound" onclick="bhelp.soundCheck();"></div>';
		self.doc.body.appendChild(cBh_Header);
		self.showLine();
		self.on("#cMil_Line",'click',function(){self.fadeIn();});
		self.animateParent.hide('#cBh_frame',{direction: self.direction.direction,hidden: true});
		self.draggable('#cBh_frame','#cBh_Header');
	};
	self.lineShow = function(){
		self.animateParent.hide('#cBh_frame',self.direction,function(){
			self.shownFrame = false;
			self.showLine();
		});
	};
	self.soundCheck = function(){
		if(self.sound){
			self.animate.style('#cMil_Online_headerSound','opacity',0.3);
			self.sound = false;
		} else {
			self.animate.style('#cMil_Online_headerSound','opacity',1);
			self.sound = true;
		}
	};
	self.draggable = function(element,header){
		/*
		#cMil_Offline_header, #cMil_Online_header, #cMil_action,#cMil_stat
		*/
		var dragOb = {};
		function mousedown(e){
			if (e.which != 1) return;
			var elem = e.target.closest(header);
			if (!elem) return;
			dragOb.elem = self.id(element);
			dragOb.elemHeader = elem;
			dragOb.dragX = e.clientX - dragOb.elemHeader.offsetLeft;
			dragOb.dragY = e.clientY - dragOb.elemHeader.offsetTop;
			dragOb.elemHeader.style.height = dragOb.elem.style.height;

		}
		self.on(self.doc,'mousedown',mousedown);
		self.on(self.doc,'mousemove',function(e){
			if (!dragOb.elem) return;
			if (!dragOb.avatar) {
				// посчитать дистанцию, на которую переместился курсор мыши
				var moveX = e.clientX - dragOb.realX;
				var moveY = e.clientY - dragOb.realY;
				if ( Math.abs(moveX) < 3 && Math.abs(moveY) < 3 ) {
					return; // ничего не делать, мышь не передвинулась достаточно далеко
				}
				dragOb.avatar = dragOb.elem;
			}
			dragOb.avatar.style.left = (e.clientX - dragOb.dragX) + 'px';
			dragOb.avatar.style.top =  (e.clientY - dragOb.dragY) + 'px';
			dragOb.elemHeader.style.left = (e.clientX - dragOb.dragX) + "px";
			dragOb.elemHeader.style.top = (e.clientY - dragOb.dragY) + "px";
		});
		self.on(self.doc,'mouseup',function(e){
			if(dragOb.elemHeader)
				dragOb.elemHeader.style.height = '95px';
			if(dragOb.avatar){
				var top = parseInt(dragOb.avatar.style.top.split("px").join(''));
				var left = parseInt(dragOb.avatar.style.left.split("px").join(''));
				console.log("mouseup",top,left);
				self.Storage.set("cBh_StrLinePtop",top);
				self.Storage.set("cBh_StrLinePleft",left);
			}
			dragOb = {};
		});
	};

	self.save = function(){
		self.Storage.set('bhelp_msgList',JSON.stringify(self.msgList));
	};
	self.onFocus = function () {
		self.focus = 1;
	};
	self.onBlur = function () {
		self.focus = 0;
	};
	self.managerInfo = function(info){
		if(typeof self.managerList[info.id]=='undefined') self.managerList[info.id] = {img:{},block:{},text:""};
		self.managerList[info.id].img = info.img;
		self.managerList[info.id].block = info.block;
		self.managerList[info.id].text = info.text;
		self.Storage.set('bhelp_managerList',JSON.stringify(self.managerList));
	};
	self.log = function(msg){
		if(self.debug){
			if(arguments.length == 1)
				console.log(msg);
			else
				console.log(arguments);
		}
	};
	self.error = function(msg){
		if(self.debug)
			console.error(msg);
	};

	self.reLine = function(){
		self.log("reLine");
		if(!self.online && !self.lineStatus)
			return;
		if(self.online){
			var lineImg;
			if(self.mid==0){ for(var el in self.managerList) {lineImg = self.managerList[el].block.content; break;}}
			else lineImg = self.managerList[self.mid].block.content;
			self.id("#cMil_Line").setAttribute('src','data:image/png;base64,'+lineImg);
			if(!self.shownFrame)
				self.showLine();
		}else {
			self.id("#cMil_Line").setAttribute('src','data:image/png;base64,'+self.get.lineImg);
			if(!self.shownFrame)
				self.showLine();
		}
	};

	self.width = function(){
		return self.win.document.body.clientWidth || self.win.innerWidth;
	};
	self.height = function(){
		return self.win.document.body.clientHeight || self.win.innerHeight;
	};

	self.activeOnline = function(){
		//Активатор онлайл
	};

	self.activeOffline = function(){
		//Активатор оффлайн
			if(self.online || self.shownFrame) return;
			if(self.get.activ_type_off!=1) return;
			setTimeout(function () {
				if( !self.LineLock && !self.Storage.get('cBh_noAction',false)) {
					var left = 20;
					var id = self.id('#cBh_frame');
					if(self.get.ps==1 || self.get.ps==5 || self.get.ps==6){
						left = self.width() - id.clientWidth - 20;
					}
					var top = self.height() - id.clientHeight - 20;
					self.log("activeOffline",left,top);
					self.hideLine(function(){
						self.animateParent.show('#cBh_frame',{left: left, top: top});
						self.animateParent.show('#cBh_Header',{left: left, top: top});
						self.shownFrame = true;
						self.animate.show('#cMil_stat',function(){
							self.actionAnimate('#cMil_stat');
						});
					});
				}
			}, self.get.active_time_off * 1000);


	};
	self.actionAnimate = function (id, state) {
		setTimeout(function () {
			self.animate.re(id,{
				'opacity': 0.5
			}, function () {
				self.animate.re(id,{
					'opacity': 1
				}, function () {
					self.actionAnimate();
				});
			});
		}, 30000);
	};

	self.ajax = null;

	self.listen = function(){
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		window.WebSocket = false;								//!!!!!!!!!!!!!!
		//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		if (window.WebSocket){
			self.loadUrl = self.win["bhelpWsAddress"]+"/"+self.get.cid+"/"+self.client+"/"+self.doc.location.hostname;
			self.listenWs();
			setInterval(function(){
				self.ajax.send("PING");
			},10000);
		}
		else self.listenComet();
	};
	self.loadPid = false;
	self.listenWs = function(){
		if(self.loadPid) return;
		self.log("listenWs");
		self.loadPid = true;
		self.ajax = new WebSocket(self.loadUrl);
		self.ajax.onmessage = function(e) {
			self.req(JSON.parse(e.data));
		};
		self.ajax.onclose = function(event) {
			self.loadPid = false;
			setTimeout(function(){self.listenWs();},100);
		};
		self.ajax.onerror = function(event) {
			self.loadPid = false;
			setTimeout(function(){self.listenWs();},1000);
		};
	};
	self.listenComet = function(){
		if(self.loadPid) return;
		self.loadPid = true;
		self.ajax = self.uri(self.loadUrl,function(data){
			self.req(JSON.parse(data));
			self.loadPid = false;
			self.listenComet();
		});
	};
	/*
		Ответ от сервера в json
	*/
	self.req = function(data){
		self.log("req");
		self.log(data);
		for(var index in data){
			var v = data[index];
			switch(index) {
					case 'msg':
						self.msg([v]);
						break;
					case 'manager':
						self.mid = v.id;
						var img = {};
						if(typeof self.managerList[self.mid]!='undefined' && v.version_img==self.managerList[self.mid].img.version){
							img = self.managerList[self.mid].img;
						}else {
							img = {
								version: v.version_img,
								content: v.img
							};
						}
						var block = {};
						if(typeof self.managerList[self.mid]!='undefined' && v.block_img==self.managerList[self.mid].block.version){
							block = self.managerList[self.mid].block;
						}else {
							block = {
								version: v.version_block,
								content: v.block_img
							};
						}
						self.managerInfo({id:v.id,img:img,block:block,text:v.text});
						break;
					case 'client':
						self.uInfo(v.name, v.phone);
						break;
					case 'signal':
						self.signal(v);
						break;
					case 'ex':
						eval(v);
						break;
					case 'trigger':
						self.trigger(v);
						break;
					case 'strigger':
						self.strigger(v);
						break;
					case 'reCheck':
						self.reCheck();
						break;
					case 'pull':
						for( var line in v)
							self.req(v[line]);
						break;
			}
		}
	};
	self.strigger = function(info){
		for(var num in info){
			self.tr.push(info[num]);
		}
		self.tr = self.getUnique(self.tr);
		self.Storage.set('cBh_triggers',JSON.stringify(self.tr));
	};
	self.trigger = function(info){
		for( num in info){
			var uid = info[num].uid;
			if(self.tr.indexOf(uid) && val.safe==1)
				continue;
		}
	};
	self.signal = function(msg){
		self.post(self.signalAddr+"/"+self.get.cid+"/"+self.client+"/"+self.doc.location.hostname,{client:JSON.stringify(msg)});
	};

	self.msg = function(resp){
		var respContent = '';
		var cnt = 0;
		var cntMy = 0;
		if(resp){
			for(var index in resp){
				var val = resp[index];
				var muid = val.uid;
				if(self.msgList[muid] == undefined) {
					msgList[muid] = val;
					if(val.who == '0'){
						var last = parseInt(muid.substr(1));
						if(last > self.last.client)
							self.last.client = last;
						cntMy++;
						if(val.bot == undefined || val.bot == 0) {
							if(self.id('#cBh'+val.uid)==null){
								respContent += self.blank.get("client",{"uid":val.uid,text:val.text.split('[nr]').join("\n")});
							}
						}
					} else {
						if(self.id('#cBh'+val.uid)==null){
							respContent += self.blank.get("manager",{"uid":val.uid,text:val.text.split('[nr]').join("\n")});
						}
					}
					cnt++;
				}
			}
		}
		if(cnt > 0 && self.online) {
			if(!self.shownFrame && cntMy === 0) {
				self.ONfadeIn();
				self.animate.hide("#cMil_action",self.direction);
			}
			self.animate.opacity('#cMil_content',0.2);
			self.id('#cMil_content').innerHTML += respContent;
			self.animate.style('#cMil_scroll','scrollTop',self.id('#cMil_content').clientHeight,'px');
			self.animate.opacity('#cMil_content',1);
			if(self.shownFrame){
				self.title();
				self.echo();
			}
		}
		self.save();
	};


	self.sound = true;
	self.echo = function () {
		if(self.sound) {
			self.jmp3("#cBh_Sound");
		}
	};
	self.Title = self.doc.title;
	self.notitle = 0;
	self.title = function () {
		if(self.notitle === 0) {
			self.notitle = 1;
			if(self.focus !== 1) {
				self.doc.title = '****** Message ******';
				setTimeout(function () {
					self.doc.title = self.Title;
					setTimeout(function () {
						self.notitle = 0;
						self.title();
					}, 500);
				}, 500);
			} else {
				self.doc.title = self.Title;
				self.notitle = 0;
			}
		}
	};
	self.reMessage = function () {
		if(Object.keys(self.msgList).length > 0) {
			self.id('#cMil_content').innerHTML = '';
			var respContent = '';
			for(var id in self.msgList){
				var content = self.msgList[id];
				if(content.who == '0'){
					if(content.bot == undefined || content.bot == 0)
						respContent += self.blank.get("client",{"uid":content.uid,text:content.text.split('[nr]').join("\n")});
				}
				else {
					respContent += self.blank.get("manager",{"uid":content.uid,text:content.text.split('[nr]').join("\n")});
				}
			}
			self.id('#cMil_content').innerHTML = respContent;
			if(!self.shownFrame){
				self.ONfadeIn(1);
				self.animate.hide('#cMil_action',self.direction);
			}
			if(!self.FormOn_TextArea){
				self.FormOn_TextArea = true;
				self.id('#cMil_FormOn_TextArea textarea').setAttribute('placeholder','');
			}
			self.animate.style('#cMil_scroll','scrollTop',self.id('#cMil_content').clientHeight,'px');
		}
	};
	self.wOpenBlock = true;
	self.ONfadeIn = function (fast) {
		if(self.shownFrame)
			return;
		self.shownFrame = true;
		self.Storage.set('cBh_StrLine',1);
		self.Storage.set('cBh_noAction',1);
		self.hideLine();
		var top = self.win.innerHeight - self.FrameHeight;
		var left = 20;
		var id = self.id('#cBh_frame');
		var lineLeft = self.Storage.get('cBh_StrLinePleft',left);
		switch(self.get.ps){
			case 1:
			case 5:
			case 6:
					left = self.win.innerWidth - id.clientWidth - 20;
					if(lineLeft < left)
						left = lineLeft;
					break;
			default:
					if(lineLeft < (self.win.innerWidth - id.clientWidth - 20))
						left = lineLeft;
		}
		var lineTop = self.Storage.get('cBh_StrLinePtop',top);
		if(lineTop < top)
			top = lineTop;
		id.style.height = FrameHeight+"px";
		var managerText,managerImg;
		if(self.mid == 0) {
			for(var i in self.managerList){
				managerText = self.managerList[i].text;
				managerImg = self.managerList[i].img.content;
				break;
			}
		}
		else {
			managerText = self.managerList[self.mid].text;
			managerImg = self.managerList[self.mid].img.content;
		}
		self.id('#cMil_Online_headerManager').setAttribute('src','data:image/png;base64,'+managerImg);
		self.id('#cMil_Online_header p span').innerHTML = managerText;
		self.id('#cMil_content').innerHTML = '';
		self.animate.show('#cMil_Online_Rel',{top:0, left: 0},function(){
			self.reMessage();
		});
		self.animateParent.show('#cBh_frame',{top: top, left: left});
		self.animateParent.show('#cBh_Header',{top: top, left: left});
		if(self.wOpenBlock){
			self.wOpenBlock = false;
			self.signal({trigger:'Open'});//wOpen (window open event)
		}
	};

	self.removeClass = function(element,className){
		var classList = element.className.split(' ');
		var index = classList.indexOf(className);
		if( index >= 0 ){
			delete classList[index];
			element.className = classList.join(' ');
		}
	};
	self.addClass = function(element,className){
		var classList = element.className.split(' ');
		var index = classList.indexOf(className);
		if(index == -1)
			element.className = element.className + ' '+className;
	};

	self.off = function () {	// оффлайн сообещение
		var cMilName = self.id('#cMil_FNname');
		var cMilPhone = self.id('#cMil_FNphone');
		var cMilText = self.id('#cMil_FNtext');
		var val = {cMilName: cMilName.value, cMilPhone: cMilPhone.value, cMilText: cMilText.value};
		if(cMilName.value == self.blank.offName) 		val.cMilName = '';
		if(cMilPhone.value == self.blank.offContact) 	val.cMilPhone = '';
		if(cMilText.value == self.blank.offText) 		val.cMilText = '';

		if(val.cMilName.length == 0) {cMilName.value = self.blank.offName; self.addClass(cMilName,'error-input');}
		else self.removeClass(cMilName,'error-input');
		if(val.cMilPhone.length == 0) {cMilPhone.value = self.blank.offContact; self.addClass(cMilPhone,'error-input');}
		else self.removeClass(cMilName,'error-input');
		if(val.cMilText.length == 0) {cMilText.value = self.blank.offText; self.addClass(cMilText,'error-input');}
		else self.removeClass(cMilName,'error-input');
		
		if(val.cMilName.length > 0 && val.cMilPhone.length > 0 && val.cMilText.length > 0) {
			self.offMsg();
			cMilText.value = '';
			self.uInfo(val.cMilName,val.cMilPhone);
			self.signal({offlineText:val.cMilText,offlineName:val.cMilName,offlinePhone:val.cMilPhone,offlineClient:self.client,offlineActivator:self.activator});
		}
		return false;
	};
	self.uInfo = function (respName, respPhone) {
		self.id('#cMil_FNname').value  = respName;
		self.id('#cMil_FNphone').value = respPhone;
		if(respName != '')  self.Storage.set('cBh_offName',    respName);
		if(respPhone != '') self.Storage.set('cBh_offContact', respPhone);
	};
	self.offMsg = function () {
		self.animate.styles('#cMil_Offline_Ok',{'display': 'block'});
		self.animate.hide('#cMil_Offline_Hide',{hidden:true,top: -100, left: -100});
	};
	self.fadeIn = function (status) {
		self.log("fadeIn");
		if(self.online) self.ONfadeIn(status);
		else self.OFfadeIn(status);
	};

	self.OFfadeIn = function (fast) {
		self.log("OFfadeIn");
		if(self.shownFrame)
			return;
		self.shownFrame = true;
		self.Storage.set('cBh_StrLineOff', 1);
		self.Storage.set('cBh_noAction', 1);
		self.hideLine();
		var top = self.win.innerHeight - self.FrameHeight;
		var left = 20;
		var id = self.id('#cBh_frame');
		var lineLeft = self.Storage.get('cBh_StrLinePleft',left);
		switch(self.get.ps){
			case 1:
			case 5:
			case 6:
					left = self.win.innerWidth - id.clientWidth - 20;
					if(lineLeft < left)
						left = lineLeft;
					break;
			default:
					if(lineLeft < (self.win.innerWidth - id.clientWidth - 20))
						left = lineLeft;
		}
		var lineTop = self.Storage.get('cBh_StrLinePtop',top);
		if(lineTop < top)
			top = lineTop;
		id.style.height = FrameHeight+"px";

		if(!self.trOpen) {
			self.trOpen = true;
			self.signal({trigger:'Open'});
		}
		self.animate.show('#cMil_Offline_Rel',{top:0, left: 0, ignore: true});
		self.animateParent.show('#cBh_frame',{top: top, left: left});
		self.animateParent.show('#cBh_Header',{top: top, left: left});
		self.log("OFfadeIn",top,left);
	};

	self.jmp3 = function(id){
		var playerpath = bhelpSrvAddress;
		var options = {"filepath": "/static/","backcolor": "ffffff","forecolor": "ffffff","width": "1","repeat": "no","volume": "100","autoplay": "true","showdownload": "false","showfilename": "true"};
		var filename = bhelpSrvAddress+'/sng';var mp3html = '<audio autoplay="true"><source src="' + filename + '.ogg" type="audio/ogg" ><source src="' + filename + '.mp3" type="audio/mpeg" ><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + options.width + '" height="1" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"><param name="movie" value="' + playerpath + 'singlemp3player.swf?showDownload=' + options.showdownload + '&file=' + filename + '.mp3&autoStart=' + options.autoplay;
			mp3html += '&backColor=' + options.backcolor + '&frontColor=' + options.forecolor;
			mp3html += '&repeatPlay=' + options.repeat + '&songVolume=' + options.volume + '" /><param name="wmode" value="transparent" /><embed wmode="transparent" width="' + options.width + '" height="1" src="' + playerpath + 'singlemp3player.swf?showDownload=' + options.showdownload + '&file=' + filename + '.mp3&autoStart=' + options.autoplay;
			mp3html += '&backColor=' + options.backcolor + '&frontColor=' + options.forecolor;
			mp3html += '&repeatPlay=' + options.repeat + '&songVolume=' + options.volume + '" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object></audio>';
		self.id(id).innerHTML = mp3html;
	};
	self.LoadTextMsg = 0;
	self.StopTextMsg = 0;
	self.TimeTextMsg = 0;

	self.startTimeMsg = function(first){
		if(self.StopTextMsg==1){
			clearTimeout(self.TimeoutTextMsg);
			self.LoadTextMsg = 0;
			setTimeout(function(){self.StopTextMsg=0;},1000);
			return false;
		}
		if(first==1) self.signal({'startMessage':self.LastTextMsg});
		var time = parseInt(Number(new Date())/1000);
		if(time < self.TimeTextMsg && self.LoadTextMsg == 0) {
			self.LoadTextMsg = 1;
			self.TimeoutTextMsg = setTimeout(function(){
				self.LoadTextMsg = 0;
				self.startTimeMsg(0);
			},5000);
		}else if (time >= self.TimeTextMsg){
			self.signal({end:'Message'});
		}
	};

	self.blockSend = true;
	self.LastText = '';


	self.add = function () {
		self.lastScrollTop = 0;
		self.StopTextMsg = 1;
		self.startTimeMsg(0);
		self.signal({end:'Message'});
		var div = document.createElement("div");
		div.innerHTML = self.id('#cMil_FormOn_TextArea').value;
		var msg = div.textContent || div.innerText || "";
		msg = msg.trim();
		if(msg!='' && self.blockSend && msg != self.LastText) {
			self.blockSend = false;
			self.stop = 0;
			var msgUid = ++self.last.client;
			var mBlock = {
				uid: "c"+msgUid,
				text: msg,
				data: parseInt(Number(new Date())/1000),
				who: 0
			};
			self.msgList["c"+msgUid] = mBlock;
			msg = msg.split("\n").join("<br />");
			self.LastText = msg;
			self.animate.opacity('#cMil_content',0.2);
			self.id('#cMil_content').innerHTML += self.blank.get("client",{uid: msgUid,text:msg});
			self.animate.style('#cMil_scroll','scrollTop',self.id('#cMil_content').clientHeight,'px');
			self.animate.opacity('#cMil_content',1);
			setTimeout(function () {
				self.blockSend = true;
			},500);
			self.signal({msg: {uid: "c"+msgUid, value: mBlock}});
			self.signal({trigger:'Send'});
			if(msgUid == 1) {
				setTimeout(function(){
					self.signal({bot: 2});
				},20000);
			}
		}
	};

	self.lastScrollTop = 0;


	self.updateSize = function (event) {
		if(event.type=="keyup" && ((event.keyCode == 0xA)||(event.keyCode == 0xD))) {
			self.add();
			return;
		}
		var sub  = self.id('#cMil_FormOn_SubTextArea textarea');
		var main = self.id('#cMil_FormOn_TextArea textarea');
		sub.value = main.value;
		sub.style.scrollTop = 1000000;
		var scrollTop = sub.style.scrollTop;
		if(scrollTop !== self.lastScrollTop) {
			if(self.lastScrollTop == 0) {
				self.id('#cMil_FormOn span').style.display = 'none';
				sub.style.marginLeft = 	'10px';
				main.style.marginLeft = '10px';
				sub.style.width = 		'185px';
				main.style.width = 		'185px';
			}
			self.lastScrollTop = scrollTop;
			if(scrollTop <= 70) {
				main.style.overflow = 'hidden';
				main.style.height = (18 + scrollTop) + 'px';
				self.id('#cMil_FormOn').style.top = (270 - 6 - scrollTop) + 'px';
				self.id('#cMil_Online_cbbg').style.height = (212 - 6 - scrollTop) + 'px';
				self.id('#cMil_scroll').style.height = (191 - scrollTop) + 'px';
				self.id('#cMil_FOsubmit').style.height = (3 + scrollTop) + 'px';
				self.id('.cMil_FOsubmit').style.height = (3 + scrollTop) + 'px';
			} else {
				main.overflowY = 'auto';
			}
			sub.style.scrollTop = 1;
			}
		if(self.LastTextMsg!=sub.value){
			self.LastTextMsg = sub.value;
			self.TimeTextMsg = parseInt(Number(new Date())/1000)+5;
			self.startTimeMsg(1);
		}
	};




	bhelpLoad(bhelpInfoAddress+"/info.js?get="+bhelpSrvId+"&locale="+navigator.language,"bhelp_get",bhelpSrvVersion,function(linfo){
		self.get = JSON.parse(linfo);
		iframeContent = iframeContent.replace("{%BG%}",self.get.bg)
									 .replace("{%DID%}",bhelpSrvId)
									 .replace("{%LANG.OFF.YES%}",self.get.lang.off_yes)
									 .replace("{%LANG.OFF.NO%}",self.get.lang.off_no)
									 .replace("{%LANG.OFF.ATITLE%}",self.get.lang.off_atitle)
									 .replace("{%LANG.OFF.TITLE%}",self.get.lang.off_title)
									 .replace("{%LANG.OFF.PH.NAME%}",self.get.lang.off_name)
									 .replace("{%LANG.OFF.PH.PHONE%}",self.get.lang.off_phone)
									 .replace("{%LANG.OFF.PH.MESSAGE%}",self.get.lang.off_message)
									 .replace("{%LANG.OFF.PH.BUTTON%}",self.get.lang.off_btn)
									 .replace("{%LANG.OFF.OK%}",self.get.lang.off_ok)

									 .replace("{%LANG.BHELP%}",self.get.lang.bhelp)
									 .replace("{%LANG.BHELP%}",self.get.lang.bhelp)

									 .replace("{%LANG.ON.YES%}",self.get.lang.on_yes)
									 .replace("{%LANG.ON.NO%}",self.get.lang.on_no)
									 .replace("{%LANG.ON.ATITLE%}",self.get.lang.on_atitle)
									 .replace("{%LANG.ON.TITLE%}",self.get.lang.on_title)

									 .replace("{%OFF_INFO%}",self.get.off_info.replace("\\n","<br />"))
									 .replace("{%ACTIVINFO%}",self.get.activinfo.replace("\\n","<br />"))
									 .replace("{%ACTIVEOFF%}",self.get.activeoff.replace("\\n","<br />"));
		self.id('body').innerHTML = iframeContent;
		self.init();
	});
	return self;
};
var bh = bHelp(animate,window.parent,window.parent.document);
window.parent.bhelp = bh;