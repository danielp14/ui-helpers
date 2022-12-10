(() =>{
	console.log('are you ready!!!');

	const showNotifications = (platform) =>{

		Swal.fire({
			title: '¿ Deseas Suscribirte a ' +platform.toUpperCase() +' ?',
			icon: 'info',
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Confirmar',
			denyButtonText: `Lo pensare`,
			cancelButtonText: 'Cancelar',
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire('Suscripto a '+ platform.toUpperCase() +'!', '', 'success')
			} else if (result.isDenied) {
				Swal.fire('Te regalamos un cupón 25% OFF', '', 'info')
			}
		})
	};
	const btnsAdd = document.querySelectorAll('.add-platform');
	btnsAdd.forEach(link => {
		link.addEventListener('click', function (event) {
			showNotifications(event.target.getAttribute('data-link'));
		});
	});
})()