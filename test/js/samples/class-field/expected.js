/* generated by Svelte vX.Y.Z */
import { SvelteComponent, init, safe_not_equal } from "svelte/internal";

function instance($$self) {
	class A {
		p1;
		p2 = 1;
		#p3 = 2;

		#getP3() {
			return this.#p3;
		}
	}

	return [];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, null, safe_not_equal, {});
	}
}

export default Component;
