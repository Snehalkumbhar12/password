function gen()
			{
				event.preventDefault();
				let s6 = document.getElementById("s6");
				let s7 = document.getElementById("s7");
				let s8 = document.getElementById("s8");
				let s9 = document.getElementById("s9");
				let uc = document.getElementById("uc");
				let di = document.getElementById("di");
				let msg = document.getElementById("msg");

				let si = 0;
				if(s6.checked)			si = 6;
				else if(s7.checked)		si = 7;
				else if(s8.checked)		si = 8;
				else 				si = 9;
				
				let text = "abcdefghijklmnopqrstuvwxyz";
				
				if(uc.checked)
					text = text + text.toUpperCase();
				if(di.checked)
					text = text + "1234567890";
				let pw = "";
				for(let i=1; i <= si; i++)
				{
					let r = parseInt( Math.random() * text.length );
					pw = pw + text[r];
				}
				msg.innerHTML = pw;
			}