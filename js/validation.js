new Vue({

	el: '#app',
	data: {
		email: '',
		isValidEmail: false
	},

	methods: {

		validateEmail() {
			// Простая проверка адреса электронной почты
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			this.isValidEmail = emailRegex.test(this.email);
		},

		submitEmail() {
			if (this.isValidEmail) {
				// Предполагается, что у уже есть конечная точка сервера для отправки электронной почты
				// Заменяем YOUR_SERVER_ENDPOINT фактической конечной точкой
				const serverEndpoint = 'YOUR_SERVER_ENDPOINT';
				
				// Отправляем письмо на сервер с помощью выборки или другого метода
				fetch(serverEndpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
					body: JSON.stringify({ email: this.email }),
				})
				.then(response => {
					if (response.ok) {
						alert('Письмо успешно отправлено');
					} else {
						console.error('Failed to send email');
					}
				})
					.catch(error => {
					console.error('Error:', error);
				});
			} else {
				alert('Неверный адрес электронной почты. Пожалуйста, введите действительный адрес электронной почты.');
		}
		}
	}

});