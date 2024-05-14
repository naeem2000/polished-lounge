export interface Prices {
	manicure: {
		id: number;
		title: string;
		description: string | null;
		price: string | null;
	}[];
	pedicure: {
		id: number;
		title: string;
		description: string | null;
		price: string | null;
	}[];
	waxing: {
		id: number;
		title: string;
		description: string | null;
		price: string | null;
	}[];
	threading: {
		id: number;
		title: string;
		description: string | null;
		price: string | null;
	}[];
	brows: {
		id: number;
		title: string;
		description: string | null;
		price: string | null;
	}[];
	facials: {
		id: number;
		title: string;
		description: string | null;
		price: string | null;
	}[];
	massages: {
		id: number;
		title: string;
		description: string | null;
		duration: string;
		price: string | null;
		duration2: string | null;
		price2: string | null;
	}[];
}
