<script>
	import { setContext } from 'svelte';
	import { invalidate } from '$app/navigation';

	setContext('app', {
		login: () => {
			const login_window = window.open(
				`${window.location.origin}/auth/login`,
				'login',
				'width=600,height=400'
			);

			window.addEventListener('message', function handler(event) {
				login_window.close();
				window.removeEventListener('message', handler);
				invalidate();
			});
		},

		logout: async () => {
			const r = await fetch(`/auth/logout`);
			if (r.ok) invalidate();
		}
	});
</script>

<slot />
