import { DEPOSIT, WITHDRAW } from "./balance.constants";

export const depositAction = value => ({
	type: DEPOSIT,
	payload: { value },
});

export const withdrawAction = value => ({
	type: WITHDRAW,
	payload: { value },
});
