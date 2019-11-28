import { DEPOSIT, WITHDRAW } from "./balance.constants";

const handlers = {
	[DEPOSIT]: (state, { payload: { value } }) => state + value,
	[WITHDRAW]: (state, { payload: { value } }) => state - value,
};

export default handlers;
