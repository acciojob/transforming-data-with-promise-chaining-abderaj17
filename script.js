//your JS code here. If required.
const numInput = document.querySelector("#ip");
const startBtn = document.querySelector("#btn");
const outputField = document.querySelector("#output");

startBtn.addEventListener('click', ()=>{
		let number = numInput.value;
	const result = new Promise((resolve, reject)=>{
	
		setTimeout(()=>{
			resolve(number);
		},2000)
	});
	result.then((value)=>{
		outputField.textContent=`Result: ${value}`;
		return new Promise((resolve, reject)=>{
			setTimeout(()=>{
				resolve(value);
			},2000);
		}).then((value)=>{
			outputField.textContent=`Result: ${value}`;
			return new Promise((resolve, reject)=>{
				setTimeout(()=>{
					resolve(value * 2);
				}, 1000);
			}).then((value)=>{
				outputField.textContent=`Result: ${value}`;
				return new Promise((resolve, reject)=>{
					setTimeout(()=>{
						resolve(value - 3);
					},1000)
				}).then((value)=>{
						outputField.textContent = `Result: ${value}`;
					return new Promise((resolve, reject)=>{
						setTimeout(()=>{
							resolve(value / 2);
						}, 1000)
					}).then((value)=>{
							outputField.textContent=`Result: ${value}`;
						return new Promise((resolve, reject)=>{
							setTimeout(()=>{
								resolve(value+10);
							}, 1000);
						}).then((value)=>{
							outputField.textContent=`Final Result: ${value}`;
						}).catch((err)=>{
							console.log(err);
						})
					})
				}) 
			})
		})
	})
})